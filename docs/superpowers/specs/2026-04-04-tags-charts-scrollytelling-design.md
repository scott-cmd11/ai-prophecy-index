# Tags, Analysis Charts & Scrollytelling — Design Spec

**Date:** 2026-04-04
**Status:** Draft
**Scope:** Add prediction tags, a dedicated Analysis section with two charts, and a scrollytelling sticky stats panel to the AI Prophecy Index.

---

## 1. Prediction Tags

### Data Model

Add an optional `tags` field to the `Prediction` type in `src/types/index.ts`:

```ts
tags?: PredictionTag[];
```

This uses the `PredictionTag` union type (defined in `src/lib/constants.ts`, see Tag Constants below) for compile-time validation of tag values.

Eight tag values are allowed:

| Tag | Description |
|-----|-------------|
| `Hardware` | Compute scaling, chip fabrication, GPU supply, power infrastructure |
| `Timelines` | AGI arrival dates, capability milestones, timeline estimates |
| `Geopolitics` | China espionage, US-China AI race, international competition |
| `Economics` | Revenue targets, labor displacement, GDP impact, investment |
| `Safety` | Alignment, misuse risk, threat modelling, containment |
| `Governance` | Policy, regulation, government response, export controls |
| `Capabilities` | Model benchmarks, agentic AI, reasoning, coding, research |
| `Industry` | Company behaviour, hiring, talent, market structure |

Each prediction receives 1–3 tags, manually assigned in the data files (`src/data/shulman.ts`, `src/data/aschenbrenner.ts`, `src/data/cotra.ts`).

### Display on Timeline Cards

Tags render as small pills below the claim text in `TimelineCard.tsx`:

- Font: monospace, 9px, uppercase, `tracking-widest`
- Color: `var(--text-faint)`
- Border: `1px solid var(--rule-light)`
- No background fill
- Horizontal flex with `gap-1.5`, wrapping allowed
- Placed between the claim `<p>` and the expanded content area

### Tag Filtering in FilterBar

A third row is added to `FilterBar.tsx`:

- Label: `TOPIC` (matching the existing `THINKER` and `STATUS` labels)
- One pill per tag category, styled identically to status filter pills
- Toggle behaviour: click activates, click again deactivates
- Multiple tags can be active simultaneously (OR logic: show predictions matching **any** active tag)
- When no tags are selected, all predictions show (same "all" default as status filters)

State additions in `Timeline.tsx`:

```ts
const [activeTags, setActiveTags] = useState<string[] | "all">("all");
```

Filtering logic: tag filtering is applied within the existing `cardsByYear` loop in `Timeline.tsx`, chained after the status filter at line ~92-95. The existing pattern builds `merged` cards per year, then applies status filtering to produce `filtered`. Tag filtering is added as a second pass on the same `filtered` array:

```ts
// Existing status filter (line ~92-95)
const statusFiltered =
  activeStatuses === "all"
    ? merged
    : merged.filter((c) => activeStatuses.includes(c.prediction.status));

// New tag filter — applied after status filter, within the same cardsByYear.map()
const filtered =
  activeTags === "all"
    ? statusFiltered
    : statusFiltered.filter((c) =>
        c.prediction.tags?.some((t) => activeTags.includes(t))
      );
```

This preserves the existing per-year architecture without refactoring.

### Tag Constants

Add to `src/lib/constants.ts`:

```ts
export const PREDICTION_TAGS = [
  "Hardware",
  "Timelines",
  "Geopolitics",
  "Economics",
  "Safety",
  "Governance",
  "Capabilities",
  "Industry",
] as const;

export type PredictionTag = (typeof PREDICTION_TAGS)[number];
```

---

## 2. Analysis Section

### Placement

New component `AnalysisSection.tsx` rendered between `ThinkersSection` and `Timeline` on the homepage (`src/app/page.tsx`).

### Section Layout

- Max width: `max-w-4xl` (matching existing sections)
- Padding: `px-6 py-16`
- Section header: "The Data" in serif italic (matching "The Reckoning" style)
- Two charts stacked vertically with `gap-12` between them
- Each chart has a monospace uppercase label (9px, `--text-faint`) above it

### Chart A: Tag Distribution Bar Chart

**Purpose:** Show how many predictions exist per category, broken down by thinker.

**Implementation:**
- Horizontal stacked bar chart using Recharts `<BarChart>` with `layout="vertical"`
- Each bar represents one tag category
- Segments colored by thinker accent: `var(--accent-shulman)`, `var(--accent-aschenbrenner)`, `var(--accent-cotra)`
- Bar height: 8px with small gap between bars
- Bars sorted by total count descending
- Monospace category labels on the left
- Total count displayed at the end of each bar in `--text-faint`
- No grid lines, no axis lines — data and labels only
- Legend at bottom: three small colored squares with thinker names in monospace
- Data computed at render time from the prediction arrays (not hardcoded)

**Responsive:** On mobile (< 640px), labels stack above bars instead of to the left.

### Chart B: Timeline Scatter Plot

**Purpose:** Show prediction density across years, colored by thinker.

**Implementation:**
- Recharts `<ScatterChart>` with year on X-axis
- X-axis: years from `TIMELINE_YEARS` array, monospace labels
- Each prediction is a dot at its year position
- Dot color: thinker accent color
- Dot visual encodes status:
  - Confirmed: filled circle
  - In progress: filled circle with reduced opacity (0.5) — simpler than half-fill, avoids custom shape complexity
  - Outstanding: ring (stroke only)
  - Incorrect: X mark
- Y-axis: not meaningful — dots within each year are assigned a sequential index (0, 1, 2...) as their Y value, stacking vertically in a column. No randomness or jitter — deterministic layout based on the order predictions appear in the data files. This avoids overlap while keeping the chart stable across renders
- No Y-axis labels or grid
- Monospace year labels along the bottom
- Same legend as Chart A (shared or repeated)

**Responsive:** Chart scales down proportionally on mobile. Dot size reduces from 10px to 7px below 640px.

### Charting Library

**Recharts** (`recharts` npm package):
- React-native, composable
- Supports custom shapes for scatter plot status encoding
- Themeable via props (no separate CSS theme file needed)
- Lightweight (~45KB gzipped)
- `"use client"` directive required on AnalysisSection since Recharts uses DOM APIs

---

## 3. Scrollytelling Sticky Stats Panel

### Behaviour

A compact stats bar that appears when the user scrolls into the Timeline section and updates at each year checkpoint.

**Lifecycle:**
The bar uses `position: sticky; top: 0` inside the Timeline `<section>`, so it naturally sticks while the Timeline is in the viewport and disappears when the section scrolls out. No observer-based show/hide is needed for the bar itself — sticky positioning handles it. The Intersection Observer is only used to detect which year is current and update the metrics.

1. Invisible while above the Timeline section (not rendered or `opacity: 0`)
2. Fades in when the first `YearSection` enters the viewport (observer sets `showStickyBar = true`)
3. Updates cumulative stats as each subsequent `YearSection` enters
4. Naturally unsticks and scrolls away when the Timeline section ends

### Metrics (6 items)

| Metric | Label (abbreviated) | Format | Example |
|--------|---------------------|--------|---------|
| Predictions seen | `Seen` | integer | `12` |
| Confirmed | `Confirmed` | integer, green (`--confirmed` color) | `3` |
| Unfolding | `Unfolding` | integer, amber (`--in_progress` color) | `4` |
| Early | `Early` | integer, slate (`--outstanding` color) | `5` |
| Incorrect | `Incorrect` | integer, red (`--incorrect` color) | `0` |
| Hit rate | `Hit rate` | percentage | `100%` |

Note: The sticky bar uses abbreviated labels ("Unfolding", "Early") rather than the full `STATUS_LABELS` ("Still unfolding", "Too early to tell") for space reasons.

Hit rate = confirmed / (confirmed + incorrect). If no predictions are confirmed or incorrect, show `—` instead of a percentage.

### Layout

- Full-width bar, `position: sticky; top: 0; z-index: 40`
- Height: ~48px
- Background: `var(--bg-page)` with slight opacity (0.95) and `backdrop-filter: blur(8px)`
- Bottom border: `1px solid var(--rule-light)`
- Content centered in a `max-w-2xl` container (matching Timeline width)
- Metrics displayed in a horizontal flex row with equal spacing
- Each metric: value on top (monospace, 14px, semibold, colored), label below (monospace, 8px, uppercase, `--text-faint`)

### Number Animation

When values change between year checkpoints, the numbers animate with a brief counter transition (~300ms). Implementation: a small `AnimatedNumber` component that interpolates between old and new values using `requestAnimationFrame`.

### Implementation

**Intersection Observer setup** in `Timeline.tsx`:
- Each `YearSection` gets a `data-year` attribute
- A single observer watches all year sections with `threshold: 0.3`
- When a section intersects, compute cumulative stats for all predictions from the start through that year
- Stats are derived from the full unfiltered prediction set (not affected by thinker/status/tag filters) so the panel tells a consistent story regardless of filter state

**Component:** `StickyStatsBar.tsx` — a `"use client"` component receiving the current year and cumulative stats as props (or computing internally from an `activeYear` state).

**Visibility:** Controlled by a boolean state `showStickyBar` that toggles based on whether any year section is in view. Uses CSS `opacity` + `transform: translateY` transition for smooth fade-in/out.

---

## 4. Dependencies

### npm packages

- `recharts` — already installed (`^3.8.1` in `package.json`), no new dependency needed

### Files Created

| File | Purpose |
|------|---------|
| `src/components/AnalysisSection.tsx` | Analysis section with both charts |
| `src/components/TagDistributionChart.tsx` | Horizontal stacked bar chart |
| `src/components/TimelineScatterChart.tsx` | Year-based scatter plot |
| `src/components/StickyStatsBar.tsx` | Scrollytelling sticky panel |
| `src/components/AnimatedNumber.tsx` | Counter animation utility |
| `src/components/TagPills.tsx` | Tag pill display for timeline cards |

### Files Modified

| File | Change |
|------|--------|
| `src/types/index.ts` | Add `tags?: PredictionTag[]` to `Prediction` |
| `src/lib/constants.ts` | Add `PREDICTION_TAGS` array and `PredictionTag` type |
| `src/data/shulman.ts` | Add tags to all predictions |
| `src/data/aschenbrenner.ts` | Add tags to all predictions |
| `src/data/cotra.ts` | Add tags to all predictions |
| `src/components/TimelineCard.tsx` | Render tag pills below claim |
| `src/components/FilterBar.tsx` | Add TOPIC filter row |
| `src/components/Timeline.tsx` | Add tag filter state, pass year refs for observer, integrate sticky bar |
| `src/components/YearSection.tsx` | Add `data-year` attribute for observer |
| `src/app/page.tsx` | Add `AnalysisSection` between ThinkersSection and Timeline |
| `src/data/milestones.ts` | Already exports `TIMELINE_YEARS` — used by scatter plot X-axis |

---

## 5. Responsive Behaviour

- **Desktop (≥ 768px):** Charts at full width within `max-w-4xl`. Sticky bar spans full width.
- **Tablet (640–768px):** Charts scale down. Sticky bar metrics may wrap to two rows.
- **Mobile (< 640px):** Tag distribution chart labels stack above bars. Scatter plot dots shrink. Sticky bar uses a condensed 2×3 grid layout for metrics. Tag filter pills in FilterBar wrap naturally (already handled by `flex-wrap`).

---

## 6. Out of Scope

- Accuracy trend line chart (insufficient resolved data — 12/56 confirmed)
- Thinker comparison radar chart (radar charts are hard to read, feels dashboard-y)
- Per-card scroll checkpoints (too granular, visually noisy)
- Dark theme for charts (staying with light editorial throughout)
- Interactive chart tooltips (keeping charts static/read-only for now)
- Server-side chart rendering (Recharts requires client-side, acceptable for this use case)
