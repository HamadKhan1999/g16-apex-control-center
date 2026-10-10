"""backend.py - Threaded background hardware engine for G16 Control Center.

Manages:
1. WMI thermal reads (CPU & GPU temps, Fan RPMs, active thermal mode)
2. Fan boost controls & fail-safe monitoring
3. HID keyboard lighting commands (color presets, key groups, effects)
4. Always-On keyboard backlight keepalive thread
5. System telemetry (CPU usage %, RAM used/pct, network upload/download)
6. State broadcasting to UI threads safely
"""

import gc
import json
import logging
import os
import queue
import sys
import threading
import time
from typing import Callable, Dict, List, Optional, Tuple

import psutil
import pythoncom

from awcc import (
    AWCC, AWCCError, MODES, SENSOR_ID_FIRST, SENSOR_ID_LAST,
    SENSOR_LABELS, apply_mode_with_fallback, fan_names
)
import g16rgb

log = logging.getLogger("g16backend")

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))


class PdhCpuClock:
    """Real effective CPU clock via the Windows PDH performance counter
    '% Processor Performance' (percent of nominal base clock).

    psutil.cpu_freq() on this platform reports the fixed base clock and is
    blind to boost/throttle behavior; this counter tracks the real value.
    """

    def __init__(self, base_mhz: float = 2200.0):
        self.base_mhz = base_mhz
        self.ok = False
        self._primed = False
        try:
            import ctypes
            self._ct = ctypes
            self.pdh = ctypes.WinDLL("pdh", use_last_error=True)
            self.query = ctypes.c_void_p()
            if self.pdh.PdhOpenQueryW(None, 0, ctypes.byref(self.query)) != 0:
                return
            self.counter = ctypes.c_void_p()
            path = ctypes.c_wchar_p(
                "\\Processor Information(_Total)\\% Processor Performance")
            if self.pdh.PdhAddEnglishCounterW(self.query, path, 0,
                                              ctypes.byref(self.counter)) != 0:
                return
            self.ok = True
        except Exception:
            self.ok = False

    def read_mhz(self):
        """Effective all-thread average clock in MHz, or None."""
        if not self.ok:
            return None
        ctypes = self._ct

        class FMTVAL(ctypes.Structure):
            _fields_ = [("CStatus", ctypes.c_ulong), ("double", ctypes.c_double)]

        try:
            if self.pdh.PdhCollectQueryData(self.query) != 0:
                return None
            val = FMTVAL()
            res = self.pdh.PdhGetFormattedCounterValue(
                self.counter, 0x200, None, ctypes.byref(val))  # PDH_FMT_DOUBLE
            if res != 0 or val.CStatus != 0:
                return None
            if not self._primed:
                # first collect can return an unreliable value
                self._primed = True
                return None
            return round(val.double / 100.0 * self.base_mhz)
        except Exception:
            return None


class RgbEngine:
    """Dedicated keyboard-lighting thread.

    Owns the HID handle exclusively and never touches WMI, so the always-on
    keepalive keeps running even if the thermal/WMI worker stalls during
    disk storms or heavy IO.
    """

    TICK = 0.5          # loop tick (seconds)
    KEEPALIVE_EVERY = 12.0

    def __init__(self, backend):
        self.backend = backend
        self.queue = queue.Queue()
        self.stop_event = threading.Event()
        self.thread = None
        self.kb = None
        self._fail_streak = 0

    def start(self):
        if self.thread and self.thread.is_alive():
            return
        self.stop_event.clear()
        self.thread = threading.Thread(target=self._run, daemon=True, name="G16RgbWorker")
        self.thread.start()

    def stop(self):
        self.stop_event.set()
        if self.thread:
            self.thread.join(timeout=3)

    def post(self, kind, data):
        self.queue.put((kind, data))

    # -- internal -----------------------------------------------------------

    def _open(self):
        try:
            self.kb = g16rgb.Keyboard()
            with self.backend._state_lock:
                self.backend.state.rgb_available = True
            log.info("RGB engine: Darfon keyboard connected")
            return True
        except Exception as e:
            self.kb = None
            with self.backend._state_lock:
                self.backend.state.rgb_available = False
            if self._fail_streak % 20 == 0:
                log.warning("RGB engine: keyboard unavailable: %s", e)
            return False

    def _run(self):
        last_keep = 0.0
        last_tick = 0.0
        while not self.stop_event.is_set():
            now = time.time()
            if now - last_tick < self.TICK:
                time.sleep(0.05)
                continue
            last_tick = now

            # 1. process pending commands
            try:
                while True:
                    kind, data = self.queue.get_nowait()
                    if self.kb is None and not self._open():
                        continue
                    self._handle(kind, data)
                    last_keep = now  # manual write counts as a keepalive
            except queue.Empty:
                pass
            except Exception as ex:
                log.exception("RGB command failed: %s", ex)
                self._drop_device()

            # 2. keepalive (re-broadcasts current lighting so the firmware
            #    never sleeps the backlight)
            with self.backend._state_lock:
                always_on = self.backend.state.always_on_enabled
                effect = self.backend.state.active_effect
                eff_color = self.backend.state.active_effect_color
                color = self.backend.state.active_color
                key_colors = dict(self.backend.state.key_colors)

            if always_on and self.kb and now - last_keep >= self.KEEPALIVE_EVERY:
                last_keep = now
                try:
                    if effect:
                        self.kb.global_effect(g16rgb.EFFECTS[effect], *eff_color)
                    elif color != (0, 0, 0):
                        if key_colors and len(set(key_colors.values())) > 1:
                            id_map = {self.backend.keymap[k]: c
                                      for k, c in key_colors.items() if k in self.backend.keymap}
                            self.kb.set_multi_lights(id_map)
                        else:
                            ids = sorted(set(self.backend.keymap.values())) or list(range(114))
                            self.kb.set_lights(ids, *color)
                except Exception as ex:
                    log.warning("RGB keepalive failed, reopening device: %s", ex)
                    self._drop_device()

            # 3. reconnect if we lost the keyboard
            if self.kb is None:
                self._fail_streak += 1
                if self._fail_streak % 24 == 1:  # ~every 12s
                    self._open()

    def _handle(self, kind, data):
        if kind == "set_rgb":
            r, g, b, keys = data
            if keys:
                ids = [self.backend.keymap[k.upper()] for k in keys
                       if k.upper() in self.backend.keymap]
            else:
                ids = sorted(set(self.backend.keymap.values())) or list(range(114))
            self.kb.set_lights(ids, r, g, b)
        elif kind == "set_effect":
            name, r, g, b = data
            if name in g16rgb.EFFECTS:
                self.kb.global_effect(g16rgb.EFFECTS[name], r, g, b)

    def _drop_device(self):
        try:
            if self.kb:
                self.kb.close()
        except Exception:
            pass
        self.kb = None
        with self.backend._state_lock:
            self.backend.state.rgb_available = False


class FpsMonitor:
    """Live in-game FPS via Intel PresentMon (ETW frame capture).

    PresentMon needs elevated privileges - the Control Center runs elevated
    via the G16ControlCenter scheduled task, so spawns inherit that.
    Computes a rolling average FPS from frame-present deltas.
    """

    def __init__(self, on_fps=None):
        self.on_fps = on_fps
        self.exe = None
        self.proc = None
        self._thread = None
        self._stop = threading.Event()
        self.exe_path = os.path.join(SCRIPT_DIR, "tools", "presentmon", "PresentMon.exe")

    def start(self, exe_name: str):
        self.stop()
        if not os.path.exists(self.exe_path):
            log.warning("PresentMon not found - live FPS unavailable")
            return
        self.exe = exe_name.lower()
        self._stop.clear()
        self._thread = threading.Thread(target=self._run, daemon=True, name="FpsMon")
        self._thread.start()

    def stop(self):
        self._stop.set()
        try:
            if self.proc:
                self.proc.terminate()
                self.proc = None
        except Exception:
            pass

    def _run(self):
        import subprocess
        import csv as _csv
        from collections import deque

        frames = deque(maxlen=45)
        try:
            si = subprocess.STARTUPINFO()
            si.dwFlags |= subprocess.STARTF_USESHOWWINDOW
            self.proc = subprocess.Popen(
                [self.exe_path, "--process_name", self.exe, "--output_stdout"],
                stdout=subprocess.PIPE, stderr=subprocess.DEVNULL,
                text=True, encoding="utf-8", errors="replace",
                startupinfo=si)
            log.info("PresentMon started for %s", self.exe)
            reader = _csv.reader(self.proc.stdout)
            fps_idx = None
            for row in reader:
                if self._stop.is_set():
                    break
                if not row:
                    continue
                if fps_idx is None:
                    if "Application" in row:
                        for cand in ("msBetweenDisplayChange", "msBetweenPresents"):
                            if cand in row:
                                fps_idx = row.index(cand)
                                break
                    continue
                if fps_idx >= len(row):
                    continue
                try:
                    ms = float(row[fps_idx])
                except ValueError:
                    continue
                if ms > 0.05:
                    frames.append(1000.0 / ms)
                    if self.on_fps:
                        try:
                            self.on_fps(sum(frames) / len(frames))
                        except Exception:
                            pass
        except Exception as ex:
            log.debug("PresentMon reader ended: %s", ex)


class MatchLogger:
    """Ultra-lightweight CSV match recorder.

    Piggybacks on the existing 1-second telemetry cycle - it only formats one
    line from data the worker already collected and buffers writes, flushing
    every 5 rows. Overhead: <0.01% CPU, ~4 KB RAM, ~200 bytes/s disk.
    """

    HEADER = ("time,cpu_temp,gpu_temp,cpu_load_pct,cpu_mhz,"
              "gpu_util_pct,gpu_clock_mhz,gpu_power_w,vram_mb,"
              "cpu_fan_rpm,gpu_fan_rpm,fps,mode,failsafe")

    def __init__(self, game_name: str = "match"):
        import datetime
        stamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
        safe = "".join(c for c in game_name if c.isalnum() or c in "-_ ")[:30].strip().replace(" ", "_") or "match"
        log_dir = os.path.join(SCRIPT_DIR, "match_logs")
        os.makedirs(log_dir, exist_ok=True)
        self.path = os.path.join(log_dir, f"{stamp}_{safe}.csv")
        self._fh = open(self.path, "w", encoding="utf-8", buffering=1)
        self._fh.write(self.HEADER + "\n")
        self._rows = 0
        log.info("Match logging started: %s", self.path)

    def write_row(self, s: "HardwareState"):
        try:
            row = (f"{int(time.time() )},{s.cpu_temp or 0},{s.gpu_temp or 0},"
                   f"{s.cpu_usage:.0f},{s.cpu_mhz:.0f},"
                   f"{s.gpu_util},{s.gpu_clock_mhz},{s.gpu_power_w:.1f},{s.gpu_vram_used_mb},"
                   f"{s.cpu_rpm or 0},{s.gpu_rpm or 0},"
                   f"{s.current_mode},{1 if s.failsafe_active else 0}")
            self._fh.write(row + "\n")
            self._rows += 1
            if self._rows % 5 == 0:
                self._fh.flush()
        except Exception:
            pass

    def stop(self):
        try:
            self._fh.flush()
            self._fh.close()
            log.info("Match logging stopped: %s", self.path)
        except Exception:
            pass

# File log so hardware behavior inside the (elevated, windowless) app can be
# diagnosed after the fact.
_logfile = os.path.join(os.path.dirname(os.path.abspath(__file__)), "g16backend.log")
if not log.handlers:
    _fh = logging.FileHandler(_logfile, encoding="utf-8")
    _fh.setFormatter(logging.Formatter("%(asctime)s %(levelname)-7s %(message)s"))
    log.addHandler(_fh)
    log.setLevel(logging.INFO)


class HardwareState:
    """Snapshot of live machine telemetry."""
    def __init__(self):
        # Thermal & Fans
        self.cpu_temp: Optional[int] = None
        self.gpu_temp: Optional[int] = None
        self.cpu_rpm: Optional[int] = None
        self.gpu_rpm: Optional[int] = None
        self.cpu_boost: int = 0
        self.gpu_boost: int = 0
        self.current_mode: str = "balanced"
        self.gmode_active: bool = False
        self.failsafe_active: bool = False
        self.connected: bool = False

        # Usage Stats (via psutil)
        self.cpu_usage: float = 0.0
        self.cpu_mhz: float = 0.0
        self.ram_pct: float = 0.0
        self.ram_used_gb: float = 0.0
        self.ram_total_gb: float = 0.0
        self.net_sent_kb: float = 0.0
        self.net_recv_kb: float = 0.0
        self.fps: float = 0.0

        # Detailed GPU Stats (RTX 4070 Laptop via nvidia-smi)
        self.gpu_util: int = 0
        self.gpu_vram_used_mb: int = 0
        self.gpu_vram_total_mb: int = 8188
        self.gpu_clock_mhz: int = 0
        self.gpu_power_w: float = 0.0

        # Power State
        self.battery_pct: int = 100
        self.power_plugged: bool = True

        # Keyboard Lighting
        self.rgb_available: bool = False
        self.always_on_enabled: bool = True
        self.active_color: Tuple[int, int, int] = (0, 229, 255)  # Cyber cyan default
        self.key_colors: Dict[str, Tuple[int, int, int]] = {}
        self.active_effect: Optional[str] = None  # None, or effect name
        self.active_effect_color: Tuple[int, int, int] = (0, 229, 255)

        self.timestamp: float = 0.0


class G16Backend:
    def __init__(self, on_state_update: Optional[Callable[[HardwareState], None]] = None):
        self.on_state_update = on_state_update
        self.state = HardwareState()
        self._state_lock = threading.Lock()
        self._command_queue: queue.Queue = queue.Queue()
        self._stop_event = threading.Event()
        self._worker_thread: Optional[threading.Thread] = None

        # Settings
        # 102C = true emergency only. The EC/BIOS protects the hardware at its
        # own thresholds regardless; 95C was tripping G-Mode (max fans) on a
        # machine that legitimately idles hot under load.
        self.critical_temp = 102
        self.hysteresis = 6
        self.poll_interval = 1.0
        self.keymap = g16rgb.load_keymap()

        # Last thermal mode chosen by the user (restored after fail-safe exit)
        self._user_mode = "balanced"

        # Telemetry helpers
        self._last_net = psutil.net_io_counters()
        self._last_net_time = time.time()
        self._last_keepalive_time = time.time()
        self._nvml_retry_cycle = 0

        # Real CPU clock monitor (PDH); created lazily on the worker thread
        self._pdh_clock = None

        # Dedicated RGB thread (owns the HID handle; immune to WMI stalls)
        self.rgb = RgbEngine(self)

        # Match logger (created on demand via start_match_logging)
        self.match_logger = None

        # Live FPS via PresentMon (spawned when a game's logging starts)
        self.fps_mon = FpsMonitor(on_fps=self._on_fps)

        # Native NVML setup (Direct C-level, zero subprocess overhead).
        # Init may fail here if the dGPU is asleep (Advanced Optimus); the
        # worker loop retries lazily until it succeeds.
        self._nvml_available = False
        self._nvml_handle = None
        self._nvml = None
        self._init_nvml()

        # User settings persisted to disk (TCC offset etc.)
        self.settings_path = os.path.join(SCRIPT_DIR, "settings.json")
        self.settings = {
            "tcc_offset": 8,         # daily health guard (degrees below max)
            "tcc_offset_gaming": 4,  # relaxed while in G-Mode (game headroom)
            "auto_apply_tcc": True,
        }
        self._load_settings()

    def start(self):
        """Start the background hardware supervisor + RGB threads."""
        if self._worker_thread and self._worker_thread.is_alive():
            return
        self._stop_event.clear()
        self._worker_thread = threading.Thread(target=self._run_loop, daemon=True, name="G16HardwareWorker")
        self._worker_thread.start()
        self.rgb.start()

    def stop(self):
        """Signal worker threads to exit; restore stock fans."""
        self._stop_event.set()
        self.rgb.stop()
        if self._worker_thread:
            self._worker_thread.join(timeout=3.0)

    # -- Settings persistence --------------------------------------------

    def _load_settings(self):
        try:
            if os.path.exists(self.settings_path):
                with open(self.settings_path, "r", encoding="utf-8") as f:
                    self.settings.update(json.load(f))
        except Exception as ex:
            log.warning("Could not load settings.json: %s", ex)

    def _save_settings(self):
        try:
            with open(self.settings_path, "w", encoding="utf-8") as f:
                json.dump(self.settings, f, indent=2)
        except Exception as ex:
            log.warning("Could not save settings.json: %s", ex)

    def _init_nvml(self):
        import ctypes
        try:
            self._nvml = ctypes.CDLL("nvml.dll")
            ret = self._nvml.nvmlInit_v2()
            if ret == 0:
                h = ctypes.c_void_p()
                if self._nvml.nvmlDeviceGetHandleByIndex_v2(0, ctypes.byref(h)) == 0:
                    self._nvml_handle = h
                    self._nvml_available = True
                    self._nvml_fail_streak = 0
                    log.info("Native NVML loaded successfully (handle %s)", h.value)
                else:
                    log.warning("nvmlDeviceGetHandleByIndex_v2 failed rc=%s (dGPU asleep?)", ret)
            else:
                log.warning("nvmlInit_v2 returned rc=%s", ret)
        except Exception as e:
            log.warning("NVML init failed: %s", e)

    # -- Public Thread-Safe Control Methods --

    def set_mode(self, mode_name: str):
        """Set thermal mode (quiet, balanced, performance, gmode, custom)."""
        self._command_queue.put(("set_mode", mode_name))

    def toggle_gmode(self, enable: bool):
        """Turn G-Mode (turbo) on or off."""
        self._command_queue.put(("set_mode", "gmode" if enable else "balanced"))

    def set_fan_boost(self, cpu_boost: int, gpu_boost: int):
        """Set manual fan boost percentages (0-100)."""
        self._command_queue.put(("set_boost", (cpu_boost, gpu_boost)))

    def set_tcc_offset(self, offset: int, persist: bool = True):
        """Set CPU TCC activation offset (degrees below max, 0 = stock)."""
        self._command_queue.put(("set_tcc", (int(offset), persist)))

    def get_tcc_settings(self):
        """Return (daily_offset, gaming_offset, auto_apply) from persisted settings."""
        return (self.settings.get("tcc_offset", 8),
                self.settings.get("tcc_offset_gaming", 4),
                self.settings.get("auto_apply_tcc", True))

    def set_rgb_color(self, r: int, g: int, b: int, keys: Optional[List[str]] = None):
        """Set keyboard color (all or list of key names like ['W','A','S','D'])."""
        with self._state_lock:
            self.state.active_color = (r, g, b)
            self.state.active_effect = None
            if keys:
                for k in keys:
                    self.state.key_colors[k.upper()] = (r, g, b)
            else:
                for k in self.keymap:
                    self.state.key_colors[k] = (r, g, b)
        self.rgb.post("set_rgb", (r, g, b, keys))

    def set_rgb_effect(self, effect_name: str, r: int = 255, g: int = 0, b: int = 0):
        """Set a hardware animation effect (breathing, pulse, wave, etc.)."""
        with self._state_lock:
            self.state.active_effect = effect_name
            self.state.active_effect_color = (r, g, b)
        self.rgb.post("set_effect", (effect_name, r, g, b))

    def stop_rgb_effect(self):
        """Stop running effect and restore current static key colors."""
        with self._state_lock:
            self.state.active_effect = None
            r, g, b = self.state.active_color
        self.rgb.post("set_rgb", (r, g, b, None))

    def turn_rgb_off(self):
        """Turn off keyboard lights."""
        with self._state_lock:
            self.state.active_color = (0, 0, 0)
            self.state.active_effect = None
            self.state.key_colors.clear()
        self.rgb.post("set_rgb", (0, 0, 0, None))

    def set_always_on(self, enabled: bool):
        """Toggle background keepalive to prevent firmware backlight sleep."""
        with self._state_lock:
            self.state.always_on_enabled = enabled
        log.info("RGB Always-On mode set to %s", enabled)

    # -- Background Worker Loop --

    def _run_loop(self):
        pythoncom.CoInitialize()
        awcc: Optional[AWCC] = None

        try:
            try:
                awcc = AWCC()
                log.info("AWCC WMI connected")
            except Exception as e:
                log.error("Failed to connect to AWCC WMI: %s", e)

            # 0. Auto-apply persisted TCC offset (re-apply every boot since
            #    the EC resets the offset when the machine power cycles).
            if awcc and self.settings.get("auto_apply_tcc", True):
                self._apply_tcc(awcc, int(self.settings.get("tcc_offset", 8)))

            while not self._stop_event.is_set():
                # 1. Process incoming commands
                while not self._command_queue.empty():
                    try:
                        cmd, data = self._command_queue.get_nowait()
                        self._handle_command(cmd, data, awcc)
                    except queue.Empty:
                        break
                    except Exception as ex:
                        log.exception("Error processing command %s: %s", cmd, ex)

                # 2. Poll hardware telemetry & usage stats
                if awcc:
                    self._poll_thermal(awcc)
                self._poll_system_stats()

                # 3. Check Fail-Safe logic
                self._check_failsafe(awcc)

                # 4. Match logger - piggybacks on this existing telemetry
                #    cycle: one buffered CSV line from data already collected.
                if self.match_logger:
                    with self._state_lock:
                        snap = self._copy_state()
                    self.match_logger.write_row(snap)

                # 5. Notify listener
                if self.on_state_update:
                    with self._state_lock:
                        snapshot = self._copy_state()
                    try:
                        self.on_state_update(snapshot)
                    except Exception as ex:
                        log.exception("UI update callback error: %s", ex)

                # Sleep
                self._stop_event.wait(self.poll_interval)

        finally:
            log.info("Cleaning up G16 hardware backend...")
            if awcc:
                try:
                    awcc.set_addon_speed_percent(50, 0)
                    awcc.set_addon_speed_percent(51, 0)
                    apply_mode_with_fallback(awcc, "balanced")
                except Exception:
                    pass
                try:
                    awcc.close()
                except Exception:
                    pass
            try:
                pythoncom.CoUninitialize()
            except Exception:
                pass

    def _handle_command(self, cmd: str, data, awcc: Optional[AWCC]):
        if cmd == "set_mode" and awcc:
            mode_name = data.lower()
            ok, used = apply_mode_with_fallback(awcc, mode_name)
            log.info("Applied mode %s (used %s): %s", mode_name, used, ok)
            with self._state_lock:
                self.state.current_mode = mode_name
                self.state.gmode_active = (mode_name == "gmode")
                # A manual mode selection always cancels the fail-safe latch,
                # otherwise the fail-safe would stomp the user's choice.
                self.state.failsafe_active = False
            self._user_mode = mode_name

            # Gaming TCC profile: while in G-Mode, relax the throttle cap for
            # maximum CPU headroom (Valorant & co. are CPU-bound). Leaving
            # G-Mode restores the daily health guard.
            if self.settings.get("auto_apply_tcc", True):
                if mode_name == "gmode":
                    self._apply_tcc(awcc, int(self.settings.get("tcc_offset_gaming", 4)))
                else:
                    self._apply_tcc(awcc, int(self.settings.get("tcc_offset", 8)))

        elif cmd == "set_boost" and awcc:
            cpu_boost, gpu_boost = data
            awcc.apply_thermal_mode(MODES["custom"])
            awcc.set_addon_speed_percent(50, cpu_boost)
            awcc.set_addon_speed_percent(51, gpu_boost)
            with self._state_lock:
                self.state.cpu_boost = cpu_boost
                self.state.gpu_boost = gpu_boost
                self.state.current_mode = "custom"
                self.state.failsafe_active = False

        elif cmd == "set_tcc" and awcc:
            offset, persist = data
            self._apply_tcc(awcc, offset)
            if persist:
                self.settings["tcc_offset"] = offset
                self._save_settings()

        elif cmd == "set_tcc_gaming" and awcc:
            offset, persist = data
            self._apply_tcc(awcc, offset)
            if persist:
                self.settings["tcc_offset_gaming"] = offset
                self._save_settings()

        elif cmd == "log_start":
            if self.match_logger:
                self.match_logger.stop()
            self.match_logger = MatchLogger(data)

        elif cmd == "log_stop":
            if self.match_logger:
                self.match_logger.stop()
                self.match_logger = None

    def set_tcc_gaming_offset(self, offset: int, persist: bool = True):
        """Set the relaxed TCC offset used while in G-Mode (gaming)."""
        self._command_queue.put(("set_tcc_gaming", (int(offset), persist)))

    # -- Match logging -----------------------------------------------------

    def start_match_logging(self, game_name: str = "match", exe_path: str = None):
        """Begin recording telemetry + live FPS for a game."""
        self._command_queue.put(("log_start", game_name))
        if exe_path:
            self.fps_mon.start(os.path.basename(exe_path))

    def stop_match_logging(self):
        self._command_queue.put(("log_stop", None))
        self.fps_mon.stop()

    def is_match_logging(self) -> bool:
        return self.match_logger is not None

    def _on_fps(self, value: float):
        with self._state_lock:
            self.state.fps = round(value, 1)

    def _apply_tcc(self, awcc: AWCC, offset: int):
        """Apply the TCC activation offset, respecting firmware limits."""
        try:
            max_tcc = awcc.tcc_get_max()
            max_off = awcc.tcc_get_max_offset()
            if max_tcc is None or max_off is None:
                log.warning("TCC control not supported by firmware (max=%s maxoff=%s)", max_tcc, max_off)
                return
            offset = max(0, min(offset, max_off))
            if awcc.tcc_set_offset(offset):
                log.info("TCC offset applied: %d°C (throttle point %d°C, max offset %d)",
                         offset, max_tcc - offset, max_off)
            else:
                log.warning("TCC offset set to %d rejected by firmware", offset)
        except Exception as ex:
            log.exception("TCC apply failed: %s", ex)

    def _poll_thermal(self, awcc: AWCC):
        cpu_t = awcc.get_sensor_temperature(1)
        gpu_t = awcc.get_sensor_temperature(6)
        cpu_rpm = awcc.get_fan_rpm(50)
        gpu_rpm = awcc.get_fan_rpm(51)

        with self._state_lock:
            self.state.cpu_temp = cpu_t
            self.state.gpu_temp = gpu_t
            self.state.cpu_rpm = cpu_rpm
            self.state.gpu_rpm = gpu_rpm
            self.state.connected = True
            self.state.timestamp = time.time()

    def _poll_system_stats(self):
        # Real effective CPU clock: PDH query must be created and collected on
        # the same thread, so it is lazily initialized here in the worker.
        if self._pdh_clock is None:
            base = psutil.cpu_freq().max if psutil.cpu_freq() else 2200.0
            self._pdh_clock = PdhCpuClock(base_mhz=base or 2200.0)
        try:
            cpu_pct = psutil.cpu_percent(interval=None)
            cpu_freq_info = psutil.cpu_freq()
            cpu_mhz = cpu_freq_info.current if cpu_freq_info else 0.0

            eff_mhz = self._pdh_clock.read_mhz()
            if eff_mhz:
                cpu_mhz = float(eff_mhz)

            # RAM
            mem = psutil.virtual_memory()
            ram_pct = mem.percent
            ram_used = round(mem.used / (1024 ** 3), 1)
            ram_total = round(mem.total / (1024 ** 3), 1)

            # Network rates
            now = time.time()
            net = psutil.net_io_counters()
            dt = max(now - self._last_net_time, 0.01)
            sent_kb = round((net.bytes_sent - self._last_net.bytes_sent) / 1024.0 / dt, 1)
            recv_kb = round((net.bytes_recv - self._last_net.bytes_recv) / 1024.0 / dt, 1)
            self._last_net = net
            self._last_net_time = now

            # Battery / AC
            batt = psutil.sensors_battery()
            bat_pct = batt.percent if batt else 100
            plugged = batt.power_plugged if batt else True

            with self._state_lock:
                self.state.cpu_usage = cpu_pct
                self.state.cpu_mhz = cpu_mhz
                self.state.ram_pct = ram_pct
                self.state.ram_used_gb = ram_used
                self.state.ram_total_gb = ram_total
                self.state.net_sent_kb = sent_kb
                self.state.net_recv_kb = recv_kb
                self.state.battery_pct = bat_pct
                self.state.power_plugged = plugged
        except Exception:
            pass

        # Query NVIDIA RTX 4070 Telemetry every cycle
        self._poll_nvidia_stats()

    def _poll_nvidia_stats(self):
        # Lazy (re-)init: the dGPU may be asleep (Advanced Optimus / rtD3) at
        # app launch; polling NVML wakes it. Retry every 5 cycles until it
        # succeeds, then poll normally.
        if not self._nvml_available:
            self._nvml_retry_cycle += 1
            if self._nvml_retry_cycle % 5 == 1:
                self._wake_dgpu()   # nudge the dGPU out of rtD3 first
                self._init_nvml()
            return

        import ctypes

        class nvmlMemory_t(ctypes.Structure):
            _fields_ = [
                ("total", ctypes.c_ulonglong),
                ("free", ctypes.c_ulonglong),
                ("used", ctypes.c_ulonglong)
            ]

        class nvmlUtilization_t(ctypes.Structure):
            _fields_ = [
                ("gpu", ctypes.c_uint),
                ("memory", ctypes.c_uint)
            ]

        # Collect raw values first; only write to state on success so a
        # transient failure never overwrites good readings with zeros.
        clock_mhz = None
        power_w = None
        vram_used = None
        vram_total = None
        gpu_util = None

        try:
            # 1. Clock (Graphics clock in MHz)
            clk = ctypes.c_uint()
            if self._nvml.nvmlDeviceGetClockInfo(self._nvml_handle, 0, ctypes.byref(clk)) == 0:
                clock_mhz = clk.value

            # 2. Power (mW -> Watts)
            pwr = ctypes.c_uint()
            if self._nvml.nvmlDeviceGetPowerUsage(self._nvml_handle, ctypes.byref(pwr)) == 0:
                power_w = round(pwr.value / 1000.0, 1)

            # 3. VRAM
            mem = nvmlMemory_t()
            if self._nvml.nvmlDeviceGetMemoryInfo(self._nvml_handle, ctypes.byref(mem)) == 0:
                vram_used = int(mem.used // (1024 * 1024))
                vram_total = int(mem.total // (1024 * 1024))

            # 4. Utilization %
            util = nvmlUtilization_t()
            if self._nvml.nvmlDeviceGetUtilizationRates(self._nvml_handle, ctypes.byref(util)) == 0:
                gpu_util = util.gpu
        except Exception:
            pass

        with self._state_lock:
            if clock_mhz is not None:
                self.state.gpu_clock_mhz = clock_mhz
            if power_w is not None:
                self.state.gpu_power_w = power_w
            if vram_used is not None:
                self.state.gpu_vram_used_mb = vram_used
            if vram_total is not None:
                self.state.gpu_vram_total_mb = vram_total
            if gpu_util is not None:
                self.state.gpu_util = gpu_util

        # If every query failed this cycle, track it; after 8 consecutive
        # dead cycles the dGPU has probably powered off (rtD3 deep sleep) -
        # nudge it awake, and re-init NVML after 15.
        got_any = any(v is not None for v in (clock_mhz, power_w, vram_used, gpu_util))
        if not got_any:
            self._nvml_fail_streak = getattr(self, "_nvml_fail_streak", 0) + 1
            if self._nvml_fail_streak == 8:
                log.warning("NVML dead for 8 cycles - dGPU likely in rtD3 sleep, waking it")
                self._wake_dgpu()
            if self._nvml_fail_streak == 15:
                log.warning("NVML queries dead for 15 cycles - re-initializing")
                self._nvml_available = False
                try:
                    self._nvml.nvmlShutdown()
                except Exception:
                    pass
        else:
            self._nvml_fail_streak = 0
            # sample log every 20 cycles to confirm live values
            if time.time() - getattr(self, "_last_nvml_log", 0) > 60:
                self._last_nvml_log = time.time()
                log.info("NVML live: clock=%s MHz power=%s W util=%s%% vram=%s/%s MB",
                         clock_mhz, power_w, gpu_util, vram_used, vram_total)

    def _wake_dgpu(self):
        """Nudge the discrete GPU out of rtD3 deep sleep via the D3DKMT kernel
        interface (gdi32). Opening an adapter initializes the driver stack,
        which powers the dGPU back on so NVML can talk to it."""
        import ctypes

        class LUID(ctypes.Structure):
            _fields_ = [("LowPart", ctypes.c_ulong), ("HighPart", ctypes.c_long)]

        class D3DKMT_ADAPTERINFO(ctypes.Structure):
            _fields_ = [("hAdapter", ctypes.c_ulong),
                        ("AdapterLuid", LUID),
                        ("Flags", ctypes.c_ulong),
                        ("QmScore", ctypes.c_ulonglong),
                        ("Reserved", ctypes.c_ulonglong * 2)]

        class D3DKMT_ENUMADAPTERS2(ctypes.Structure):
            _fields_ = [("NumAdapters", ctypes.c_ulong),
                        ("pAdapters", ctypes.POINTER(D3DKMT_ADAPTERINFO))]

        class D3DKMT_OPENADAPTERFROMLUID(ctypes.Structure):
            _fields_ = [("AdapterLuid", LUID), ("hAdapter", ctypes.c_ulong)]

        class D3DKMT_CLOSEADAPTER(ctypes.Structure):
            _fields_ = [("hAdapter", ctypes.c_ulong)]

        try:
            gdi = ctypes.windll.gdi32
            enums = D3DKMT_ENUMADAPTERS2()
            if gdi.D3DKMTEnumAdapters2(ctypes.byref(enums)) != 0:
                return
            if enums.NumAdapters == 0:
                return
            arr = (D3DKMT_ADAPTERINFO * enums.NumAdapters)()
            enums.pAdapters = ctypes.cast(arr, ctypes.POINTER(D3DKMT_ADAPTERINFO))
            if gdi.D3DKMTEnumAdapters2(ctypes.byref(enums)) != 0:
                return

            woke = 0
            for i in range(enums.NumAdapters):
                info = arr[i]
                # Prefer the discrete GPU (highest QmScore); opening any
                # adapter still nudges the driver stack as a fallback.
                oa = D3DKMT_OPENADAPTERFROMLUID()
                oa.AdapterLuid = info.AdapterLuid
                oa.hAdapter = 0
                if gdi.D3DKMTOpenAdapterFromLuid(ctypes.byref(oa)) == 0:
                    woke += 1
                    ca = D3DKMT_CLOSEADAPTER()
                    ca.hAdapter = oa.hAdapter
                    gdi.D3DKMTCloseAdapter(ctypes.byref(ca))
            log.info("dGPU wake nudge: opened %d/%d adapters", woke, enums.NumAdapters)
        except Exception as ex:
            log.debug("dGPU wake failed: %s", ex)

    def _check_failsafe(self, awcc: Optional[AWCC]):
        if not awcc:
            return
        with self._state_lock:
            cpu_t = self.state.cpu_temp or 0
            gpu_t = self.state.gpu_temp or 0
            max_t = max(cpu_t, gpu_t)
            failsafe = self.state.failsafe_active

        if max_t >= self.critical_temp and not failsafe:
            log.warning("CRITICAL TEMP %d°C: Tripping fail-safe to G-Mode", max_t)
            awcc.apply_thermal_mode(MODES["gmode"])
            with self._state_lock:
                self.state.failsafe_active = True
                self.state.gmode_active = True
                self.state.current_mode = "gmode"
        elif failsafe and max_t < (self.critical_temp - self.hysteresis):
            # Leaving fail-safe: restore the user's last chosen mode instead
            # of leaving the hardware latched in G-Mode.
            log.info("Temp dropped to %d°C: Leaving fail-safe, restoring %s", max_t, self._user_mode)
            ok, _ = apply_mode_with_fallback(awcc, self._user_mode)
            with self._state_lock:
                self.state.failsafe_active = False
                self.state.gmode_active = (self._user_mode == "gmode")
                self.state.current_mode = self._user_mode if ok else "balanced"

    def _copy_state(self) -> HardwareState:
        s = HardwareState()
        s.cpu_temp = self.state.cpu_temp
        s.gpu_temp = self.state.gpu_temp
        s.cpu_rpm = self.state.cpu_rpm
        s.gpu_rpm = self.state.gpu_rpm
        s.cpu_boost = self.state.cpu_boost
        s.gpu_boost = self.state.gpu_boost
        s.current_mode = self.state.current_mode
        s.gmode_active = self.state.gmode_active
        s.failsafe_active = self.state.failsafe_active
        s.connected = self.state.connected
        s.cpu_usage = self.state.cpu_usage
        s.cpu_mhz = self.state.cpu_mhz
        s.ram_pct = self.state.ram_pct
        s.ram_used_gb = self.state.ram_used_gb
        s.ram_total_gb = self.state.ram_total_gb
        s.net_sent_kb = self.state.net_sent_kb
        s.net_recv_kb = self.state.net_recv_kb
        s.fps = self.state.fps
        # Detailed GPU (NVML) + power state
        s.gpu_util = self.state.gpu_util
        s.gpu_vram_used_mb = self.state.gpu_vram_used_mb
        s.gpu_vram_total_mb = self.state.gpu_vram_total_mb
        s.gpu_clock_mhz = self.state.gpu_clock_mhz
        s.gpu_power_w = self.state.gpu_power_w
        s.battery_pct = self.state.battery_pct
        s.power_plugged = self.state.power_plugged
        # Keyboard lighting
        s.rgb_available = self.state.rgb_available
        s.always_on_enabled = self.state.always_on_enabled
        s.active_color = self.state.active_color
        s.key_colors = dict(self.state.key_colors)
        s.active_effect = self.state.active_effect
        s.active_effect_color = self.state.active_effect_color
        s.timestamp = self.state.timestamp
        return s
