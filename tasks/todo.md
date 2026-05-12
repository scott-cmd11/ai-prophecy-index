# AI Prophecy Index - Audit And Improvement Checklist

## Current Checkpoint

- [x] Start goal and preserve safety limits: no push, deploy, production data changes, secrets, architecture rewrite, or AI/legal disclosure removal.
- [x] Read AGENTS.md, README.md, tasks/lessons.md, tasks/session-log.md, docs/superpowers specs/plans, package.json, next.config.ts, src/app, src/components, src/data, src/lib, and src/types.
- [x] Read relevant Next.js 16 docs for App Router pages/layouts, metadata, fonts, caching, Link behaviour, robots, sitemap, and CLI validation.
- [x] Move work off main to `codex/ai-prophecy-audit-polish` while preserving the existing dirty worktree.
- [x] Baseline local site on `http://127.0.0.1:4562`.
- [x] Capture baseline desktop/mobile screenshots and interaction state.
- [x] Audit product clarity, visual design, accessibility, task flow, data/source trust, metadata, and route quality.
- [x] Create richer audit artifact: `artifacts/html/2026-05-12-ai-prophecy-index-audit.html`.
- [x] Implement Slice 1: scoring clarity, source trust cues, and public copy alignment.
- [x] Implement Slice 2: mobile tap targets, filter affordances, sticky stats clarity, and profile navigation wording.
- [x] Implement Slice 3: metadata/discoverability and route freshness.
- [x] Validate with `npm run lint`.
- [x] Validate with `npm run build`.
- [x] Run real-browser desktop/mobile smoke checks and capture after screenshots.
- [x] Add review notes, commands, screenshots, and remaining risks.

## Baseline Evidence

- Desktop first viewport: `artifacts/visuals/baseline-home-desktop.png`
- Mobile first viewport at 390px: `artifacts/visuals/baseline-home-mobile-390.png`
- Desktop tracker viewport: `artifacts/visuals/baseline-tracker-desktop.png`
- Desktop expanded evidence state: `artifacts/visuals/baseline-expanded-desktop.png`
- Mobile tracker at 390px: `artifacts/visuals/baseline-tracker-mobile-390.png`
- Browser audit JSON: `artifacts/visuals/baseline-browser-audit.json`

## Final Evidence

- Desktop first viewport: `artifacts/visuals/final-home-desktop.png`
- Mobile first viewport at 390px: `artifacts/visuals/final-home-mobile-390.png`
- Desktop tracker viewport: `artifacts/visuals/final-tracker-desktop.png`
- Desktop expanded evidence/event state: `artifacts/visuals/final-expanded-desktop.png`
- Mobile tracker at 390px: `artifacts/visuals/final-tracker-mobile-390.png`
- Cotra profile desktop: `artifacts/visuals/final-cotra-desktop.png`
- Cotra profile mobile at 390px: `artifacts/visuals/final-cotra-mobile-390.png`
- Browser smoke JSON: `artifacts/visuals/final-browser-smoke.json`

## Audit Findings

- First viewport is strong, but the scoring method is still under-explained for an accountability product.
- Mobile has no horizontal overflow at 390px, but many core tap targets are only 12-29px tall.
- Sticky stats avoid zero states, but mobile labels compress the meaning of hit rate and open/resolved status.
- Filter controls rely too much on colour and do not provide an explicit all-topics affordance.
- Event-to-prediction relationships are implied by year rather than stated in the UI.
- Evidence expansion works, but AI-assisted assessment labelling is weaker than the privacy/legal copy promises.
- Profile navigation works, but "Photo" links often point to profile/source pages, not direct photos.
- Metadata is thin: no sitemap/robots route and no canonical/Twitter metadata.
- Turbopack dev server hit a locked generated browser profile under `output/`; webpack dev fallback worked.

## Acceptance Criteria

- [x] First viewport explains what the site is, who it is for, and why the record matters.
- [x] Users can scan the record, filter by thinker/status/topic, inspect claims, compare real events, and open sources.
- [x] Mobile at 390px is readable and tappable with no overlap.
- [x] Sticky stats never show misleading zero states and clearly name the hit-rate denominator.
- [x] Profiles connect cleanly back to relevant tracker context.
- [x] Metadata, README, privacy/legal, and public copy match the current site and all three thinkers.
- [x] Source trust is clearer for predictions and real events without changing scores or factual claims.
- [x] `npm run lint` passes.
- [x] `npm run build` passes.
- [x] Browser smoke checks and screenshots are documented.

## Review

Completed on 2026-05-12.

Commands and checks run:

- `npm run lint` - passed.
- `npm run build` - passed; Next.js generated `/`, `/privacy`, `/robots.txt`, `/sitemap.xml`, and all three thinker routes as static routes.
- Real-browser desktop/mobile smoke checks on `http://127.0.0.1:4562` - passed.
- Route checks for `/robots.txt`, `/sitemap.xml`, `/privacy`, and `/thinkers/cotra` - returned 200.
- Mobile 390px audit - no horizontal overflow and no button/link targets under 32px after final polish.
- Profile back-link check - Cotra profile returns to `/#tracker`.

Implemented:

- Added a compact scoring rubric explaining status, resolved hit rate, and real-event context.
- Added inline AI-assisted assessment labels in expanded prediction evidence.
- Added real-event source trust language and ledger review date.
- Improved filter pills with larger tap targets, focus states, clearer active states, all-topics reset, and final-thinker lockout.
- Updated sticky stats to say `Hit rate`, show open counts on mobile, and avoid ambiguous filtered-state wording.
- Improved source/profile/footer link target sizes and renamed profile-source links away from `Photo`.
- Added sitemap, robots, canonical/open graph/Twitter metadata, shared site constants, and README validation notes.
- Aligned privacy/legal and footer copy with the actual AI-assisted labels.
- Added accessible chart summaries/tables for the analysis charts.

Remaining product decisions:

- Canonical production URL confirmed by Scott: `https://ai-prophecy-index.vercel.app/`. The current fallback in `src/lib/site.ts` matches it.
- Consider a later data-model pass for explicit event-to-prediction relationships rather than year-level comparison only.
- Consider adding richer per-event review metadata if the real-events ledger becomes a higher-trust source surface.
