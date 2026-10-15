# LevelPlay app-ads.txt helper for ratndevelopers.vercel.app (Play Console developer website).
#
# Full list: Unity Monetization > Settings > Organization > App-ads.txt > Show full list
# Paste into public\app-ads.txt, then run this to ensure ownerdomain + ironSource DIRECT:
#   .\apply-levelplay-app-ads.ps1 -PublisherId YOUR_PUBLISHER_ID
#
# Publisher ID: LevelPlay > Account (avatar) > Account > API (NOT App Key 28be75e85)
# Deploy: npm run build && git push (Vercel auto-deploy) or npx vercel --prod

param(
  [Parameter(Mandatory = $true)]
  [string]$PublisherId
)

$ErrorActionPreference = 'Stop'
$OutFile = Join-Path $PSScriptRoot 'public\app-ads.txt'
$OwnerDomainLine = 'ownerdomain=ratndevelopers.vercel.app'
$IronSourceCertId = '79929e88b2ba73bc'
$id = $PublisherId.Trim()

if (-not (Test-Path $OutFile)) {
  throw "Missing $OutFile"
}

$content = Get-Content -Path $OutFile -Raw -Encoding UTF8
$content = $content -replace '(?im)^ownerdomain=.*\r?\n', ''
$content = $content -replace '(?im)^ironsrc\.com,.*\r?\n', ''
$content = $content.TrimStart()

$header = @(
  $OwnerDomainLine
  "ironsrc.com, $id, DIRECT, $IronSourceCertId"
) -join "`n"

$final = $header + "`n" + $content + "`n"
[System.IO.File]::WriteAllText($OutFile, $final, [System.Text.UTF8Encoding]::new($false))
Write-Host "Updated $OutFile (ownerdomain + ironSource DIRECT)."
Write-Host 'Next: npm run build, then deploy to Vercel.'
Write-Host 'Verify: https://ratndevelopers.vercel.app/app-ads.txt'
