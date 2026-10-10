@echo off
rem Round-8: native g16rgb driver validation - watch keyboard!
rem Cycles RED GREEN BLUE WHITE then settles on blue.
rem Double-click me and approve the UAC prompt.

rem -- self-elevate if not admin --
net session >nul 2>&1
if %errorlevel% neq 0 (
    echo Requesting administrator rights...
    powershell -NoProfile -Command "Start-Process -FilePath '%~f0' -Verb RunAs"
    exit /b
)

cd /d D:\Alienware
set PY=C:\Program Files\Python314\python.exe

(
echo === round-8 g16rgb native driver started %date% %time% ===
echo.
echo [1] demo - RED GREEN BLUE WHITE cycle, watch the keyboard
"%PY%" g16rgb.py demo
echo.
echo [2] final state - soft blue
"%PY%" g16rgb.py set 30,144,255
echo.
echo === DONE ===
) > D:\Alienware\test-output.log 2>&1

echo Test finished. Log: D:\Alienware\test-output.log
pause
