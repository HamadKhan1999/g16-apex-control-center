"""mad60probe.py - Phase 1 probe for the MADLIONS MAD60 v2 keyboard.

Speaks the recovered web-driver protocol directly over HID:
  packet = [cmdId, addrLow, addrHigh, len, CRC16lo, CRC16hi, result, payload...]
  CRC16  = 16-bit sum of all packet bytes (calcByteLH)
  output report 6; frames carry up to 56 payload bytes (63 - 7 header)

Commands (from the official driver's protocol table):
  0x10 begin session   0x11 end session
  0x1A set custom light data    0x1D sync light setting
  0xB0 get firmware version (safe read - verifies the channel)

Run as Administrator:  python mad60probe.py
"""

import sys
import time

import hid

VID, PID = 0x28E9, 0x3256
REPORT_ID = 6


def crc16(packet):
    return sum(packet) & 0xFFFF


def build_packet(cmd_id, data=b"", addr=0, length=None):
    addr_low, addr_high = addr & 0xFF, (addr >> 8) & 0xFF
    length = len(data) if length is None else length
    packet = [
        cmd_id & 0xFF,
        addr_low, addr_high,
        length & 0xFF,
        0, 0,
        0,
        *data,
    ]
    crc = crc16(packet)
    packet[4] = crc & 0xFF
    packet[5] = (crc >> 8) & 0xFF
    return packet


def find_interfaces():
    return hid.enumerate(VID, PID)


def send(dev, cmd_id, data=b"", addr=0, length=None):
    packet = build_packet(cmd_id, data, addr, length)
    buf = bytes([REPORT_ID]) + bytes(packet)
    return dev.write(buf)


def read_response(dev, timeout_ms=300):
    try:
        return bytes(dev.read(64, timeout_ms))
    except TypeError:
        time.sleep(timeout_ms / 1000.0 + 0.02)
        return bytes(dev.read(64))


def chunked_send(dev, cmd_id, payload, chunk=56, wait=0.02, expect_ack=True):
    offset = 0
    total = len(payload)
    while offset < total:
        size = min(chunk, total - offset)
        packet = build_packet(cmd_id, payload[offset:offset + size], offset, size)
        dev.write(bytes([REPORT_ID]) + bytes(packet))
        if expect_ack:
            # the device ACKs asynchronously (input reports can lag one write),
            # so drain non-blocking and only flag a cycle with nothing at all
            try:
                resp = bytes(dev.read(64, timeout_ms=120))
            except TypeError:
                time.sleep(0.14)
                resp = bytes(dev.read(64))
            if resp:
                print(f"  ack: {resp[:6].hex()}")
        offset += size
        time.sleep(wait)


def main():
    print(f"Looking for MAD60 (VID {VID:#06x} PID {PID:#06x})...")
    interfaces = find_interfaces()
    if not interfaces:
        sys.exit("keyboard not found - is it plugged in via USB?")
    for d in interfaces:
        print(f"  if{d['interface_number']}: usage_page {d['usage_page']:#06x} "
              f"usage {d['usage']:#06x}")

    candidates = [d for d in interfaces if d["usage_page"] >= 0xFF00] or interfaces

    responding = None
    print("\n[1] firmware version read (0xB0) across candidate collections")
    for cand in candidates:
        try:
            dev = hid.device()
            dev.open_path(cand["path"])
        except Exception as ex:
            print(f"  if{cand['interface_number']} {cand['usage_page']:#06x}: open failed {ex}")
            continue
        label = f"if{cand['interface_number']} up{cand['usage_page']:#06x}"
        try:
            send(dev, 0xB0, b"\x00\x00\x00\x00\x00", addr=0, length=5)
            resp = read_response(dev, 400)
            if resp:
                print(f"  {label}: RESPONDED {resp[:16].hex()}")
                responding = (dev, label)
                break
            print(f"  {label}: no response")
            dev.close()
        except Exception as ex:
            print(f"  {label}: {ex}")
            try:
                dev.close()
            except Exception:
                pass

    if not responding:
        sys.exit("no collection responded to 0xB0")

    dev, label = responding
    print(f"\ncontrol channel: {label}")

    print("\n[2] begin session (0x10)")
    send(dev, 0x10, b"\x00\x00\x00\x00\x00", addr=0, length=5)
    time.sleep(0.15)

    print("\n[3] custom light (0x1A) - solid RED across the matrix")
    chunked_send(dev, 0x1A, bytes([255, 0, 0] * 32))

    print("\n[4] sync light (0x1D)")
    send(dev, 0x1D, b"\x00\x00\x00\x00\x00", addr=0, length=5)
    time.sleep(0.3)

    print("\n[5] alternates - watch the keyboard")
    for color in ((0, 255, 0), (0, 0, 255), (255, 255, 255)):
        chunked_send(dev, 0x1A, bytes(color) * 32)
        send(dev, 0x1D, b"\x00\x00\x00\x00\x00", addr=0, length=5)
        time.sleep(0.8)

    print("\nDone. If the keyboard changed color, the protocol is proven.")
    dev.close()


if __name__ == "__main__":
    main()
