# Changelog

## Unreleased

### Added

- Angular web platform generation via `npx ns-web angular` (outputs to `platforms/angular`).
- Framework auto-detection for `npx ns-web build` (Vue/Angular) based on `package.json` or `nsWeb.framework`.
- Angular component adapter and composables under `angular/`, aligned with Vue `core/` APIs.
- Unit tests covering Vue/Angular parity, generation output, and framework selection.

