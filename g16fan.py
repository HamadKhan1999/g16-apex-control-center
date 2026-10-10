#!/usr/bin/env python3
r"""g16fan - Fan curve daemon for the Dell G16 7630 (AWCC-free).

Polls CPU/GPU temperatures through the BIOS WMI interface and applies fan
"addon boost" percentages from per-fan piecewise-linear curves. Includes a
critical-temperature fail-safe that switches the machine to G-mode, and an
optional system-tray icon (pystray + Pillow).

Runs elevated. Exit restores boost 0 on all fans and the balanced thermal
mode - the machine is never left in a non-stock state by the daemon itself.

Usage:
    python g16fan.py                  # run with g16fan.json curves
    python g16fan.py --once           # single evaluation, print, exit
    python g16fan.py --duration 30    # auto-stop after 30 s (for testing)
    python g16fan.py --dry-run        # compute targets, do not write
    python g16fan.py --tray           # with system tray icon
"""

import argparse
import ctypes
import gc
import json
import logging
import os
import sys
import threading
import time

import pythoncom

from awcc import AWCC, AWCCError, MODES, apply_mode_with_fallback, fan_names

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DEFAULT_CONFIG = os.path.join(SCRIPT_DIR, "g16fan.json")
LOG_FILE = os.path.join(SCRIPT_DIR, "g16fan.log")

DEFAULT_CONFIG_DICT = {
    "interval": 2.0,
    "min_step": 3,            # apply only when target changes by >= this %
    "use_custom_mode": True,  # switch to Custom thermal mode while curving
    "critical_temp": 95,      # any sensor >= this triggers G-mode fail-safe
    "critical_hysteresis": 5, # leave fail-safe below (critical - hysteresis)
    "curves": {
        "cpu": {"points": [[40, 0], [60, 10], [75, 25], [85, 45], [95, 70]]},
        "gpu": {"points": [[45, 0], [60, 10], [70, 25], [80, 45], [90, 70]]},
    },
}

log = logging.getLogger("g16fan")


def curve_value(points, x: float) -> int:
    """Piecewise-linear lookup; clamped outside the point range."""
    pts = sorted(points)
    if x <= pts[0][0]:
        return int(pts[0][1])
    if x >= pts[-1][0]:
        return int(pts[-1][1])
    for (t0, v0), (t1, v1) in zip(pts, pts[1:]):
        if t0 <= x <= t1:
            if t1 == t0:
                return int(v1)
            f = (x - t0) / (t1 - t0)
            return int(round(v0 + f * (v1 - v0)))
    return int(pts[-1][1])


class FanDaemon:
    def __init__(self, awcc: AWCC, config: dict, dry_run: bool = False):
        self.awcc = awcc
        self.cfg = config
        self.dry_run = dry_run
        self.paused = False
        self.failsafe = False
        self.stop_event = threading.Event()

        fans = awcc.discover_fans()
        if not fans:
            raise AWCCError("no fans discovered via GetFanSensors")
        names = fan_names(fans)
        self.fans = []
        for name, (fan_id, sensor_ids) in zip(names, fans):
            curve = config["curves"].get(name) or config["curves"].get("fan")
            if not curve:
                log.warning("no curve configured for fan '%s'; controlling nothing", name)
                continue
            self.fans.append({
                "name": name, "id": fan_id,
                "sensor": sensor_ids[0],
                "points": curve["points"],
                "last_boost": None, "temp": None, "rpm": None,
            })
        if not self.fans:
            raise AWCCError("no fan has a matching curve in the config")

    # -- helpers -----------------------------------------------------------

    def apply_custom_mode(self):
        if not self.cfg.get("use_custom_mode", True) or self.dry_run:
            return
        self.awcc.apply_thermal_mode(MODES["custom"])

    def set_boost(self, fan: dict, value: int) -> bool:
        if self.dry_run:
            log.info("[dry-run] %s boost -> %d%%", fan["name"], value)
            fan["last_boost"] = value
            return True
        ok = self.awcc.set_addon_speed_percent(fan["id"], value)
        if ok:
            fan["last_boost"] = value
        return ok

    def enter_failsafe(self):
        if self.dry_run:
            log.warning("[dry-run] FAIL-SAFE would trigger (G-mode)")
            self.failsafe = True
            return
        log.warning("FAIL-SAFE: critical temperature - switching to G-mode")
        self.awcc.apply_thermal_mode(MODES["gmode"])
        self.failsafe = True

    def leave_failsafe(self):
        log.info("FAIL-SAFE cleared, resuming curve control")
        self.failsafe = False
        self.apply_custom_mode()
        for fan in self.fans:
            fan["last_boost"] = None  # force re-apply

    def cleanup(self):
        """Restore stock behaviour: no boost, balanced mode."""
        try:
            for fan in self.fans:
                self.awcc.set_addon_speed_percent(fan["id"], 0)
            ok, used = apply_mode_with_fallback(self.awcc, "balanced")
            log.info("cleanup: boosts cleared, balanced mode %s",
                     "restored" if ok else "restore FAILED")
        except Exception:
            log.exception("cleanup failed")

    # -- main loop ---------------------------------------------------------

    def step(self) -> bool:
        """One poll/apply cycle. Returns False on hard failure."""
        max_temp = None
        for fan in self.fans:
            t = self.awcc.get_sensor_temperature(fan["sensor"])
            fan["temp"] = t
            fan["rpm"] = self.awcc.get_fan_rpm(fan["id"])
            if t is not None:
                max_temp = t if max_temp is None else max(max_temp, t)

        if max_temp is None:
            log.error("no temperature sensor readable; skipping cycle")
            return True

        if max_temp >= self.cfg["critical_temp"] and not self.failsafe:
            self.enter_failsafe()
        elif (self.failsafe
              and max_temp < self.cfg["critical_temp"] - self.cfg["critical_hysteresis"]):
            self.leave_failsafe()

        for fan in self.fans:
            if fan["temp"] is None:
                continue
            target = curve_value(fan["points"], fan["temp"])
            last = fan["last_boost"]
            if self.failsafe or self.paused:
                continue
            if last is None or abs(target - last) >= self.cfg["min_step"]:
                self.set_boost(fan, target)
        return True

    def status_line(self) -> str:
        parts = []
        for fan in self.fans:
            t = fan["temp"] if fan["temp"] is not None else "--"
            b = fan["last_boost"] if fan["last_boost"] is not None else 0
            parts.append(f"{fan['name'].upper()} {t}C boost {b}%")
        state = "FAILSAFE" if self.failsafe else ("paused" if self.paused else "ok")
        return ", ".join(parts) + f" [{state}]"

    def run(self, duration: float = None, once: bool = False):
        if not self.dry_run and self.cfg.get("use_custom_mode", True) and not self.failsafe:
            ok, _ = apply_mode_with_fallback(self.awcc, "custom")
            log.info("custom thermal mode: %s", "on" if ok else "FAILED")
        start = time.monotonic()
        errors = 0
        try:
            while not self.stop_event.is_set():
                try:
                    if self.step():
                        errors = 0
                    else:
                        errors += 1
                except Exception:
                    errors += 1
                    log.exception("cycle error")
                log.info("%s", self.status_line())
                if once:
                    break
                if duration is not None and time.monotonic() - start >= duration:
                    log.info("duration reached, stopping")
                    break
                if errors >= 10:
                    log.error("too many consecutive errors, stopping daemon")
                    break
                self.stop_event.wait(self.cfg["interval"])
        finally:
            if not self.dry_run:
                self.cleanup()


# -- tray icon (optional) --------------------------------------------------


def make_icon_image(cpu_temp):
    from PIL import Image, ImageDraw
    color = ((46, 204, 113) if cpu_temp is None or cpu_temp < 70
             else (241, 196, 15) if cpu_temp < 85
             else (231, 76, 60))
    img = Image.new("RGBA", (64, 64), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    d.ellipse((4, 4, 60, 60), fill=color + (255,))
    d.ellipse((22, 22, 42, 42), fill=(20, 20, 20, 255))
    for a, b in (((32, 8), (32, 24)), ((32, 40), (32, 56)),
                 ((8, 32), (24, 32)), ((40, 32), (56, 32))):
        d.line((a, b), fill=(20, 20, 20, 255), width=5)
    return img


def run_with_tray(daemon: FanDaemon):
    import pystray
    from pystray import Menu, MenuItem

    worker = threading.Thread(target=daemon.run, daemon=True)

    def toggle_pause(icon, item):
        daemon.paused = not daemon.paused
        if daemon.paused and not daemon.dry_run:
            for fan in daemon.fans:
                daemon.awcc.set_addon_speed_percent(fan["id"], 0)
                fan["last_boost"] = 0

    def failsafe_now(icon, item):
        daemon.enter_failsafe()

    def quit_app(icon, item):
        daemon.stop_event.set()
        icon.visible = False
        icon.stop()

    menu = Menu(
        MenuItem(lambda item: daemon.status_line(), None, enabled=False),
        Menu.SEPARATOR,
        MenuItem("Pause curve control", toggle_pause, checked=lambda item: daemon.paused),
        MenuItem("Trigger fail-safe (G-mode)", failsafe_now),
        Menu.SEPARATOR,
        MenuItem("Quit (restores balanced)", quit_app),
    )
    icon = pystray.Icon("g16fan", make_icon_image(None), "g16fan", menu)
    daemon.tray_icon = icon

    def icon_refresher():
        while not daemon.stop_event.is_set():
            cpu = next((f["temp"] for f in daemon.fans if f["name"] == "cpu"), None)
            try:
                icon.icon = make_icon_image(cpu)
                icon.update_menu()
            except Exception:
                pass
            time.sleep(2)

    threading.Thread(target=icon_refresher, daemon=True).start()
    worker.start()
    icon.run()
    daemon.stop_event.set()
    worker.join(timeout=15)


def load_config(path: str) -> dict:
    if not os.path.exists(path):
        with open(path, "w", encoding="utf-8") as f:
            json.dump(DEFAULT_CONFIG_DICT, f, indent=2)
        print(f"wrote default config to {path}")
        return dict(DEFAULT_CONFIG_DICT)
    with open(path, "r", encoding="utf-8") as f:
        cfg = json.load(f)
    # tolerate partial user configs
    merged = dict(DEFAULT_CONFIG_DICT)
    merged.update(cfg)
    merged["curves"] = cfg.get("curves", DEFAULT_CONFIG_DICT["curves"])
    return merged


def main():
    ap = argparse.ArgumentParser(prog="g16fan",
                                 description="G16 fan curve daemon (no AWCC needed)")
    ap.add_argument("--config", default=DEFAULT_CONFIG)
    ap.add_argument("--once", action="store_true", help="single cycle then exit")
    ap.add_argument("--duration", type=float, default=None, help="stop after N seconds")
    ap.add_argument("--dry-run", action="store_true", help="compute only, no writes")
    ap.add_argument("--tray", action="store_true", help="show system tray icon")
    ap.add_argument("-v", "--verbose", action="store_true")
    args = ap.parse_args()

    try:
        admin = bool(ctypes.windll.shell32.IsUserAnAdmin())
    except Exception:
        admin = False
    if not admin:
        sys.exit("g16fan needs an elevated prompt (WMI thermal class is admin-only).")

    logging.basicConfig(
        level=logging.DEBUG if args.verbose else logging.INFO,
        format="%(asctime)s %(levelname)-7s %(message)s",
        handlers=[logging.StreamHandler(),
                  logging.FileHandler(LOG_FILE, encoding="utf-8")],
    )

    config = load_config(args.config)
    pythoncom.CoInitialize()
    awcc = None
    try:
        awcc = AWCC()
        daemon = FanDaemon(awcc, config, dry_run=args.dry_run)
        if args.tray:
            run_with_tray(daemon)
        else:
            daemon.run(duration=args.duration, once=args.once)
    except AWCCError as ex:
        sys.exit(str(ex))
    finally:
        if awcc is not None:
            awcc.close()
        gc.collect()
        pythoncom.CoUninitialize()


if __name__ == "__main__":
    main()
