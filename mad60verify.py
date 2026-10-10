"""mad60verify.py - Closed-loop verification of the MAD60 protocol (no eyes needed).

1. 0x21 read the light matrix (LED indices)
2. 0xB0 firmware read (channel sanity)
3. 0x10 begin session
4. write 0x1A solid RED  -> read back 0x19 -> compare
5. write 0x1A solid GREEN -> read back 0x19 -> compare
6. 0x1D sync

If readbacks match writes, the data layout is proven - ambient engine can
proceed confidently without anyone looking at the keyboard.
"""

import time

import hid

VID, PID = 0x28E9, 0x3256
REPORT_ID = 6
HEADER = 7          # cmd, addrL, addrH, len, crcL, crcH, result
FRAME_PAYLOAD = 56  # 63 - 7


def crc16(packet):
    return sum(packet) & 0xFFFF


def build_packet(cmd_id, data=b"", addr=0, length=None):
    addr_low, addr_high = addr & 0xFF, (addr >> 8) & 0xFF
    length = len(data) if length is None else length
    packet = [cmd_id & 0xFF, addr_low, addr_high, length & 0xFF, 0, 0, 0, *data]
    crc = crc16(packet)
    packet[4] = crc & 0xFF
    packet[5] = (crc >> 8) & 0xFF
    return packet


def send(dev, cmd_id, data=b"", addr=0, length=None):
    packet = build_packet(cmd_id, data, addr, length)
    return dev.write(bytes([REPORT_ID]) + bytes(packet))


def read_data(dev, cmd_id, total_size, timeout_s=1.0):
    """sendCommand read path: request total_size bytes, collect input reports.
    Each input report: [reportId, cmd, addrL, addrH, len, status, data...]."""
    packet = build_packet(cmd_id, b"", 0, total_size)
    dev.write(bytes([REPORT_ID]) + bytes(packet))
    data = bytearray()
    deadline = time.time() + timeout_s
    addr_expected = 0
    while len(data) < total_size and time.time() < deadline:
        resp = bytes(dev.read(64, timeout_ms=250))
        if len(resp) < 5:
            continue
        cmd, al, ah, ln = resp[1], resp[2], resp[3], resp[4]
        if cmd != cmd_id or (al | (ah << 8)) != addr_expected:
            continue
        chunk = resp[5:5 + ln]
        data.extend(chunk)
        addr_expected += ln
    return bytes(data)


def chunked_write(dev, cmd_id, payload, chunk=FRAME_PAYLOAD):
    offset = 0
    while offset < len(payload):
        size = min(chunk, len(payload) - offset)
        send(dev, cmd_id, payload[offset:offset + size], addr=offset, length=size)
        time.sleep(0.03)
        offset += size


def open_channel():
    interfaces = hid.enumerate(VID, PID)
    # vendor pages respond to commands (verified)
    candidates = [d for d in interfaces if d["usage_page"] >= 0xFF00]
    for cand in candidates:
        dev = hid.device()
        try:
            dev.open_path(cand["path"])
            send(dev, 0xB0, b"\x00" * 5, addr=0, length=5)
            time.sleep(0.05)
            resp = bytes(dev.read(64, timeout_ms=300))
            if resp:
                return dev, resp, f"if{cand['interface_number']} up{cand['usage_page']:#06x}"
            dev.close()
        except Exception:
            try:
                dev.close()
            except Exception:
                pass
    return None, None, None


def main():
    dev, fw_resp, label = open_channel()
    if dev is None:
        print("no responding channel found")
        return
    print(f"channel: {label}")
    if fw_resp:
        print(f"firmware response: {fw_resp.hex()}")

    print("\n[1] light matrix (0x21, request 64 bytes)")
    rect = read_data(dev, 0x21, 64)
    print(f"    raw: {rect.hex()}")
    leds = []
    for i in range(0, len(rect) - 1, 2):
        val = rect[i] | (rect[i + 1] << 8)
        if val == 0 or val > 512:
            break
        leds.append(val)
    print(f"    LED indices ({len(leds)}): {leds[:32]}{'...' if len(leds) > 32 else ''}")

    print("\n[2] begin session (0x10)")
    send(dev, 0x10, b"\x00" * 5, addr=0, length=5)
    time.sleep(0.15)

    print("\n[3] read baseline custom light (0x19, 96 bytes = 32 LEDs x RGB)")
    baseline = read_data(dev, 0x19, 96)
    print(f"    baseline: {baseline.hex()}")

    verdicts = []
    for name, color in (("RED", (255, 0, 0)), ("GREEN", (0, 255, 0))):
        print(f"\n[4] write solid {name} via 0x1A, then read back")
        payload = bytes(color) * 32
        chunked_write(dev, 0x1A, payload)
        time.sleep(0.2)
        readback = read_data(dev, 0x19, 96)
        print(f"    readback: {readback.hex()[:80]}...")
        expected = bytes(color) * 32
        match = readback[:96] == expected
        print(f"    {'MATCH - layout proven' if match else 'MISMATCH - payload layout differs'}")
        verdicts.append((name, match))

    print("\n[5] sync (0x1D) and end")
    send(dev, 0x1D, b"\x00" * 5, addr=0, length=5)
    time.sleep(0.2)

    print("\n=== VERDICT ===")
    for name, ok in verdicts:
        print(f"  {name} write/readback: {'MATCH' if ok else 'MISMATCH'}")
    if all(ok for _, ok in verdicts):
        print("\nData layout proven - ambient engine can be built with confidence.")
    dev.close()


if __name__ == "__main__":
    main()
