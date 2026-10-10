"""dashboard_widget.py - Portrait second-screen game dashboard."""

import time
import tkinter as tk
from typing import Optional

import customtkinter as ctk

# ============================================
# Monitor enumeration + portrait game dashboard
# ============================================

def enumerate_monitors():
    """Return [{'left','top','width','height','primary'}, ...] via EnumDisplayMonitors."""
    import ctypes
    from ctypes import wintypes

    user32 = ctypes.windll.user32
    out = []

    class RECT(ctypes.Structure):
        _fields_ = [("left", ctypes.c_long), ("top", ctypes.c_long),
                    ("right", ctypes.c_long), ("bottom", ctypes.c_long)]

    class MONITORINFO(ctypes.Structure):
        _fields_ = [("cbSize", wintypes.DWORD), ("rcMonitor", RECT),
                    ("rcWork", RECT), ("dwFlags", wintypes.DWORD)]

    MONITORINFOF_PRIMARY = 1

    def _callback(hmon, hdc, lprc, _data):
        mi = MONITORINFO()
        mi.cbSize = ctypes.sizeof(MONITORINFO)
        if user32.GetMonitorInfoW(hmon, ctypes.byref(mi)):
            rc = mi.rcMonitor
            out.append({
                "left": rc.left, "top": rc.top,
                "width": rc.right - rc.left, "height": rc.bottom - rc.top,
                "primary": bool(mi.dwFlags & MONITORINFOF_PRIMARY),
            })
        return True

    CMP = ctypes.WINFUNCTYPE(ctypes.c_int, ctypes.c_ulong, ctypes.c_ulong,
                             ctypes.POINTER(RECT), ctypes.c_long)
    cb = CMP(_callback)
    user32.EnumDisplayMonitors(0, 0, cb, 0)
    return out


def pick_second_monitor():
    """Choose the best non-primary monitor; prefer portrait orientation."""
    mons = enumerate_monitors()
    secondary = [m for m in mons if not m["primary"]]
    if not secondary:
        return None
    portrait = [m for m in secondary if m["height"] > m["width"]]
    return (portrait or secondary)[0]


class GameDashboardWindow(ctk.CTkToplevel):
    """Fullscreen portrait dashboard for the second monitor while gaming.

    Auto-positions on the detected portrait/secondary monitor: huge live FPS
    readout + frame history, temps, clocks, fans, session timer. Auto-closes
    when the game process exits.
    """

    def __init__(self, master, game_name: str, exe_name: str, monitor: dict):
        super().__init__(master)

        self.game_name = game_name
        self.exe_name = exe_name.lower()
        self.session_start = time.time()
        self.fps_history = []
        self._gone_checks = 0
        self._closed = False

        w, h = monitor["width"], monitor["height"]
        self.overrideredirect(True)
        self.geometry(f"{w}x{h}+{monitor['left']}+{monitor['top']}")
        self.configure(fg_color="#07090f")
        self.bind("<Escape>", lambda e: self.close_dashboard())

        col = ctk.CTkScrollableFrame(self, fg_color="transparent")
        col.pack(fill="both", expand=True, padx=30, pady=30)

        # Header
        hdr = ctk.CTkFrame(col, fg_color="transparent")
        hdr.pack(fill="x", pady=(0, 14))
        ctk.CTkLabel(
            hdr, text=f"🎮 {game_name.upper()}",
            font=ctk.CTkFont(family="Segoe UI", size=42, weight="bold"),
            text_color="#00e5ff", anchor="w"
        ).pack(fill="x")
        self.session_lbl = ctk.CTkLabel(
            hdr, text="Session 00:00:00  |  ● RECORDING",
            font=ctk.CTkFont(family="Consolas", size=18),
            text_color="#10b981", anchor="w"
        )
        self.session_lbl.pack(fill="x")

        # FPS hero panel
        fps_card = ctk.CTkFrame(col, fg_color="#12141f", corner_radius=16,
                                border_width=1, border_color="#00e5ff")
        fps_card.pack(fill="x", pady=10, ipady=8)
        ctk.CTkLabel(fps_card, text="LIVE FPS",
                     font=ctk.CTkFont(size=16, weight="bold"),
                     text_color="#7c8aa0").pack(anchor="w", padx=30, pady=(10, 0))
        self.fps_big = ctk.CTkLabel(
            fps_card, text="--",
            font=ctk.CTkFont(family="Segoe UI", size=150, weight="bold"),
            text_color="#f1f5f9")
        self.fps_big.pack(anchor="w", padx=30)
        self.fps_graph = tk.Canvas(fps_card, height=320, bg="#0c0e18",
                                   highlightthickness=0, bd=0)
        self.fps_graph.pack(fill="x", padx=30, pady=(0, 16))

        # Temp cards
        row = ctk.CTkFrame(col, fg_color="transparent")
        row.pack(fill="x", pady=10)
        row.grid_columnconfigure((0, 1), weight=1)
        self.cpu_card = self._big_card(row, 0, "CPU")
        self.gpu_card = self._big_card(row, 1, "GPU", accent="#ff0055")

        # Fans + misc
        self.fans_lbl = ctk.CTkLabel(
            col, text="🌀 CPU -- RPM   |   GPU -- RPM",
            font=ctk.CTkFont(family="Consolas", size=24, weight="bold"),
            text_color="#f1f5f9", anchor="w")
        self.fans_lbl.pack(fill="x", pady=10)

        self.misc_lbl = ctk.CTkLabel(
            col, text="RAM -- %   |   NET --",
            font=ctk.CTkFont(family="Consolas", size=18),
            text_color="#94a3b8", anchor="w")
        self.misc_lbl.pack(fill="x", pady=(0, 10))

        # Close row
        close_row = ctk.CTkFrame(col, fg_color="transparent")
        close_row.pack(fill="x", pady=16)
        ctk.CTkLabel(close_row, text="Esc to close", font=("Consolas", 12),
                     text_color="#475569").pack(side="left", padx=10)
        ctk.CTkButton(close_row, text="✕ Close Dashboard", width=180, height=36,
                      corner_radius=6, fg_color="#ef4444", hover_color="#dc2626",
                      font=ctk.CTkFont(size=12, weight="bold"),
                      command=self.close_dashboard).pack(side="right", padx=10)

        self.after(1000, self._tick)

    def _big_card(self, parent, col, name, accent="#00e5ff"):
        card = ctk.CTkFrame(parent, fg_color="#12141f", corner_radius=16,
                            border_width=1, border_color="#1f2436")
        card.grid(row=0, column=col, sticky="nsew", padx=8, ipady=6)
        ctk.CTkLabel(card, text=f"{name} TEMPERATURE",
                     font=ctk.CTkFont(size=15, weight="bold"),
                     text_color="#7c8aa0").pack(anchor="w", padx=30, pady=(14, 0))
        temp_lbl = ctk.CTkLabel(card, text="-- °C",
                                font=ctk.CTkFont(family="Segoe UI", size=64, weight="bold"),
                                text_color="#f1f5f9")
        temp_lbl.pack(anchor="w", padx=30)
        load_lbl = ctk.CTkLabel(card, text="load -- %   |   clock -- MHz",
                                font=ctk.CTkFont(family="Consolas", size=18),
                                text_color="#94a3b8")
        load_lbl.pack(anchor="w", padx=30, pady=(0, 4))
        bar = ctk.CTkProgressBar(card, height=12, corner_radius=6)
        bar.pack(fill="x", padx=30, pady=(2, 18))
        bar.set(0)
        return {"temp": temp_lbl, "load": load_lbl, "bar": bar}

    def _tick(self):
        """Session timer + auto-close when the game process exits."""
        if self._closed:
            return
        mins, secs = divmod(int(time.time() - self.session_start), 60)
        hrs, mins = divmod(mins, 60)
        self.session_lbl.configure(
            text=f"Session {hrs:02d}:{mins:02d}:{secs:02d}  |  ● RECORDING")
        try:
            import psutil
            running = any((p.info.get("name") or "").lower() == self.exe_name
                          for p in psutil.process_iter(["name"]))
            if running:
                self._gone_checks = 0
            else:
                self._gone_checks += 1
                if self._gone_checks >= 20:
                    self.close_dashboard()
                    return
        except Exception:
            pass
        self.after(1000, self._tick)

    def update_state(self, state):
        """Called ~1/s from the app with fresh HardwareState."""
        if self._closed or not self.winfo_exists():
            return
        fps = state.fps
        self.fps_big.configure(text=f"{fps:.0f}" if fps else "--")
        self.fps_history.append(fps or 0)
        self._draw_fps_graph()

        for card, temp, load, clock, util in (
                (self.cpu_card, state.cpu_temp, state.cpu_usage, state.cpu_mhz, state.cpu_usage),
                (self.gpu_card, state.gpu_temp, state.gpu_util, state.gpu_clock_mhz, state.gpu_util)):
            t = temp if temp is not None else "--"
            card["temp"].configure(text=f"{t} °C")
            card["temp"].configure(
                text_color="#10b981" if (temp or 0) < 75 else
                           "#f59e0b" if (temp or 0) < 90 else "#ef4444")
            card["load"].configure(text=f"load {util:.0f} %   |   clock {clock:.0f} MHz")
            card["bar"].set(min(util / 100.0, 1.0))

        self.fans_lbl.configure(
            text=f"🌀 CPU {state.cpu_rpm or 0} RPM   |   GPU {state.gpu_rpm or 0} RPM")
        mode = "⚡ G-MODE" if state.gmode_active else state.current_mode.title()
        self.misc_lbl.configure(
            text=f"RAM {state.ram_pct:.0f} % ({state.ram_used_gb:.1f}/{state.ram_total_gb:.1f} GB)"
                 f"   |   NET ▲ {state.net_sent_kb:.0f} ▼ {state.net_recv_kb:.0f} KB/s"
                 f"   |   {mode}")

    def _draw_fps_graph(self):
        c = self.fps_graph
        c.delete("all")
        w = c.winfo_width() or 800
        h = int(c.winfo_height() or 320)
        hist = self.fps_history[-180:]
        if len(hist) < 2:
            return
        peak = max(max(hist), 165.0) * 1.1
        dx = w / (len(hist) - 1)
        pts = []
        for i, v in enumerate(hist):
            x = i * dx
            y = h - (min(v, peak) / peak) * (h - 10) - 5
            pts.extend([x, y])
        if len(pts) >= 4:
            poly = pts + [w, h, 0, h]
            c.create_polygon(poly, fill="#0e2a33", outline="")
            c.create_line(pts, fill="#00e5ff", width=3, smooth=True)
        c.create_text(w - 10, 14, text=f"peak {max(hist):.0f}", fill="#475569",
                      font=("Consolas", 11), anchor="e")

    def close_dashboard(self):
        if getattr(self, "_closed", False):
            return
        self._closed = True
        try:
            self.destroy()
        except Exception:
            pass
