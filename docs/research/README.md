# Source audit and provenance

This directory records evidence about the site's source, deployment, and public boundaries. Research informs `docs/planning/PLAN.md` but does not independently authorize implementation.

## Authoritative bootstrap source

The new repository was bootstrapped from:

- `FromAriel/CODEXVault_GODOT`
- `tools/aw/`
- commit `245ac078195304c5bf18c93c36abc5eafd77acba`

The deployed `tools/aw/` source was selected because it is newer than both local handoff generations found under `J:\WEB\arielwilliams.com`:

- `ariel-williams-mini-site.zip`
- the extracted `ariel-williams-mini-site` directory

The loose portfolio HTML, broader GitHub Pages portfolio alternative, and standalone Codex Signal Field are reference artifacts, not production authority for this repository.

## Production behavior at bootstrap

- Plain HTML, CSS, and JavaScript; no framework or build system.
- GitHub Pages deployment previously lived at `/CODEXVault_GODOT/tools/aw/`.
- Apex and `www` were forwarded by Squarespace to that path.
- Formspree is contacted only after a visitor submits the readiness questionnaire.
- No passive analytics, third-party scripts, cookies, or remote fonts are present in the reviewed source.
- The activity dataset covers 317 days from August 30, 2025 through July 12, 2026 and totals 29.8894773 billion recorded tokens.

## DNS boundary at bootstrap

At repository bootstrap, Squarespace still owns the active redirect. Its forwarding preset contains four Squarespace apex `A` records and `CNAME www -> ext-sq.squarespace.com`. The domain also has unrelated `_domainconnect` and Google verification CNAME records that must be preserved during cutover.

No Squarespace record may be removed merely because this repository exists. DNS mutation requires the separate cutover gate in `PLAN.md`.

## Current DNS state — 2026-08-09

The later authorized cutover removed Squarespace forwarding and replaced the conflicting web records. The current Squarespace record set is:

- `A @ -> 185.199.108.153`
- `A @ -> 185.199.109.153`
- `A @ -> 185.199.110.153`
- `A @ -> 185.199.111.153`
- `CNAME www -> fromariel.github.io`
- preserved `CNAME _domainconnect -> _domainconnect.domains.squarespace.com`
- preserved Google verification CNAME

The `www` record was added after the initial audit found a partial cutover in which the apex pointed to GitHub but `www` returned `NXDOMAIN`. DNS propagation, GitHub certificate issuance, and HTTPS enforcement remain separate acceptance checks.

## Current usage-data provenance

The current combined-history refresh is documented in [`CODEX_USAGE_REFRESH_2026-10-19.md`](CODEX_USAGE_REFRESH_2026-10-19.md). It retains older recorded values from the [August 9 snapshot](CODEX_USAGE_REFRESH_2026-08-09.md), extends through October 18, and applies Ariel's explicit designation of nineteen zero days. Earlier bootstrap and snapshot figures remain historical evidence.

## Presentation snapshot provenance — 2026-10-19

The twelve local presentation pages and their fixed image captures are documented in [`PAI_SNAPSHOTS_2026-10-19.md`](PAI_SNAPSHOTS_2026-10-19.md). That record identifies the source revision, exact footer mapping, capture timestamp, hashes, transcript method, local checks, and pending browser/publication gates. The Google Slides source and inserted video remain unchanged.

## Validation interpretation

Static source checks and a successful GitHub Pages build establish artifact integrity. They do not by themselves validate:

- DNS propagation;
- custom-domain certificate issuance;
- search-engine behavior;
- external public claims;
- delivery through Formspree;
- complete keyboard, screen-reader, responsive, or performance acceptance.
