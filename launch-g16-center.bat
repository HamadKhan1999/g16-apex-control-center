@echo off
rem Launch G16 Control Center (Modern Dark-Mode Native GUI)
cd /d "D:\Alienware"

net session >nul 2>&1
if %errorlevel% neq 0 (
    echo Elevating to Administrator...
    powershell -NoProfile -Command "Start-Process -FilePath '%~f0' -Verb RunAs"
    exit /b
)

"C:\Program Files\Python314\python.exe" app.py
if %errorlevel% neq 0 (
    echo App exited with error code %errorlevel%.
    pause
)
