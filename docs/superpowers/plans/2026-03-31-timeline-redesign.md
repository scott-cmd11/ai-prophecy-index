# Timeline Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the AI Prediction Tracker as a single-page editorial scroll experience with a split-spine timeline, massive typography, scroll-triggered animations, and living status indicators.

**Architecture:** Single Next.js page at `/` composed of three acts: a full-viewport hero, a scroll-driven split-spine timeline with sticky year waypoints, and a summary section with scorecards. All scroll animations use Intersection Observer + CSS — no animation libraries. State management is minimal: `Timeline` owns `expandedId` and thinker filter toggles.

**Tech Stack:** Next.js App Router, TypeScript, Tailwind CSS, Recharts (donut charts only), CSS custom properties, Intersection Observer API, Google Fonts (Instrument Serif, DM Sans, JetBrains Mono, Space Grotesk).

**Spec:** `docs/superpowers/specs/2026-03-31-timeline-redesign-design.md`

---

## File Structure

### New Files
| File | Responsibility |
|------|---------------|
| `src/components/HeroSection.tsx` | Full-viewport intro with count-up animation and scroll indicator |
| `src/components/Timeline.tsx` | Scroll orchestrator — owns expandedId + filter state, renders YearSections |
| `src/components/YearSection.tsx` | Sticky year number + milestone chips + cards for that year |
| `src/components/TimelineCard.tsx` | Individual prediction card with expand/collapse, scroll-reveal |
| `src/components/StatusBadge.tsx` | Status indicator with living CSS animations (rewrite existing) |

> **Note:** The spec lists `TimelineSpine` as a separate CSS-only component. In this plan, the spine is inlined as a single absolutely-positioned `div` inside `Timeline.tsx` (Task 12) since it requires no JS and no props — extracting it to a separate file adds indirection without benefit.
| `src/components/TimelineNav.tsx` | Floating filter/scrubber control |
| `src/components/SummarySection.tsx` | Final scorecards + donut charts + footer |
| `src/data/milestones.ts` | Year-to-milestone mapping |

### Modified Files
| File | Changes |
|------|---------|
| `src/types/index.ts` | Add `year: number` to `Prediction` |
| `src/data/shulman.ts` | Add `year` field to all 14 predictions |
| `src/data/aschenbrenner.ts` | Add `year` field to all 14 predictions |
| `src/app/globals.css` | Full rewrite — new design tokens, animations, noise texture |
| `src/app/layout.tsx` | Remove SharedLayout, add Space Grotesk font |
| `src/app/page.tsx` | Rewrite as three-act composition |
| `src/lib/constants.ts` | Update STATUS_COLORS to match new tokens |
| `src/components/DonutChart.tsx` | Update CSS variable references |

### Deleted Files
| File | Reason |
|------|--------|
| `src/app/shulman/page.tsx` | Routes removed — single-page app |
| `src/app/aschenbrenner/page.tsx` | Routes removed |
| `src/app/compare/page.tsx` | Routes removed |
| `src/components/ThinkerPage.tsx` | Replaced by Timeline |
| `src/components/CompareLink.tsx` | No longer needed |
| `src/components/ComparisonTable.tsx` | Replaced by split-spine |
| `src/components/FilterBar.tsx` | Replaced by TimelineNav |
| `src/components/SharedLayout.tsx` | Layout handled by page directly |
| `src/components/ScoreboardHeader.tsx` | Replaced by SummarySection |
| `src/components/PredictionCard.tsx` | Replaced by TimelineCard |

---

## Task 1: Data Layer — Types, Year Assignments, Milestones

**Files:**
- Modify: `src/types/index.ts`
- Modify: `src/data/shulman.ts`
- Modify: `src/data/aschenbrenner.ts`
- Create: `src/data/milestones.ts`
- Modify: `src/lib/constants.ts`

- [ ] **Step 1: Add `year` field to Prediction type**

In `src/types/index.ts`, add `year: number` to the `Prediction` interface:

```typescript
export interface Prediction {
  id: string;
  claim: string;
  source: string;
  sourceUrl?: string;
  date: string;
  category: string;
  status: PredictionStatus;
  confidence?: Confidence;
  evidence?: string;
  lastReviewed: string;
  timeHorizon?: string;
  year: number;
}
```

- [ ] **Step 2: Add year to all Shulman predictions**

In `src/data/shulman.ts`, add `year` to each prediction per the spec year assignment table:

| ID | Year |
|----|------|
| cs-1 | 2030 |
| cs-2 | 2026 |
| cs-3 | 2028 |
| cs-4 | 2030 |
| cs-5 | 2030 |
| cs-6 | 2030 |
| cs-7 | 2028 |
| cs-8 | 2024 |
| cs-9 | 2030 |
| cs-10 | 2030 |
| cs-11 | 2030 |
| cs-12 | 2030 |
| cs-13 | 2028 |
| cs-14 | 2030 |

Add `year: XXXX,` after the `timeHorizon` line in each prediction object.

- [ ] **Step 3: Add year to all Aschenbrenner predictions**

In `src/data/aschenbrenner.ts`, add `year` to each prediction:

| ID | Year |
|----|------|
| la-1 | 2027 |
| la-2 | 2028 |
| la-3 | 2026 |
| la-4 | 2028 |
| la-5 | 2030 |
| la-6 | 2028 |
| la-7 | 2027 |
| la-8 | 2025 |
| la-9 | 2030 |
| la-10 | 2027 |
| la-11 | 2026 |
| la-12 | 2030 |
| la-13 | 2027 |
| la-14 | 2030 |

- [ ] **Step 4: Create milestones data file**

Create `src/data/milestones.ts`:

```typescript
export const milestones: Record<number, string[]> = {
  2024: ["GPT-4o released", "Claude 3.5 Sonnet", "Llama 3 open-sourced"],
  2025: ["Reasoning models mainstream", "AI coding agents ship", "Stargate announced"],
  2026: ["Scaling debate intensifies", "AI revenue benchmarks approach"],
  2027: ["Aschenbrenner's AGI target year", "Government response window"],
  2028: ["$100B cluster target", "Robotics scaling test"],
  2030: ["Long-range predictions converge here"],
};

// 2029 is intentionally omitted — no predictions target it.
// The timeline jumps from 2028 to 2030.
export const TIMELINE_YEARS = [2024, 2025, 2026, 2027, 2028, 2030] as const;
```

- [ ] **Step 5: Update STATUS_COLORS in constants.ts**

In `src/lib/constants.ts`, update the color values:

```typescript
export const STATUS_COLORS: Record<string, string> = {
  confirmed: "#34d399",
  in_progress: "#fbbf24",
  outstanding: "#475569",
  incorrect: "#ef4444",
};
```

- [ ] **Step 6: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors (the year field is now required, and all predictions have it).

- [ ] **Step 7: Commit**

```bash
git add src/types/index.ts src/data/ src/lib/constants.ts
git commit -m "feat: add year field to predictions and create milestones data"
```

---

## Task 2: Design System — globals.css Full Rewrite

**Files:**
- Rewrite: `src/app/globals.css`

- [ ] **Step 1: Write the new globals.css**

Replace the entire file with the new design system. Key sections:

1. **CSS custom properties** — all color tokens from the spec (--bg-primary through --text-faint, --accent-shulman, --accent-aschenbrenner, status colors, spine colors, year-fill/stroke)
2. **Base styles** — `html { background: var(--bg-primary); color: var(--text-primary); }`, font-family assignments using CSS variables
3. **Noise texture** — `body::before` pseudo-element with SVG filter noise at 2-3% opacity, fixed position, pointer-events: none
4. **Scroll-reveal animations** — `@keyframes fadeInLeft`, `fadeInRight` (translateX(30px) + opacity), `fadeInUp`, `scaleIn` (scale 0.9→1 + opacity)
5. **Living status animations** — `@keyframes pulse` (opacity 0.6→1→0.6 over 3s), `@keyframes checkDraw` (stroke-dashoffset animation)
6. **Utility classes** — `.animate-in` (opacity: 0 by default, `.visible` adds the animation), `.status-pulse` for in_progress
7. **Card hover transitions** — translateY, border-color, box-shadow transitions
8. **Sticky year styles** — position: sticky, top: 0, z-index, backdrop blur + gradient fade
9. **Responsive breakpoint** — `@media (max-width: 768px)` for mobile layout adjustments
10. **Custom scrollbar** — thin, matching the dark theme

All animations use `prefers-reduced-motion: reduce` to disable for accessibility.

- [ ] **Step 2: Verify the CSS parses**

Run: `npm run build`
Expected: Build succeeds (pages will be broken since components aren't updated yet, but CSS should parse).

- [ ] **Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "feat: rewrite design system with new editorial tokens and animations"
```

---

## Task 3: Layout — Remove SharedLayout, Add Space Grotesk

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Update layout.tsx**

1. Remove `import { SharedLayout }`
2. Add Space Grotesk font import from `next/font/google`
3. Remove `<SharedLayout>{children}</SharedLayout>` wrapper — render `{children}` directly inside `<body>`
4. Add Space Grotesk variable to the html className
5. Keep all existing font variables (dmSans, instrumentSerif, jetbrainsMono)
6. Keep metadata as-is

```typescript
import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "AI Prediction Tracker",
  description:
    "Tracking and scoring public AI predictions from Carl Shulman and Leopold Aschenbrenner",
  openGraph: {
    title: "AI Prediction Tracker",
    description:
      "Tracking and scoring public AI predictions from Carl Shulman and Leopold Aschenbrenner",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans" style={{ background: "var(--bg-primary)" }}>
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: add Space Grotesk font, remove SharedLayout wrapper"
```

---

## Task 4: Delete Old Routes and Components

**Files:**
- Delete: `src/app/shulman/page.tsx`, `src/app/aschenbrenner/page.tsx`, `src/app/compare/page.tsx`
- Delete: `src/components/ThinkerPage.tsx`, `src/components/CompareLink.tsx`, `src/components/ComparisonTable.tsx`, `src/components/FilterBar.tsx`, `src/components/SharedLayout.tsx`, `src/components/ScoreboardHeader.tsx`, `src/components/PredictionCard.tsx`

- [ ] **Step 1: Delete route directories**

```bash
rm -rf "src/app/shulman" "src/app/aschenbrenner" "src/app/compare"
```

- [ ] **Step 2: Delete replaced components**

```bash
rm src/components/ThinkerPage.tsx src/components/CompareLink.tsx src/components/ComparisonTable.tsx src/components/FilterBar.tsx src/components/SharedLayout.tsx src/components/ScoreboardHeader.tsx src/components/PredictionCard.tsx
```

> **Note:** The build will fail from this point until Task 13 rewrites `page.tsx`. This is expected — the old components are deleted before their replacements are wired in. Do not run `npm run build` until Task 13.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "chore: remove old routes and replaced components"
```

---

## Task 5: StatusBadge — Rewrite with Living Animations

**Files:**
- Rewrite: `src/components/StatusBadge.tsx`

- [ ] **Step 1: Rewrite StatusBadge**

The new StatusBadge has living CSS animations:
- **confirmed:** An SVG checkmark with stroke-dashoffset draw-on animation (600ms, plays once when element enters viewport)
- **in_progress:** Subtle pulse glow animation (3s infinite cycle)
- **outstanding:** Static, no animation
- **incorrect:** Static, red color

The component receives `status` and `animated` (boolean, default true) props. When `animated` is false, all statuses render static (for use in summary section).

Uses CSS classes defined in globals.css for the animations. The colored dot + label pattern stays, but the dot gets the animation treatment.

```typescript
"use client";

import { PredictionStatus } from "@/types";
import { STATUS_LABELS } from "@/lib/constants";

const STATUS_STYLES: Record<PredictionStatus, { color: string; bgColor: string }> = {
  confirmed: { color: "var(--confirmed)", bgColor: "rgba(52, 211, 153, 0.15)" },
  in_progress: { color: "var(--in-progress)", bgColor: "rgba(251, 191, 36, 0.15)" },
  outstanding: { color: "var(--outstanding)", bgColor: "rgba(71, 85, 105, 0.15)" },
  incorrect: { color: "var(--incorrect)", bgColor: "rgba(239, 68, 68, 0.15)" },
};

export function StatusBadge({ status, animated = true }: { status: PredictionStatus; animated?: boolean }) {
  const style = STATUS_STYLES[status];

  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[9px] font-medium uppercase tracking-widest"
      style={{ backgroundColor: style.bgColor, color: style.color }}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${animated && status === "in_progress" ? "status-pulse" : ""}`}
        style={{ backgroundColor: style.color }}
      />
      {STATUS_LABELS[status]}
    </span>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/StatusBadge.tsx
git commit -m "feat: rewrite StatusBadge with living CSS animations"
```

---

## Task 6: HeroSection — Full-Viewport Cinematic Intro

**Files:**
- Create: `src/components/HeroSection.tsx`

- [ ] **Step 1: Build HeroSection**

Client component (`"use client"`) with:
- Full viewport height (`min-h-screen`)
- Centered content: large Instrument Serif italic headline
- Editorial framing line (e.g., "Two minds. Twenty-eight predictions. One future.")
- Two thinker name blocks with animated count-up from 0 to 14 (using `useEffect` + `requestAnimationFrame` over ~1.5s)
- Scroll indicator at bottom: animated chevron or thin line with translateY bounce
- Names displayed with their accent colors (purple for Shulman, orange for Aschenbrenner)
- JetBrains Mono for the count numbers

The count-up effect: start at 0, increment to 14 over 1.5s with easing. Use a ref to track the animation frame.

- [ ] **Step 2: Commit**

```bash
git add src/components/HeroSection.tsx
git commit -m "feat: add HeroSection with count-up animation and scroll indicator"
```

---

## Task 7: TimelineCard — Prediction Card with Expand/Collapse

**Files:**
- Create: `src/components/TimelineCard.tsx`

- [ ] **Step 1: Build TimelineCard**

Client component. Props:
- `prediction: Prediction`
- `thinker: "shulman" | "aschenbrenner"`
- `isExpanded: boolean`
- `onToggle: () => void`
- `index: number` (for stagger delay)

Features:
- Scroll-reveal: uses a ref + IntersectionObserver. When the card enters the viewport, adds a `visible` class that triggers the CSS animation (fadeInLeft for Shulman, fadeInRight for Aschenbrenner).
- Default state: card background `--bg-card`, border `--border-card`, thin top-edge line in thinker accent color. Shows truncated claim (2-line clamp), category tag (mono uppercase), StatusBadge, expand chevron.
- Hover: translateY(-2px), border brightens.
- Expanded: smooth max-height transition reveals evidence section, source link, confidence, dates. Expand chevron rotates 180deg.
- Stagger: `animation-delay` based on `index * 100ms`.
- The connecting line to spine: a `::before` pseudo-element that draws a thin horizontal line from the card edge toward center. Hidden on mobile via media query.

- [ ] **Step 2: Commit**

```bash
git add src/components/TimelineCard.tsx
git commit -m "feat: add TimelineCard with scroll-reveal and inline expand"
```

---

## Task 8: YearSection — Sticky Year Marker with Milestones

**Files:**
- Create: `src/components/YearSection.tsx`

- [ ] **Step 1: Build YearSection**

Client component. Props:
- `year: number`
- `milestones: string[]`
- `shulmanCards: Prediction[]`
- `aschenbrennerCards: Prediction[]`
- `expandedId: string | null`
- `onExpand: (id: string) => void`
- `visibleThinkers: { shulman: boolean; aschenbrenner: boolean }`

Structure:
1. **Sticky year header** — `position: sticky; top: 0; z-index: 10;` with backdrop blur. Year number in Space Grotesk at 160px (80px on mobile), color `--year-fill` with text-stroke `--year-stroke`. Below it, milestone chips animate in with stagger (JetBrains Mono, small, pill-shaped with subtle border).
2. **Split-spine card area** — CSS Grid: `grid-template-columns: 1fr auto 1fr` on desktop. Left column: Shulman cards (right-aligned). Center: spine segment (2px vertical line with dot markers). Right column: Aschenbrenner cards (left-aligned). On mobile (`@media max-width: 768px`): single column, spine moves to left edge.
3. Cards are rendered via `TimelineCard`, filtered by `visibleThinkers`.

The year header uses IntersectionObserver to detect when it becomes sticky (enters top of viewport) to trigger milestone chip animations.

- [ ] **Step 2: Commit**

```bash
git add src/components/YearSection.tsx
git commit -m "feat: add YearSection with sticky year marker and milestone chips"
```

---

## Task 9: TimelineNav — Floating Filter/Scrubber Control

**Files:**
- Create: `src/components/TimelineNav.tsx`

- [ ] **Step 1: Build TimelineNav**

Client component. Props:
- `visibleThinkers: { shulman: boolean; aschenbrenner: boolean }`
- `onToggleThinker: (thinker: "shulman" | "aschenbrenner") => void`
- `years: number[]`
- `isVisible: boolean` (fades in after hero)

Features:
- Fixed position bottom-right (bottom-center on mobile)
- Frosted glass card with backdrop-blur, subtle border
- Two circular thinker toggles: "CS" (purple) and "LA" (orange). Active = filled, inactive = outline only. Clicking the last active toggle does nothing.
- Vertical column of small dots, one per year. Clicking smooth-scrolls to that year's section (using `document.getElementById('year-XXXX')?.scrollIntoView({ behavior: 'smooth' })`)
- Fade-in/out controlled by `isVisible` prop with opacity + pointer-events transition
- On mobile: horizontal layout via media query, toggles and year dots in a row

- [ ] **Step 2: Commit**

```bash
git add src/components/TimelineNav.tsx
git commit -m "feat: add TimelineNav floating filter and year scrubber"
```

---

## Task 10: DonutChart — Update CSS Variables

**Files:**
- Modify: `src/components/DonutChart.tsx`

- [ ] **Step 1: Update CSS variable references**

In the Tooltip `contentStyle`, replace:
- `var(--bg-elevated)` → `var(--bg-card)`
- `var(--border-default)` → `var(--border-card)`

In the legend percentage span (line ~112):
- `var(--text-faint)` → `var(--text-muted)` (legend percentages should use muted, not faintest)

No other changes needed — the component is reused as-is in SummarySection. Note: the `STATUS_COLORS` values updated in Task 1 will change the donut chart segment colors (outstanding becomes darker gray, incorrect becomes a slightly different red). This is intentional — the chart should match the new design tokens.

- [ ] **Step 2: Commit**

```bash
git add src/components/DonutChart.tsx
git commit -m "fix: update DonutChart CSS variables to match new design system"
```

---

## Task 11: SummarySection — Final Scorecards and Footer

**Files:**
- Create: `src/components/SummarySection.tsx`

- [ ] **Step 1: Build SummarySection**

Mixed component (server-compatible where possible, DonutChart is client). Props: none — imports data directly.

Structure:
1. **Section header** — "The Reckoning" or similar editorial line in Instrument Serif italic
2. **Side-by-side scorecards** — two-column grid on desktop, stacked on mobile. Each card shows:
   - Thinker name in their accent color
   - Stats grid: Total, Hit Rate, Confirmed, In Progress, Outstanding, Incorrect (JetBrains Mono numbers, colored by status)
   - DonutChart (size="small")
3. **Closing editorial line** — brief statement about tracking predictions over time
4. **Footer** — last updated date (from constants), source links, credits. Mono font, subtle color.

Uses `getStatusCounts` and `getHitRate` from `src/lib/utils.ts`.

- [ ] **Step 2: Commit**

```bash
git add src/components/SummarySection.tsx
git commit -m "feat: add SummarySection with scorecards, donut charts, and footer"
```

---

## Task 12: Timeline — Scroll Orchestrator

**Files:**
- Create: `src/components/Timeline.tsx`

- [ ] **Step 1: Build Timeline**

Client component. This is the main orchestrator. No props — imports data directly.

State:
- `expandedId: string | null` — which card is expanded
- `visibleThinkers: { shulman: boolean; aschenbrenner: boolean }` — filter toggles
- `navVisible: boolean` — whether the floating nav is shown (false until hero is scrolled past)

Logic:
1. Import `shulman` and `aschenbrenner` data, `TIMELINE_YEARS` and `milestones`
2. Group predictions by year: for each year in `TIMELINE_YEARS`, filter both thinkers' predictions where `prediction.year === year`
3. Set up an IntersectionObserver on the hero sentinel element — when it exits viewport, set `navVisible = true`
4. Render: `TIMELINE_YEARS.map(year => <YearSection .../>)` with a continuous spine running behind all sections
5. Pass `expandedId`, `onExpand` (which sets expandedId, or null if same card clicked), `visibleThinkers` down to each YearSection
6. Render `<TimelineNav>` with filter state and year list

The spine is a single absolutely-positioned `div` running the full height of the timeline container, centered horizontally. On mobile, positioned at left edge.

- [ ] **Step 2: Commit**

```bash
git add src/components/Timeline.tsx
git commit -m "feat: add Timeline scroll orchestrator with state management"
```

---

## Task 13: Page Composition — Wire Everything Together

**Files:**
- Rewrite: `src/app/page.tsx`

- [ ] **Step 1: Rewrite page.tsx**

Server component that composes the three acts:

```typescript
import { HeroSection } from "@/components/HeroSection";
import { Timeline } from "@/components/Timeline";
import { SummarySection } from "@/components/SummarySection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Timeline />
      <SummarySection />
    </main>
  );
}
```

That's it. The page is just a composition of three sections.

- [ ] **Step 2: Build and verify**

Run: `npm run build`
Expected: Build succeeds, single route `/` prerendered. No TypeScript errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: compose single-page scroll experience from three acts"
```

---

## Task 14: Visual Polish and Verification

- [ ] **Step 1: Start dev server and visual check**

Run: `npm run dev`

Verify in browser:
1. Hero section fills viewport, count-up animates, scroll indicator pulses
2. Scrolling past hero reveals timeline, nav fades in
3. Year markers stick to top with backdrop blur
4. Milestone chips appear beneath sticky years
5. Cards animate in from left (purple) and right (orange)
6. Cards expand/collapse on click, only one expanded at a time
7. Status badges: in_progress pulses, confirmed is green, outstanding is gray
8. Thinker filter toggles show/hide cards
9. Year scrubber dots smooth-scroll to sections
10. Summary section shows side-by-side scorecards with donut charts
11. Mobile responsive: check at 375px width — single column, spine at left edge

- [ ] **Step 2: Fix any visual issues found**

Address spacing, alignment, animation timing, or color issues.

- [ ] **Step 3: Final build verification**

Run: `npm run build`
Expected: Clean build, single static route.

- [ ] **Step 4: Commit any polish fixes**

```bash
git add -A
git commit -m "polish: visual refinements and responsive fixes"
```
