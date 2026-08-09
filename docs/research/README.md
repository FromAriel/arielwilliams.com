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

## Current DNS boundary

At repository bootstrap, Squarespace still owns the active redirect. Its forwarding preset contains four Squarespace apex `A` records and `CNAME www -> ext-sq.squarespace.com`. The domain also has unrelated `_domainconnect` and Google verification CNAME records that must be preserved during cutover.

No Squarespace record may be removed merely because this repository exists. DNS mutation requires the separate cutover gate in `PLAN.md`.

## Validation interpretation

Static source checks and a successful GitHub Pages build establish artifact integrity. They do not by themselves validate:

- DNS propagation;
- custom-domain certificate issuance;
- search-engine behavior;
- external public claims;
- delivery through Formspree;
- complete keyboard, screen-reader, responsive, or performance acceptance.
