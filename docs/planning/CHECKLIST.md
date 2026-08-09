# Ariel Williams website checklist

This checklist implements `PLAN.md`. A checked item means current evidence exists; it does not imply later DNS or release gates are complete.

## Repository bootstrap

- [x] Confirm GitHub CLI authentication as `FromAriel`.
- [x] Confirm `FromAriel/arielwilliams.com` does not already exist.
- [x] Pin production source commit `245ac078195304c5bf18c93c36abc5eafd77acba`.
- [x] Copy the current production site files into a new repository root.
- [x] Add root `AGENTS.md`.
- [x] Add `PLAN.md`, `CHECKLIST.md`, and the research entry point.
- [x] Add the intended `CNAME` value, `www.arielwilliams.com`.
- [x] Verify copied source parity and static integrity checks.
- [x] Initialize the local Git repository on `main`.
- [x] Review the complete initial diff and staged scope.
- [x] Create the public GitHub repository.
- [x] Commit and push the initial `main` branch.

## GitHub Pages

- [x] Enable Pages from `main` and `/ (root)`.
- [x] Confirm the Pages build reaches `built` status.
- [x] Confirm the default project Pages URL redirects to the custom hostname and validate the forced GitHub origin response.
- [x] Attach `www.arielwilliams.com` as the GitHub custom domain.
- [x] Record Pages build `1141063827` and deployment commit `4c49242b69db5b24c8935b820a8a5a989f8d71bc`.
- [x] Confirm the existing Squarespace forwarding rule still serves the current site.

## Squarespace DNS cutover — not authorized in repository-bootstrap turn

- [ ] Capture the final pre-change forwarding and DNS records.
- [ ] Preserve `_domainconnect` and the Google verification CNAME.
- [ ] Remove the Squarespace Domain Forwarding rule/preset.
- [ ] Remove any restored or remaining conflicting Squarespace apex/`www` records.
- [ ] Add `CNAME www -> fromariel.github.io`.
- [ ] Add the four GitHub Pages apex `A` records.
- [ ] Optionally add GitHub Pages `AAAA` records.
- [ ] Verify public DNS resolution.
- [ ] Verify `arielwilliams.com` redirects to `www.arielwilliams.com`.
- [ ] Verify `www.arielwilliams.com` remains in the address bar.
- [ ] Enable and verify GitHub Pages HTTPS.
- [ ] Verify production assets and primary interactions.
- [ ] Run an explicitly authorized Formspree test submission.

## Deferred quality work

- [ ] Document Codex activity data provenance and refresh procedure.
- [ ] Decide whether the activity end date should be refreshed.
- [ ] Review public credential wording and outbound links.
- [ ] Align privacy wording with Formspree data handling.
- [ ] Add repeatable HTML, link, accessibility, and responsive-release checks.
