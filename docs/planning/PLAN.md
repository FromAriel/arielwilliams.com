# Ariel Williams website plan

## Authority

This document is the primary project source of truth. `CHECKLIST.md` is its execution companion. Research and provenance evidence live under `docs/research/`.

## Product

The project is Ariel Williams's public personal and consulting website. It must:

- explain Ariel's work as an AI consultant, software builder, writer, artist, and public explainer;
- provide credible public evidence through selected work and the bounded Codex activity record;
- offer a clear, low-friction AI-readiness engagement;
- preserve direct email and copy-based contact fallbacks;
- remain fast, accessible, private by default, and independent of a frontend framework.

## Current phase: exact usage refresh and domain cutover acceptance

Repository bootstrap is complete. The active follow-up refreshes the public Codex activity claim from the authenticated account endpoint and finishes verification of the GitHub Pages domain cutover.

### Completed repository-bootstrap scope

1. Create the public repository `FromAriel/arielwilliams.com`.
2. Copy the exact production AW source from `FromAriel/CODEXVault_GODOT/tools/aw/` into the new repository root.
3. Establish repository governance, planning, and source-provenance documents.
4. Validate the zero-build static release artifact.
5. Publish `main` through GitHub Pages from `/ (root)`.
6. Attach `www.arielwilliams.com` as the GitHub Pages custom domain.
7. Stop before changing Squarespace DNS; treat DNS cutover as a separately verified step.

### Explicitly out of scope for repository bootstrap

- Changing, deleting, or replacing Squarespace forwarding or DNS records.
- Submitting the production Formspree questionnaire.
- Redesigning page content or visual behavior.
- Refreshing the Codex usage dataset.
- Rewriting public credentials or claims.
- Removing the legacy AW copy from `CODEXVault_GODOT`.

### Authorized follow-up scope — 2026-08-09

1. Retrieve the complete available daily Codex usage response with the locally audited `Get-CodexUsage.ps1` script.
2. Publish only completed calendar days through August 8, 2026.
3. Store exact integer token counts and preserve absent response buckets as `null`, not zero.
4. Update derived metrics, accessible output, tooltips, legends, static fallbacks, and provenance records.
5. Publish the reviewed change through an `agent/refresh-codex-usage` branch and draft pull request.
6. Complete the Squarespace web-record cutover while preserving Domain Connect and Google verification records.
7. Verify DNS propagation, GitHub certificate issuance, HTTPS enforcement, and public hostname behavior before closing the domain gate.

### Explicitly out of scope for the follow-up

- Publishing raw account JSON, prompts, messages, session identifiers, project paths, or opaque account-summary fields.
- Publishing a partial current-day bucket.
- Submitting the production Formspree questionnaire without separate authorization.
- Redesigning the wider page or changing unrelated public claims.

## Source and provenance

Initial production source:

- Repository: `FromAriel/CODEXVault_GODOT`
- Path: `tools/aw/`
- Commit: `245ac078195304c5bf18c93c36abc5eafd77acba`

The copied production files must remain content-equivalent to that pinned source during repository bootstrap. Repository-only files such as `AGENTS.md`, `README.md`, `CNAME`, `.gitattributes`, and `docs/` are intentional additions.

## Architecture

- Static HTML entry point: `index.html`
- Global presentation and behavior: inline in `index.html`
- Activity-field presentation: `assets/signal-field.css`
- Activity dataset and Canvas behavior: `assets/signal-field.js`
- Social image: `assets/og-card.png`
- Editable social source: `assets/og-card.svg`
- Browser icon: `favicon.svg`
- Hosting: GitHub Pages, `main`, `/ (root)`
- Canonical custom domain: `www.arielwilliams.com`
- Form delivery: Formspree, only on intentional visitor submission
- Runtime dependencies: none
- Build step: none

## Domain design

The desired steady state is:

```text
arielwilliams.com -> permanent redirect to https://www.arielwilliams.com/
www.arielwilliams.com -> GitHub Pages site, hostname retained in the browser
```

GitHub must be configured with `www.arielwilliams.com`, not the apex hostname, so GitHub owns the canonical redirect direction. DNS must eventually use:

- `CNAME www -> fromariel.github.io`
- GitHub Pages apex `A` records for `@`

The Squarespace forwarding rule is now removed. The apex has the four GitHub Pages `A` records and `www` has `CNAME -> fromariel.github.io`. Domain Connect and Google verification records remain preserved. Certificate issuance and HTTPS enforcement are still pending acceptance checks.

## Release gates

Repository bootstrap is complete only when:

- the target repository exists and is public;
- `main` contains the intended source and governance files;
- copied production files match the pinned source semantically and binaries match exactly;
- JavaScript syntax, JSON-LD, local asset references, and in-page anchors validate;
- GitHub Pages reports a built deployment from `main` and `/`;
- the default Pages URL redirects to the registered custom hostname and the forced GitHub origin serves the intended site before DNS changes;
- GitHub reports `www.arielwilliams.com` as the configured custom domain;
- the working tree is clean and the exact commit is recorded;
- Squarespace remains unchanged.

## Repository-bootstrap evidence

At the initial 2026-08-09 bootstrap, before the later DNS changes:

- Public repository: `https://github.com/FromAriel/arielwilliams.com`
- Initial production commit: `4c49242b69db5b24c8935b820a8a5a989f8d71bc`
- Pages source: `main`, `/ (root)`
- Pages build: `1141063827`, status `built`, no reported build error
- Custom domain registered by GitHub Pages: `www.arielwilliams.com`
- GitHub origin validation: an HTTP request forced to the GitHub Pages origin returned `200 OK` with the expected title, canonical URL, Open Graph URL, and activity-field script reference
- Default project URL behavior: `https://fromariel.github.io/arielwilliams.com/` redirects to the registered custom hostname
- Public DNS remains on Squarespace: `www` resolves to `ext-sq.squarespace.com`, while the apex resolves to the four Squarespace forwarding addresses
- Public `www` behavior remains unchanged: Squarespace returns the existing redirect to the legacy AW path
- HTTPS enforcement remains off until DNS points to GitHub and a certificate can be issued

## Current follow-up evidence

As of the authorized 2026-08-09 refresh:

- Baseline `main` commit and Pages build: `3f4ba62cd79a758f249247997b77de21fe15aab6`, build `1141068199`, status `built`
- Working branch: `agent/refresh-codex-usage`
- Usage retrieval: authenticated `account/usage/read` response at `2026-08-09T13:55:40.3147207Z`
- Stable data range: August 30, 2025 through August 8, 2026
- Data coverage: 344 calendar days, 332 returned buckets, 12 dates without a returned bucket
- Exact total: 50,299,607,466 reported tokens
- Peak: 1,782,168,715 tokens on July 17, 2026
- Squarespace forwarding: removed
- Apex DNS: all four GitHub Pages `A` records present
- `www` DNS: `CNAME -> fromariel.github.io` added after an initial `NXDOMAIN` audit; Google and Cloudflare public resolvers now report a 1,800-second TTL
- Preserved DNS: Domain Connect and Google verification CNAMEs remain present
- Remaining domain work: public propagation, matching certificate issuance, HTTPS enforcement, and browser acceptance

DNS cutover acceptance requires:

- preserving unrelated DNS verification/service records;
- removing the Squarespace forwarding preset;
- replacing only the conflicting apex and `www` records;
- verifying DNS resolution, apex-to-`www` direction, site assets, certificate issuance, and HTTPS enforcement;
- performing an explicitly authorized Formspree test separately.

## Decisions

### 2026-08-09 — dedicated repository

Use `FromAriel/arielwilliams.com` rather than the special `FromAriel.github.io` user-site repository. This isolates the personal-site custom domain from other `FromAriel` project Pages sites.

### 2026-08-09 — preserve the production implementation

Bootstrap from the exact deployed source under `CODEXVault_GODOT/tools/aw/`. Do not use the older ZIP or extracted mini-site snapshots as authority.

### 2026-08-09 — separate GitHub and DNS mutations

Create and validate the repository and Pages deployment before modifying Squarespace. This preserves the current public redirect until a replacement is ready.

### 2026-08-09 — exact usage values and missing-bucket semantics

Use the exact integer `tokens` values returned by `account/usage/read`. A date without a returned bucket is represented as `null` and disclosed as not returned; it is never converted into a claimed zero-use day.

### 2026-08-09 — stable completed-day cutoff

Publish through August 8, 2026, the latest completed local calendar day at retrieval time. Exclude August 9 because the current-day response may be incomplete or delayed.

## Next likely slice

Complete the usage-refresh pull request, then verify public DNS, GitHub certificate issuance, HTTPS enforcement, apex-to-`www` direction, the refreshed summary/table, and the production Pages deployment.
