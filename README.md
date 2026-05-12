# AI Prophecy Index

AI Prophecy Index is a sourced accountability ledger for public AI forecasts. It tracks predictions from Carl Shulman, Leopold Aschenbrenner, and Ajeya Cotra, compares them with real AI events, and records how each claim is currently scored.

## Routes

- `/` - homepage, tracker, filters, charts, event rail, and summary scorecards
- `/thinkers/shulman` - Carl Shulman profile and resources
- `/thinkers/aschenbrenner` - Leopold Aschenbrenner profile and resources
- `/thinkers/cotra` - Ajeya Cotra profile and resources
- `/privacy` - privacy and legal notices

## Project Structure

- `src/app/` - Next.js App Router pages and metadata
- `src/components/` - homepage, timeline, chart, profile, and shared UI components
- `src/data/` - prediction records, real event records, milestones, and profile data
- `src/lib/constants.ts` - site freshness date, status labels, colours, and topic tags
- `src/lib/utils.ts` - scoring/count helpers
- `docs/superpowers/` - earlier implementation plans and design specs
- `tasks/todo.md` - active execution checklist and review notes
- `tasks/session-log.md` - adjacent context that should not necessarily enter the prediction dataset
- `artifacts/html/` - richer Codex-generated audit, plan, and review artifacts

## Local Development

```bash
npm install
npm run dev
```

The app defaults to Next.js dev server behaviour. When running multiple projects, use an explicit port:

```bash
npm run dev -- --port 4562 --hostname 127.0.0.1
```

Canonical URL: `https://ai-prophecy-index.vercel.app/`. The metadata, sitemap, and robots routes use `NEXT_PUBLIC_SITE_URL` when set, and otherwise fall back to this Vercel URL.

## Validation

Run these before treating a UI or data change as done:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

For visual/task-flow changes, also run a real-browser smoke check on desktop and mobile widths. Verify:

- first viewport explains the product and exposes the tracker path
- filters work for thinker, status, and topic
- year sections expand/collapse
- prediction cards and event cards expand with keyboard and pointer input
- evidence, references, and source links are reachable
- thinker profile routes return cleanly to the tracker
- `/robots.txt` and `/sitemap.xml` return the expected public routes
- privacy/legal copy and footer freshness match the current dataset

## Data Update Notes

Prediction data lives in:

- `src/data/shulman.ts`
- `src/data/aschenbrenner.ts`
- `src/data/cotra.ts`

Real events live in:

- `src/data/events.ts`

When updating records, keep the site verification-first:

- prefer source-backed changes over summary-only edits
- update `lastReviewed` when a prediction is re-evaluated
- keep adjacent but non-scoring context in `tasks/session-log.md`
- update `LAST_UPDATED` in `src/lib/constants.ts` when the public record freshness changes
- avoid changing scoring or factual claims without source evidence

## Deployment

Do not push or deploy from an audit/fix session unless explicitly instructed. In this repo, pushing `main` has previously functioned as a production promotion path.
