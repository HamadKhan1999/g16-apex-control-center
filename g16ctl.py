#!/usr/bin/env python3
r"""g16ctl - Fan, thermal mode and monitoring control for Dell G16 7630 (and
other Dell G-series / Alienware laptops exposing the AWCC WMI interface).

Talks directly to the BIOS-level WMI class AWCCWmiMethodFunction in root\WMI -
the same interface Alienware Command Center uses - so no Dell software needs
to be installed. Requires an elevated (Administrator) prompt.

Usage:
    python g16ctl.py status              # temps, fan RPMs, fan->sensor map
    python g16ctl.py sensors             # dump every thermal sensor 1..48
    python g16ctl.py watch [interval]    # live refresh (default 2 s)
    python g16ctl.py mode <name>         # quiet|balanced|performance|fullspeed|custom|gmode
    python g16ctl.py boost <0-100> [cpu|gpu]   # fan addon boost % (0 = follow BIOS curve)
    python g16ctl.py boost off           # clear boost, restore balanced

Safety: SetAddonSpeedPercent only *raises* fan duty on top of the BIOS curve;
the EC still enforces its own thermal protection regardless of what we send.
"""

import argparse
import ctypes
import gc
import os
import sys
import time

import pythoncom

from awcc import (
    AWCC, AWCCError, MODES, SENSOR_ID_FIRST, SENSOR_ID_LAST,
    SENSOR_LABELS, apply_mode_with_fallback, fan_names,
)


def is_admin() -> bool:
    try:
        return bool(ctypes.windll.shell32.IsUserAnAdmin())
    except Exception:
        return False


def cmd_status(awcc: AWCC, as_json: bool = False):
    fans = awcc.discover_fans()
    names = fan_names(fans)
    rows = []
    for i, (fan_id, sensor_ids) in enumerate(fans):
        rpm = awcc.get_fan_rpm(fan_id)
        pct = awcc.get_fan_rpm_percent(fan_id)
        temps = []
        for sid in sensor_ids:
            t = awcc.get_sensor_temperature(sid)
            label = SENSOR_LABELS.get(sid, f"sensor {sid}")
            temps.append(f"{label} {t if t is not None else '--'}C")
        rows.append({
            "fan": names[i], "fan_id": fan_id,
            "rpm": rpm, "duty_pct": pct, "sensors": ", ".join(temps),
        })

    if as_json:
        import json
        print(json.dumps(rows, indent=2))
        return

    print(f"{'fan':<6}{'id':<5}{'RPM':>6}   related sensors")
    for r in rows:
        rpm = f"{r['rpm']}" if r["rpm"] is not None else "--"
        print(f"{r['fan']:<6}{r['fan_id']:<5}{rpm:>6}   {r['sensors']}")


def cmd_sensors(awcc: AWCC):
    active = []
    for sid in range(SENSOR_ID_FIRST, SENSOR_ID_LAST + 1):
        t = awcc.get_sensor_temperature(sid)
        if t is not None:
            active.append((sid, t))
    print(f"{len(active)} active thermal sensors (of {SENSOR_ID_LAST}):")
    for sid, t in active:
        label = SENSOR_LABELS.get(sid, "")
        bar = "#" * min(t // 4, 30)
        print(f"  sensor {sid:<3} {label:<4} {t:>3}C  {bar}")


def cmd_watch(awcc: AWCC, interval: float):
    try:
        while True:
            os.system("cls" if os.name == "nt" else "clear")
            print(time.strftime("%Y-%m-%d %H:%M:%S"))
            cmd_status(awcc)
            print(f"\n(refresh {interval}s, Ctrl+C to stop)")
            time.sleep(interval)
    except KeyboardInterrupt:
        pass


def cmd_mode(awcc: AWCC, name: str):
    ok, used = apply_mode_with_fallback(awcc, name)
    note = f" (fell back to {used})" if used != name.lower() else ""
    print(f"thermal mode -> {name.lower()}{note}: {'OK' if ok else 'FAILED'}")
    if not ok:
        sys.exit(1)


def cmd_boost(awcc: AWCC, speed: int, target: str):
    fans = awcc.discover_fans()
    if not fans:
        sys.exit("no fans discovered via GetFanSensors")

    names = fan_names(fans)
    if target == "all":
        selected = list(zip(names, fans))
    else:
        if target not in names:
            sys.exit(f"unknown fan '{target}'. Fans found: {', '.join(names)}")
        selected = [(target, fans[names.index(target)])]

    if speed == 0:
        for name, (fan_id, _) in selected:
            ok = awcc.set_addon_speed_percent(fan_id, 0)
            print(f"{name}: addon boost cleared: {'OK' if ok else 'FAILED'}")
        return

    # Manual boost works reliably in Custom mode (same approach as tcc-g15).
    awcc.apply_thermal_mode(MODES["custom"])
    for name, (fan_id, _) in selected:
        ok = awcc.set_addon_speed_percent(fan_id, speed)
        print(f"{name}: addon boost -> {speed}%: {'OK' if ok else 'FAILED'}")


def main():
    ap = argparse.ArgumentParser(
        prog="g16ctl",
        description="Dell G16 fan/thermal control via BIOS WMI (no AWCC needed)",
    )
    sub = ap.add_subparsers(dest="cmd", required=True)

    sub.add_parser("status", help="show fan RPMs, duty and temps")
    sub.add_parser("sensors", help="dump all thermal sensors")
    p_watch = sub.add_parser("watch", help="live status refresh")
    p_watch.add_argument("interval", nargs="?", type=float, default=2.0)
    p_mode = sub.add_parser("mode", help="set thermal mode")
    p_mode.add_argument("name", choices=sorted(MODES))
    p_boost = sub.add_parser("boost", help="set fan addon boost %%")
    p_boost.add_argument("speed", help="0-100, or 'off' (= 0 + restore balanced)")
    p_boost.add_argument("fan", nargs="?", default="all",
                         choices=["all", "cpu", "gpu"])
    ap.add_argument("--json", action="store_true", help="status as JSON")

    args = ap.parse_args()

    if not is_admin():
        sys.exit(
            "g16ctl needs an elevated prompt (the WMI thermal class is "
            "admin-only).\nRe-run from an Administrator terminal."
        )

    pythoncom.CoInitialize()
    awcc = None
    try:
        try:
            awcc = AWCC()
        except AWCCError as ex:
            sys.exit(str(ex))

        if args.cmd == "status":
            cmd_status(awcc, as_json=args.json)
        elif args.cmd == "sensors":
            cmd_sensors(awcc)
        elif args.cmd == "watch":
            cmd_watch(awcc, args.interval)
        elif args.cmd == "mode":
            cmd_mode(awcc, args.name)
        elif args.cmd == "boost":
            if args.speed.lower() == "off":
                cmd_boost(awcc, 0, args.fan)
                cmd_mode(awcc, "balanced")
            else:
                try:
                    speed = int(args.speed)
                except ValueError:
                    sys.exit("speed must be 0..100 or 'off'")
                if not 0 <= speed <= 100:
                    sys.exit("speed must be 0..100")
                cmd_boost(awcc, speed, args.fan)
    finally:
        if awcc is not None:
            awcc.close()
        gc.collect()
        pythoncom.CoUninitialize()


if __name__ == "__main__":
    main()
