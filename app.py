r"""app.py - G16 Control Center
Modern, lightweight, dark-themed native desktop Control Center for the Dell G16 7630.
Features:
- Live CPU/GPU temps, usage %, RAM %, and network speed
- 1-click thermal modes & Game Shift (G-Mode)
- Fan curves & manual boost
- Interactive rendered visual keyboard layout with per-key color selection
- Always-On keyboard backlight keepalive
- Game Launcher & Hub (auto-detects D:\Games + Valorant)
- Valorant Turbo Optimizer: G-Mode + kills bandwidth hogs (Chrome, Edge, VLC, Wallpaper Engine) + launches Discord
"""

import ctypes
import os
import sys
import threading
import time
import tkinter as tk
from tkinter import colorchooser
from typing import Dict, List, Optional, Tuple

import customtkinter as ctk
from PIL import Image

from backend import G16Backend, HardwareState
import optimizer
import valcareer
import game_art
import dashboard_widget
import ui_widgets

# Configure CustomTkinter Theme
ctk.set_appearance_mode("dark")
ctk.set_default_color_theme("blue")

# Theme Palette (Deep Obsidian Cyber/Alienware Dark)
COLOR_BG = "#08090f"          # Near-black midnight
COLOR_SIDEBAR = "#0b0d15"     # Deep charcoal sidebar
COLOR_CARD = "#12141f"        # Card background
COLOR_CARD_HOVER = "#1a1d2e"  # Card hover state
COLOR_CARD_BORDER = "#1f2436" # Subtle card border
COLOR_ACCENT = "#00e5ff"      # Cyber Cyan
COLOR_ACCENT_HOVER = "#00b4d8"
COLOR_GMODE = "#ff0055"       # Neon Crimson for G-Mode
COLOR_TEXT_MAIN = "#e2e8f0"
COLOR_TEXT_MUTED = "#7c8aa0"
COLOR_GREEN = "#10b981"
COLOR_YELLOW = "#f59e0b"
COLOR_RED = "#ef4444"

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))

# Physical layout of Dell G16 keyboard: (Key Label, Light ID Name, Width Factor)
KEYBOARD_ROWS = [
    # Row 0: Function & Media row
    [
        ("ESC", "ESC", 1.0), ("F1", "F1", 1.0), ("F2", "F2", 1.0), ("F3", "F3", 1.0),
        ("F4", "F4", 1.0), ("F5", "F5", 1.0), ("F6", "F6", 1.0), ("F7", "F7", 1.0),
        ("F8", "F8", 1.0), ("F9", "F9", 1.0), ("F10", "F10", 1.0), ("F11", "F11", 1.0),
        ("F12", "F12", 1.0), ("HOME", "HOME", 1.0), ("END", "END", 1.0), ("DEL", "DELETE", 1.0),
        ("🔇", "MUTE", 1.0), ("🎙️", "MIC", 1.0)
    ],
    # Row 1: Number row
    [
        ("`", "GRAVE", 1.0), ("1", "1", 1.0), ("2", "2", 1.0), ("3", "3", 1.0),
        ("4", "4", 1.0), ("5", "5", 1.0), ("6", "6", 1.0), ("7", "7", 1.0),
        ("8", "8", 1.0), ("9", "9", 1.0), ("0", "0", 1.0), ("-", "-", 1.0),
        ("=", "=", 1.0), ("BACKSPACE", "BACKSPACE", 2.0), ("VOL+", "VOL UP", 1.0)
    ],
    # Row 2: QWERTY row
    [
        ("TAB", "TAB", 1.5), ("Q", "Q", 1.0), ("W", "W", 1.0), ("E", "E", 1.0),
        ("R", "R", 1.0), ("T", "T", 1.0), ("Y", "Y", 1.0), ("U", "U", 1.0),
        ("I", "I", 1.0), ("O", "O", 1.0), ("P", "P", 1.0), ("[", "[", 1.0),
        ("]", "]", 1.0), ("\\", "\\", 1.5), ("VOL-", "VOL DOWN", 1.0)
    ],
    # Row 3: Home row
    [
        ("CAPS", "CAPSLOCK", 1.8), ("A", "A", 1.0), ("S", "S", 1.0), ("D", "D", 1.0),
        ("F", "F", 1.0), ("G", "G", 1.0), ("H", "H", 1.0), ("J", "J", 1.0),
        ("K", "K", 1.0), ("L", "L", 1.0), (";", ";", 1.0), ("'", "ACUTE/CEDILLA", 1.0),
        ("ENTER", "ENTER", 2.2)
    ],
    # Row 4: Shift row
    [
        ("SHIFT", "SHIFT", 2.3), ("Z", "Z", 1.0), ("X", "X", 1.0), ("C", "C", 1.0),
        ("V", "V", 1.0), ("B", "B", 1.0), ("N", "N", 1.0), ("M", "M", 1.0),
        (",", ",", 1.0), (".", ".", 1.0), ("/", "/", 1.0), ("SHIFT", "RIGHT SHIFT", 2.2),
        ("▲", "UP", 1.0)
    ],
    # Row 5: Bottom row
    [
        ("CTRL", "CTRL", 1.5), ("Fn", "FN", 1.0), ("WIN", "LEFT WINDOWS", 1.2),
        ("ALT", "ALT", 1.2), ("SPACE", "SPACE", 5.0), ("ALT", "RIGHT ALT", 1.2),
        ("LOCK", "WINLOCK", 1.0), ("CTRL", "RIGHT CTRL", 1.5),
        ("◀", "LEFT", 1.0), ("▼", "DOWN", 1.0), ("▶", "RIGHT", 1.0)
    ]
]


def acquire_single_instance_lock() -> bool:
    """Return False if another Control Center instance is already running."""
    try:
        # GetLastError through windll does NOT report the real error - use
        # WinDLL with use_last_error=True and ctypes.get_last_error().
        k32 = ctypes.WinDLL("kernel32", use_last_error=True)
        global _mutex_handle
        _mutex_handle = k32.CreateMutexW(None, False, "G16ControlCenter_SingleInstance")
        # ERROR_ALREADY_EXISTS = 183
        return not (_mutex_handle and ctypes.get_last_error() == 183)
    except Exception:
        return True  # fail open: allow launch if the check itself breaks


class G16App(ctk.CTk):
    def __init__(self):
        # Set AppUserModelID so Windows taskbar groups and shows custom logo
        try:
            ctypes.windll.shell32.SetCurrentProcessExplicitAppUserModelID("dell.alienware.g16.controlcenter")
        except Exception:
            pass

        super().__init__()

        self.title("G16 CONTROL CENTER — Dell G16 7630")
        self.geometry("1100x740")
        self.minsize(960, 660)
        self.configure(fg_color=COLOR_BG)

        # Set Window & Taskbar Icons
        self.ico_path = os.path.join(SCRIPT_DIR, "assets", "logo.ico")
        self.png_path = os.path.join(SCRIPT_DIR, "assets", "logo.png")
        if os.path.exists(self.ico_path):
            try:
                self.iconbitmap(self.ico_path)
            except Exception:
                pass

        # Mini HUD Window Instance (created hidden)
        self.mini_hud: Optional[ui_widgets.MiniHUDWindow] = None
        self.game_dashboard: Optional[dashboard_widget.GameDashboardWindow] = None

        # Real DWM acrylic glass backdrop + dark titlebar; falls back to
        # gradient textures if the composition call is unavailable.
        self._acrylic_ok = False
        self.after(60, self._apply_acrylic)
        self._apply_dark_titlebar()

        # Backend Engine
        self.backend = G16Backend(on_state_update=self.on_hardware_update)
        self.current_tab = "dashboard"
        self.selected_color = (0, 229, 255)  # Current RGB color to apply
        self.key_widget_map = {}             # Maps Key ID name to CTkButton

        # UI Layout Grid
        self.grid_rowconfigure(0, weight=1)
        self.grid_columnconfigure(1, weight=1)

        # 1. Sidebar Navigation
        self.create_sidebar()

        # 2. Main Content Container
        self.content_frame = ctk.CTkFrame(self, fg_color=COLOR_BG, corner_radius=0)
        self.content_frame.grid(row=0, column=1, sticky="nsew", padx=20, pady=20)
        self.content_frame.grid_rowconfigure(0, weight=1)
        self.content_frame.grid_columnconfigure(0, weight=1)

        # Views
        self.frames = {}
        self.create_dashboard_view()
        self.create_fans_view()
        self.create_lighting_view()
        self.create_games_view()
        self.create_valorant_view()
        self.create_settings_view()

        # Start on Dashboard
        self.switch_tab("dashboard")

        # Tab hotkeys: Ctrl+Alt+1..6 (also used by the screenshot automation)
        hotkeys = {"1": "dashboard", "2": "fans", "3": "lighting",
                   "4": "games", "5": "valorant", "6": "settings"}
        for key, tab in hotkeys.items():
            self.bind(f"<Control-Alt-KeyPress-{key}>",
                      lambda e, t=tab: self.switch_tab(t))

        # Remote shot requests: write a tab name to .shot_request and the app
        # switches to it (used by headless screenshot automation)
        self.after(400, self._check_shot_request)

    def _check_shot_request(self):
        try:
            p = os.path.join(SCRIPT_DIR, ".shot_request")
            if os.path.exists(p):
                req = open(p, "r", encoding="utf-8").read().strip()
                os.remove(p)
                if req == "open_dash":
                    self.open_game_dashboard("TEST MODE", "explorer.exe")
                elif req == "raise_dash":
                    if self.game_dashboard:
                        self.game_dashboard.attributes("-topmost", True)
                        self.game_dashboard.lift()
                        self.game_dashboard.focus_force()
                        self.after(1200, lambda: self.game_dashboard.attributes(
                            "-topmost", False))
                elif req == "capture_dash":
                    if self.game_dashboard:
                        try:
                            self.game_dashboard.capture_to_file(
                                os.path.join(SCRIPT_DIR, "docs", "screenshots",
                                             "07_second_screen.png"))
                        except Exception:
                            pass
                elif req == "close_dash":
                    if self.game_dashboard:
                        self.game_dashboard.close_dashboard()
                        self.game_dashboard = None
                elif req == "raise":
                    # bring window to front (headless automation helper)
                    self.attributes("-topmost", True)
                    self.lift()
                    self.focus_force()
                    self.after(1200, lambda: self.attributes("-topmost", False))
                elif req in self.frames:
                    self.switch_tab(req)
        except Exception:
            pass
        self.after(400, self._check_shot_request)

        # Start background hardware thread
        self.backend.start()

        # Window closing handler
        self.protocol("WM_DELETE_WINDOW", self.on_close)

    # ==========================================
    # Visual shell: dark titlebar + gradient textures
    # ==========================================
    def _apply_dark_titlebar(self):
        """Dark Windows titlebar (DWM immersive dark mode)."""
        def apply():
            try:
                hwnd = ctypes.windll.user32.GetParent(self.winfo_id())
                if hwnd:
                    val = ctypes.c_int(1)
                    ctypes.windll.dwmapi.DwmSetWindowAttribute(
                        hwnd, 20, ctypes.byref(val), 4)  # DWMWA_USE_IMMERSIVE_DARK_MODE
            except Exception:
                pass
        self.after(60, apply)
        self.after(400, apply)  # re-apply after CTk's own styling pass

    def _apply_background_textures(self):
        """Place gradient/nebula textures behind all content."""
        try:
            main = Image.open(os.path.join(SCRIPT_DIR, "assets", "bg_main.png"))
            side = Image.open(os.path.join(SCRIPT_DIR, "assets", "bg_side.png"))
            self._bg_main = ctk.CTkImage(light_image=main, dark_image=main, size=(1600, 1000))
            self._bg_side = ctk.CTkImage(light_image=side, dark_image=side, size=(400, 1200))

            bg = ctk.CTkLabel(self, image=self._bg_main, text="")
            bg.place(x=0, y=0, relwidth=1, relheight=1)
            bg.lower()

            # sidebar gradient is drawn inside create_sidebar via _side_bg
        except Exception:
            pass

    # ==========================================
    # Visual shell: DWM acrylic glass + dark titlebar
    # ==========================================
    ACRYLIC_KEY = "#010203"  # magic color key - nothing else may use it

    def _apply_acrylic(self):
        """Turn the window background into real frosted-glass acrylic:
        DWM ACCENT_ENABLE_ACRYLICBLURBEHIND + Tk transparent color key.
        Falls back silently to the gradient textures if unsupported."""
        try:
            hwnd = ctypes.windll.user32.GetParent(self.winfo_id())
            if not hwnd:
                raise RuntimeError("no hwnd")

            class ACCENT_POLICY(ctypes.Structure):
                _fields_ = [("AccentState", ctypes.c_uint),
                            ("AccentFlags", ctypes.c_uint),
                            ("GradientColor", ctypes.c_uint),
                            ("AnimationId", ctypes.c_uint)]

            class WCA_DATA(ctypes.Structure):
                _fields_ = [("Attrib", ctypes.c_uint),
                            ("pvData", ctypes.POINTER(ACCENT_POLICY)),
                            ("cbData", ctypes.c_size_t)]

            # AccentState 4 = ACCENT_ENABLE_ACRYLICBLURBEHIND
            # GradientColor is 0xAABBGGRR: smoked dark glass at ~80% strength
            ap = ACCENT_POLICY(AccentState=4, AccentFlags=2,
                               GradientColor=0x5533251E, AnimationId=0)
            wca = WCA_DATA(Attrib=19, pvData=ctypes.pointer(ap),
                           cbData=ctypes.sizeof(ap))
            if not ctypes.windll.user32.SetWindowCompositionAttribute(
                    hwnd, ctypes.byref(wca)):
                raise RuntimeError("SetWindowCompositionAttribute failed")

            # the color key lets the acrylic backdrop show through everywhere
            # the app paints its background
            key = self.ACRYLIC_KEY
            self.attributes("-transparentcolor", key)
            self.configure(fg_color=key)
            self.content_frame.configure(fg_color=key)
            self.sidebar.configure(fg_color=key)

            self._acrylic_ok = True
            print('[acrylic] backdrop applied')
        except Exception as ex:
            print('[acrylic] FAILED:', ex)
            self._acrylic_ok = False
            self._apply_background_textures()

    # ==========================================
    # Sidebar
    # ==========================================
    def create_sidebar(self):
        self.sidebar = ctk.CTkFrame(self, fg_color="transparent", width=220, corner_radius=0)
        self.sidebar.grid(row=0, column=0, sticky="nsew")
        self.sidebar.grid_propagate(False)
        self.sidebar.grid_rowconfigure(6, weight=1)

        # sidebar gradient texture behind its widgets
        if not getattr(self, "_acrylic_ok", False) and hasattr(self, "_bg_side"):
            side_lbl = ctk.CTkLabel(self.sidebar, image=self._bg_side, text="")
            side_lbl.place(x=0, y=0, relwidth=1, relheight=1)
            side_lbl.lower()

        # subtle accent edge on the sidebar/content boundary
        edge = ctk.CTkFrame(self.sidebar, fg_color=COLOR_ACCENT, width=1, corner_radius=0)
        edge.place(relx=1.0, rely=0, relheight=1, x=-1)

        # App Logo & Title with Cyberpunk Graphic Badge
        title_frame = ctk.CTkFrame(self.sidebar, fg_color="transparent")
        title_frame.pack(fill="x", padx=16, pady=(20, 16))

        # Load graphic logo image if available
        if os.path.exists(self.png_path):
            try:
                pil_img = Image.open(self.png_path)
                logo_ctk = ctk.CTkImage(light_image=pil_img, dark_image=pil_img, size=(52, 52))
                img_lbl = ctk.CTkLabel(title_frame, image=logo_ctk, text="")
                img_lbl.pack(side="left", padx=(0, 10))
            except Exception:
                pass

        header_text_frame = ctk.CTkFrame(title_frame, fg_color="transparent")
        header_text_frame.pack(side="left")

        logo_label = ctk.CTkLabel(
            header_text_frame, text="G16 APEX",
            font=ctk.CTkFont(family="Segoe UI", size=20, weight="bold"),
            text_color=COLOR_ACCENT
        )
        logo_label.pack(anchor="w")

        sub_label = ctk.CTkLabel(
            header_text_frame, text="COMMAND CENTER",
            font=ctk.CTkFont(family="Segoe UI", size=9, weight="bold"),
            text_color=COLOR_TEXT_MUTED
        )
        sub_label.pack(anchor="w")

        # Navigation Buttons
        self.nav_buttons = {}
        items = [
            ("dashboard", "⚡  Dashboard"),
            ("fans", "🌀  Fan Curves"),
            ("lighting", "🌈  Keyboard RGB"),
            ("games", "🎮  Game Hub"),
            ("valorant", "🎯  Valorant"),
            ("settings", "⚙️  Settings")
        ]
        for key, label in items:
            btn = ctk.CTkButton(
                self.sidebar,
                text=label,
                anchor="w",
                height=42,
                corner_radius=8,
                font=ctk.CTkFont(size=14, weight="bold"),
                fg_color="transparent",
                text_color=COLOR_TEXT_MAIN,
                hover_color=COLOR_CARD,
                command=lambda k=key: self.switch_tab(k)
            )
            btn.pack(fill="x", padx=12, pady=4)
            self.nav_buttons[key] = btn

        # Bottom Hardware Badge
        self.status_badge = ctk.CTkLabel(
            self.sidebar,
            text="● SYSTEM MONITOR ACTIVE",
            font=ctk.CTkFont(size=10, weight="bold"),
            text_color=COLOR_GREEN
        )
        self.status_badge.pack(side="bottom", anchor="w", padx=20, pady=20)

    def switch_tab(self, tab_name: str):
        self.current_tab = tab_name
        for k, btn in self.nav_buttons.items():
            if k == tab_name:
                btn.configure(fg_color=COLOR_CARD, text_color=COLOR_ACCENT)
            else:
                btn.configure(fg_color="transparent", text_color=COLOR_TEXT_MAIN)

        for k, frame in self.frames.items():
            if k == tab_name:
                frame.grid(row=0, column=0, sticky="nsew")
            else:
                frame.grid_forget()

    # ==========================================
    # View: Dashboard (Temps + System Usage Stats)
    # ==========================================
    def create_dashboard_view(self):
        f = ctk.CTkScrollableFrame(self.content_frame, fg_color="transparent")
        self.frames["dashboard"] = f

        # Row 1: Telemetry Cards & Quick In-Game Mini HUD Toggle
        top_telemetry_header = ctk.CTkFrame(f, fg_color="transparent")
        top_telemetry_header.pack(fill="x", pady=(0, 8))

        dash_title = ctk.CTkLabel(
            top_telemetry_header, text="⚡ SYSTEM TELEMETRY & HARDWARE VITALS",
            font=ctk.CTkFont(size=13, weight="bold"),
            text_color=COLOR_TEXT_MUTED
        )
        dash_title.pack(side="left")

        self.mini_hud_btn = ctk.CTkButton(
            top_telemetry_header,
            text="📌 In-Game Mini HUD Overlay",
            width=190,
            height=28,
            corner_radius=6,
            font=ctk.CTkFont(size=11, weight="bold"),
            fg_color="#3b82f6",
            hover_color="#2563eb",
            command=self.toggle_mini_hud
        )
        self.mini_hud_btn.pack(side="right")

        telemetry_frame = ctk.CTkFrame(f, fg_color="transparent")
        telemetry_frame.pack(fill="x", pady=(0, 14))
        telemetry_frame.grid_columnconfigure((0, 1, 2, 3), weight=1)

        # 1. CPU Temp
        self.cpu_card = ctk.CTkFrame(telemetry_frame, fg_color=COLOR_CARD, corner_radius=12)
        self.cpu_card.grid(row=0, column=0, sticky="nsew", padx=4, pady=0)
        self.build_metric_card(self.cpu_card, "CPU TEMP", "cpu_temp", "°C")

        # 2. GPU Temp
        self.gpu_card = ctk.CTkFrame(telemetry_frame, fg_color=COLOR_CARD, corner_radius=12)
        self.gpu_card.grid(row=0, column=1, sticky="nsew", padx=4, pady=0)
        self.build_metric_card(self.gpu_card, "GPU TEMP", "gpu_temp", "°C")

        # 3. CPU Load %
        self.cpu_load_card = ctk.CTkFrame(telemetry_frame, fg_color=COLOR_CARD, corner_radius=12)
        self.cpu_load_card.grid(row=0, column=2, sticky="nsew", padx=4, pady=0)
        self.build_metric_card(self.cpu_load_card, "CPU LOAD", "cpu_usage", "%")

        # 4. GPU RTX 4070 Load %
        self.gpu_load_card = ctk.CTkFrame(telemetry_frame, fg_color=COLOR_CARD, corner_radius=12)
        self.gpu_load_card.grid(row=0, column=3, sticky="nsew", padx=4, pady=0)
        self.build_metric_card(self.gpu_load_card, "GPU LOAD (RTX 4070)", "gpu_usage", "%")

        # Detailed Gaming Hardware Status Strip
        details_box = ctk.CTkFrame(f, fg_color=COLOR_CARD, corner_radius=10)
        details_box.pack(fill="x", pady=(0, 14), padx=4, ipady=8)

        self.gpu_details_label = ctk.CTkLabel(
            details_box,
            text="🎮 GPU: NVIDIA RTX 4070 Laptop  |  VRAM: 0 MB / 8188 MB  |  Clock: 0 MHz  |  Power: 0.0 W",
            font=ctk.CTkFont(family="Consolas", size=11, weight="bold"),
            text_color=COLOR_ACCENT
        )
        self.gpu_details_label.pack(padx=16, anchor="w", pady=(2, 1))

        self.sys_details_label = ctk.CTkLabel(
            details_box,
            text="⚡ CPU: Intel Core HX (0 MHz)  |  RAM: 0.0 / 0.0 GB (0%)  |  Power: AC Plugged (100%)",
            font=ctk.CTkFont(family="Consolas", size=11),
            text_color=COLOR_TEXT_MUTED
        )
        self.sys_details_label.pack(padx=16, anchor="w", pady=(1, 2))

        # Real-Time Glowing Rolling Temperature Graph (HUD Visuals)
        self.temp_graph = ui_widgets.LiveTelemetryGraph(f, max_points=40, height=135)
        self.temp_graph.pack(fill="x", pady=(0, 14), padx=4)

        # Row 2: Performance Modes
        profiles_card = ctk.CTkFrame(f, fg_color=COLOR_CARD, corner_radius=12)
        profiles_card.pack(fill="x", pady=(0, 16), padx=5, ipady=10)

        p_title = ctk.CTkLabel(
            profiles_card, text="THERMAL & POWER PROFILES",
            font=ctk.CTkFont(size=13, weight="bold"),
            text_color=COLOR_TEXT_MUTED
        )
        p_title.pack(anchor="w", padx=20, pady=(12, 8))

        self.mode_btn_frame = ctk.CTkFrame(profiles_card, fg_color="transparent")
        self.mode_btn_frame.pack(fill="x", padx=20, pady=5)
        self.mode_btn_frame.grid_columnconfigure((0, 1, 2, 3), weight=1)

        self.mode_buttons = {}
        modes = [
            ("quiet", "🤫 Quiet"),
            ("balanced", "⚖️ Balanced"),
            ("performance", "🚀 Performance"),
            ("gmode", "⚡ Game Shift (G-Mode)")
        ]
        for col, (mode_id, text) in enumerate(modes):
            is_gmode = (mode_id == "gmode")
            btn = ctk.CTkButton(
                self.mode_btn_frame,
                text=text,
                height=42,
                corner_radius=8,
                font=ctk.CTkFont(size=13, weight="bold"),
                fg_color=COLOR_GMODE if is_gmode else "#2d334d",
                hover_color="#e11d48" if is_gmode else COLOR_CARD_HOVER,
                text_color=COLOR_TEXT_MAIN,
                command=lambda m=mode_id: self.select_mode(m)
            )
            btn.grid(row=0, column=col, padx=5, sticky="ew")
            self.mode_buttons[mode_id] = btn

        # Row 3: Fan RPM Meters
        fan_meter_card = ctk.CTkFrame(f, fg_color=COLOR_CARD, corner_radius=12)
        fan_meter_card.pack(fill="x", pady=0, padx=5, ipady=10)

        fm_title = ctk.CTkLabel(
            fan_meter_card, text="LIVE FAN TELEMETRY",
            font=ctk.CTkFont(size=13, weight="bold"),
            text_color=COLOR_TEXT_MUTED
        )
        fm_title.pack(anchor="w", padx=20, pady=(12, 8))

        meters_box = ctk.CTkFrame(fan_meter_card, fg_color="transparent")
        meters_box.pack(fill="x", padx=20, pady=5)
        meters_box.grid_columnconfigure((0, 1), weight=1)

        self.cpu_fan_label = ctk.CTkLabel(
            meters_box, text="CPU Fan: -- RPM",
            font=ctk.CTkFont(size=14, weight="bold"),
            text_color=COLOR_TEXT_MAIN
        )
        self.cpu_fan_label.grid(row=0, column=0, sticky="w", padx=8)

        self.cpu_fan_bar = ctk.CTkProgressBar(meters_box, height=8, corner_radius=4)
        self.cpu_fan_bar.grid(row=1, column=0, sticky="ew", padx=8, pady=(4, 10))
        self.cpu_fan_bar.set(0.0)

        self.gpu_fan_label = ctk.CTkLabel(
            meters_box, text="GPU Fan: -- RPM",
            font=ctk.CTkFont(size=14, weight="bold"),
            text_color=COLOR_TEXT_MAIN
        )
        self.gpu_fan_label.grid(row=0, column=1, sticky="w", padx=8)

        self.gpu_fan_bar = ctk.CTkProgressBar(meters_box, height=8, corner_radius=4)
        self.gpu_fan_bar.grid(row=1, column=1, sticky="ew", padx=8, pady=(4, 10))
        self.gpu_fan_bar.set(0.0)

    def build_metric_card(self, parent, title, var_prefix, unit):
        parent.configure(border_width=1, border_color=COLOR_CARD_BORDER)
        lbl_title = ctk.CTkLabel(
            parent, text=title,
            font=ctk.CTkFont(size=11, weight="bold"),
            text_color=COLOR_TEXT_MUTED
        )
        lbl_title.pack(anchor="w", padx=16, pady=(12, 2))

        val_label = ctk.CTkLabel(
            parent, text=f"-- {unit}",
            font=ctk.CTkFont(family="Segoe UI", size=28, weight="bold"),
            text_color=COLOR_TEXT_MAIN
        )
        val_label.pack(anchor="w", padx=16, pady=(0, 4))
        setattr(self, f"{var_prefix}_val", val_label)

        pbar = ctk.CTkProgressBar(parent, height=6, corner_radius=3)
        pbar.pack(fill="x", padx=16, pady=(0, 14))
        pbar.set(0.0)
        pbar.configure(progress_color=COLOR_GREEN)
        setattr(self, f"{var_prefix}_bar", pbar)

    def select_mode(self, mode: str):
        self.backend.set_mode(mode)
        self.update_mode_buttons(mode)

    def update_mode_buttons(self, active_mode: str):
        for mid, btn in self.mode_buttons.items():
            if mid == active_mode:
                btn.configure(border_width=2, border_color=COLOR_ACCENT)
            else:
                btn.configure(border_width=0)

    # ==========================================
    # View: Fans & Curves
    # ==========================================
    def create_fans_view(self):
        f = ctk.CTkScrollableFrame(self.content_frame, fg_color="transparent")
        self.frames["fans"] = f

        boost_card = ctk.CTkFrame(f, fg_color=COLOR_CARD, corner_radius=12)
        boost_card.pack(fill="x", pady=(0, 20), ipady=10)

        b_title = ctk.CTkLabel(
            boost_card, text="MANUAL FAN SPEED BOOST",
            font=ctk.CTkFont(size=14, weight="bold"),
            text_color=COLOR_TEXT_MUTED
        )
        b_title.pack(anchor="w", padx=20, pady=(15, 5))

        b_sub = ctk.CTkLabel(
            boost_card, text="Increases RPM above the BIOS fan curve. The hardware EC safety curve remains active.",
            font=ctk.CTkFont(size=12),
            text_color=COLOR_TEXT_MUTED
        )
        b_sub.pack(anchor="w", padx=20, pady=(0, 15))

        # CPU Boost Slider
        slider_frame = ctk.CTkFrame(boost_card, fg_color="transparent")
        slider_frame.pack(fill="x", padx=20, pady=5)
        slider_frame.grid_columnconfigure(1, weight=1)

        self.cpu_slider_label = ctk.CTkLabel(slider_frame, text="CPU Boost: 0%", font=ctk.CTkFont(weight="bold"), width=130, anchor="w")
        self.cpu_slider_label.grid(row=0, column=0, padx=(0, 10))

        self.cpu_boost_slider = ctk.CTkSlider(slider_frame, from_=0, to=100, number_of_steps=20, command=self.on_boost_slide)
        self.cpu_boost_slider.grid(row=0, column=1, sticky="ew", padx=10)
        self.cpu_boost_slider.set(0)

        # GPU Boost Slider
        g_slider_frame = ctk.CTkFrame(boost_card, fg_color="transparent")
        g_slider_frame.pack(fill="x", padx=20, pady=(10, 15))
        g_slider_frame.grid_columnconfigure(1, weight=1)

        self.gpu_slider_label = ctk.CTkLabel(g_slider_frame, text="GPU Boost: 0%", font=ctk.CTkFont(weight="bold"), width=130, anchor="w")
        self.gpu_slider_label.grid(row=0, column=0, padx=(0, 10))

        self.gpu_boost_slider = ctk.CTkSlider(g_slider_frame, from_=0, to=100, number_of_steps=20, command=self.on_boost_slide)
        self.gpu_boost_slider.grid(row=0, column=1, sticky="ew", padx=10)
        self.gpu_boost_slider.set(0)

        # Quick Boost Buttons
        qb_frame = ctk.CTkFrame(boost_card, fg_color="transparent")
        qb_frame.pack(fill="x", padx=20, pady=(0, 10))

        for pct in [0, 25, 50, 75, 100]:
            label = "Stock (0%)" if pct == 0 else f"+{pct}%"
            btn = ctk.CTkButton(
                qb_frame, text=label, width=90, height=32, corner_radius=6,
                fg_color="#2d334d", hover_color=COLOR_CARD_HOVER,
                command=lambda p=pct: self.set_quick_boost(p)
            )
            btn.pack(side="left", padx=5)

        # Fail-Safe Card
        failsafe_card = ctk.CTkFrame(f, fg_color=COLOR_CARD, corner_radius=12)
        failsafe_card.pack(fill="x", pady=0, ipady=10)

        fs_title = ctk.CTkLabel(
            failsafe_card, text="AUTOMATIC FAIL-SAFE PROTECTION",
            font=ctk.CTkFont(size=14, weight="bold"),
            text_color=COLOR_TEXT_MUTED
        )
        fs_title.pack(anchor="w", padx=20, pady=(15, 5))

        self.failsafe_status_label = ctk.CTkLabel(
            failsafe_card,
            text="● Status: Monitoring (Auto G-Mode at ≥ 95°C)",
            font=ctk.CTkFont(size=13, weight="bold"),
            text_color=COLOR_GREEN
        )
        self.failsafe_status_label.pack(anchor="w", padx=20, pady=5)

    def on_boost_slide(self, _val):
        cpu_val = int(self.cpu_boost_slider.get())
        gpu_val = int(self.gpu_boost_slider.get())
        self.cpu_slider_label.configure(text=f"CPU Boost: {cpu_val}%")
        self.gpu_slider_label.configure(text=f"GPU Boost: {gpu_val}%")
        self.backend.set_fan_boost(cpu_val, gpu_val)

    def set_quick_boost(self, pct: int):
        self.cpu_boost_slider.set(pct)
        self.gpu_boost_slider.set(pct)
        self.cpu_slider_label.configure(text=f"CPU Boost: {pct}%")
        self.gpu_slider_label.configure(text=f"GPU Boost: {pct}%")
        self.backend.set_fan_boost(pct, pct)

    # ==========================================
    # View: Keyboard RGB & Interactive Display
    # ==========================================
    def create_lighting_view(self):
        f = ctk.CTkScrollableFrame(self.content_frame, fg_color="transparent")
        self.frames["lighting"] = f

        # Top Bar: Color Palette & Always-On Switch
        top_bar = ctk.CTkFrame(f, fg_color=COLOR_CARD, corner_radius=12)
        top_bar.pack(fill="x", pady=(0, 14), ipady=8)

        tb_title = ctk.CTkLabel(
            top_bar, text="COLOR PALETTE & BACKLIGHT CONTROLS",
            font=ctk.CTkFont(size=13, weight="bold"),
            text_color=COLOR_TEXT_MUTED
        )
        tb_title.pack(anchor="w", padx=20, pady=(10, 6))

        palette_row = ctk.CTkFrame(top_bar, fg_color="transparent")
        palette_row.pack(fill="x", padx=16, pady=4)

        presets = [
            ("Cyan", 0, 229, 255, "#00e5ff"),
            ("Violet", 168, 85, 247, "#a855f7"),
            ("Crimson", 255, 0, 85, "#ff0055"),
            ("Emerald", 16, 185, 129, "#10b981"),
            ("Amber", 245, 158, 11, "#f59e0b"),
            ("White", 255, 255, 255, "#ffffff"),
            ("Off", 0, 0, 0, "#334155")
        ]
        for name, r, g, b, hex_c in presets:
            btn = ctk.CTkButton(
                palette_row,
                text=name,
                width=80,
                height=32,
                corner_radius=6,
                font=ctk.CTkFont(size=11, weight="bold"),
                fg_color=hex_c,
                text_color="#000000" if hex_c in ["#00e5ff", "#ffffff", "#f59e0b", "#10b981"] else "#ffffff",
                command=lambda rc=r, gc=g, bc=b: self.pick_preset_color(rc, gc, bc)
            )
            btn.pack(side="left", padx=3)

        # Custom Picker Button
        custom_btn = ctk.CTkButton(
            palette_row,
            text="🎨 Custom...",
            width=90,
            height=32,
            corner_radius=6,
            font=ctk.CTkFont(size=11, weight="bold"),
            fg_color="#3b82f6",
            command=self.open_color_picker
        )
        custom_btn.pack(side="left", padx=5)

        # Always-On Switch (Right Aligned)
        self.always_on_switch = ctk.CTkSwitch(
            palette_row,
            text="Keep Lights Always On",
            font=ctk.CTkFont(size=12, weight="bold"),
            text_color=COLOR_TEXT_MAIN,
            command=self.on_toggle_always_on
        )
        self.always_on_switch.select()  # Enabled by default
        self.always_on_switch.pack(side="right", padx=16)

        # Quick Zone Selection Buttons
        zone_bar = ctk.CTkFrame(f, fg_color=COLOR_CARD, corner_radius=10)
        zone_bar.pack(fill="x", pady=(0, 14), padx=0, ipady=6)

        z_lbl = ctk.CTkLabel(zone_bar, text="Apply Selected Color To:", font=ctk.CTkFont(size=12, weight="bold"), text_color=COLOR_TEXT_MUTED)
        z_lbl.pack(side="left", padx=16)

        for zname, zaction in [
            ("Whole Board", self.apply_all),
            ("WASD Only", self.apply_wasd),
            ("Arrows Only", self.apply_arrows),
            ("Number Row", self.apply_numbers),
            ("Turn Off", self.turn_off_rgb)
        ]:
            z_btn = ctk.CTkButton(
                zone_bar, text=zname, height=30, width=95, corner_radius=6,
                fg_color="#2d334d", hover_color=COLOR_CARD_HOVER,
                font=ctk.CTkFont(size=11, weight="bold"),
                command=zaction
            )
            z_btn.pack(side="left", padx=4)

        # INTERACTIVE PHYSICAL KEYBOARD DISPLAY
        kb_card = ctk.CTkFrame(f, fg_color=COLOR_CARD, corner_radius=12)
        kb_card.pack(fill="x", pady=(0, 14), ipady=12)

        kb_header = ctk.CTkLabel(
            kb_card,
            text="INTERACTIVE KEYBOARD LAYOUT  (Click any key to paint with selected color)",
            font=ctk.CTkFont(size=13, weight="bold"),
            text_color=COLOR_ACCENT
        )
        kb_header.pack(anchor="w", padx=20, pady=(10, 12))

        # Render rows
        self.kb_container = ctk.CTkFrame(kb_card, fg_color="#12151f", corner_radius=8)
        self.kb_container.pack(fill="x", padx=16, pady=(0, 10), ipady=8)

        base_key_width = 38
        key_height = 32

        for r_idx, row in enumerate(KEYBOARD_ROWS):
            row_frame = ctk.CTkFrame(self.kb_container, fg_color="transparent")
            row_frame.pack(fill="x", padx=6, pady=2)

            for label, light_key, w_factor in row:
                btn_w = int(base_key_width * w_factor)
                btn = ctk.CTkButton(
                    row_frame,
                    text=label,
                    width=btn_w,
                    height=key_height,
                    corner_radius=4,
                    font=ctk.CTkFont(family="Consolas", size=9, weight="bold"),
                    fg_color="#1e2233",
                    text_color="#f1f5f9",
                    hover_color=COLOR_ACCENT,
                    command=lambda k=light_key: self.on_key_clicked(k)
                )
                btn.pack(side="left", padx=1)
                self.key_widget_map[light_key.upper()] = btn

        # Hardware Effects Strip
        fx_card = ctk.CTkFrame(f, fg_color=COLOR_CARD, corner_radius=10)
        fx_card.pack(fill="x", pady=0, ipady=8)

        fx_lbl = ctk.CTkLabel(fx_card, text="Hardware Animation FX:", font=ctk.CTkFont(size=12, weight="bold"), text_color=COLOR_TEXT_MUTED)
        fx_lbl.pack(side="left", padx=16)

        for ef, ename in [("breathing", "Breathing"), ("wave", "Wave"), ("pulse", "Pulse"), ("nightrider", "Nightrider")]:
            ctk.CTkButton(
                fx_card, text=ename, height=28, width=90, corner_radius=6,
                fg_color="#2d334d", hover_color=COLOR_CARD_HOVER,
                font=ctk.CTkFont(size=11, weight="bold"),
                command=lambda e=ef: self.backend.set_rgb_effect(e, *self.selected_color)
            ).pack(side="left", padx=4)

        # Stop Effect / Revert to Static Button
        ctk.CTkButton(
            fx_card, text="⏹️ Stop Effect (Static)", height=28, width=140, corner_radius=6,
            fg_color="#b91c1c", hover_color="#991b1b",
            font=ctk.CTkFont(size=11, weight="bold"),
            command=self.backend.stop_rgb_effect
        ).pack(side="left", padx=10)

    def pick_preset_color(self, r: int, g: int, b: int):
        """Presets apply instantly to the whole board and become the active
        color for subsequent per-key / zone painting."""
        self.selected_color = (r, g, b)
        self.apply_all()

    def open_color_picker(self):
        color_code = colorchooser.askcolor(title="Choose Keyboard Color", color=f"#{self.selected_color[0]:02x}{self.selected_color[1]:02x}{self.selected_color[2]:02x}")
        if color_code and color_code[0]:
            r, g, b = [int(v) for v in color_code[0]]
            self.selected_color = (r, g, b)
            # custom picks apply instantly too - one click, whole board
            self.apply_all()

    def on_toggle_always_on(self):
        enabled = (self.always_on_switch.get() == 1)
        self.backend.set_always_on(enabled)

    def on_key_clicked(self, key_name: str):
        r, g, b = self.selected_color
        hex_color = f"#{r:02x}{g:02x}{b:02x}"
        self.backend.set_rgb_color(r, g, b, [key_name])
        if key_name.upper() in self.key_widget_map:
            self.key_widget_map[key_name.upper()].configure(fg_color=hex_color)

    def apply_all(self):
        r, g, b = self.selected_color
        hex_color = f"#{r:02x}{g:02x}{b:02x}"
        self.backend.set_rgb_color(r, g, b, None)
        for btn in self.key_widget_map.values():
            btn.configure(fg_color=hex_color)

    def apply_wasd(self):
        r, g, b = self.selected_color
        hex_color = f"#{r:02x}{g:02x}{b:02x}"
        self.backend.set_rgb_color(r, g, b, ["W", "A", "S", "D"])
        for k in ["W", "A", "S", "D"]:
            if k in self.key_widget_map:
                self.key_widget_map[k].configure(fg_color=hex_color)

    def apply_arrows(self):
        r, g, b = self.selected_color
        hex_color = f"#{r:02x}{g:02x}{b:02x}"
        self.backend.set_rgb_color(r, g, b, ["UP", "DOWN", "LEFT", "RIGHT"])
        for k in ["UP", "DOWN", "LEFT", "RIGHT"]:
            if k in self.key_widget_map:
                self.key_widget_map[k].configure(fg_color=hex_color)

    def apply_numbers(self):
        r, g, b = self.selected_color
        hex_color = f"#{r:02x}{g:02x}{b:02x}"
        keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
        self.backend.set_rgb_color(r, g, b, keys)
        for k in keys:
            if k in self.key_widget_map:
                self.key_widget_map[k].configure(fg_color=hex_color)

    def turn_off_rgb(self):
        self.backend.turn_rgb_off()
        for btn in self.key_widget_map.values():
            btn.configure(fg_color="#1e2233")

    # ==========================================
    # View: Game Hub & Valorant Optimizer
    # ==========================================
    def create_games_view(self):
        f = ctk.CTkScrollableFrame(self.content_frame, fg_color="transparent")
        self.frames["games"] = f

        # VALORANT TURBO CARD (First-Class Feature)
        val_card = ctk.CTkFrame(f, fg_color="#1c1326", border_width=2, border_color="#ff4655", corner_radius=14)
        val_card.pack(fill="x", pady=(0, 16), padx=4, ipady=12)

        v_top = ctk.CTkFrame(val_card, fg_color="transparent")
        v_top.pack(fill="x", padx=20, pady=(10, 4))

        # Official Riot client icon, extracted from the exe
        val_thumb = game_art.get_thumbnail(optimizer.VALORANT_RIOT_CLIENT, "VALORANT")
        v_icon = None
        if val_thumb and os.path.exists(val_thumb):
            try:
                v_icon = ctk.CTkImage(light_image=Image.open(val_thumb),
                                      dark_image=Image.open(val_thumb), size=(44, 44))
                ctk.CTkLabel(v_top, image=v_icon, text="").pack(side="left", padx=(0, 12))
            except Exception:
                v_icon = None

        v_title = ctk.CTkLabel(
            v_top, text="VALORANT TURBO LAUNCHER",
            font=ctk.CTkFont(family="Segoe UI", size=18, weight="bold"),
            text_color="#ff4655"
        )
        v_title.pack(side="left")

        val_badge = ctk.CTkLabel(
            v_top, text="● OPTIMIZER READY",
            font=ctk.CTkFont(size=11, weight="bold"),
            text_color=COLOR_GREEN
        )
        val_badge.pack(side="right")

        v_desc = ctk.CTkLabel(
            val_card,
            text="Automatic Optimization on Launch:\n"
                 "• Thermal Profile: Switches laptop to G-MODE TURBO (+60% fan boost)\n"
                 "• Network Clean: Closes Chrome, Edge, VLC, Wallpaper Engine & background bandwidth hogs\n"
                 "• Network Latency: Flushes DNS cache for lowest ping\n"
                 "• Voice Chat: Automatically launches Discord",
            font=ctk.CTkFont(size=12),
            text_color=COLOR_TEXT_MAIN,
            justify="left"
        )
        v_desc.pack(anchor="w", padx=20, pady=(4, 12))

        # Big Launch Button
        self.val_launch_btn = ctk.CTkButton(
            val_card,
            text="🚀  LAUNCH VALORANT & OPTIMIZE DEVICE",
            height=46,
            corner_radius=8,
            font=ctk.CTkFont(size=15, weight="bold"),
            fg_color="#ff4655",
            hover_color="#e02838",
            command=self.launch_valorant_turbo
        )
        self.val_launch_btn.pack(fill="x", padx=20, pady=(0, 6))

        self.val_status_lbl = ctk.CTkLabel(val_card, text="", font=ctk.CTkFont(size=11), text_color=COLOR_TEXT_MUTED)
        self.val_status_lbl.pack(padx=20, anchor="w")

        # Match telemetry recorder (lightweight: piggybacks on the 1s poll)
        rec_row = ctk.CTkFrame(val_card, fg_color="transparent")
        rec_row.pack(fill="x", padx=20, pady=(8, 4))

        self.record_btn = ctk.CTkButton(
            rec_row,
            text="⏺  Record Match Telemetry",
            width=190,
            height=30,
            corner_radius=6,
            font=ctk.CTkFont(size=12, weight="bold"),
            fg_color="#2d334d",
            hover_color=COLOR_CARD_HOVER,
            command=self.toggle_match_recording
        )
        self.record_btn.pack(side="left")

        self.auto_record_switch = ctk.CTkSwitch(
            rec_row,
            text="Auto-record on game launch",
            font=ctk.CTkFont(size=11),
        )
        self.auto_record_switch.select()
        self.auto_record_switch.pack(side="right")

        self.dash_switch = ctk.CTkSwitch(
            rec_row,
            text="Second-screen dashboard",
            font=ctk.CTkFont(size=11),
        )
        self.dash_switch.select()
        self.dash_switch.pack(side="right", padx=(0, 16))

        self.record_status = ctk.CTkLabel(val_card, text="", font=ctk.CTkFont(size=11), text_color=COLOR_TEXT_MUTED)
        self.record_status.pack(padx=20, anchor="w", pady=(0, 4))

        # D:\GAMES LIBRARY SECTION
        header_row = ctk.CTkFrame(f, fg_color="transparent")
        header_row.pack(fill="x", padx=10, pady=(10, 8))

        games_header = ctk.CTkLabel(
            header_row, text="D:\\GAMES LIBRARY (AUTOMATICALLY DISCOVERED)",
            font=ctk.CTkFont(size=13, weight="bold"),
            text_color=COLOR_TEXT_MUTED
        )
        games_header.pack(side="left")

        add_game_btn = ctk.CTkButton(
            header_row, text="➕ Add Custom Game (.exe)", width=170, height=28,
            corner_radius=6, font=ctk.CTkFont(size=11, weight="bold"),
            fg_color="#3b82f6", hover_color="#2563eb",
            command=self.open_add_game_dialog
        )
        add_game_btn.pack(side="right")

        # Scan Games
        self.games_container = ctk.CTkFrame(f, fg_color="transparent")
        self.games_container.pack(fill="x")
        self.refresh_games_list()

    def refresh_games_list(self):
        for widget in self.games_container.winfo_children():
            widget.destroy()

        self.discovered_games = optimizer.scan_games()
        other_games = [g for g in self.discovered_games if not g.get("is_valorant")]

        if not other_games:
            no_games = ctk.CTkLabel(self.games_container, text="No extra game folders found in D:\\Games", text_color=COLOR_TEXT_MUTED)
            no_games.pack(pady=20)
        else:
            for g in other_games:
                card = ctk.CTkFrame(self.games_container, fg_color=COLOR_CARD, corner_radius=10,
                                    border_width=1, border_color=COLOR_CARD_BORDER)
                card.pack(fill="x", pady=5, padx=4, ipady=8)

                # Game thumbnail: real exe icon, or sleek generated tile
                thumb_path = game_art.get_thumbnail(g.get("path", ""), g["name"])
                if thumb_path and os.path.exists(thumb_path):
                    try:
                        img = Image.open(thumb_path)
                        thumb = ctk.CTkImage(light_image=img, dark_image=img, size=(52, 52))
                        thumb_lbl = ctk.CTkLabel(card, image=thumb, text="")
                        thumb_lbl.pack(side="left", padx=(14, 6))
                    except Exception:
                        thumb_lbl = None

                lbl_box = ctk.CTkFrame(card, fg_color="transparent")
                lbl_box.pack(side="left", padx=8)

                g_name = ctk.CTkLabel(lbl_box, text=g['name'], font=ctk.CTkFont(size=14, weight="bold"), text_color=COLOR_TEXT_MAIN)
                g_name.pack(anchor="w")

                clean_sub = os.path.basename(g.get("folder", "")) or os.path.basename(g.get("path", ""))
                g_sub = ctk.CTkLabel(lbl_box, text=f"Target: {clean_sub}", font=ctk.CTkFont(size=11), text_color=COLOR_TEXT_MUTED)
                g_sub.pack(anchor="w")

                play_btn = ctk.CTkButton(
                    card,
                    text="Play (Turbo)",
                    width=120,
                    height=34,
                    corner_radius=6,
                    font=ctk.CTkFont(size=12, weight="bold"),
                    fg_color="#2d334d",
                    hover_color=COLOR_CARD_HOVER,
                    command=lambda gm=g: self.launch_other_game(gm)
                )
                play_btn.pack(side="right", padx=16)

    def open_add_game_dialog(self):
        from tkinter import filedialog
        file_path = filedialog.askopenfilename(
            title="Select Game Executable",
            filetypes=[("Executable Files", "*.exe"), ("All Files", "*.*")]
        )
        if file_path:
            name = os.path.splitext(os.path.basename(file_path))[0].replace("_", " ").title()
            optimizer.add_custom_game(name, file_path)
            self.refresh_games_list()

    def toggle_match_recording(self):
        if self.backend.is_match_logging():
            self.backend.stop_match_logging()
            self.record_btn.configure(text="⏺  Record Match Telemetry", fg_color="#2d334d")
            self.record_status.configure(text="Recording stopped - CSV saved in match_logs\\",
                                         text_color=COLOR_TEXT_MUTED)
        else:
            self.backend.start_match_logging("match")
            self.record_btn.configure(text="⏹  Stop Recording", fg_color="#ef4444")
            self.record_status.configure(text="● Recording telemetry (1 sample/s, ~0% CPU)",
                                         text_color=COLOR_RED)

    def launch_valorant_turbo(self):
        val_info = next((g for g in self.discovered_games if g.get("is_valorant")), None)
        if not val_info:
            val_info = {
                "name": "VALORANT",
                "path": optimizer.VALORANT_RIOT_CLIENT,
                "args": optimizer.VALORANT_ARGS,
                "is_valorant": True
            }
        self.val_status_lbl.configure(text="Optimizing system & launching Valorant...", text_color=COLOR_ACCENT)
        ok, msg = optimizer.launch_game(val_info, backend_controller=self.backend)
        self.maybe_autorecord("VALORANT", val_info.get("path"))
        self.val_status_lbl.configure(
            text=f"● {msg}",
            text_color=COLOR_GREEN if ok else COLOR_RED
        )
        self.maybe_autorecord("VALORANT")

    def launch_other_game(self, game_info: dict):
        ok, msg = optimizer.launch_game(game_info, backend_controller=self.backend)
        print(f"Launch {game_info['name']}: {msg}")
        self.maybe_autorecord(game_info.get("name", "game"), game_info.get("path"))

    def maybe_autorecord(self, game_name: str, exe_path: str = None):
        if self.dash_switch.get() == 1:
            self.open_game_dashboard(game_name, exe_path)
        if self.auto_record_switch.get() == 1:
            if not self.backend.is_match_logging():
                self.backend.start_match_logging(game_name, exe_path)
                self.record_btn.configure(text="⏹  Stop Recording", fg_color="#ef4444")
            self.record_status.configure(
                text=f"● Recording telemetry for {game_name} (1 sample/s, ~0% CPU)",
                text_color=COLOR_RED)

    # ==========================================
    # View: Valorant Career Stats
    # ==========================================
    def create_valorant_view(self):
        f = ctk.CTkScrollableFrame(self.content_frame, fg_color="transparent")
        self.frames["valorant"] = f

        # Header card: identity + rank + refresh
        head = ctk.CTkFrame(f, fg_color="#1c1326", border_width=2, border_color="#ff4655", corner_radius=14)
        head.pack(fill="x", pady=(0, 16), padx=4, ipady=12)

        h_row = ctk.CTkFrame(head, fg_color="transparent")
        h_row.pack(fill="x", padx=20, pady=(10, 4))

        self.val_name_lbl = ctk.CTkLabel(
            h_row, text="VALORANT CAREER",
            font=ctk.CTkFont(family="Segoe UI", size=20, weight="bold"),
            text_color="#ff4655")
        self.val_name_lbl.pack(side="left")

        self.val_rank_lbl = ctk.CTkLabel(
            h_row, text="",
            font=ctk.CTkFont(size=14, weight="bold"),
            text_color=COLOR_TEXT_MAIN)
        self.val_rank_lbl.pack(side="right")

        controls = ctk.CTkFrame(head, fg_color="transparent")
        controls.pack(fill="x", padx=20, pady=(2, 6))

        self.val_refresh_btn = ctk.CTkButton(
            controls, text="🔄  Refresh Career Stats", width=180, height=34,
            corner_radius=6, font=ctk.CTkFont(size=12, weight="bold"),
            fg_color="#ff4655", hover_color="#e02838",
            command=self.refresh_valorant)
        self.val_refresh_btn.pack(side="left")

        self.val_state_lbl = ctk.CTkLabel(
            controls, text="Requires the Riot client to be open and signed in.",
            font=ctk.CTkFont(size=11), text_color=COLOR_TEXT_MUTED)
        self.val_state_lbl.pack(side="left", padx=14)

        # Overview metric cards
        self.val_overview_frame = ctk.CTkFrame(f, fg_color="transparent")
        self.val_overview_frame.pack(fill="x", pady=(0, 14))
        self.val_overview_frame.grid_columnconfigure((0, 1, 2, 3, 4, 5), weight=1)
        self.val_overview_labels = {}

        overview_defs = [
            ("MATCHES", "matches"), ("WIN RATE", "win_rate"), ("K/D", "kd"),
            ("AVG ACS", "acs"), ("HEADSHOT %", "hs_pct"), ("WINS", "wins"),
        ]
        for col, (title, key) in enumerate(overview_defs):
            card = ctk.CTkFrame(self.val_overview_frame, fg_color=COLOR_CARD,
                                corner_radius=10, border_width=1, border_color=COLOR_CARD_BORDER)
            card.grid(row=0, column=col, padx=4, sticky="nsew")
            lbl = ctk.CTkLabel(card, text=f"-- {title.split()[-1] if key != 'win_rate' else '--%'}",
                               font=ctk.CTkFont(size=20, weight="bold"), text_color=COLOR_TEXT_MAIN)
            lbl.pack(padx=8, pady=(12, 2))
            ttl = ctk.CTkLabel(card, text=title, font=ctk.CTkFont(size=10, weight="bold"),
                               text_color=COLOR_TEXT_MUTED)
            ttl.pack(padx=8, pady=(0, 12))
            self.val_overview_labels[key] = lbl

        # Recent matches
        rm_title = ctk.CTkLabel(f, text="RECENT MATCHES",
                                font=ctk.CTkFont(size=13, weight="bold"),
                                text_color=COLOR_TEXT_MUTED)
        rm_title.pack(anchor="w", padx=6, pady=(6, 6))
        self.val_matches_frame = ctk.CTkFrame(f, fg_color=COLOR_CARD, corner_radius=12)
        self.val_matches_frame.pack(fill="x", pady=(0, 14), padx=4, ipady=6)
        ctk.CTkLabel(self.val_matches_frame,
                     text="Click Refresh to load your match history.",
                     text_color=COLOR_TEXT_MUTED).pack(padx=16, pady=12, anchor="w")

        # Agent + map tables
        tables_row = ctk.CTkFrame(f, fg_color="transparent")
        tables_row.pack(fill="x", pady=0)
        tables_row.grid_columnconfigure((0, 1), weight=1)

        agent_card = ctk.CTkFrame(tables_row, fg_color=COLOR_CARD, corner_radius=12)
        agent_card.grid(row=0, column=0, sticky="nsew", padx=4)
        ctk.CTkLabel(agent_card, text="AGENT PERFORMANCE",
                     font=ctk.CTkFont(size=13, weight="bold"),
                     text_color=COLOR_TEXT_MUTED).pack(anchor="w", padx=16, pady=(12, 4))
        self.val_agent_frame = ctk.CTkFrame(agent_card, fg_color="transparent")
        self.val_agent_frame.pack(fill="x", padx=12, pady=(0, 10))

        map_card = ctk.CTkFrame(tables_row, fg_color=COLOR_CARD, corner_radius=12)
        map_card.grid(row=0, column=1, sticky="nsew", padx=4)
        ctk.CTkLabel(map_card, text="MAP PERFORMANCE",
                     font=ctk.CTkFont(size=13, weight="bold"),
                     text_color=COLOR_TEXT_MUTED).pack(anchor="w", padx=16, pady=(12, 4))
        self.val_map_frame = ctk.CTkFrame(map_card, fg_color="transparent")
        self.val_map_frame.pack(fill="x", padx=12, pady=(0, 10))

        # RR climb canvas
        rr_card = ctk.CTkFrame(f, fg_color=COLOR_CARD, corner_radius=12)
        rr_card.pack(fill="x", pady=(14, 0), padx=4, ipady=10)
        ctk.CTkLabel(rr_card, text="RANKED RR CLIMB (last 20 ranked games)",
                     font=ctk.CTkFont(size=13, weight="bold"),
                     text_color=COLOR_TEXT_MUTED).pack(anchor="w", padx=16, pady=(8, 4))
        self.val_rr_canvas = tk.Canvas(rr_card, height=110, bg="#0c0e18",
                                       highlightthickness=0, bd=0)
        self.val_rr_canvas.pack(fill="x", padx=14, pady=(0, 10))

    def refresh_valorant(self):
        self.val_refresh_btn.configure(state="disabled")
        self.val_state_lbl.configure(text="Connecting to Riot client...", text_color=COLOR_YELLOW)

        def progress_cb(msg):
            self.after(0, lambda: self.val_state_lbl.configure(
                text=msg, text_color=COLOR_YELLOW))

        def worker():
            try:
                summary = valcareer.refresh(progress=progress_cb)
                rank = valcareer.load_rank()
                self.after(0, lambda: self._render_valorant(summary, rank))
            except Exception as ex:
                msg = str(ex)
                self.after(0, lambda: self.val_state_lbl.configure(
                    text=f"⚠ {msg}", text_color=COLOR_RED))
            finally:
                self.after(0, lambda: self.val_refresh_btn.configure(state="normal"))

        threading.Thread(target=worker, daemon=True).start()

    def _rr_render(self, climb):
        c = self.val_rr_canvas
        c.delete("all")
        w = c.winfo_width() or 600
        h = 110
        deltas = [e.get("rr") or 0 for e in climb if isinstance(e.get("rr"), (int, float))]
        if not deltas:
            c.create_text(w / 2, h / 2, text="No ranked RR data yet",
                          fill="#475569", font=("Consolas", 10))
            return
        cum, total, vals = 0, 0, []
        for d in deltas:
            cum += d
            vals.append(cum)
        lo, hi = min(vals + [0]), max(vals + [0])
        span = max(hi - lo, 20)
        dx = w / max(len(vals), 1)
        c.create_line(0, h / 2, w, h / 2, fill="#1c2136", dash=(3, 3))
        pts = []
        for i, v in enumerate(vals):
            y = h / 2 - (v / span) * (h - 24)
            pts.extend([i * dx + dx / 2, y])
            c.create_rectangle(i * dx + dx / 2 - 3, y - 3, i * dx + dx / 2 + 3, y + 3,
                               fill=COLOR_GREEN if deltas[i] >= 0 else COLOR_RED, outline="")
        if len(pts) >= 4:
            c.create_line(pts, fill=COLOR_ACCENT, width=2, smooth=True)
        c.create_text(30, 12, text=f"net {vals[-1]:+d} RR", fill=COLOR_ACCENT,
                      font=("Consolas", 10, "bold"))

    def _render_valorant(self, summary, rank):
        # identity + rank
        who = summary.get("name") or "Player"
        tiers = {0: "Unranked", 3: "Iron 1", 4: "Iron 2", 5: "Iron 3",
                 6: "Bronze 1", 7: "Bronze 2", 8: "Bronze 3",
                 9: "Silver 1", 10: "Silver 2", 11: "Silver 3",
                 12: "Gold 1", 13: "Gold 2", 14: "Gold 3",
                 15: "Plat 1", 16: "Plat 2", 17: "Plat 3",
                 18: "Diamond 1", 19: "Diamond 2", 20: "Diamond 3",
                 21: "Ascendant 1", 22: "Ascendant 2", 23: "Ascendant 3",
                 24: "Immortal 1", 25: "Immortal 2", 26: "Immortal 3",
                 27: "Radiant"}
        tier = rank.get("tier")
        rank_text = tiers.get(tier, "") if tier else ""
        rr = rank.get("rr")
        if rr is not None:
            rank_text += f"  •  {rr} RR"
        self.val_rank_lbl.configure(text=rank_text)
        self.val_state_lbl.configure(
            text=f"Last updated: {time.strftime('%Y-%m-%d %H:%M')}  |  "
                 f"{summary.get('total_matches', 0)} matches in history",
            text_color=COLOR_GREEN)

        # overview cards
        ov = summary.get("overview", {})
        games = ov.get("games", 0)
        vals = {
            "matches": str(games),
            "win_rate": f"{ov.get('win_rate', 0)}%",
            "kd": str(ov.get("kd", 0)),
            "acs": str(ov.get("acs", 0)),
            "hs_pct": f"{ov.get('hs_pct', 0)}%",
            "wins": str(ov.get("wins", 0)),
        }
        for key, lbl in self.val_overview_labels.items():
            lbl.configure(text=vals.get(key, "--"))

        # recent matches list (top 10)
        for wdg in self.val_matches_frame.winfo_children():
            wdg.destroy()
        matches = summary.get("matches", [])[:10]
        if not matches:
            ctk.CTkLabel(self.val_matches_frame, text="No matches cached yet.",
                         text_color=COLOR_TEXT_MUTED).pack(padx=16, pady=10, anchor="w")
            return
        hdr = f"{'MAP':<14}{'AGENT':<14}{'R':<3} {'K/D/A':<10}{'ACS':>5}{'HS%':>7}   RESULT"
        ctk.CTkLabel(self.val_matches_frame, text=hdr, font=("Consolas", 10, "bold"),
                     text_color=COLOR_TEXT_MUTED).pack(anchor="w", padx=16)
        for m in matches:
            kd = f"{m['kills']}/{m['deaths']}/{m['assists']}"
            color = COLOR_GREEN if m["won"] else "#f87171"
            res = "VICTORY" if m["won"] else "DEFEAT"
            line = (f"{m['map'][:13]:<14}{m['agent'][:13]:<14}{'':<3} "
                    f"{kd:<10}{m['acs']:>5}{m['hs_pct']:>6}%   {res}")
            ctk.CTkLabel(self.val_matches_frame, text=line, font=("Consolas", 10),
                         text_color=color).pack(anchor="w", padx=16, pady=1)

        # agent + map mini tables
        def render_table(frame, data: dict, title_key: str):
            for wdg in frame.winfo_children():
                wdg.destroy()
            rows = sorted(data.items(), key=lambda kv: -kv[1]["games"])[:6]
            if not rows:
                ctk.CTkLabel(frame, text="--", text_color=COLOR_TEXT_MUTED).pack(anchor="w")
                return
            hdr = f"{'':<16}{'G':>3}{'W':>3}{'WIN%':>6}{'K/D':>6}{'ACS':>5}"
            ctk.CTkLabel(frame, text=hdr, font=("Consolas", 10, "bold"),
                         text_color=COLOR_TEXT_MUTED).pack(anchor="w")
            for name, d in rows:
                wr = round(100 * d["wins"] / d["games"]) if d["games"] else 0
                kd = round(d["kills"] / max(d["deaths"], 1), 2)
                acs = round(d["score"] / max(d["rounds"], 1))
                line = f"{name[:15]:<16}{d['games']:>3}{d['wins']:>3}{wr:>5}%{kd:>5}{acs:>5}"
                ctk.CTkLabel(frame, text=line, font=("Consolas", 10),
                             text_color=COLOR_TEXT_MAIN).pack(anchor="w", pady=1)

        render_table(self.val_agent_frame, summary.get("agents", {}), "agent")
        render_table(self.val_map_frame, summary.get("maps", {}), "map")

        self._rr_render(rank.get("climb", []))

    def open_game_dashboard(self, game_name: str, exe_path: str = None):
        """Open the portrait second-screen dashboard (auto-fits the vertical monitor)."""
        try:
            if self.game_dashboard is not None:
                self.game_dashboard.close_dashboard()
                self.game_dashboard = None
            monitors = dashboard_widget.enumerate_monitors()
            monitor = dashboard_widget.pick_second_monitor()
            with open(os.path.join(SCRIPT_DIR, "dash_debug.log"), "a", encoding="utf-8") as f:
                f.write(f"[{time.strftime('%H:%M:%S')}] monitors={monitors} picked={monitor}\n")
            if monitor is None:
                # no second monitor - place a tall window on the right of primary
                pri = [m for m in dashboard_widget.enumerate_monitors() if m["primary"]]
                pri = pri[0] if pri else {"left": 0, "top": 0, "width": 2560, "height": 1440}
                monitor = {"left": pri["left"] + pri["width"] - 720,
                           "top": pri["top"] + 60, "width": 720, "height": 1200}
            exe_name = os.path.basename(exe_path) if exe_path else "game.exe"
            self.game_dashboard = dashboard_widget.GameDashboardWindow(
                self, game_name, exe_name, monitor)
            self.game_dashboard.protocol("WM_DELETE_WINDOW", self._dashboard_closed)
            with open(os.path.join(SCRIPT_DIR, "dash_debug.log"), "a", encoding="utf-8") as f:
                f.write(f"[{time.strftime('%H:%M:%S')}] dashboard created at "
                        f"{monitor['width']}x{monitor['height']}+{monitor['left']}+{monitor['top']}\n")
            return True
        except Exception:
            import traceback
            try:
                with open(os.path.join(SCRIPT_DIR, "dash_debug.log"), "a", encoding="utf-8") as f:
                    f.write(traceback.format_exc() + "\n")
            except Exception:
                pass
            return False

    def _dashboard_closed(self):
        self.game_dashboard = None

    # ==========================================
    # View: Settings
    # ==========================================
    def create_settings_view(self):
        f = ctk.CTkScrollableFrame(self.content_frame, fg_color="transparent")
        self.frames["settings"] = f

        card = ctk.CTkFrame(f, fg_color=COLOR_CARD, corner_radius=12, border_width=1, border_color=COLOR_CARD_BORDER)
        card.pack(fill="x", pady=(0, 20), ipady=15)

        s_title = ctk.CTkLabel(
            card, text="SYSTEM AUTORUN & LAUNCHER",
            font=ctk.CTkFont(size=14, weight="bold"),
            text_color=COLOR_TEXT_MUTED
        )
        s_title.pack(anchor="w", padx=20, pady=(15, 8))

        s_sub = ctk.CTkLabel(
            card,
            text="Installs a Start Menu shortcut with the Alien logo that you can pin to the\nTaskbar. It launches instantly with no UAC prompt via a hidden scheduled task\n(which also auto-starts the app at Windows logon).",
            font=ctk.CTkFont(size=12),
            text_color=COLOR_TEXT_MUTED,
            justify="left"
        )
        s_sub.pack(anchor="w", padx=20, pady=(0, 12))

        install_btn = ctk.CTkButton(
            card,
            text="🚀  Install Start Menu Shortcut (one-time setup)",
            height=40,
            corner_radius=8,
            font=ctk.CTkFont(size=13, weight="bold"),
            fg_color=COLOR_ACCENT,
            hover_color=COLOR_ACCENT_HOVER,
            text_color="#000000",
            command=self.install_shortcut
        )
        install_btn.pack(anchor="w", padx=20, pady=(0, 6))

        self.shortcut_status = ctk.CTkLabel(card, text="", font=ctk.CTkFont(size=12), text_color=COLOR_GREEN)
        self.shortcut_status.pack(anchor="w", padx=20, pady=(0, 12))

        # Old fan-daemon autostart switch (kept for the standalone daemon)
        self.startup_switch = ctk.CTkSwitch(
            card,
            text="Also auto-start the standalone g16fan daemon at logon (optional)",
            font=ctk.CTkFont(size=12),
            command=self.toggle_autostart
        )
        self.startup_switch.pack(anchor="w", padx=20, pady=6)
        self.refresh_autostart_switch()

        # ---- CPU Health: TCC throttle-temperature cap ----
        tcc_card = ctk.CTkFrame(f, fg_color=COLOR_CARD, corner_radius=12, border_width=1, border_color=COLOR_CARD_BORDER)
        tcc_card.pack(fill="x", pady=(0, 20), ipady=15)

        t_title = ctk.CTkLabel(
            tcc_card, text="CPU HEALTH GUARD (TCC OFFSET)",
            font=ctk.CTkFont(size=14, weight="bold"),
            text_color=COLOR_TEXT_MUTED
        )
        t_title.pack(anchor="w", padx=20, pady=(15, 4))

        t_desc = ctk.CTkLabel(
            tcc_card,
            text="Caps the CPU's maximum temperature. When the chip hits this point it clocks down\n"
                 "instead of heating further — bursts top out lower and the CPU never approaches\n"
                 "its 100°C limit. Recommended: 8 (≈92°C). Zero daily performance cost.\n"
                 "Re-applies automatically at every logon. 0 = stock (no cap).",
            font=ctk.CTkFont(size=12),
            text_color=COLOR_TEXT_MUTED,
            justify="left"
        )
        t_desc.pack(anchor="w", padx=20, pady=(0, 10))

        trow = ctk.CTkFrame(tcc_card, fg_color="transparent")
        trow.pack(fill="x", padx=20)
        trow.grid_columnconfigure(1, weight=1)

        self.tcc_label = ctk.CTkLabel(trow, text="Offset: 8°C  (→ ~92°C)", font=ctk.CTkFont(size=13, weight="bold"), width=190, anchor="w")
        self.tcc_label.grid(row=0, column=0, padx=(0, 10))

        saved_offset, saved_gaming_offset, _ = self.backend.get_tcc_settings()
        self.tcc_slider = ctk.CTkSlider(trow, from_=0, to=16, number_of_steps=16, command=self.on_tcc_slide)
        self.tcc_slider.grid(row=0, column=1, sticky="ew", padx=10)
        self.tcc_slider.set(saved_offset)
        self.tcc_slider.bind("<ButtonRelease-1>", self.on_tcc_release)
        self._update_tcc_label(saved_offset)

        # Gaming (G-Mode) TCC slider - relaxed cap for CPU-bound games
        trow2 = ctk.CTkFrame(tcc_card, fg_color="transparent")
        trow2.pack(fill="x", padx=20, pady=(10, 0))
        trow2.grid_columnconfigure(1, weight=1)

        self.tcc_gaming_label = ctk.CTkLabel(
            trow2, text=f"🎮 Gaming (G-Mode): {saved_gaming_offset}°C  (→ ~{100 - saved_gaming_offset}°C)",
            font=ctk.CTkFont(size=13, weight="bold"), width=190, anchor="w"
        )
        self.tcc_gaming_label.grid(row=0, column=0, padx=(0, 10))

        self.tcc_gaming_slider = ctk.CTkSlider(trow2, from_=0, to=16, number_of_steps=16)
        self.tcc_gaming_slider.grid(row=0, column=1, sticky="ew", padx=10)
        self.tcc_gaming_slider.set(saved_gaming_offset)
        self.tcc_gaming_slider.bind("<ButtonRelease-1>", self.on_tcc_gaming_release)

        tnote = ctk.CTkLabel(
            tcc_card,
            text="● Daily cap auto-applies at every startup. The Gaming cap applies automatically while\n"
                 "G-Mode is active (Game Hub launches) and the daily cap snaps back when you leave G-Mode.\n"
                 "G-Mode + max fans usually keep Valorant below even the gaming cap — full headroom either way.",
            font=ctk.CTkFont(size=11),
            text_color=COLOR_GREEN
        )
        tnote.pack(anchor="w", padx=20, pady=(8, 12))

        # ---- Windows power tuning (boost mode smoothing) ----
        pwr_btn = ctk.CTkButton(
            tcc_card,
            text="⚡ Apply Recommended Power Tuning (smooth CPU boosts)",
            height=36,
            corner_radius=8,
            font=ctk.CTkFont(size=12, weight="bold"),
            fg_color="#10b981",
            hover_color="#059669",
            command=self.apply_power_tuning
        )
        pwr_btn.pack(anchor="w", padx=20, pady=(0, 4))

        self.pwr_status = ctk.CTkLabel(tcc_card, text="", font=ctk.CTkFont(size=11), text_color=COLOR_GREEN)
        self.pwr_status.pack(anchor="w", padx=20, pady=(0, 12))

        info_label = ctk.CTkLabel(
            card,
            text="Architecture: Direct ACPI WMI (AWCCWmiMethodFunction) + Native Darfon USB HID + NVML.\n"
                 "Zero background telemetry, services, or bloat.\n"
                 "Games Path: D:\\Games  |  Valorant: C:\\Riot Games\\Riot Client",
            font=ctk.CTkFont(size=12),
            text_color=COLOR_TEXT_MUTED,
            justify="left"
        )
        info_label.pack(anchor="w", padx=20, pady=(16, 10))

    def _update_tcc_label(self, offset: int):
        if offset == 0:
            self.tcc_label.configure(text="Offset: 0°C  (stock, no cap)")
        else:
            self.tcc_label.configure(text=f"Offset: {offset}°C  (→ ~{100 - offset}°C)")

    def on_tcc_slide(self, val):
        offset = int(float(val))
        self._update_tcc_label(offset)

    def on_tcc_release(self, _val):
        offset = int(self.tcc_slider.get())
        self.backend.set_tcc_offset(offset)
        self._update_tcc_label(offset)

    def on_tcc_gaming_release(self, _val):
        offset = int(self.tcc_gaming_slider.get())
        self.tcc_gaming_label.configure(
            text=f"🎮 Gaming (G-Mode): {offset}°C  (→ ~{100 - offset}°C)")
        self.backend.set_tcc_gaming_offset(offset)

    def apply_power_tuning(self):
        """Set Processor Boost Mode = Efficient Aggressive (AC + battery)."""
        self.pwr_status.configure(text="Applying...", text_color=COLOR_YELLOW)

        def worker():
            cmds = [
                "powercfg -setacvalueindex SCHEME_CURRENT SUB_PROCESSOR PERFBOOSTMODE 4",
                "powercfg -setdcvalueindex SCHEME_CURRENT SUB_PROCESSOR PERFBOOSTMODE 4",
                "powercfg -setactive SCHEME_CURRENT",
            ]
            ok = True
            try:
                import subprocess
                for c in cmds:
                    r = subprocess.run(c, shell=True, capture_output=True, text=True, timeout=15)
                    if r.returncode != 0:
                        ok = False
                        break
                msg = ("✔ Boost mode set to Efficient Aggressive: bursts ramp smoothly, "
                       "fewer temp spikes, no real-world speed loss.") if ok else "Failed - see console"
            except Exception as ex:
                ok, msg = False, str(ex)[:120]
            self.after(0, lambda: self.pwr_status.configure(
                text=msg, text_color=COLOR_GREEN if ok else COLOR_RED))

        threading.Thread(target=worker, daemon=True).start()

    def install_shortcut(self):
        """Run install-shortcut.ps1 elevated to create the task + Start Menu lnk."""
        self.shortcut_status.configure(text="Installing...", text_color=COLOR_YELLOW)

        def worker():
            try:
                import subprocess
                res = subprocess.run(
                    ["powershell", "-NoProfile", "-ExecutionPolicy", "Bypass",
                     "-File", os.path.join(SCRIPT_DIR, "install-shortcut.ps1")],
                    capture_output=True, text=True, timeout=60
                )
                ok = res.returncode == 0
                msg = "✔ Installed! Search 'G16' in Start Menu and pin it to your Taskbar." if ok else f"Error: {res.stderr.strip()[:120]}"
            except Exception as ex:
                ok, msg = False, str(ex)[:120]
            self.after(0, lambda: self.shortcut_status.configure(
                text=msg, text_color=COLOR_GREEN if ok else COLOR_RED))

        threading.Thread(target=worker, daemon=True).start()

    def toggle_autostart(self):
        enable = self.startup_switch.get() == 1
        cmd = "g16fan-install.cmd" if enable else "schtasks /delete /tn G16FanDaemon /f"
        os.system(f'cd /d "{SCRIPT_DIR}" && {cmd}')

    def refresh_autostart_switch(self):
        res = os.system("schtasks /query /tn G16FanDaemon >nul 2>&1")
        if res == 0:
            self.startup_switch.select()
        else:
            self.startup_switch.deselect()

    def toggle_mini_hud(self):
        if not self.mini_hud:
            self.mini_hud = ui_widgets.MiniHUDWindow(self)
        if self.mini_hud.winfo_viewable():
            self.mini_hud.withdraw()
            self.mini_hud_btn.configure(text="📌 In-Game Mini HUD Overlay", fg_color="#3b82f6")
        else:
            self.mini_hud.deiconify()
            self.mini_hud_btn.configure(text="✕ Close Mini HUD", fg_color="#ef4444")

    # ==========================================
    # Telemetry Updates (Thread-Safe to UI)
    # ==========================================
    def on_hardware_update(self, state: HardwareState):
        try:
            if self.winfo_exists():
                self.after(0, lambda: self._apply_state(state))
        except Exception:
            pass

    def _apply_state(self, state: HardwareState):
        try:
            if not self.winfo_exists():
                return
        except Exception:
            return
        # 1. CPU Temp
        if state.cpu_temp is not None:
            self.cpu_temp_val.configure(text=f"{state.cpu_temp} °C")
            self.cpu_temp_bar.set(min(state.cpu_temp / 100.0, 1.0))
            self.cpu_temp_bar.configure(
                progress_color=COLOR_GREEN if state.cpu_temp < 75
                else COLOR_YELLOW if state.cpu_temp < 90
                else COLOR_RED
            )

        # 2. GPU Temp
        if state.gpu_temp is not None:
            self.gpu_temp_val.configure(text=f"{state.gpu_temp} °C")
            self.gpu_temp_bar.set(min(state.gpu_temp / 100.0, 1.0))
            self.gpu_temp_bar.configure(
                progress_color=COLOR_GREEN if state.gpu_temp < 70
                else COLOR_YELLOW if state.gpu_temp < 85
                else COLOR_RED
            )

        # 3. CPU Load %
        self.cpu_usage_val.configure(text=f"{int(state.cpu_usage)} %")
        self.cpu_usage_bar.set(min(state.cpu_usage / 100.0, 1.0))
        self.cpu_usage_bar.configure(
            progress_color=COLOR_GREEN if state.cpu_usage < 60
            else COLOR_YELLOW if state.cpu_usage < 85
            else COLOR_RED
        )

        # 4. GPU RTX 4070 Load %
        self.gpu_usage_val.configure(text=f"{state.gpu_util} %")
        self.gpu_usage_bar.set(min(state.gpu_util / 100.0, 1.0))
        self.gpu_usage_bar.configure(
            progress_color=COLOR_GREEN if state.gpu_util < 60
            else COLOR_YELLOW if state.gpu_util < 85
            else COLOR_RED
        )

        # 5. Detailed Hardware Status Strip (NVIDIA RTX 4070 + CPU + Power)
        pwr_str = "AC Plugged" if state.power_plugged else f"Battery ({state.battery_pct}%)"
        fps_str = f"{state.fps:.0f} FPS" if state.fps else "- - FPS"
        self.gpu_details_label.configure(
            text=f"🎮 GPU: RTX 4070 Laptop ({state.gpu_util}%) | {fps_str} | VRAM: {state.gpu_vram_used_mb} / {state.gpu_vram_total_mb} MB | Clock: {state.gpu_clock_mhz} MHz | Power: {state.gpu_power_w:.1f} W"
        )
        self.sys_details_label.configure(
            text=f"⚡ CPU: Intel Core HX ({int(state.cpu_mhz)} MHz) | RAM: {state.ram_used_gb:.1f} / {state.ram_total_gb:.1f} GB ({int(state.ram_pct)}%) | Power: {pwr_str} | Net: ▲ {state.net_sent_kb:.1f} KB/s ▼ {state.net_recv_kb:.1f} KB/s"
        )

        # 6. Live Rolling Sparkline Temperature Graph
        if hasattr(self, "temp_graph"):
            self.temp_graph.update_temps(state.cpu_temp, state.gpu_temp)

        # 7. Update Mini HUD + second-screen dashboard if active
        if self.mini_hud and self.mini_hud.winfo_viewable():
            self.mini_hud.update_telemetry(state)
        if self.game_dashboard is not None:
            try:
                self.game_dashboard.update_state(state)
            except Exception:
                self.game_dashboard = None

        # 8. Fan RPMs
        if state.cpu_rpm is not None:
            self.cpu_fan_label.configure(text=f"CPU Fan: {state.cpu_rpm} RPM")
            self.cpu_fan_bar.set(min(state.cpu_rpm / 5400.0, 1.0))

        if state.gpu_rpm is not None:
            self.gpu_fan_label.configure(text=f"GPU Fan: {state.gpu_rpm} RPM")
            self.gpu_fan_bar.set(min(state.gpu_rpm / 5400.0, 1.0))

        # 9. Fail-Safe Status
        if state.failsafe_active:
            self.failsafe_status_label.configure(
                text="● FAIL-SAFE ACTIVE: CRITICAL TEMP (G-Mode Forced)",
                text_color=COLOR_RED
            )
        else:
            self.failsafe_status_label.configure(
                text="● Status: Monitoring (Auto G-Mode at ≥ 95°C)",
                text_color=COLOR_GREEN
            )

        # Active Mode Sync
        self.update_mode_buttons(state.current_mode)

    def on_close(self):
        try:
            self.backend.stop()
        except Exception:
            pass
        try:
            self.quit()
        except Exception:
            pass


def main():
    if not acquire_single_instance_lock():
        # Another instance is already running - just bring focus to the task
        # (the running copy owns the UI) and exit this one silently.
        sys.exit(0)
    try:
        import faulthandler
        _trace = open(os.path.join(SCRIPT_DIR, "crash_trace.log"), "w", encoding="utf-8")
        faulthandler.enable(_trace)  # leaves a traceback if we ever hard-crash
    except Exception:
        pass
    app = G16App()
    app.mainloop()


if __name__ == "__main__":
    main()
