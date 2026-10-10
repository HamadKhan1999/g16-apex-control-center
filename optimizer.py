"""optimizer.py - Game Launcher, System Tuning & Network Optimization Engine.

Handles:
1. Intelligent detection of playable games in D:\\Games (filters repacks, archives, broken setups)
2. Custom user game library persistence via games.json
3. Valorant launcher integration via RiotClientServices.exe
4. Game optimization profiles: flips hardware to G-Mode / High Performance
5. Valorant Network Optimizer: kills bandwidth/network hogs (Chrome, Edge, VLC,
   Wallpaper Engine, torrents/cloud), flushes DNS, and launches Discord.
"""

import json
import os
import subprocess
import sys
import threading
import time
from typing import Dict, List, Optional, Tuple

import psutil

# Applications to terminate for network/latency optimization
NETWORK_HOG_PROCESSES = [
    "chrome.exe",
    "msedge.exe",
    "wallpaper32.exe",
    "wallpaper64.exe",
    "vlc.exe",
    "parsecd.exe",
    "onedrive.exe",
    "qbittorrent.exe",
    "utorrent.exe",
    "epicgameslauncher.exe",
]

VALORANT_RIOT_CLIENT = r"C:\Riot Games\Riot Client\RiotClientServices.exe"
VALORANT_ARGS = ["--launch-product=valorant", "--launch-patchline=live"]
GAMES_DIR = r"D:\Games"
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
CUSTOM_GAMES_FILE = os.path.join(SCRIPT_DIR, "custom_games.json")

# Exclude obvious non-games, installers, repacks, and save directories
BLACKLIST_DIRS = [
    "ds4windows", "riot games", "save files", "saves", "temp", "download_",
    "fitgirl", "nosteam", "dodi"
]

EXE_EXCLUDE_KEYWORDS = [
    "unins", "setup", "part", "crash", "patch", "install", "redist",
    "dxsetup", "vcredist", "update", "unitycrashhandler", "ue4crashreport",
    "easyanticheat", "battleye"
]


def find_discord_executable() -> Optional[str]:
    """Find installed Discord.exe path."""
    local_app_data = os.environ.get("LOCALAPPDATA", "")
    discord_dir = os.path.join(local_app_data, "Discord")
    if os.path.exists(discord_dir):
        try:
            for item in sorted(os.listdir(discord_dir), reverse=True):
                if item.startswith("app-"):
                    exe = os.path.join(discord_dir, item, "Discord.exe")
                    if os.path.exists(exe):
                        return exe
        except Exception:
            pass

    shortcut = os.path.expanduser(r"~\Desktop\Discord.lnk")
    if os.path.exists(shortcut):
        return shortcut
    return None


def scan_games() -> List[Dict[str, str]]:
    """Scan D:\\Games for REAL verified game executables and load custom games."""
    games = []

    # 1. Valorant (First-class item)
    if os.path.exists(VALORANT_RIOT_CLIENT):
        games.append({
            "name": "VALORANT",
            "path": VALORANT_RIOT_CLIENT,
            "args": VALORANT_ARGS,
            "is_valorant": True,
            "category": "Competitive Shooter",
            "icon": "🎯",
        })

    # 2. Known high-confidence game definitions for D:\Games
    known_paths = [
        {
            "folder": "Kingdom Come Deliverance II",
            "name": "Kingdom Come: Deliverance II",
            "rel_exe": r"Bin\Win64MasterMasterSteamPGO\KingdomCome.exe"
        },
        {
            "folder": "The Blood of Dawnwalker",
            "name": "The Blood of Dawnwalker",
            "rel_exe": r"Dawnwalker\Binaries\Win64\Dawnwalker.exe"
        },
        {
            "folder": "REPLACED",
            "name": "REPLACED",
            "rel_exe": "Replaced.exe"
        }
    ]

    for kg in known_paths:
        full_folder = os.path.join(GAMES_DIR, kg["folder"])
        full_exe = os.path.join(full_folder, kg["rel_exe"])
        if os.path.exists(full_exe):
            games.append({
                "name": kg["name"],
                "folder": full_folder,
                "path": full_exe,
                "args": [],
                "is_valorant": False,
                "category": "Installed Game",
                "icon": "⚔️" if "Kingdom" in kg["name"] or "Blood" in kg["name"] else "🎮"
            })

    # 3. Dynamic scan of other directories in D:\Games
    if os.path.exists(GAMES_DIR):
        try:
            for entry in sorted(os.listdir(GAMES_DIR)):
                entry_lower = entry.lower()
                # Skip blacklisted / installer folders
                if any(b in entry_lower for b in BLACKLIST_DIRS):
                    continue
                # Skip already added
                if any(kg["folder"].lower() == entry_lower for kg in known_paths):
                    continue

                full_path = os.path.join(GAMES_DIR, entry)
                if not os.path.isdir(full_path):
                    continue

                # Find valid executable
                exe_target = None
                for root, dirs, files in os.walk(full_path):
                    if root.count(os.sep) - full_path.count(os.sep) > 3:
                        continue
                    for f in files:
                        f_lower = f.lower()
                        if f_lower.endswith(".exe") and not any(k in f_lower for k in EXE_EXCLUDE_KEYWORDS):
                            exe_target = os.path.join(root, f)
                            break
                    if exe_target:
                        break

                if exe_target:
                    clean_name = entry.replace("_", " ").strip()
                    games.append({
                        "name": clean_name,
                        "folder": full_path,
                        "path": exe_target,
                        "args": [],
                        "is_valorant": False,
                        "category": "PC Game",
                        "icon": "🎮"
                    })
        except Exception:
            pass

    # 4. Load Custom Games added by user
    custom_list = load_custom_games()
    for cg in custom_list:
        if os.path.exists(cg.get("path", "")):
            games.append(cg)

    return games


def load_custom_games() -> List[Dict[str, str]]:
    if not os.path.exists(CUSTOM_GAMES_FILE):
        return []
    try:
        with open(CUSTOM_GAMES_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return []


def add_custom_game(name: str, exe_path: str) -> bool:
    if not os.path.exists(exe_path):
        return False
    games = load_custom_games()
    # Avoid duplicate
    if any(g.get("path", "").lower() == exe_path.lower() for g in games):
        return True
    games.append({
        "name": name,
        "folder": os.path.dirname(exe_path),
        "path": exe_path,
        "args": [],
        "is_valorant": False,
        "category": "Custom Game",
        "icon": "⭐"
    })
    try:
        with open(CUSTOM_GAMES_FILE, "w", encoding="utf-8") as f:
            json.dump(games, f, indent=2)
        return True
    except Exception:
        return False


def optimize_network_for_gaming() -> List[str]:
    """Terminate background network hogs and flush DNS."""
    closed_apps = []

    # 1. Kill network/bandwidth hogs
    for proc in psutil.process_iter(["name", "pid"]):
        try:
            pname = proc.info["name"].lower()
            if pname in NETWORK_HOG_PROCESSES:
                proc.kill()
                if pname not in closed_apps:
                    closed_apps.append(pname)
        except (psutil.NoSuchProcess, psutil.AccessDenied):
            pass

    # 2. Flush DNS Cache
    try:
        subprocess.run(["ipconfig", "/flushdns"], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, timeout=5)
    except Exception:
        pass

    return closed_apps


def launch_game(game_info: dict, backend_controller=None) -> Tuple[bool, str]:
    """Launch a game with device optimization & optional network sweep."""
    is_val = game_info.get("is_valorant", False)
    name = game_info.get("name", "Game")

    # 1. Device Thermal Optimization -> G-MODE Turbo
    if backend_controller:
        try:
            backend_controller.set_mode("gmode")
            backend_controller.set_fan_boost(60, 60)
        except Exception:
            pass

    # 2. Valorant specific network optimization & Discord launch
    status_msg = []
    if is_val:
        closed = optimize_network_for_gaming()
        if closed:
            status_msg.append(f"Closed bandwidth hogs: {', '.join(closed)}")

        # Launch Discord
        discord_path = find_discord_executable()
        if discord_path:
            try:
                subprocess.Popen([discord_path], shell=True)
                status_msg.append("Discord started")
            except Exception as ex:
                status_msg.append(f"Discord error: {ex}")

    # 3. Launch the game executable
    target = game_info.get("path")
    args = game_info.get("args", [])
    if not target or not os.path.exists(target):
        return False, f"Executable not found for {name}"

    try:
        if args:
            cmd = [target] + args
            subprocess.Popen(cmd)
        else:
            folder = os.path.dirname(target)
            subprocess.Popen([target], cwd=folder)
        status_msg.append(f"Launched {name} in G-Mode Turbo")
        return True, " | ".join(status_msg)
    except Exception as ex:
        return False, f"Failed to launch: {ex}"
