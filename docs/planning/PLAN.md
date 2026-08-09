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

## Current phase: repository bootstrap complete; DNS cutover pending

The active phase separates the website from `CODEXVault_GODOT` and gives it an authoritative repository and root-level GitHub Pages deployment.

### Approved scope

1. Create the public repository `FromAriel/arielwilliams.com`.
2. Copy the exact production AW source from `FromAriel/CODEXVault_GODOT/tools/aw/` into the new repository root.
3. Establish repository governance, planning, and source-provenance documents.
4. Validate the zero-build static release artifact.
5. Publish `main` through GitHub Pages from `/ (root)`.
6. Attach `www.arielwilliams.com` as the GitHub Pages custom domain.
7. Stop before changing Squarespace DNS; treat DNS cutover as a separately verified step.

### Explicitly out of scope for this phase

- Changing, deleting, or replacing Squarespace forwarding or DNS records.
- Submitting the production Formspree questionnaire.
- Redesigning page content or visual behavior.
- Refreshing the Codex usage dataset.
- Rewriting public credentials or claims.
- Removing the legacy AW copy from `CODEXVault_GODOT`.

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

The current Squarespace forwarding rule remains in place until the new default Pages deployment and GitHub-side custom-domain attachment are verified.

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

As of 2026-08-09:

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

DNS cutover is a later gate and requires:

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

## Next likely slice

After repository bootstrap is accepted, perform a controlled Squarespace DNS cutover with before/after screenshots, exact record inventory, bounded propagation checks, GitHub domain verification, and HTTPS validation.
