# install-shortcut.ps1 - One-time installer for G16 Control Center
# Creates:
#   1. A hidden Scheduled Task "G16ControlCenter" (runs pythonw app.py with
#      highest privileges at logon and on-demand - no UAC prompts ever)
#   2. A Start Menu shortcut "G16 Control Center.lnk" with the custom Alien
#      logo icon that starts the task instantly (pinnable to Taskbar/Start)
# Run once from an elevated prompt.

$ErrorActionPreference = "Stop"
$dir = "D:\Alienware"
$pythonw = "C:\Program Files\Python314\pythonw.exe"
$taskName = "G16ControlCenter"
$lnkPath = "$env:APPDATA\Microsoft\Windows\Start Menu\Programs\G16 Control Center.lnk"
$icoPath = "$dir\assets\logo.ico"

# 1. Scheduled Task: launch the GUI hidden + elevated, at logon and on demand
$action  = New-ScheduledTaskAction -Execute $pythonw -Argument "`"$dir\app.py`"" -WorkingDirectory $dir
$trigger = New-ScheduledTaskTrigger -AtLogOn
$principal = New-ScheduledTaskPrincipal -UserId $env:USERNAME -RunLevel Highest
$settings = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -ExecutionTimeLimit ([TimeSpan]::Zero) -StartWhenAvailable
Register-ScheduledTask -TaskName $taskName -Action $action -Trigger $trigger -Principal $principal -Settings $settings -Force | Out-Null
Write-Host "[OK] Scheduled task '$taskName' created (logon autostart, highest privileges, no UAC)."

# 2. Start Menu shortcut with custom icon -> starts the task on click
$ws = New-Object -ComObject WScript.Shell
$sc = $ws.CreateShortcut($lnkPath)
$sc.TargetPath = "$env:WINDIR\System32\schtasks.exe"
$sc.Arguments = "/run /tn $taskName"
$sc.WorkingDirectory = $dir
$sc.WindowStyle = 7           # minimized (hidden flash)
$sc.Description = "G16 Control Center - Alienware Command Center replacement"
if (Test-Path $icoPath) { $sc.IconLocation = "$icoPath,0" }
$sc.Save()
Write-Host "[OK] Start Menu shortcut created: G16 Control Center"

Write-Host ""
Write-Host "Done! Search 'G16' in the Start Menu or pin it to your Taskbar."
Write-Host "Launching it now..."
Start-Process schtasks -ArgumentList "/run /tn $taskName"
