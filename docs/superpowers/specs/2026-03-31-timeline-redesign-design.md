# AI Prediction Tracker — Timeline Redesign

## Overview

Rebuild the AI Prediction Tracker as a single-page editorial scroll experience. Two AI thinkers — Carl Shulman and Leopold Aschenbrenner — have their 28 predictions (14 each) displayed on a split-spine timeline, organized by target year, with scroll-triggered animations and sticky year waypoints. The design follows a high-contrast editorial aesthetic with bold typography, minimal color, and living status indicators.

## Design Decisions

| Decision | Choice | Alternatives Considered |
|----------|--------|------------------------|
| Audience/purpose | Editorial storytelling (The Pudding / Reuters Graphics style) | Portfolio showcase, analytical reference tool |
| Scroll model | Hybrid — natural scroll with sticky year waypoints | Scroll-hijacked cinematic, pure scroll-triggered |
| Timeline layout | Split spine — Shulman left, Aschenbrenner right, central vertical line | Interleaved river, layered landscape |
| Visual tone | High contrast editorial — massive typography, geometric, minimal color | Dark cinematic, dark organic/glassmorphism |
| Hero | Full-viewport cinematic intro with typographic statement + animated data teaser | Narrative cold open, data-first dashboard |
| Card interaction | Scroll-reveal with living status animations, inline expand on click | Static reveal, hover depth + modal, reveal-only |
| Year context | Milestone markers (2-3 real AI event chips per year) | One-liner phrase, no context |
| Site structure | Single-page scroll (all routes collapsed into one) | Hybrid with detail pages, full multi-page rebuild |

## Page Structure

Three acts in one continuous scroll:

### Act 1 — Hero (full viewport)

- Background: `#050507` (near-black)
- Massive Instrument Serif italic typography, centered
- Provocative framing line (e.g., editorial headline about two visions of AI's future)
- Two names with prediction counts animate in (count-up effect)
- Minimal scroll indicator at bottom (animated thin line or chevron)
- No navigation bar visible in the hero

### Act 2 — Timeline (the core experience)

- Central vertical spine: 2-3px wide, subtle gradient glow, runs the full length
- Year markers: 160-200px font size, semi-transparent, sticky to top on scroll
- When a year sticks: 2-3 milestone chips appear beneath (e.g., `GPT-4o released`, `Llama 3 open-sourced`)
- Prediction cards animate in from left (Shulman) and right (Aschenbrenner)
- Cards connect to spine via thin horizontal lines + dot markers on the spine
- Each card shows: claim text (2-line truncated), category tag, status badge with living animation
- Click expands inline: full claim, evidence paragraph, source link, confidence, dates
- Only one card expanded at a time — `Timeline` component owns `expandedId` state and passes `expandedId` + `onExpand` callback to each `TimelineCard`

### Act 3 — Summary (full viewport)

- Side-by-side final scorecards: hit rates, status breakdowns
- Donut charts (reuse existing Recharts component)
- Closing editorial line
- Footer: sources, last-updated date, credits

## Visual Language

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#050507` | Page background |
| `--bg-card` | `#0a0a0f` | Card surfaces |
| `--border-card` | `#1a1a2e` | Card borders |
| `--accent-shulman` | `#a78bfa` | Shulman accent (purple) |
| `--accent-aschenbrenner` | `#f97316` | Aschenbrenner accent (orange) |
| `--spine` | `#1e293b` | Timeline spine base |
| `--spine-glow` | `#334155` | Spine glow near year markers |
| `--confirmed` | `#34d399` | Confirmed status |
| `--in-progress` | `#fbbf24` | In progress status (pulses) |
| `--outstanding` | `#475569` | Outstanding status |
| `--incorrect` | `#ef4444` | Incorrect status |
| `--text-primary` | `#f1f5f9` | Primary text |
| `--text-secondary` | `#94a3b8` | Secondary text |
| `--text-muted` | `#475569` | Muted text, legend percentages |
| `--text-faint` | `#334155` | Faintest text (replaces old --text-faint) |
| `--year-fill` | `#0f172a` | Year number fill |
| `--year-stroke` | `#1e293b` | Year number stroke |

### Typography

| Role | Font | Size | Style |
|------|------|------|-------|
| Hero display | Instrument Serif | 80-120px | Italic |
| Year markers | Space Grotesk | 160-200px | Bold, tight tracking |
| Card body | DM Sans | 15-16px | Regular |
| Labels, tags, metadata | JetBrains Mono | 9-11px | Uppercase, wide tracking |
| Milestone chips | JetBrains Mono | 10px | Regular |

### Visual Texture

- Noise texture overlay: 2-3% opacity across entire page
- Horizontal connecting lines: gradient fade from card to spine
- Year markers: subtle radial glow on spine when sticky
- Cards: thin top-edge colored line (purple or orange) rather than full borders
- Section transitions: geometric accent marks (thin diagonal lines or corner brackets)

## Scroll Animations

All CSS-driven via Intersection Observer. No animation libraries.

| Element | Animation | Duration | Notes |
|---------|-----------|----------|-------|
| Cards | translateX(30px) + opacity 0→1 | 400ms ease-out | Staggered 100ms between cards in same year |
| Year markers | scale(0.9→1) + opacity | 300ms | Triggers when section enters viewport |
| Milestone chips | Fade in sequentially | 150ms stagger | Appear after year sticks |
| Status: confirmed | Checkmark draw-on | 600ms | SVG stroke-dashoffset animation, plays once |
| Status: in progress | Pulse glow | 3s cycle | Infinite, subtle opacity oscillation |
| Status: outstanding | None | — | Static |
| Status: incorrect | None | — | Static (red color is sufficient distinction) |

## Card States

### Default (compact)
- Claim text: 2 lines max, truncated with ellipsis
- Category tag (mono uppercase)
- Status badge with living animation
- Thin thinker-colored top edge

### Hover
- translateY(-2px) lift
- Border brightens
- Thinker-colored top edge glows subtly

### Expanded (click)
- Smooth max-height transition
- Full claim text (untruncated)
- "Assessment" section with evidence paragraph
- Source link (external, new tab)
- Confidence level
- Date made / time horizon
- Click again or click another card to collapse

## Navigation

Floating control, fixed bottom-right. Fades in after scrolling past hero.

- Two thinker toggles: "CS" and "LA" in their accent colors. Click to show/hide that thinker's cards. At least one toggle must stay active — clicking the last active toggle does nothing (prevents empty timeline).
- Vertical year scrubber: small dots for each year, click to smooth-scroll to that year section.
- Mobile: moves to bottom-center, horizontal layout.
- The spine and year markers remain visible regardless of filter state.

## Responsive Behavior

### Desktop (>768px)
- Split spine: Shulman cards left, Aschenbrenner cards right, spine centered
- Year markers: 160-200px, sticky top-left
- Floating nav: bottom-right

### Mobile (<768px)
- Single column: cards stack vertically
- Colored left-border (4px) identifies thinker (purple/orange)
- Spine repositions to left edge via CSS media query (`left: 0` instead of `left: 50%`)
- Year markers: 80-100px, still sticky
- Floating nav: bottom-center, horizontal
- Card connecting lines hidden on mobile (not needed in single-column)

## Data Changes

### New field: `year`
Each prediction needs a `year: number` field representing the target year for timeline placement.

**Year assignment rules:**
- If the prediction has a specific year target (e.g., "by 2027"), use that year
- If the prediction spans a range (e.g., "2027-2028"), use the start of the range
- If the prediction is conditional (e.g., "post-AGI", "conditional on AGI"), assign to 2030 (the furthest timeline bucket — represents "further out")
- If the prediction has a vague horizon (e.g., "5-10 years", "near-term"), calculate from the source date

**Year assignments:**

| ID | Claim (short) | timeHorizon | Assigned Year |
|----|---------------|-------------|---------------|
| cs-1 | Intelligence explosion | by 2035 | 2030 |
| cs-2 | Researcher productivity boost 50-200% | before AGI | 2026 |
| cs-3 | AI does large parts of AI research | 5-10 years | 2028 |
| cs-4 | Explosive GDP growth 10-1000x | 5-15 years after AGI | 2030 |
| cs-5 | Cognitive labor costs collapse | post-AGI | 2030 |
| cs-6 | All-AI firms outcompete human-staffed | post-AGI | 2030 |
| cs-7 | Robotics is the critical bottleneck | 5-10 years | 2028 |
| cs-8 | Hardware fab capacity is primary constraint | near-term | 2024 |
| cs-9 | National security recognizes AI significance | by 2030 | 2030 |
| cs-10 | Economic pressure forces rapid AGI adoption | post-AGI | 2030 |
| cs-11 | 20-25% probability of AI takeover | conditional on AGI | 2030 |
| cs-12 | Alignment likely succeeds (~75%) | conditional on AGI | 2030 |
| cs-13 | AI could design novel pathogens | concurrent with advanced AI | 2028 |
| cs-14 | Democratic safeguards against AI coup | post-AGI | 2030 |
| la-1 | AGI by ~2027 | by 2027 | 2027 |
| la-2 | Superintelligence within 1 year of AGI | within 1 year of AGI | 2028 |
| la-3 | $100B+ annual AI revenue | by mid-2026 | 2026 |
| la-4 | $100B training cluster | by 2028 | 2028 |
| la-5 | Trillion-dollar cluster | by 2030 | 2030 |
| la-6 | AI consumes 20% of US electricity | by 2028 | 2028 |
| la-7 | $1T annual AI investment | by 2027 | 2027 |
| la-8 | China infiltrates US AI labs | ongoing | 2025 |
| la-9 | Superintelligence yields decisive military advantage | post-superintelligence | 2030 |
| la-10 | Government AGI project emerges | by 2027-2028 | 2027 |
| la-11 | National security heavily involved | by 2026-2027 | 2026 |
| la-12 | Intelligence explosion compresses century | by 2030 | 2030 |
| la-13 | 100M automated AI researchers | by 2027-2028 | 2027 |
| la-14 | Full white-collar automation | by 2030 | 2030 |

**Note:** The 2030 bucket is heavy (14 predictions). Many of these are conditional/post-AGI predictions that cluster at the far end of the timeline. This is expected — it creates a visual "convergence" effect at the end of the timeline where both thinkers' most speculative claims pile up, which serves the narrative well.

### New data: milestones
A static data file mapping years to 2-3 real AI milestones:

```typescript
export const milestones: Record<number, string[]> = {
  2024: ["GPT-4o released", "Claude 3.5 Sonnet", "Llama 3 open-sourced"],
  2025: ["Reasoning models mainstream", "AI coding agents ship", "Stargate announced"],
  2026: ["Scaling debate intensifies", "AI revenue benchmarks approach"],
  2027: ["Aschenbrenner's AGI target year", "Government response window"],
  2028: ["$100B cluster target", "Robotics scaling test"],
  2030: ["Long-range predictions converge here"],
};
```

Years 2029 is intentionally omitted — no predictions target it. The timeline jumps from 2028 to 2030.

## Component Architecture

| Component | Type | Purpose |
|-----------|------|---------|
| `HeroSection` | Client | Full-viewport intro with typography + count-up animation |
| `Timeline` | Client | Scroll experience orchestrator, manages Intersection Observers |
| `YearSection` | Client | Sticky year number + milestone chips |
| `TimelineCard` | Client | Individual prediction card with expand/collapse |
| `TimelineSpine` | CSS-only | Central vertical line with dots (no JS) |
| `StatusBadge` | Client | Status indicator with living CSS animations |
| `SummarySection` | Mixed | Final scorecards + donut charts |
| `TimelineNav` | Client | Floating filter/scrubber control |
| `DonutChart` | Client | Reused from current code (Recharts) |

## Technical Constraints

- **No new animation libraries** — Intersection Observer API + CSS animations only. Keeps bundle small.
- **Recharts** stays for donut charts in summary section only.
- **Next.js App Router** — single route at `/`. All other routes (`/shulman`, `/aschenbrenner`, `/compare`) removed.
- **Fonts** — Instrument Serif, DM Sans, JetBrains Mono already loaded. Add Space Grotesk for year markers.
- **Performance target** — smooth 60fps scroll on mid-range devices. No layout thrashing from observers.

## Files to Create

- `src/app/page.tsx` — rewrite as composition of the three acts
- `src/components/HeroSection.tsx`
- `src/components/Timeline.tsx`
- `src/components/YearSection.tsx`
- `src/components/TimelineCard.tsx`
- `src/components/TimelineSpine.tsx` (CSS module or inline)
- `src/components/TimelineNav.tsx`
- `src/components/SummarySection.tsx`
- `src/data/milestones.ts`
- `src/app/globals.css` — full rewrite for new design system

## Files to Modify

- `src/types/index.ts` — add `year` field to `Prediction` type
- `src/data/shulman.ts` — add `year` to each prediction
- `src/data/aschenbrenner.ts` — add `year` to each prediction
- `src/app/layout.tsx` — remove `SharedLayout` wrapper, keep font loading and `<body>` directly. Add Space Grotesk font. Remove nav/footer (the page handles its own layout).
- `src/lib/constants.ts` — update `STATUS_COLORS` to match new design tokens (`#475569` for outstanding, `#ef4444` for incorrect)
- `src/components/DonutChart.tsx` — update CSS variable references to match new design system (`--bg-card`, `--border-card`, `--text-muted` instead of old `--bg-elevated`, `--border-default`, `--text-faint`)

## Route Removal

Routes `/shulman`, `/aschenbrenner`, and `/compare` are removed entirely. No redirects — these are internal routes with no external links. 404 is acceptable.

## Files to Remove

- `src/app/shulman/page.tsx`
- `src/app/aschenbrenner/page.tsx`
- `src/app/compare/page.tsx`
- `src/components/ThinkerPage.tsx`
- `src/components/CompareLink.tsx`
- `src/components/ComparisonTable.tsx`
- `src/components/FilterBar.tsx`
- `src/components/SharedLayout.tsx`
- `src/components/ScoreboardHeader.tsx`
- `src/components/PredictionCard.tsx`
