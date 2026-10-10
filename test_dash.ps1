# Trigger dashboard open via the app's shot request, then capture full virtual screen
Set-Content -Path 'D:\Alienware\.shot_request' -Value 'VALORANT'
Start-Sleep -Seconds 4
Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing
$b = [System.Windows.Forms.SystemInformation]::VirtualScreen
Write-Host ("VirtualScreen: " + $b.X + "," + $b.Y + " " + $b.Width + "x" + $b.Height)
$bmp = New-Object System.Drawing.Bitmap($b.Width, $b.Height)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.CopyFromScreen($b.X, $b.Y, 0, 0, $bmp.Size)
$bmp.Save("D:\Alienware\docs\screenshots\07_second_screen.png")
$g.Dispose(); $bmp.Dispose()
Write-Host "captured second screen"
# enumerate monitors for the record
[System.Windows.Forms.Screen]::AllScreens | ForEach-Object { Write-Host ($_.DeviceName + " " + $_.Bounds.ToString() + " Primary=" + $_.Primary) }
