"""Shared AWCC WMI interface for Dell G-series / Alienware laptops.

Protocol reference: AlexIII/tcc-g15 WMI-AWCC-doc.md (GPL-3.0).
Verified on Dell G16 7630: fans 50/51 (sensors 1/6), USTT thermal modes
(classic codes rejected), duty-% subcode unsupported (returns -2).
"""

from typing import List, Optional, Tuple

import wmi

NAMESPACE = "root\\WMI"
CLASS = "AWCCWmiMethodFunction"

SENSOR_ID_FIRST, SENSOR_ID_LAST = 0x01, 0x30   # 1..48 thermal sensors
FAN_ID_FIRST, FAN_ID_LAST = 0x31, 0x63         # 49..99 fans

FAIL = 0xFFFFFFFF

MODES = {
    "custom":       0,
    "quiet":        150,
    "balanced":     151,
    "performance":  152,
    "fullspeed":    153,
    "ustt_balanced":      160,
    "ustt_performance":   161,
    "ustt_cool":          162,
    "ustt_quiet":         163,
    "ustt_fullspeed":     164,
    "ustt_batterysaver":  165,
    "gmode":        171,
}

# G16 7630 firmware rejects the classic codes (150..153); the USTT variants
# (160..165) are the accepted ones. Try classic first, fall back to USTT.
MODE_FALLBACK = {
    "quiet":       ["quiet", "ustt_quiet"],
    "balanced":    ["balanced", "ustt_balanced"],
    "performance": ["performance", "ustt_performance"],
    "fullspeed":   ["fullspeed", "ustt_fullspeed"],
}

# Sensor IDs seen on G-series boards; used only for nicer labels.
SENSOR_LABELS = {1: "CPU", 6: "GPU"}


class AWCCError(Exception):
    pass


class AWCC:
    """Thin wrapper over the AWCCWmiMethodFunction WMI methods."""

    def __init__(self):
        try:
            conn = wmi.WMI(namespace=NAMESPACE)
            awcc_class = getattr(conn, CLASS)
            self._awcc = awcc_class()[0]
        except Exception as ex:
            raise AWCCError(
                f"Could not instantiate {CLASS} in {NAMESPACE}: {ex}"
            ) from ex

    # -- low-level ---------------------------------------------------------

    def _call(self, method: str, arg: int) -> Optional[int]:
        """Invoke a WMI method with one uint32 in-param (arg2).

        Returns the single uint32 out-param (argr), or None on failure.
        """
        try:
            res = getattr(self._awcc, method)(arg)
        except Exception as ex:
            raise AWCCError(f"WMI call {method}(0x{arg:X}) failed: {ex}") from ex
        val = res[0]
        # python-wmi normally unwraps a lone out-param to its value; be
        # defensive in case a future version hands back an object.
        if not isinstance(val, int):
            val = getattr(val, "argr", FAIL)
        if val == FAIL or val == -1:
            return None
        return val

    # -- reads -------------------------------------------------------------

    def get_sensor_temperature(self, sensor_id: int) -> Optional[int]:
        arg = ((sensor_id & 0xFF) << 8) | 4
        return self._call("Thermal_Information", arg)

    def get_fan_rpm(self, fan_id: int) -> Optional[int]:
        arg = ((fan_id & 0xFF) << 8) | 5
        return self._call("Thermal_Information", arg)

    def get_fan_rpm_percent(self, fan_id: int) -> Optional[int]:
        arg = ((fan_id & 0xFF) << 8) | 6
        val = self._call("Thermal_Information", arg)
        # This firmware reports -2 for the duty-percent subcode; treat any
        # implausible value as unsupported.
        if val is None or not 0 <= val <= 100:
            return None
        return val

    def get_fan_sensor_count(self, fan_id: int) -> Optional[int]:
        arg = ((fan_id & 0xFF) << 8) | 1
        return self._call("GetFanSensors", arg)

    def get_fan_sensor_id(self, fan_id: int, index: int) -> Optional[int]:
        arg = ((index & 0xFF) << 16) | ((fan_id & 0xFF) << 8) | 2
        return self._call("GetFanSensors", arg)

    def discover_fans(self) -> List[Tuple[int, Tuple[int, ...]]]:
        """Return [(fan_id, (sensor_id, ...)), ...] for every fan the EC reports."""
        fans = []
        for fan_id in range(FAN_ID_FIRST, FAN_ID_LAST + 1):
            count = self.get_fan_sensor_count(fan_id)
            if not count:
                continue
            sensor_ids = []
            for i in range(count):
                sid = self.get_fan_sensor_id(fan_id, i)
                if sid is not None:
                    sensor_ids.append(sid)
            if sensor_ids:
                fans.append((fan_id, tuple(sensor_ids)))
        return fans

    # -- writes ------------------------------------------------------------

    def apply_thermal_mode(self, mode_value: int) -> bool:
        arg = ((mode_value & 0xFF) << 8) | 1
        return self._call("Thermal_Control", arg) == 0

    def set_addon_speed_percent(self, fan_id: int, speed: int) -> bool:
        speed = max(0, min(speed, 0xFF))
        arg = ((speed & 0xFF) << 16) | ((fan_id & 0xFF) << 8) | 2
        return self._call("Thermal_Control", arg) == 0

    # -- TCC offset (CPU throttle-temperature cap) -------------------------
    # Protocol (AlienFan SDK v2): TccControl subcommands encoded in arg2:
    #   0x01 -> max TCC base (usually 100)
    #   0x02 -> max allowed offset (usually 16)
    #   0x03 -> current offset
    #   (offset << 8) | 0x04 -> set offset (degrees below max TCC)

    def tcc_get_max(self) -> Optional[int]:
        return self._call("TccControl", 0x01)

    def tcc_get_max_offset(self) -> Optional[int]:
        return self._call("TccControl", 0x02)

    def tcc_get_offset(self) -> Optional[int]:
        return self._call("TccControl", 0x03)

    def tcc_set_offset(self, offset: int) -> bool:
        """Set TCC activation offset (degrees below max TCC). 0 = stock."""
        return self._call("TccControl", ((offset & 0xFF) << 8) | 0x04) is not None

    def close(self):
        # Drop the COM-backed WMI object while the apartment is still alive,
        # otherwise pywin32 prints "Win32 exception occurred releasing
        # IUnknown" noise during interpreter teardown.
        self._awcc = None


def apply_mode_with_fallback(awcc: AWCC, name: str) -> Tuple[bool, str]:
    """Apply a named thermal mode, trying the USTT twin if classic fails.

    Returns (ok, note) where note says which code ended up used.
    """
    name = name.lower()
    if name not in MODES:
        return False, f"unknown mode '{name}'"
    for cand in MODE_FALLBACK.get(name, [name]):
        if awcc.apply_thermal_mode(MODES[cand]):
            note = cand if cand != name else name
            return True, note
    return False, name


def fan_names(fans: List[Tuple[int, Tuple[int, ...]]]) -> List[str]:
    """Best-effort friendly names for discovered fans (G16: cpu, gpu)."""
    names = []
    for i, (_fan_id, sensor_ids) in enumerate(fans):
        label = SENSOR_LABELS.get(sensor_ids[0]) if sensor_ids else None
        names.append(label.lower() if label else f"fan{i + 1}")
    return names
