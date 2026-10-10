"""dashboard_widget.py - Portrait second-screen game dashboard."""

COLOR_MUTED_DEFAULT = "#64748b"

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

        # CTk auto-scales every widget by the Windows DPI factor (150% here),
        # which would render our monitor-sized layout 1.5x too big. Pin THIS
        # window's scaling BEFORE any widget exists, so everything renders
        # 1:1 physical pixels instead of CTk's 1.5x DPI scaling.
        w, h = monitor["width"], monitor["height"]
        self._fit_scaling = max(0.4, min(1.0, min(w / 1440.0, h / 2160.0)))
        self._monitor_w, self._monitor_h = w, h
        try:
            ctk.ScalingTracker.window_dpi_scaling_dict[self] = self._fit_scaling
        except Exception:
            pass

        self.game_name = game_name
        self.exe_name = exe_name.lower()
        self.session_start = time.time()
        self.fps_history = []
        self._gone_checks = 0
        self._closed = False

        self.overrideredirect(True)
        self.geometry(f"{w}x{h}+{monitor['left']}+{monitor['top']}")
        self.configure(fg_color="#07090f")
        self.bind("<Escape>", lambda e: self.close_dashboard())

        col = ctk.CTkScrollableFrame(self, fg_color="transparent")
        col.pack(fill="both", expand=True, padx=14, pady=24)

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

        # delivery grade hero (headline metric)
        grade_row = ctk.CTkFrame(fps_card, fg_color="transparent")
        grade_row.pack(fill="x", padx=30, pady=(14, 0))
        self.grade_lbl = ctk.CTkLabel(
            grade_row, text="--",
            font=ctk.CTkFont(family="Segoe UI", size=44, weight="bold"),
            text_color="#475569")
        self.grade_lbl.pack(side="left")
        self.fps_stats_lbl = ctk.CTkLabel(
            grade_row, text="-- fps avg\n-- fps 1% low",
            font=ctk.CTkFont(family="Consolas", size=18),
            text_color="#94a3b8", justify="left", anchor="w")
        self.fps_stats_lbl.pack(side="right")

        # frame variance animated sliding bar (30 fps, coords-move only)
        ctk.CTkLabel(fps_card, text="FRAME-TIME VARIANCE",
                     font=ctk.CTkFont(size=12, weight="bold"),
                     text_color="#7c8aa0").pack(anchor="w", padx=30, pady=(14, 0))
        self.cv_canvas = tk.Canvas(fps_card, height=26, bg="#0c0e18",
                                   highlightthickness=0, bd=0)
        self.cv_canvas.pack(fill="x", padx=30, pady=(0, 4))
        self._cv_disp = 0.0     # animated (displayed) value
        self._cv_target = 0.0   # target value (set once per second)
        self._cv_rect = None
        self.after(33, self._animate_cv)

        self.fps_detail_lbl = ctk.CTkLabel(
            fps_card, text="spikes --/min",
            font=ctk.CTkFont(family="Consolas", size=14),
            text_color="#94a3b8", anchor="w")
        self.fps_detail_lbl.pack(anchor="w", padx=30, pady=(2, 0))

        # attribution + limiter lines
        self.attr_lbl = ctk.CTkLabel(
            fps_card, text="",
            font=ctk.CTkFont(size=13, weight="bold"), text_color="#f59e0b",
            anchor="w")
        self.attr_lbl.pack(anchor="w", padx=30, pady=(6, 0))
        self.limiter_lbl = ctk.CTkLabel(
            fps_card, text="",
            font=ctk.CTkFont(family="Consolas", size=13),
            text_color="#7c8aa0", anchor="w")
        self.limiter_lbl.pack(anchor="w", padx=30, pady=(0, 8))

        self.fps_big = ctk.CTkLabel(
            fps_card, text="--",
            font=ctk.CTkFont(family="Segoe UI", size=110, weight="bold"),
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

        # widgets were created at the pinned scaling - just re-assert the
        # dict entry in case CTk re-registered the window during creation
        try:
            ctk.ScalingTracker.window_dpi_scaling_dict[self.winfo_toplevel()] = self._fit_scaling
        except Exception:
            pass

        self.after(1000, self._tick)

    def _big_card(self, parent, col, name, accent="#00e5ff"):
        card = ctk.CTkFrame(parent, fg_color="#12141f", corner_radius=16,
                            border_width=1, border_color="#1f2436")
        card.grid(row=0, column=col, sticky="nsew", padx=4, ipady=6)
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

    def _animate_cv(self):
        """30 fps sliding-bar animation: move existing canvas items only.
        Runs on the second monitor's (otherwise idle) UI thread; skipped
        entirely when the dashboard is hidden."""
        if self._closed:
            return
        if self.winfo_viewable():
            self._cv_disp += (self._cv_target - self._cv_disp) * 0.18
            if abs(self._cv_target - self._cv_disp) < 0.15:
                self._cv_disp = self._cv_target
            c = self.cv_canvas
            w = c.winfo_width() or 600
            h = 26
            bar_w = min(self._cv_disp / 40.0, 1.0) * w
            cv = self._cv_disp
            color = "#10b981" if cv < 6 else "#00e5ff" if cv < 12 \
                else "#f59e0b" if cv < 22 else "#ef4444"
            if self._cv_rect is None:
                self._cv_rect = c.create_rectangle(0, 3, bar_w, h - 3,
                                                   fill=color, width=0)
            else:
                c.coords(self._cv_rect, 0, 3, bar_w, h - 3)
                c.itemconfigure(self._cv_rect, fill=color)
        self.after(33, self._animate_cv)

    def update_state(self, state):
        """Called ~1/s from the app with fresh HardwareState."""
        if self._closed or not self.winfo_exists():
            return
        fps = state.fps
        self.fps_big.configure(text=f"{fps:.0f}" if fps else "--")
        self.fps_history.append(fps or 0)
        self._draw_fps_graph()

        # delivery grade + stability metrics
        grade = state.grade or "--"
        gcolor = {"SILK": "#10b981", "SMOOTH": "#00e5ff", "BUMPY": "#f59e0b",
                  "STRUGGLING": "#ef4444"}.get(grade, "#475569")
        self.grade_lbl.configure(text=grade, text_color=gcolor)
        self.fps_stats_lbl.configure(
            text=f"{state.fps:.0f} fps avg\n{state.fps_1pct:.0f} fps 1% low")
        self._cv_target = min(state.cv_pct, 40.0)
        self.fps_detail_lbl.configure(
            text=f"spikes {state.spikes_min:.0f}/min   |   "
                 f"variance {state.cv_pct:.0f}%   |   "
                 f"1% low {100 * state.fps_1pct / max(state.fps, 1):.0f}% of avg")
        if state.attribution:
            self.attr_lbl.configure(text=f"⚠ {state.attribution}",
                                    text_color="#f59e0b")
        elif grade in ("SILK", "SMOOTH"):
            self.attr_lbl.configure(text="✓ frame delivery is clean",
                                    text_color="#10b981")
        else:
            self.attr_lbl.configure(text="", text_color=COLOR_MUTED_DEFAULT)
        self.limiter_lbl.configure(
            text=f"limiter: {state.limiter or 'measuring...'}")

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

    def capture_to_file(self, path):
        """PrintWindow self-capture - works even while occluded by other windows."""
        import ctypes
        user32 = ctypes.windll.user32
        gdi32 = ctypes.windll.gdi32

        class BMIH(ctypes.Structure):
            _fields_ = [("biSize", ctypes.c_uint32), ("biWidth", ctypes.c_int32),
                        ("biHeight", ctypes.c_int32), ("biPlanes", ctypes.c_uint16),
                        ("biBitCount", ctypes.c_uint16), ("biCompression", ctypes.c_uint32),
                        ("biSizeImage", ctypes.c_uint32), ("xr", ctypes.c_int32),
                        ("yr", ctypes.c_int32), ("c1", ctypes.c_uint32),
                        ("c2", ctypes.c_uint32)]

        w = self._monitor_w
        h = self._monitor_h
        hwnd = user32.GetAncestor(self.winfo_id(), 2)  # GA_ROOT
        hdc = user32.GetWindowDC(hwnd)
        mem = gdi32.CreateCompatibleDC(hdc)
        bmp = gdi32.CreateCompatibleBitmap(hdc, w, h)
        gdi32.SelectObject(mem, bmp)
        ok = user32.PrintWindow(hwnd, mem, 2)  # PW_RENDERFULLCONTENT
        bmi = BMIH(ctypes.sizeof(BMIH), w, -h, 1, 32, 0, 0, 0, 0, 0, 0)
        buf = ctypes.create_string_buffer(w * h * 4)
        gdi32.GetDIBits(mem, bmp, 0, h, buf, ctypes.byref(bmi), 0)
        from PIL import Image
        img = Image.frombuffer("RGBA", (w, h), buf.raw, "raw", "BGRA", 0, 1).convert("RGB")
        img.save(path)
        gdi32.DeleteObject(bmp)
        gdi32.DeleteDC(mem)
        user32.ReleaseDC(hwnd, hdc)
        return ok

    def close_dashboard(self):
        if getattr(self, "_closed", False):
            return
        self._closed = True
        try:
            self.destroy()
        except Exception:
            pass
