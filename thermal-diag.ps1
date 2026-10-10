Write-Host "=== Processor thermal-limit events (Kernel-Processor-Power ID 37), last 10 ==="
try {
  $ev = Get-WinEvent -FilterHashtable @{LogName='System'; ProviderName='Microsoft-Windows-Kernel-Processor-Power'; Id=37} -MaxEvents 10 -ErrorAction Stop
  $ev | ForEach-Object { "{0}  {1}" -f $_.TimeCreated, ($_.Message -replace "`r`n", " ") }
} catch { Write-Host "No ID 37 events found or access denied: $($_.Exception.Message)" }

Write-Host ""
Write-Host "=== Count in last 7 days ==="
try {
  $c = (Get-WinEvent -FilterHashtable @{LogName='System'; ProviderName='Microsoft-Windows-Kernel-Processor-Power'; Id=37; StartTime=(Get-Date).AddDays(-7)} -ErrorAction Stop | Measure-Object).Count
  Write-Host $c
} catch { Write-Host "0 or unreadable" }

Write-Host ""
Write-Host "=== Background burst suspects running now ==="
Get-Process | Where-Object { $_.Name -match 'MsMpEng|SearchIndexer|SearchProtocol|wallpaper|avp|kav|onedrive|fbserver|TiWorker|TrustedInstaller|msedgewebview|chrome|parsec|vlc' } |
  Select-Object Name, Id, @{n='CPUsec';e={[int]$_.CPU}} | Sort-Object CPUsec -Descending | Format-Table -AutoSize
