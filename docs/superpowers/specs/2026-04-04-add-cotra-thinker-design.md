# Design: Add Ajeya Cotra as Third Thinker

**Date:** 2026-04-04
**Status:** Approved by user

---

## Context

The AI Prophecy Index currently tracks predictions from two thinkers: Carl Shulman (purple) and Leopold Aschenbrenner (orange). The user wants to add Ajeya Cotra — researcher at METR, formerly Open Philanthropy, author of the "biological anchors" AI timeline methodology and the *Planned Obsolescence* Substack — as a third tracked thinker. Her predictions span AI timeline forecasting, deceptive alignment risk, automation milestones, and self-sufficient AI definitions. Sources include two 80,000 Hours podcast episodes and four Substack posts.

---

## Decisions Made

| Decision | Choice | Rationale |
|---|---|---|
| Accent color | Emerald `#059669` | Distinct from purple/orange; earthy and credible; fits biological anchors methodology |
| Layout | Three equal columns | Symmetric, scales well; `ThinkersSection` widens from `max-w-2xl` to `max-w-4xl` |
| Predictions | 12 curated (see below) | Covers all major themes; spans 2026–2036 time horizons; 1 already confirmed |

**Note:** `#059669` is also used as `--confirmed` in `globals.css`. A separate `--accent-cotra` CSS variable keeps the two roles distinct. If visual collision is felt after rendering, nudge to `#16a34a`.

---

## Color Note

`#059669` is reused as `--confirmed` in `globals.css`. Since thinker accent colors (left border bars, name text) and status colors (badge dots, chart segments) serve visually separate roles this is acceptable. `--accent-cotra` is a distinct CSS variable name. If visual collision is felt after rendering, change `--accent-cotra` to `#16a34a` (one shade darker).

---

## Files to Create

### `src/data/cotra.ts`

Export `cotra: Thinker` with the following 12 predictions:

| id | Claim (summary) | Source | sourceUrl | date | category | status | confidence | year |
|---|---|---|---|---|---|---|---|---|
| ac-1 | Training may accidentally produce "more patient and careful deceivers" | 80,000 Hours Podcast | https://80000hours.org/podcast/episodes/ajeya-cotra-accidentally-teaching-ai-to-deceive-us/ | 2023-05-12 | AI Alignment | outstanding | high | 2027 |
| ac-2 | Agentic deployment of current models is riskier than scaling model size alone | 80,000 Hours Podcast | https://80000hours.org/podcast/episodes/ajeya-cotra-accidentally-teaching-ai-to-deceive-us/ | 2023-05-12 | AI Safety | in_progress | high | 2026 |
| ac-3 | Future models will develop gears-level situational awareness of their own nature as AI | 80,000 Hours Podcast | https://80000hours.org/podcast/episodes/ajeya-cotra-accidentally-teaching-ai-to-deceive-us/ | 2023-05-12 | AI Alignment | in_progress | medium | 2027 |
| ac-4 | Safety benchmarks become unreliable once models understand they are being evaluated | 80,000 Hours Podcast | https://80000hours.org/podcast/episodes/ajeya-cotra-accidentally-teaching-ai-to-deceive-us/ | 2023-05-12 | AI Safety | in_progress | high | 2027 |
| ac-5 | No major AI lab has quantitative commitments for safety resource allocation during "crunch time" | 80,000 Hours Podcast #235 | https://80000hours.org/podcast/episodes/ajeya-cotra-transformative-ai-crunch-time/ | 2026-02-17 | AI Safety | confirmed | high | 2026 |
| ac-6 | Top-expert-dominating AI — strictly dominating top humans across all cognitive tasks — expected in the early 2030s | 80,000 Hours Podcast #235 | https://80000hours.org/podcast/episodes/ajeya-cotra-transformative-ai-crunch-time/ | 2026-02-17 | AGI Timeline | outstanding | medium | 2032 |
| ac-7 | The "crunch window" between AI automating R&D and uncontrollable superintelligence will be roughly 12 months (range: 6 months to 6 years) | 80,000 Hours Podcast #235 | https://80000hours.org/podcast/episodes/ajeya-cotra-transformative-ai-crunch-time/ | 2026-02-17 | Superintelligence | outstanding | medium | 2033 |
| ac-8 | AI will play Pokémon as well as a typical 10-year-old by end of 2026 (~80% confidence) | Planned Obsolescence Substack | https://www.planned-obsolescence.org/p/ai-predictions-for-2026 | 2026-01-14 | Capability Benchmarks | in_progress | high | 2026 |
| ac-9 | AI will solve the hardest problem in the 2026 International Math Olympiad by year-end (~80% confidence) | Planned Obsolescence Substack | https://www.planned-obsolescence.org/p/ai-predictions-for-2026 | 2026-01-14 | Capability Benchmarks | in_progress | high | 2026 |
| ac-10 | AI task horizons on software engineering tasks will exceed 100 hours by end of 2026 (revised upward from original 24-hour forecast after Claude Opus 4.6 results) | Planned Obsolescence Substack | https://www.planned-obsolescence.org/p/i-underestimated-ai-capabilities | 2026-03-05 | Automation | in_progress | high | 2026 |
| ac-11 | Self-sufficient AI — capable of sustaining and growing its own population indefinitely without humans — is more likely than not within 10 years (~2036) | Planned Obsolescence Substack | https://www.planned-obsolescence.org/p/self-sufficient-ai | 2026-01-06 | AGI Timeline | outstanding | medium | 2036 |
| ac-12 | AI Research Adequacy — removing all humans from a leading AI lab would slow R&D by less than 25% — expected within roughly 2 years (~2027–2028) | Planned Obsolescence Substack | https://www.planned-obsolescence.org/p/six-milestones-for-ai-automation | 2026-04-03 | Automation | outstanding | high | 2028 |

**Bio:** `"Researcher at METR (Model Evaluation and Threat Research) and former technical AI safety lead at Open Philanthropy. Best known for the 'biological anchors' methodology for forecasting transformative AI timelines. Runs the Planned Obsolescence Substack and has twice publicly updated her forecasts toward shorter timelines as capabilities advanced faster than expected."`

**Slug:** `"cotra"`

---

## Files to Modify

### `src/data/milestones.ts` ⚠️
`TIMELINE_YEARS` currently ends at `2030`. Cotra has predictions targeting 2032, 2033, and 2036. Add those years:
```ts
export const TIMELINE_YEARS = [2024, 2025, 2026, 2027, 2028, 2030, 2032, 2033, 2036] as const;
```
Also add milestone entries for the new years in the `milestones` record:
```ts
2032: ["Cotra's top-expert-dominating AI window"],
2033: ["Cotra's crunch window begins"],
2036: ["Cotra's self-sufficient AI median"],
```

### `src/components/TimelineCard.tsx` ⚠️
Update the `thinker` prop type from `"shulman" | "aschenbrenner"` to `"shulman" | "aschenbrenner" | "cotra"`.

Replace the binary `accentColor` ternary with a lookup map:
```ts
const ACCENT: Record<"shulman" | "aschenbrenner" | "cotra", string> = {
  shulman: "var(--accent-shulman)",
  aschenbrenner: "var(--accent-aschenbrenner)",
  cotra: "var(--accent-cotra)",
};
const accentColor = ACCENT[thinker];
```

Replace the binary `thinkerLabel` ternary similarly:
```ts
const LABEL: Record<"shulman" | "aschenbrenner" | "cotra", string> = {
  shulman: "Shulman",
  aschenbrenner: "Aschenbrenner",
  cotra: "Cotra",
};
const thinkerLabel = LABEL[thinker];
```

### `src/components/YearSection.tsx` ⚠️
Update `MergedCard.thinker` union type from:
```ts
thinker: "shulman" | "aschenbrenner";
```
to:
```ts
thinker: "shulman" | "aschenbrenner" | "cotra";
```
This is a TypeScript type-only change. Without it the build will fail when `Timeline.tsx` pushes cotra cards into the merged array.

### `src/components/HeroSection.tsx` ⚠️
- Import `cotra` from `@/data/cotra`
- Change line 6 from:
  ```ts
  const allPredictions = [...shulman.predictions, ...aschenbrenner.predictions];
  ```
  to:
  ```ts
  const allPredictions = [...shulman.predictions, ...aschenbrenner.predictions, ...cotra.predictions];
  ```
  Without this, the hero stats bar silently undercounts — Cotra's 12 predictions never appear in totals or hit rate.

### `src/app/globals.css`
Add to the `:root` block under thinker accent colors:
```css
--accent-cotra: #059669;
```

### `src/components/ThinkersSection.tsx`
- Import `cotra` from `@/data/cotra`
- Change the outer container `max-w-2xl` to `max-w-4xl` so three columns have room to breathe. Note: the rest of the page uses `max-w-2xl`; this section will be visually wider than the timeline below it. This is acceptable as a deliberate "wide header" treatment.
- Change grid from `grid-cols-2` to `grid-cols-3`
- Add third column with `var(--accent-cotra)` border and name, `cotra.bio` text
- Include a Substack link (`https://www.planned-obsolescence.org`) in Cotra's bio column

### `src/components/Timeline.tsx`
- Import `cotra` from `@/data/cotra`
- Add `cotra: true` to `visibleThinkers` initial state (type: `{ shulman: boolean; aschenbrenner: boolean; cotra: boolean }`)
- Update `handleToggleThinker` signature to accept `"shulman" | "aschenbrenner" | "cotra"`
- Update the last-active guard (currently `return next.shulman || next.aschenbrenner ? next : prev`) to:
  ```ts
  return next.shulman || next.aschenbrenner || next.cotra ? next : prev;
  ```
- Add `cotra` predictions to `cardsByYear` interleave logic after aschenbrenner entries
- Add `shownBio.cotra` tracking alongside `shownBio.shulman` and `shownBio.aschenbrenner`

### `src/components/FilterBar.tsx`
- Update `FilterBarProps.visibleThinkers` type to include `cotra: boolean`
- Update `onToggleThinker` type to accept `"cotra"`
- Add Cotra filter pill with `var(--accent-cotra)` active styling

### `src/components/SummarySection.tsx`
- Import `cotra` from `@/data/cotra`
- Add `<ThinkerCard thinker={cotra} accentColor="var(--accent-cotra)" />`
- Change scorecard grid from `md:grid-cols-2` to `md:grid-cols-3` (all three cards side-by-side from the `md` breakpoint up — they are narrow but readable; use `lg:grid-cols-3` if preferred)
- Update AI disclosure text to name Cotra alongside Shulman and Aschenbrenner

### `src/lib/constants.ts`
- Update `LAST_UPDATED` to `"2026-04-04"`

---

---

## Part 2: Thinker Profile Pages

### New Route Structure
```
src/app/thinkers/
├── shulman/page.tsx
├── aschenbrenner/page.tsx
└── cotra/page.tsx
```

### Shared Components — `src/components/thinker-profile/`
All three HTML reference files are 95% identical in structure. Extract into:

| Component | Purpose |
|---|---|
| `ThinkerNav.tsx` | Sticky nav with logo + back link |
| `ThinkerHero.tsx` | Label, h1, subtitle, optional stats row (chips) or hero-note callout |
| `ThinkerBio.tsx` | 2-column bio card grid + full bio paragraph |
| `ResourceItem.tsx` | Single resource row: year, title, desc, link, optional tag |
| `ResourceSection.tsx` | Titled section wrapping multiple ResourceItems |

**Variations to handle via props:**
- `ThinkerHero`: `stats` prop (Shulman/Aschenbrenner) vs `callout` prop (Cotra "Coming soon")
- `ResourceItem`: `landmark` tag variant (Cotra only), `chapterList` variant (Aschenbrenner Situational Awareness chapters)
- Accent color passed as prop to all components

### Styling Approach
Use the codebase's existing CSS custom property system (`var(--accent-shulman)` etc.) and Tailwind classes, matching the existing page patterns. No new CSS files.

### Homepage Linkage
- Add a "Profile →" or "View profile" link in each thinker's column in `ThinkersSection.tsx` pointing to `/thinkers/[slug]`
- The homepage Cotra column shows bio + a "Predictions coming soon" note (no filter pill or timeline cards yet — those come when the full prediction data in Part 1 is wired up)

### Cotra "Coming Soon" Treatment
Add Cotra to `ThinkersSection` with bio and profile link, but **skip** wiring her into the Timeline, FilterBar, and SummarySection until the full prediction data from Part 1 is ready. This keeps Part 2 self-contained.

---

## Implementation Order

1. **Part 2 first** — profile pages + shared components + homepage links (self-contained, no data changes)
2. **Part 1 second** — `cotra.ts` data file + all timeline/filter/summary wiring

---

## Verification

1. Run `npm run dev` — confirm no TypeScript errors
2. Check ThinkersSection renders three equal columns with correct accent colors
3. Confirm Cotra filter pill appears in FilterBar and toggles correctly
4. Verify prediction cards for Cotra appear in the 2026, 2027, 2028, 2032, 2033, 2036 year sections
5. Confirm SummarySection scorecard shows all three thinkers with correct stats
6. Check that confirmed prediction (ac-5) shows with correct confirmed styling
7. Verify all source URLs link to correct 80K Hours and Substack pages
