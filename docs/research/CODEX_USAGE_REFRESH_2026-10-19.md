# Combined Codex usage refresh — October 19, 2026

## Authorization and sources

Ariel authorized updating and publishing the website tracker through October 18, preserving older recorded values, and labeling the nineteen dates without returned buckets as zero. This explicit instruction supersedes the previous null-only presentation policy for these nineteen dates. They are user-designated zeros, not endpoint-confirmed zero buckets.

- Current authenticated account method: `account/usage/read` through the previously audited local `Get-CodexUsage.ps1`.
- Script SHA-256 remains `87E79065BF95248518D3A565CAB280908E13973B5A2E56AA299FA56381CE899B`.
- Codex CLI: `0.163.0-alpha.10.2`.
- Retrieval: `2026-10-19T16:21:06.4706574Z`.
- Completed-day cutoff: October 18, 2026, in America/Phoenix; October 19 is excluded.
- Historical source: published August 9 snapshot documented in `CODEX_USAGE_REFRESH_2026-08-09.md`, preserved in repository history before this refresh.
- Raw private account response and intermediate files remain outside the repository. Only dates, exact daily counts, and the user-designated-zero flag appear in the runtime dataset.

## Merge rule and preservation

For each calendar date, use the latest returned integer when present. Otherwise retain a previously recorded integer from the August 9 snapshot. For the nineteen remaining dates, store `tokens: 0` with `designatedZero: true` per Ariel's instruction.

The latest response returns 348 daily buckets within the requested range, starting October 19, 2025. It omits 48 older days already recorded in the website snapshot. Those values are preserved exactly and contribute 3,154,444,338 tokens. Sixty-four newly returned dates extend the old cutoff. Two overlapping historical values are corrected from the latest response:

| Date | Previous | Current | Change |
|---|---:|---:|---:|
| 2026-08-04 | 984,472,942 | 984,084,687 | -388,255 |
| 2026-08-05 | 93,106,343 | 93,049,822 | -56,521 |

All other previously recorded integers match their retained or newly retrieved value.

## Published dataset

| Measure | Value |
|---|---:|
| Calendar range | 2025-08-30 through 2026-10-18 |
| Calendar days | 415 |
| Days with recorded counts | 396 |
| User-designated zero days | 19 |
| Total | 69,676,267,577 tokens |
| Average per calendar day, including zeros | 167,894,620.6674699 tokens |
| Peak | 2,983,117,301 tokens |
| Peak date | 2026-08-11 |

The public compact labels are 69.7B total, 3B peak, and 167.9M average per calendar day. The average includes all 415 days; rankings use the 396 recorded-count days. The table displays zero for the nineteen designated dates. The summary explains their designation, the legend starts at Zero, and their tooltips state that Ariel designated zero where no bucket was returned.

Designated dates:

- 2025-10-01, 2025-10-02
- 2026-02-04, 2026-02-23
- 2026-03-24
- 2026-04-19, 2026-04-20, 2026-04-21, 2026-04-22, 2026-04-27
- 2026-06-07, 2026-06-08
- 2026-08-14, 2026-08-16, 2026-08-17, 2026-08-19, 2026-08-21
- 2026-09-03, 2026-09-07

The account-wide lifetime summary is not used as the completed-day website total. No cache/input/output component breakdown or billing claim is inferred from these aggregate counts.

## Validation and release

Before publication, source checks confirmed calendar continuity and uniqueness, exact integer counts, nineteen flagged zeros, preservation of all 48 archived days, only the two expected historical corrections, totals/peak/average, matching static fallbacks, JavaScript syntax (including inline scripts), and JSON-LD parsing. HTML/asset references and whitespace are checked separately. This is a zero-build static release; no compilation step is required.

Publication commit, Pages build, and public browser verification will be recorded after deployment. Slide snapshot pages, the original deck, video, DNS settings, and form destinations are unchanged by this refresh.
