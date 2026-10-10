#!/usr/bin/env python3
r"""g16rgb - Per-key RGB keyboard control for the Dell G16 7630 (AWCC-free).

Drives the internal "DELL Technologies Keyboard" (Darfon VID 0x0D62,
PID 0xCCBC, AlienFX API v5) directly over USB HID feature reports -
the same protocol Alienware Command Center uses. No Dell software or
drivers required. Needs an elevated prompt.

Protocol (from T-Troll/alienfx-tools AlienFX-SDK, MIT):
  - HID feature reports, report ID 0xCC
  - reset/status: CC 94 / CC 93
  - color blocks: CC 8C 02 + [light+1, r, g, b]* at offset 4 (chunked)
  - end-set "loop": CC 8C 13, then update: CC 8B 01 FF

Key map comes from tools\Mappings\devices.csv (community database,
"DELL-G16 7630" section).

Usage:
    python g16rgb.py set 255,0,0              # whole keyboard red
    python g16rgb.py set 0,255,0 W A S D      # only some keys green
    python g16rgb.py off                      # lights off
    python g16rgb.py list                     # list known key names
    python g16rgb.py demo                     # RED/GREEN/BLUE/WHITE cycle
"""

import argparse
import os
import ctypes
import sys
import time

import hid

VID, PID = 0x0D62, 0xCCBC
REPORT_ID = 0xCC
# key map ships with the repo; fall back to the alienfx-tools copy if present
MAP_FILE = ("mappings/devices.csv" if os.path.exists(
    os.path.join(os.path.dirname(os.path.abspath(__file__)), "mappings", "devices.csv"))
    else "tools/Mappings/devices.csv")
MODEL_SECTION = "DELL-G16 7630"

# Global keyboard effect types (COMMV5_setEffect, byte [2])
EFFECTS = {
    "color": 0x00, "reset": 0x01, "breathing": 0x02, "wave": 0x03,
    "wave2": 0x04, "pulse": 0x08, "pulse2": 0x09,
    "nightrider": 0x0A, "laser": 0x0B,
}


def is_admin() -> bool:
    try:
        return bool(ctypes.windll.shell32.IsUserAnAdmin())
    except Exception:
        return False


def find_device():
    """Return the hidapi device info whose HID usage is 0xCC (lighting)."""
    candidates = hid.enumerate(VID, PID)
    if not candidates:
        return None, []
    usages = [(d["interface_number"], d["usage_page"], d["usage"]) for d in candidates]
    for d in candidates:
        if d["usage"] == 0xCC:
            return d, usages
    return candidates[0], usages


def feature_report_length(path: bytes) -> int:
    """Query HID caps (FeatureReportByteLength) via the Windows HID API."""
    hid_lib = ctypes.windll.hid
    kernel32 = ctypes.windll.kernel32

    class HIDP_CAPS(ctypes.Structure):
        _fields_ = [("Usage", ctypes.c_ushort),
                    ("UsagePage", ctypes.c_ushort),
                    ("InputReportByteLength", ctypes.c_ushort),
                    ("OutputReportByteLength", ctypes.c_ushort),
                    ("FeatureReportByteLength", ctypes.c_ushort),
                    ("Reserved", ctypes.c_ushort * 17),
                    ("NumberLinkCollectionNodes", ctypes.c_ushort)]

    wpath = path.decode("utf-8", "replace")
    handle = kernel32.CreateFileW(wpath, 0x80000000 | 0x40000000,  # GENERIC_R|W
                                  0x03, None, 3, 0, None)  # SHARE R|W, OPEN_EXISTING
    if handle in (-1, 0xFFFFFFFFFFFFFFFF):
        return 65  # sane default for a 0xCC-report device
    prep = ctypes.c_void_p()
    length = 65
    if hid_lib.HidD_GetPreparsedData(handle, ctypes.byref(prep)) and prep:
        caps = HIDP_CAPS()
        if hid_lib.HidP_GetCaps(prep, ctypes.byref(caps)):
            length = caps.FeatureReportByteLength or caps.OutputReportByteLength or 65
        hid_lib.HidD_FreePreparsedData(prep)
    kernel32.CloseHandle(handle)
    return length


class Keyboard:
    def __init__(self):
        dev, usages = find_device()
        if dev is None:
            raise SystemExit(
                f"No Darfon keyboard found (VID {VID:#06x} PID {PID:#06x}). "
                f"Run elevated and check Device Manager.")
        self.path = dev["path"]
        self.usages = usages
        self.dev = hid.device()
        self.dev.open_path(self.path)
        self.report_len = feature_report_length(self.path)
        self.blocks_per_report = max(1, (self.report_len - 4) // 4)

    def _send(self, payload):
        buf = bytes(bytearray(payload)) + b"\x00" * (self.report_len - len(payload))
        res = self.dev.send_feature_report(buf)
        if res < 0:
            raise SystemExit(f"feature report failed: {hid.error()}")

    def reset(self):
        self._send([REPORT_ID, 0x94])
        time.sleep(0.02)

    def set_lights(self, light_ids, r, g, b):
        """Set the given global light IDs to one color."""
        self.reset()
        ids = list(light_ids)
        i = 0
        while i < len(ids):
            chunk = ids[i:i + self.blocks_per_report]
            i += self.blocks_per_report
            payload = [REPORT_ID, 0x8C, 0x02, 0x00]
            for lid in chunk:
                payload += [((lid + 1) & 0xFF), r, g, b]
            self._send(payload)
        # end of set + apply
        self._send([REPORT_ID, 0x8C, 0x13])
        self._send([REPORT_ID, 0x8B, 0x01, 0xFF])

    def set_multi_lights(self, id_color_map: dict):
        """Set multiple light IDs to different colors in one batch."""
        self.reset()
        items = list(id_color_map.items())
        i = 0
        while i < len(items):
            chunk = items[i:i + self.blocks_per_report]
            i += self.blocks_per_report
            payload = [REPORT_ID, 0x8C, 0x02, 0x00]
            for lid, (r, g, b) in chunk:
                payload += [((lid + 1) & 0xFF), r, g, b]
            self._send(payload)
        # end of set + apply
        self._send([REPORT_ID, 0x8C, 0x13])
        self._send([REPORT_ID, 0x8B, 0x01, 0xFF])

    def global_effect(self, effect_type, r=0, g=0, b=0):
        # COMMV5_setEffect: type, tempo 0x07, then RGB1 at payload offset 10
        payload = [REPORT_ID, 0x80, effect_type & 0xFF, 0x07, 0x00, 0x00,
                   0x01, 0x01, 0x01, 0x00, r, g, b]
        self._send(payload)

    def close(self):
        try:
            self.dev.close()
        except Exception:
            pass


def load_keymap():
    """Parse the G16 7630 section of devices.csv -> {name: global_light_id}."""
    import csv
    keymap = {}
    try:
        with open(MAP_FILE, "r", encoding="utf-8", errors="replace") as f:
            reader = csv.reader(f, quotechar="'", skipinitialspace=True)
            in_section = False
            for parts in reader:
                if not parts or not parts[0]:
                    continue
                if parts[0] == "3":           # model section header
                    in_section = (len(parts) > 1 and parts[1] == MODEL_SECTION)
                    continue
                if not in_section or parts[0] != "1":
                    continue
                # '1', <global light id>, <grid pos>, <name>[, block, key...]
                try:
                    gid = int(parts[1])
                except (ValueError, IndexError):
                    continue
                name = parts[3] if len(parts) > 3 else f"light{gid}"
                if not name and gid == 90:
                    name = ","
                keymap.setdefault(name.upper(), gid)
    except FileNotFoundError:
        print(f"warning: {MAP_FILE} not found - only numeric light IDs available")
    return keymap


def parse_color(text):
    try:
        vals = [int(v) & 0xFF for v in text.split(",")]
        if len(vals) != 3:
            raise ValueError
        return vals
    except ValueError:
        raise SystemExit(f"bad color '{text}' - use r,g,b like 255,0,127")


def main():
    ap = argparse.ArgumentParser(prog="g16rgb",
                                 description="G16 7630 per-key RGB control (no AWCC needed)")
    sub = ap.add_subparsers(dest="cmd", required=True)
    p_set = sub.add_parser("set", help="set color for all or named keys")
    p_set.add_argument("color", help="r,g,b")
    p_set.add_argument("keys", nargs="*", help="key names (see 'list'); default all")
    sub.add_parser("off", help="lights off")
    sub.add_parser("list", help="list known key names")
    sub.add_parser("demo", help="color cycle for validation")
    p_fx = sub.add_parser("effect", help="keyboard-wide hardware effect")
    p_fx.add_argument("name", choices=sorted(EFFECTS))
    p_fx.add_argument("color", nargs="?", default="255,0,0")

    args = ap.parse_args()

    keymap = load_keymap()

    if args.cmd == "list":
        names = sorted(keymap)
        print(f"{len(names)} known keys:")
        for n in names:
            print(f"  {n} (light {keymap[n]})")
        return

    if not is_admin():
        sys.exit("g16rgb needs an elevated prompt (raw HID access is admin-only).")

    kb = Keyboard()
    print(f"device open: report len {kb.report_len}, "
          f"{kb.blocks_per_report} lights/report, interfaces {kb.usages}")
    try:
        if args.cmd == "set":
            r, g, b = parse_color(args.color)
            if args.keys:
                ids, missing = [], []
                for k in args.keys:
                    kid = keymap.get(k.upper())
                    (ids.append(kid) if kid is not None else missing.append(k))
                if missing:
                    sys.exit(f"unknown keys: {', '.join(missing)} (see 'list')")
            else:
                ids = sorted(set(keymap.values())) or list(range(114))
            kb.set_lights(ids, r, g, b)
            n = len(ids)
            print(f"set {n} light(s) to {r},{g},{b}: OK")
        elif args.cmd == "off":
            ids = sorted(set(keymap.values())) or list(range(114))
            kb.set_lights(ids, 0, 0, 0)
            print("lights off: OK")
        elif args.cmd == "demo":
            for name, (r, g, b) in {"RED": (255, 0, 0), "GREEN": (0, 255, 0),
                                    "BLUE": (0, 0, 255), "WHITE": (255, 255, 255)}.items():
                print(f"-> {name}")
                kb.set_lights(sorted(set(keymap.values())), r, g, b)
                time.sleep(2.5)
            print("demo done - final state WHITE")
        elif args.cmd == "effect":
            r, g, b = parse_color(args.color)
            kb.global_effect(EFFECTS[args.name], r, g, b)
            print(f"effect {args.name}: sent")
    finally:
        kb.close()


if __name__ == "__main__":
    main()
