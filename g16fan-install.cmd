@echo off
rem Installs the g16fan daemon as a logon task with highest privileges.
rem Run once as administrator.
net session >nul 2>&1
if %errorlevel% neq 0 (
    echo Please run this script as administrator.
    pause
    exit /b 1
)
schtasks /create /tn "G16FanDaemon" /tr "\"C:\Program Files\Python314\pythonw.exe\" \"D:\Alienware\g16fan.py\" --tray" /sc onlogon /rl highest /f
if %errorlevel% equ 0 (
    echo.
    echo Done. g16fan will now start at every logon with admin rights.
    echo To remove it: schtasks /delete /tn G16FanDaemon /f
    echo To start it now: schtasks /run /tn G16FanDaemon
) else (
    echo Task creation failed.
)
pause
