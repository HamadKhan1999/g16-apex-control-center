Write-Host "=== Kernel-Power 41 (crash codes) last 48h ==="
Get-WinEvent -FilterHashtable @{LogName='System'; ProviderName='Microsoft-Windows-Kernel-Power'; Id=41; StartTime=(Get-Date).AddHours(-48)} -ErrorAction SilentlyContinue | ForEach-Object {
  $x = [xml] $_.ToXml(); $d = @{}
  $x.Event.EventData.Data | ForEach-Object { $d[$_.Name] = $_.'#text' }
  Write-Host ($_.TimeCreated.ToString() + "  BugcheckCode=" + $d['BugcheckCode'] + "  P1=" + $d['BugcheckParameter1'])
}
Write-Host ""
Write-Host "=== Unexpected shutdown (6008) last 48h ==="
Get-WinEvent -FilterHashtable @{LogName='System'; Id=6008; StartTime=(Get-Date).AddHours(-48)} -ErrorAction SilentlyContinue | Select-Object TimeCreated | Format-Table -HideTableHeaders
Write-Host "=== Bugcheck reports (1001/1019) last 48h ==="
Get-WinEvent -FilterHashtable @{LogName='System'; ProviderName='Microsoft-Windows-WER-SystemErrorReporting'; StartTime=(Get-Date).AddHours(-48)} -ErrorAction SilentlyContinue | ForEach-Object { Write-Host ($_.TimeCreated.ToString() + "  " + $_.Message.Substring(0, [Math]::Min(260, $_.Message.Length))) }
Write-Host ""
Write-Host "=== WHEA count last 48h ==="
(Get-WinEvent -FilterHashtable @{LogName='System'; ProviderName='Microsoft-Windows-WHEA-Logger'; StartTime=(Get-Date).AddHours(-48)} -ErrorAction SilentlyContinue | Measure-Object).Count
Write-Host "=== Minidumps ==="
Get-ChildItem 'C:\Windows\Minidump\*.dmp' -ErrorAction SilentlyContinue | Select-Object Name, LastWriteTime | Format-Table -HideTableHeaders
Write-Host "=== Display driver resets 4101 last 48h ==="
(Get-WinEvent -FilterHashtable @{LogName='System'; Id=4101; StartTime=(Get-Date).AddHours(-48)} -ErrorAction SilentlyContinue | Measure-Object).Count
