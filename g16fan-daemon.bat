@echo off
rem g16fan daemon launcher (tray icon mode)
rem Double-click or use from a scheduled task. Requires admin rights.
rem Self-elevates if needed.
net session >nul 2>&1
if %errorlevel% neq 0 (
    powershell -NoProfile -Command "Start-Process -FilePath '%~f0' -Verb RunAs -WindowStyle Hidden"
    exit /b
)
cd /d D:\Alienware
start "" /min "C:\Program Files\Python314\pythonw.exe" g16fan.py --tray
