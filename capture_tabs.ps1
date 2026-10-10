Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

function Request($value) {
  Set-Content -Path 'D:\Alienware\.shot_request' -Value $value -NoNewline
}
function Capture($name) {
  $b = [System.Windows.Forms.Screen]::PrimaryScreen.Bounds
  $bmp = New-Object System.Drawing.Bitmap($b.Width, $b.Height)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.CopyFromScreen($b.X, $b.Y, 0, 0, $bmp.Size)
  $bmp.Save("D:\Alienware\docs\screenshots\$name.png")
  $g.Dispose(); $bmp.Dispose()
  Write-Host "captured $name"
}

Request "raise"
Start-Sleep -Milliseconds 2000

$tabs = [ordered]@{
  "01_dashboard" = "dashboard"
  "02_fans"      = "fans"
  "03_lighting"  = "lighting"
  "04_games"     = "games"
  "05_valorant"  = "valorant"
  "06_settings"  = "settings"
}
foreach ($t in $tabs.GetEnumerator()) {
  Request $t.Value
  Start-Sleep -Milliseconds 1300
  Capture $t.Key
}
Write-Host "all tabs captured"
