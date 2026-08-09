# Codex usage refresh — 2026-08-09

## Authority and retrieval

Ariel authorized this refresh to replace the rounded historical activity record with the authenticated account response and extend it through the latest complete calendar day.

- Retrieval script: local `Get-CodexUsage.ps1` audit copy; the script itself is not committed
- Script SHA-256: `87E79065BF95248518D3A565CAB280908E13973B5A2E56AA299FA56381CE899B`
- Codex executable: authenticated Codex CLI
- Codex CLI version: `0.146.0`
- Account method: `account/usage/read`
- Retrieved at: `2026-08-09T13:55:40.3147207Z`
- Requested start: `2025-08-30`
- Stable publication cutoff: `2026-08-08`

The retrieval initially included August 9 for diagnostics. That date returned no bucket and was excluded because the current calendar day is incomplete and may change after publication.

## Interpretation boundary

The account endpoint returns one exact integer `tokens` value for each supplied daily bucket. It does not expose a component breakdown for cached, input, output, or reasoning tokens, so the website describes the values only as the aggregate Codex tokens returned by the authenticated account endpoint.

The script does not send its requested date range to the server. It indexes the returned `startDate` buckets and then constructs the inclusive local calendar. A date without a returned bucket is therefore unknown or not supplied by that response; it is not evidence of a confirmed zero-token day.

The public data model preserves that distinction:

```text
reported date     -> exact nonnegative integer token count
not-returned date -> null
```

## Published snapshot

| Property | Value |
|---|---:|
| Calendar range | 2025-08-30 through 2026-08-08 |
| Calendar days | 344 |
| Reported days | 332 |
| Dates without a returned bucket | 12 |
| Exact reported total | 50,299,607,466 tokens |
| Average per reported day | 151,504,842 tokens |
| Peak | 1,782,168,715 tokens |
| Peak date | 2026-07-17 |

The twelve dates without a returned bucket are:

- 2025-10-01
- 2025-10-02
- 2026-02-04
- 2026-02-23
- 2026-03-24
- 2026-04-19
- 2026-04-20
- 2026-04-21
- 2026-04-22
- 2026-04-27
- 2026-06-07
- 2026-06-08

The account response's lifetime-token total equaled the sum of the 332 returned daily buckets. This equality is a retrieval sanity check, not a claim that the endpoint exposes every historical accounting component.

## Comparison with the bootstrap dataset

The bootstrap dataset contained 317 calendar rows through July 12 and stored usage in rounded millions. The refreshed snapshot:

- appends 27 calendar rows from July 13 through August 8;
- replaces all 305 previously reported daily values with the endpoint's exact integers;
- changes the 12 former synthetic zero rows to `null` because the endpoint did not return buckets for those dates;
- raises the overlap-period total by 4,727,503 tokens after exact historical correction;
- includes seven historical reported-day corrections larger than 50,000 tokens, five larger than 100,000, and one larger than one million;
- has a largest historical correction of +4,512,308 tokens on April 5, 2026.

These are full-snapshot corrections, not merely a rounded append.

## Repeatable refresh procedure

Use trusted local script and Codex executable paths supplied outside the repository. Keep the raw response outside the repository, publish through the latest complete local calendar day, and convert every non-`reported` date to `null` rather than zero.

```powershell
$scriptPath = '<trusted local path>\Get-CodexUsage.ps1'
$codexPath = '<trusted absolute path>\codex.cmd'
$cutoff = (Get-Date).Date.AddDays(-1)
$usage = (& $scriptPath `
    -StartDate ([datetime]'2025-08-30') `
    -EndDate $cutoff `
    -Format Json `
    -CodexPath $codexPath `
    -TimeoutSec 60) | ConvertFrom-Json

$siteRows = @($usage.DailyUsage | ForEach-Object {
    [pscustomobject]@{
        date = $_.Date
        tokens = if ($_.Status -eq 'reported') { [long]$_.Tokens } else { $null }
    }
})
```

Before publication, assert that the rows start on the intended date, end on the selected cutoff, are unique, sorted, and calendar-contiguous. Every `tokens` value must be either a nonnegative integer or `null`. Recompute the total, reported-day average, not-returned count, and peak directly from those rows, then compare the results with the static HTML fallbacks. Do not derive published counts from the script's rounded `TokensBillions` display field, and do not commit the raw JSON response.

## Transformation and privacy

Only the date, exact daily token integer, and null status are published. The raw JSON response is temporary and must not be committed because it also contains the local executable path and opaque account-summary fields. No prompts, messages, project paths, session identifiers, or raw logs are published.

`assets/signal-field.js` derives millions only for visual scaling. Totals, averages, exact table values, and tooltips derive from the integer token source. Static HTML fallbacks must match the same snapshot so no-JavaScript and initialization-failure states do not show stale claims.
