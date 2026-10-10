"""game_art.py - Sleek game thumbnails for the Game Hub.

1. extract_icon(): pulls the official icon embedded in a game's .exe
   (pywin32 + native Windows API, zero downloads) and caches it as PNG.
2. make_placeholder(): generates a stylish dark-gradient tile with the
   game's initial for exes without usable icons.

Icons are cached in assets\\game_icons\\ keyed by exe path + mtime, so
extraction happens once per game.
"""

import hashlib
import os

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
ICON_DIR = os.path.join(SCRIPT_DIR, "assets", "game_icons")

ACCENT = (0, 229, 255)
CRIMSON = (255, 0, 85)


def _cache_key(exe_path: str) -> str:
    try:
        mtime = os.path.getmtime(exe_path)
    except OSError:
        mtime = 0
    key = f"{exe_path}|{mtime}"
    return hashlib.md5(key.encode()).hexdigest()[:16]


def extract_icon(exe_path: str, size: int = 96) -> str:
    """Extract the exe's embedded icon to a cached PNG. Returns path or ''."""
    os.makedirs(ICON_DIR, exist_ok=True)
    out = os.path.join(ICON_DIR, f"{_cache_key(exe_path)}.png")
    if os.path.exists(out):
        return out
    try:
        import win32gui
        import win32ui
        from PIL import Image

        large, small = win32gui.ExtractIconEx(exe_path, 0, 1)
        hicon = large[0] if large else (small[0] if small else None)
        if not hicon:
            return ""
        try:
            screen_dc = win32gui.GetDC(0)
            sdc = win32ui.CreateDCFromHandle(screen_dc)
            bmp = win32ui.CreateBitmap()
            # must be compatible with the SCREEN dc - a fresh memory DC has
            # a 1x1 monochrome bitmap selected and yields a 1-bit result
            bmp.CreateCompatibleBitmap(sdc, size, size)
            hdc = sdc.CreateCompatibleDC()
            hdc.SelectObject(bmp)
            # DI_NORMAL = 3
            win32gui.DrawIconEx(hdc.GetHandleOutput(), 0, 0, hicon, size, size, 0, None, 3)
            info = bmp.GetInfo()
            data = bmp.GetBitmapBits(True)
            stride = info["bmWidthBytes"]
            img = Image.frombuffer("RGBA", (info["bmWidth"], info["bmHeight"]),
                                   data, "raw", "BGRA", stride, 1)
            img = img.convert("RGBA")
            img.save(out)
            win32gui.ReleaseDC(0, screen_dc)
            return out
        finally:
            try:
                if large:
                    win32gui.DestroyIcon(large[0])
                if small:
                    win32gui.DestroyIcon(small[0])
            except Exception:
                pass
    except Exception:
        return ""


def make_placeholder(name: str, size: int = 96, accent=None) -> str:
    """Generate a sleek dark-gradient tile with the game's initial."""
    os.makedirs(ICON_DIR, exist_ok=True)
    key = hashlib.md5(name.encode()).hexdigest()[:16]
    out = os.path.join(ICON_DIR, f"ph_{key}.png")
    if os.path.exists(out):
        return out

    from PIL import Image, ImageDraw, ImageFont

    if accent is None:
        # pick an accent from the name hash so each game gets its own hue
        h = int(hashlib.md5(name.encode()).hexdigest(), 16)
        accent = ((h >> 8) % 200 + 40, (h >> 16) % 200 + 40, (h >> 24) % 200 + 40)

    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    # vertical dark gradient
    top, bottom = (26, 29, 46), (12, 14, 24)
    for y in range(size):
        f = y / size
        d.line([(0, y), (size, y)],
               fill=(int(top[0] + (bottom[0] - top[0]) * f),
                     int(top[1] + (bottom[1] - top[1]) * f),
                     int(top[2] + (bottom[2] - top[2]) * f), 255))
    # accent glow frame
    d.rectangle([0, 0, size - 1, size - 1], outline=accent + (255,), width=2)
    d.line([(0, size - 6), (size, size - 6)], fill=accent + (160,), width=2)

    initial = (name.strip()[:1] or "?").upper()
    try:
        font = ImageFont.truetype("segoeuib.ttf", int(size * 0.52))
    except Exception:
        font = ImageFont.load_default()
    bbox = d.textbbox((0, 0), initial, font=font)
    w, h = bbox[2] - bbox[0], bbox[3] - bbox[1]
    d.text(((size - w) / 2 - bbox[0], (size - h) / 2 - bbox[1]),
           initial, font=font, fill=accent + (255,))
    img.save(out)
    return out


def get_thumbnail(exe_path: str, name: str, accent=None) -> str:
    """Best-effort thumbnail: real exe icon, else generated placeholder."""
    path = extract_icon(exe_path) if exe_path and os.path.exists(exe_path) else ""
    return path or make_placeholder(name, accent=accent)
