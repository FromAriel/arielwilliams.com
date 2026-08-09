# Ariel Williams personal site

This repository is the authoritative source for Ariel Williams's public personal and consulting site.

The site is a dependency-free static bundle intended for GitHub Pages. It presents Ariel's work as an AI consultant, software builder, writer, artist, and public explainer; includes an interactive Codex activity field; and offers a fixed-price AI-readiness presentation and Q&A.

## Source provenance

The initial site files were copied from `FromAriel/CODEXVault_GODOT/tools/aw/` at source commit:

```text
245ac078195304c5bf18c93c36abc5eafd77acba
```

They were moved to this repository root so the site can be served directly from its own GitHub Pages project instead of through the `/CODEXVault_GODOT/tools/aw/` path.

## Structure

- `index.html` contains the page structure, global styles, general interactions, and Formspree submission behavior.
- `assets/signal-field.css` contains the scoped Codex activity-field styles.
- `assets/signal-field.js` contains the exact-token activity dataset, returned-bucket status, derived metrics, Canvas rendering, and accessible interaction behavior.
- `assets/og-card.png` is the production social-sharing image.
- `assets/og-card.svg` is the editable social-card source.
- `favicon.svg` is the browser icon.
- `CNAME` declares `www.arielwilliams.com` as the canonical GitHub Pages hostname.
- `.nojekyll` disables Jekyll processing.

## Local use

There is no dependency installation or build step. The site can be inspected as static files. Browser behavior should be tested through an HTTP server rather than relying solely on `file://` behavior, but do not start the full site unless the current task authorizes it.

## Deployment

GitHub Pages publishes the `main` branch from the repository root.

The intended domain behavior is:

```text
arielwilliams.com -> https://www.arielwilliams.com/
www.arielwilliams.com -> this GitHub Pages site
```

Squarespace DNS now points the apex to GitHub Pages and `www` to `fromariel.github.io`; the old forwarding rule is removed. The unrelated Domain Connect and Google verification CNAMEs remain preserved. GitHub Pages must issue the custom-domain certificate before HTTPS enforcement is enabled.

## External behavior and privacy

The site does not include passive analytics, tracking scripts, cookies, external fonts, or third-party frontend libraries. The readiness questionnaire sends visitor-provided information to Formspree only when the visitor submits it. Direct email and copy-to-clipboard fallbacks remain available.

## Planning

`docs/planning/PLAN.md` is the project source of truth. `docs/planning/CHECKLIST.md` tracks current execution. `docs/research/README.md` records the source audit and provenance boundary.
