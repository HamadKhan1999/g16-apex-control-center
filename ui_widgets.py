"""ui_widgets.py - Lightweight HUD Graphics & Live Telemetry Charts.

Includes:
1. LiveGraphCanvas: Smooth rolling dual-sparkline telemetry chart (CPU Cyan & GPU Crimson)
   rendered on native Tkinter Canvas (pure Python, <0.1% CPU overhead, 0 external browser runtime).
2. MiniHUDWindow: Compact, floating always-on-top translucent stats bar for in-game monitoring.
"""

import collections
import tkinter as tk
from typing import Deque, Optional

import customtkinter as ctk

COLOR_BG = "#08090f"
COLOR_CARD = "#12141f"
COLOR_CYAN = "#00e5ff"
COLOR_CRIMSON = "#ff0055"
COLOR_GREEN = "#10b981"
COLOR_YELLOW = "#f59e0b"
COLOR_TEXT_MUTED = "#7c8aa0"


class LiveTelemetryGraph(ctk.CTkFrame):
    """Real-time rolling temperature sparkline graph (CPU cyan, GPU magenta)."""

    def __init__(self, master, max_points: int = 40, width: int = 480, height: int = 150, **kwargs):
        super().__init__(master, fg_color=COLOR_CARD, corner_radius=12, **kwargs)

        self.max_points = max_points
        self.width = width
        self.height = height

        self.cpu_history: Deque[float] = collections.deque([50.0] * max_points, maxlen=max_points)
        self.gpu_history: Deque[float] = collections.deque([45.0] * max_points, maxlen=max_points)

        # Header with Legend
        header = ctk.CTkFrame(self, fg_color="transparent")
        header.pack(fill="x", padx=16, pady=(10, 4))

        title = ctk.CTkLabel(
            header, text="📈 REAL-TIME TEMPERATURE HISTORY",
            font=ctk.CTkFont(size=12, weight="bold"),
            text_color="#94a3b8"
        )
        title.pack(side="left")

        # Legend tags
        legend_frame = ctk.CTkFrame(header, fg_color="transparent")
        legend_frame.pack(side="right")

        ctk.CTkLabel(legend_frame, text="■ CPU", font=ctk.CTkFont(size=11, weight="bold"), text_color=COLOR_CYAN).pack(side="left", padx=6)
        ctk.CTkLabel(legend_frame, text="■ GPU", font=ctk.CTkFont(size=11, weight="bold"), text_color=COLOR_CRIMSON).pack(side="left", padx=6)

        # Native Tkinter Canvas for smooth, low-overhead rendering
        self.canvas = tk.Canvas(
            self,
            width=self.width,
            height=self.height,
            bg="#0c0e18",
            highlightthickness=0,
            bd=0
        )
        self.canvas.pack(fill="both", expand=True, padx=14, pady=(0, 12))

    def update_temps(self, cpu_temp: Optional[int], gpu_temp: Optional[int]):
        if cpu_temp is not None:
            self.cpu_history.append(float(cpu_temp))
        if gpu_temp is not None:
            self.gpu_history.append(float(gpu_temp))
        self.render_graph()

    def render_graph(self):
        c = self.canvas
        c.delete("all")
        w = c.winfo_width() or self.width
        h = c.winfo_height() or self.height

        # Grid lines (at 40°C, 60°C, 80°C, 100°C)
        min_temp = 30.0
        max_temp = 105.0

        for t_val in [40, 60, 80, 100]:
            y = h - ((t_val - min_temp) / (max_temp - min_temp) * (h - 20) + 10)
            c.create_line(0, y, w, y, fill="#161a2b", width=1, dash=(3, 3))
            c.create_text(20, y - 6, text=f"{t_val}°C", fill="#3d465c", font=("Consolas", 8))

        # Helper to map (index, temp) -> (x, y)
        n = len(self.cpu_history)
        if n < 2:
            return

        def get_coords(history):
            pts = []
            dx = w / (self.max_points - 1)
            for i, val in enumerate(history):
                x = i * dx
                clamped_v = max(min_temp, min(val, max_temp))
                y = h - ((clamped_v - min_temp) / (max_temp - min_temp) * (h - 20) + 10)
                pts.extend([x, y])
            return pts

        # Draw GPU Line (Magenta/Crimson)
        gpu_pts = get_coords(self.gpu_history)
        if len(gpu_pts) >= 4:
            c.create_line(gpu_pts, fill=COLOR_CRIMSON, width=2, smooth=True)

        # Draw CPU Line (Cyan)
        cpu_pts = get_coords(self.cpu_history)
        if len(cpu_pts) >= 4:
            c.create_line(cpu_pts, fill=COLOR_CYAN, width=2.5, smooth=True)

        # Current value tags at the right edge
        if cpu_pts:
            curr_cpu_y = cpu_pts[-1]
            c.create_oval(w - 6, curr_cpu_y - 3, w, curr_cpu_y + 3, fill=COLOR_CYAN, outline="")
        if gpu_pts:
            curr_gpu_y = gpu_pts[-1]
            c.create_oval(w - 6, curr_gpu_y - 3, w, curr_gpu_y + 3, fill=COLOR_CRIMSON, outline="")


class MiniHUDWindow(ctk.CTkToplevel):
    """Always-on-top compact overlay bar for gaming."""

    def __init__(self, master=None):
        super().__init__(master)

        self.title("G16 Mini HUD")
        self.geometry("460x55+40+40")
        self.overrideredirect(True)      # Borderless
        self.attributes("-topmost", True) # Always on top
        self.attributes("-alpha", 0.90)   # Translucent
        self.configure(fg_color="#0a0c14")

        # Draggable window behavior
        self.bind("<ButtonPress-1>", self.start_move)
        self.bind("<B1-Motion>", self.do_move)

        container = ctk.CTkFrame(self, fg_color="#141724", border_width=1, border_color="#00e5ff", corner_radius=8)
        container.pack(fill="both", expand=True, padx=2, pady=2)

        self.stats_label = ctk.CTkLabel(
            container,
            text="▲ G16  |  CPU: --°C (0%)  |  GPU: --°C (0%)  |  RAM: 0.0 GB  |  G-MODE",
            font=ctk.CTkFont(family="Consolas", size=11, weight="bold"),
            text_color="#f1f5f9"
        )
        self.stats_label.pack(side="left", padx=12, pady=4)

        # Close mini button
        close_btn = ctk.CTkButton(
            container, text="✕", width=22, height=22, corner_radius=4,
            fg_color="#ef4444", hover_color="#dc2626", font=("Segoe UI", 10, "bold"),
            command=self.withdraw
        )
        close_btn.pack(side="right", padx=8)

        self.x = 0
        self.y = 0

    def start_move(self, event):
        self.x = event.x
        self.y = event.y

    def do_move(self, event):
        deltax = event.x - self.x
        deltay = event.y - self.y
        new_x = self.winfo_x() + deltax
        new_y = self.winfo_y() + deltay
        self.geometry(f"+{new_x}+{new_y}")

    def update_telemetry(self, state):
        cpu_t = state.cpu_temp if state.cpu_temp is not None else "--"
        gpu_t = state.gpu_temp if state.gpu_temp is not None else "--"
        cpu_u = int(state.cpu_usage)
        gpu_u = state.gpu_util
        ram = state.ram_used_gb
        mode = "⚡ G-MODE" if state.gmode_active else f"⚖️ {state.current_mode.title()}"

        text = f"▲ G16 | CPU: {cpu_t}°C ({cpu_u}%) | GPU: {gpu_t}°C ({gpu_u}%) | RAM: {ram}GB | {mode}"
        self.stats_label.configure(text=text)


