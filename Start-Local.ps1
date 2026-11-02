param(
    [ValidateRange(1024, 65535)]
    [int]$Port = 4321
)

$ErrorActionPreference = 'Stop'
$astroEntry = Join-Path $PSScriptRoot 'node_modules\astro\bin\astro.mjs'
if (-not (Test-Path -LiteralPath $astroEntry -PathType Leaf)) {
    throw 'Install the website dependencies first with npm ci in the website directory.'
}
$nodeCommand = Get-Command node -ErrorAction Stop
$previousTelemetry = $env:ASTRO_TELEMETRY_DISABLED
try {
    $env:ASTRO_TELEMETRY_DISABLED = '1'
    Push-Location -LiteralPath $PSScriptRoot
    try {
        & $nodeCommand.Source $astroEntry dev --host 127.0.0.1 --port $Port
        if ($LASTEXITCODE -ne 0) { throw "Astro exited with code $LASTEXITCODE." }
    } finally { Pop-Location }
} finally {
    $env:ASTRO_TELEMETRY_DISABLED = $previousTelemetry
}
