# Broadsheet Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the AI Prophecy Index from a split two-column timeline into a clean broadsheet-editorial single-column layout, fixing the card expansion clip bug and making the site accessible to non-technical readers.

**Architecture:** Single-column chronological feed, cards interleaved from both thinkers per year group. `YearSection` renders a flat merged list. `Timeline` orchestrates state and passes a `FilterBar` inline at the top. Card expansion uses a `max-height: 0 → 2000px` CSS transition to avoid any overflow clipping.

**Tech Stack:** Next.js 16 App Router, React 19, Tailwind CSS v4, TypeScript, Instrument Serif / DM Sans / JetBrains Mono fonts (Google Fonts, already loaded).

**Spec:** `docs/superpowers/specs/2026-04-01-redesign-design.md`

---

## File Map

| Action | File | Responsibility |
|--------|------|----------------|
| Modify | `src/types/index.ts` | Add `whyIncorrect?: string` to `Prediction` |
| Modify | `src/lib/constants.ts` | Plain-language STATUS_LABELS |
| Modify | `src/data/aschenbrenner.ts` | Add `whyIncorrect` to each `incorrect` prediction |
| Modify | `src/data/shulman.ts` | Add `whyIncorrect` to each `incorrect` prediction |
| Modify | `src/app/globals.css` | New tokens, remove split-spine + scroll-reveal animations |
| Modify | `src/components/StatusBadge.tsx` | Rectangular pill, new label strings |
| Modify | `src/components/TimelineCard.tsx` | Full redesign + max-height expand fix + whyIncorrect block |
| Modify | `src/components/YearSection.tsx` | Broadsheet year heading, flat merged card list |
| Modify | `src/components/Timeline.tsx` | Single-column, render FilterBar inline, remove TimelineNav |
| Modify | `src/components/HeroSection.tsx` | Replace with newspaper masthead |
| Modify | `src/components/SummarySection.tsx` | Update footer to ruled two-line design |
| Delete | `src/components/TimelineNav.tsx` | Replaced by FilterBar |
| Create | `src/components/FilterBar.tsx` | Inline thinker + status filter pills |
| Create | `src/lib/jargon.ts` | Term → plain-English definition map |
| Create | `src/lib/jargon.ts` (also contains `annotateJargon`) | Term → definition map + React annotation utility |

---

## Task 1: Data model — add `whyIncorrect` field

**Files:**
- Modify: `src/types/index.ts`
- Modify: `src/data/aschenbrenner.ts`
- Modify: `src/data/shulman.ts`

- [ ] **Step 1: Add field to Prediction interface**

In `src/types/index.ts`, add after the `implications?: string` line:

```ts
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
  implications?: string;
  whyIncorrect?: string;   // ← ADD THIS LINE
  lastReviewed: string;
  timeHorizon?: string;
  year: number;
}
```

- [ ] **Step 2: Add `whyIncorrect` to every incorrect prediction in `src/data/aschenbrenner.ts`**

Find every prediction with `status: "incorrect"` and add a `whyIncorrect` field explaining the failure in plain language. Example format:

```ts
{
  id: "aschenbrenner-...",
  status: "incorrect",
  // ... other fields ...
  whyIncorrect: "One or two plain-English sentences explaining specifically why this prediction was wrong — what actually happened instead, and where the forecast went astray.",
}
```

- [ ] **Step 3: Add `whyIncorrect` to every incorrect prediction in `src/data/shulman.ts`**

Same pattern as Step 2.

- [ ] **Step 4: Verify TypeScript compiles**

```bash
cd "C:/Users/scott/coding projects/ai-predictions-page"
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/types/index.ts src/data/aschenbrenner.ts src/data/shulman.ts
git commit -m "feat: add whyIncorrect field to Prediction type and data"
```

---

## Task 2: Update status labels to plain language

**Files:**
- Modify: `src/lib/constants.ts`

- [ ] **Step 1: Replace STATUS_LABELS**

Replace the entire STATUS_LABELS export in `src/lib/constants.ts`:

```ts
export const STATUS_LABELS: Record<string, string> = {
  confirmed: "Got it right",
  in_progress: "Still unfolding",
  outstanding: "Too early to tell",
  incorrect: "Got it wrong",
};
```

Note: The STATUS_COLORS map keys, PredictionStatus type union values, and all data files use the original internal strings (`confirmed`, `in_progress`, `outstanding`, `incorrect`) — do NOT change those. Only the display labels change here.

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add src/lib/constants.ts
git commit -m "feat: plain-language status labels"
```

---

## Task 3: Update CSS design tokens and remove old animations

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Replace the full globals.css content**

Replace the entire file with this:

```css
@import "tailwindcss";

/* ============================================================
   CSS Custom Properties — Broadsheet Editorial
   ============================================================ */

:root {
  /* Backgrounds */
  --bg-primary: #f9f7f2;
  --bg-card: #ffffff;

  /* Borders */
  --border-card: #e0ddd6;

  /* Thinker accent colors */
  --accent-shulman: #7c3aed;
  --accent-aschenbrenner: #ea580c;

  /* Prediction status */
  --confirmed: #059669;
  --in-progress: #d97706;
  --outstanding: #64748b;
  --incorrect: #dc2626;

  /* Typography */
  --text-primary: #1a1a1a;
  --text-secondary: #444444;
  --text-muted: #888888;
  --text-faint: #bbbbbb;

  /* Rules / dividers */
  --rule-heavy: #1a1a1a;
  --rule-light: #e0ddd6;

  /* Font families */
  --font-sans: var(--font-dm-sans), system-ui, sans-serif;
  --font-serif: var(--font-instrument-serif), Georgia, serif;
  --font-mono: var(--font-jetbrains-mono), monospace;
}

/* ============================================================
   Base Styles
   ============================================================ */

html {
  background: var(--bg-primary);
  color: var(--text-primary);
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-sans);
}

/* ============================================================
   Noise Texture Overlay
   ============================================================ */

body::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  opacity: 0.015;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
}

/* ============================================================
   Card expand/collapse — max-height transition
   ============================================================ */

.card-expanded-content {
  overflow: hidden;
  max-height: 0;
  transition: max-height 200ms ease;
}

.card-expanded-content.expanded {
  max-height: 2000px;
}

/* ============================================================
   Status pulse animation (used on "Still unfolding" badge)
   ============================================================ */

@keyframes pulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}

.status-pulse {
  animation: pulse 3s ease-in-out infinite;
}

/* ============================================================
   Reduced Motion
   ============================================================ */

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* ============================================================
   Custom Scrollbar
   ============================================================ */

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: var(--bg-primary);
}

::-webkit-scrollbar-thumb {
  background: var(--rule-light);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #aaa;
}
```

- [ ] **Step 2: Start dev server and verify no console errors**

```bash
npm run dev
```

Open http://localhost:3000. The page will look broken (that's expected — we haven't updated components yet). Check for no build/CSS errors in the terminal.

- [ ] **Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "refactor: broadsheet CSS tokens, remove old animations"
```

---

## Task 4: Update StatusBadge

**Files:**
- Modify: `src/components/StatusBadge.tsx`

- [ ] **Step 1: Replace StatusBadge**

```tsx
"use client";

import { PredictionStatus } from "@/types";
import { STATUS_LABELS } from "@/lib/constants";

const STATUS_STYLES: Record<PredictionStatus, { color: string; bg: string; border: string }> = {
  confirmed:    { color: "#166534", bg: "#f0fdf4", border: "#bbf7d0" },
  in_progress:  { color: "#92400e", bg: "#fffbeb", border: "#fde68a" },
  outstanding:  { color: "#475569", bg: "#f8fafc", border: "#e2e8f0" },
  incorrect:    { color: "#991b1b", bg: "#fef2f2", border: "#fecaca" },
};

export function StatusBadge({
  status,
  animated = true,
}: {
  status: PredictionStatus;
  animated?: boolean;
}) {
  const s = STATUS_STYLES[status];
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2 py-0.5 font-mono text-[9px] font-medium uppercase tracking-wider"
      style={{
        color: s.color,
        backgroundColor: s.bg,
        border: `1px solid ${s.border}`,
        borderRadius: "2px",
      }}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full flex-shrink-0 ${animated && status === "in_progress" ? "status-pulse" : ""}`}
        style={{ backgroundColor: s.color }}
      />
      {STATUS_LABELS[status]}
    </span>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add src/components/StatusBadge.tsx
git commit -m "feat: broadsheet StatusBadge with plain-language labels"
```

---

## Task 5: Rewrite TimelineCard

**Files:**
- Modify: `src/components/TimelineCard.tsx`

This is the core component change. The new card uses a bottom-rule separator (no box border), a 3px left thinker bar, serif italic claim, and the CSS `.card-expanded-content` class from globals.css for the max-height animation that fixes the clip bug.

- [ ] **Step 1: Replace TimelineCard**

```tsx
"use client";

import { Prediction } from "@/types";
import { StatusBadge } from "@/components/StatusBadge";

interface TimelineCardProps {
  prediction: Prediction;
  thinker: "shulman" | "aschenbrenner";
  isExpanded: boolean;
  onToggle: () => void;
  showThinkerBio?: string;
}

export function TimelineCard({
  prediction,
  thinker,
  isExpanded,
  onToggle,
  showThinkerBio,
}: TimelineCardProps) {
  const accentColor =
    thinker === "shulman" ? "var(--accent-shulman)" : "var(--accent-aschenbrenner)";

  const thinkerLabel =
    thinker === "shulman" ? "Shulman" : "Aschenbrenner";

  const formattedDate = prediction.lastReviewed
    ? new Date(prediction.lastReviewed).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
      })
    : null;

  return (
    <div
      className="relative border-b"
      style={{ borderColor: "var(--rule-light)" }}
    >
      {/* Collapsed header — always visible, click to toggle */}
      <div
        className="flex cursor-pointer items-start gap-0 py-3.5 transition-colors duration-100 hover:bg-[#f5f3ec] -mx-6 px-6"
        onClick={onToggle}
        role="button"
        aria-expanded={isExpanded}
      >
        {/* Thinker colour bar */}
        <div
          className="mt-1 mr-3.5 w-[3px] self-stretch flex-shrink-0 rounded-sm"
          style={{ backgroundColor: accentColor, minHeight: "20px" }}
        />

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Meta row */}
          <div className="mb-1 flex items-center gap-2">
            <span
              className="font-mono text-[10px] font-semibold uppercase tracking-widest"
              style={{ color: accentColor }}
            >
              {thinkerLabel}
            </span>
            {prediction.timeHorizon && (
              <span
                className="font-mono text-[10px]"
                style={{ color: "var(--text-faint)" }}
              >
                · {prediction.timeHorizon}
              </span>
            )}
          </div>

          {/* Thinker bio — shown first time per year group */}
          {showThinkerBio && (
            <p
              className="mb-1.5 font-mono text-[10px] leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {showThinkerBio}
            </p>
          )}

          {/* Claim */}
          <p
            className="text-base leading-snug"
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              color: "var(--text-primary)",
            }}
          >
            {prediction.claim}
          </p>
        </div>

        {/* Status badge — right-aligned */}
        <div className="ml-4 flex-shrink-0 mt-0.5">
          <StatusBadge status={prediction.status} />
        </div>
      </div>

      {/* Expanded content — max-height CSS transition (fixes clip bug) */}
      <div className={`card-expanded-content pl-[17px]${isExpanded ? " expanded" : ""}`}>
        <div className="pb-4 pt-0.5">

          {/* Assessment */}
          {prediction.evidence && (
            <div className="mb-3">
              <p
                className="mb-1 font-mono text-[9px] uppercase tracking-widest"
                style={{ color: "var(--text-faint)" }}
              >
                Assessment
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {prediction.evidence}
              </p>
            </div>
          )}

          {/* "If true" block — confirmed only */}
          {prediction.status === "confirmed" && prediction.implications && (
            <div
              className="mb-3 border-l-2 pl-3 py-2 pr-2 rounded-r-sm text-sm leading-relaxed"
              style={{
                borderColor: "#16a34a",
                backgroundColor: "#f0fdf4",
                color: "#166534",
              }}
            >
              <strong className="font-semibold">If true — </strong>
              {prediction.implications}
            </div>
          )}

          {/* "Why incorrect" block — incorrect only */}
          {prediction.status === "incorrect" && prediction.whyIncorrect && (
            <div
              className="mb-3 border-l-2 pl-3 py-2 pr-2 rounded-r-sm text-sm leading-relaxed"
              style={{
                borderColor: "#dc2626",
                backgroundColor: "#fef2f2",
                color: "#7f1d1d",
              }}
            >
              <strong className="font-semibold">Why incorrect — </strong>
              {prediction.whyIncorrect}
            </div>
          )}

          {/* Footer metadata */}
          <div
            className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[10px]"
            style={{ color: "var(--text-faint)" }}
          >
            {prediction.sourceUrl ? (
              <a
                href={prediction.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hover:underline"
                style={{ color: accentColor }}
              >
                {prediction.source}
              </a>
            ) : prediction.source ? (
              <span style={{ color: accentColor }}>{prediction.source}</span>
            ) : null}
            {prediction.confidence && (
              <span>Confidence: {prediction.confidence}</span>
            )}
            {formattedDate && <span>Reviewed {formattedDate}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

- [ ] **Step 3: Check dev server — cards should render in the current layout**

Visit http://localhost:3000. Cards may still be in the old two-column layout (YearSection hasn't changed yet), but they should render without errors. Click a card to expand — confirm content appears below without clipping.

- [ ] **Step 4: Commit**

```bash
git add src/components/TimelineCard.tsx
git commit -m "feat: broadsheet TimelineCard, fix expansion clip bug"
```

---

## Task 6: Create FilterBar component

**Files:**
- Create: `src/components/FilterBar.tsx`

- [ ] **Step 1: Create FilterBar**

```tsx
"use client";

import { PredictionStatus } from "@/types";
import { STATUS_LABELS } from "@/lib/constants";

interface FilterBarProps {
  visibleThinkers: { shulman: boolean; aschenbrenner: boolean };
  onToggleThinker: (t: "shulman" | "aschenbrenner") => void;
  activeStatuses: PredictionStatus[] | "all";
  onToggleStatus: (s: PredictionStatus | "all") => void;
}

const PILL_BASE =
  "font-mono text-[10px] px-3 py-1 cursor-pointer transition-colors duration-100 select-none";
const PILL_INACTIVE =
  "border border-[var(--rule-light)] text-[var(--text-muted)] bg-white hover:border-[var(--text-muted)]";
const PILL_ACTIVE = "border bg-[var(--text-primary)] text-white border-[var(--text-primary)]";

export function FilterBar({
  visibleThinkers,
  onToggleThinker,
  activeStatuses,
  onToggleStatus,
}: FilterBarProps) {
  const statuses: PredictionStatus[] = ["confirmed", "in_progress", "outstanding", "incorrect"];

  return (
    <div
      className="flex flex-wrap items-center gap-2 py-3 border-b mb-0"
      style={{ borderColor: "var(--rule-light)" }}
    >
      {/* Thinker filters */}
      <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-faint)] mr-1">
        Show
      </span>
      <button
        className={`${PILL_BASE} rounded-sm ${visibleThinkers.shulman ? "" : ""}`}
        style={{
          border: `1px solid ${visibleThinkers.shulman ? "var(--accent-shulman)" : "var(--rule-light)"}`,
          color: visibleThinkers.shulman ? "var(--accent-shulman)" : "var(--text-muted)",
          backgroundColor: visibleThinkers.shulman ? "color-mix(in srgb, var(--accent-shulman) 8%, white)" : "white",
        }}
        onClick={() => onToggleThinker("shulman")}
      >
        Shulman
      </button>
      <button
        className={`${PILL_BASE} rounded-sm`}
        style={{
          border: `1px solid ${visibleThinkers.aschenbrenner ? "var(--accent-aschenbrenner)" : "var(--rule-light)"}`,
          color: visibleThinkers.aschenbrenner ? "var(--accent-aschenbrenner)" : "var(--text-muted)",
          backgroundColor: visibleThinkers.aschenbrenner ? "color-mix(in srgb, var(--accent-aschenbrenner) 8%, white)" : "white",
        }}
        onClick={() => onToggleThinker("aschenbrenner")}
      >
        Aschenbrenner
      </button>

      {/* Divider */}
      <span className="h-4 w-px mx-1" style={{ background: "var(--rule-light)" }} />

      {/* Status filters */}
      <button
        className={`${PILL_BASE} rounded-sm ${activeStatuses === "all" ? PILL_ACTIVE : PILL_INACTIVE}`}
        onClick={() => onToggleStatus("all")}
      >
        All
      </button>
      {statuses.map((s) => (
        <button
          key={s}
          className={`${PILL_BASE} rounded-sm ${
            activeStatuses !== "all" && activeStatuses.includes(s)
              ? PILL_ACTIVE
              : PILL_INACTIVE
          }`}
          onClick={() => onToggleStatus(s)}
        >
          {STATUS_LABELS[s]}
        </button>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add src/components/FilterBar.tsx
git commit -m "feat: inline FilterBar component"
```

---

## Task 7: Rewrite YearSection

**Files:**
- Modify: `src/components/YearSection.tsx`

The new YearSection receives an interleaved list of `{prediction, thinker}` objects and renders them in a flat list. The broadsheet year heading replaces the large display-font number + sticky glassmorphism.

- [ ] **Step 1: Replace YearSection**

```tsx
"use client";

import { Prediction } from "@/types";
import { TimelineCard } from "@/components/TimelineCard";

export interface MergedCard {
  prediction: Prediction;
  thinker: "shulman" | "aschenbrenner";
  showThinkerBio?: string;
}

interface YearSectionProps {
  year: number;
  cards: MergedCard[];
  expandedId: string | null;
  onExpand: (id: string) => void;
}

export function YearSection({ year, cards, expandedId, onExpand }: YearSectionProps) {
  if (cards.length === 0) return null;

  return (
    <section id={`year-${year}`} className="mx-auto max-w-2xl px-6">
      {/* Broadsheet year heading */}
      <div
        className="flex items-center gap-4 pt-8 pb-3 border-t-2"
        style={{ borderColor: "var(--rule-heavy)" }}
      >
        <h2
          className="text-3xl flex-shrink-0"
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontWeight: 400,
            color: "var(--text-primary)",
          }}
        >
          {year}
        </h2>
        <span
          className="font-mono text-[10px] tracking-widest"
          style={{ color: "var(--text-faint)" }}
        >
          {cards.length} prediction{cards.length !== 1 ? "s" : ""}
        </span>
        <div className="flex-1 h-px" style={{ background: "var(--rule-light)" }} />
      </div>

      {/* Flat card list */}
      <div>
        {cards.map(({ prediction, thinker, showThinkerBio }) => (
          <TimelineCard
            key={prediction.id}
            prediction={prediction}
            thinker={thinker}
            isExpanded={expandedId === prediction.id}
            onToggle={() => onExpand(prediction.id)}
            showThinkerBio={showThinkerBio}
          />
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add src/components/YearSection.tsx
git commit -m "feat: broadsheet YearSection with flat card list"
```

---

## Task 8: Rewrite Timeline (orchestration)

**Files:**
- Modify: `src/components/Timeline.tsx`
- Delete: `src/components/TimelineNav.tsx`

`Timeline` now builds interleaved card lists per year and manages a status filter alongside the thinker visibility. `TimelineNav` is deleted.

- [ ] **Step 1: Replace Timeline.tsx**

```tsx
"use client";

import { useState } from "react";
import { shulman } from "@/data/shulman";
import { aschenbrenner } from "@/data/aschenbrenner";
import { TIMELINE_YEARS } from "@/data/milestones";
import { YearSection, MergedCard } from "@/components/YearSection";
import { FilterBar } from "@/components/FilterBar";
import { PredictionStatus } from "@/types";

export function Timeline() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [visibleThinkers, setVisibleThinkers] = useState({
    shulman: true,
    aschenbrenner: true,
  });
  const [activeStatuses, setActiveStatuses] = useState<PredictionStatus[] | "all">("all");

  function handleExpand(id: string) {
    setExpandedId((prev) => (prev === id ? null : id));
  }

  function handleToggleThinker(thinker: "shulman" | "aschenbrenner") {
    setVisibleThinkers((prev) => {
      const next = { ...prev, [thinker]: !prev[thinker] };
      // Prevent disabling the last active thinker
      return next.shulman || next.aschenbrenner ? next : prev;
    });
  }

  function handleToggleStatus(s: PredictionStatus | "all") {
    if (s === "all") {
      setActiveStatuses("all");
      return;
    }
    setActiveStatuses((prev) => {
      if (prev === "all") return [s];
      const next = prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s];
      return next.length === 0 ? "all" : next;
    });
  }

  // Build interleaved cards per year
  const cardsByYear = TIMELINE_YEARS.map((year) => {
    const shulmanPreds = visibleThinkers.shulman
      ? shulman.predictions.filter((p) => p.year === year)
      : [];
    const aschenbrennerPreds = visibleThinkers.aschenbrenner
      ? aschenbrenner.predictions.filter((p) => p.year === year)
      : [];

    // Interleave: shulman[0], aschenbrenner[0], shulman[1], aschenbrenner[1], ...
    const maxLen = Math.max(shulmanPreds.length, aschenbrennerPreds.length);
    const merged: MergedCard[] = [];

    // Track if we've already shown the bio for each thinker in this year
    const shownBio = { shulman: false, aschenbrenner: false };

    for (let i = 0; i < maxLen; i++) {
      if (i < shulmanPreds.length) {
        merged.push({
          prediction: shulmanPreds[i],
          thinker: "shulman",
          showThinkerBio: !shownBio.shulman && i === 0 ? shulman.bio : undefined,
        });
        shownBio.shulman = true;
      }
      if (i < aschenbrennerPreds.length) {
        merged.push({
          prediction: aschenbrennerPreds[i],
          thinker: "aschenbrenner",
          showThinkerBio: !shownBio.aschenbrenner && i === 0 ? aschenbrenner.bio : undefined,
        });
        shownBio.aschenbrenner = true;
      }
    }

    // Apply status filter
    const filtered =
      activeStatuses === "all"
        ? merged
        : merged.filter((c) => activeStatuses.includes(c.prediction.status));

    return { year, cards: filtered };
  }).filter(({ cards }) => cards.length > 0);

  return (
    <section className="py-8">
      {/* Inline filter bar */}
      <div className="mx-auto max-w-2xl px-6">
        <FilterBar
          visibleThinkers={visibleThinkers}
          onToggleThinker={handleToggleThinker}
          activeStatuses={activeStatuses}
          onToggleStatus={handleToggleStatus}
        />
      </div>

      {/* Year sections */}
      {cardsByYear.map(({ year, cards }) => (
        <YearSection
          key={year}
          year={year}
          cards={cards}
          expandedId={expandedId}
          onExpand={handleExpand}
        />
      ))}

      {/* Bottom rule */}
      <div className="mx-auto max-w-2xl px-6 pt-8">
        <div className="h-0.5" style={{ background: "var(--rule-heavy)" }} />
      </div>
    </section>
  );
}
```

Note: The `visibleThinkers` state has a typo to fix (`aschenbrenker` → `aschenbrenner`) — use `aschenbrenner` consistently.

- [ ] **Step 2: Verify no remaining typos** — search the file for `aschenbrenker` (missing 'n') and confirm zero results. The code block above has been corrected in all three places: state initializer, guard clause, and filter predicate.

- [ ] **Step 3: Delete TimelineNav.tsx**

```bash
rm "src/components/TimelineNav.tsx"
```

- [ ] **Step 4: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

- [ ] **Step 5: Check dev server**

Visit http://localhost:3000. The timeline should now be single-column with the filter bar at the top. Test:
- Thinker filter pills toggle cards in/out
- Status filter pills work
- Cards expand inline without clipping
- Year headings have 2px top rules

- [ ] **Step 6: Commit**

```bash
git add src/components/Timeline.tsx src/components/FilterBar.tsx src/components/YearSection.tsx
git rm src/components/TimelineNav.tsx
git commit -m "feat: single-column timeline with inline FilterBar, remove TimelineNav"
```

---

## Task 9: Replace HeroSection with masthead

**Files:**
- Modify: `src/components/HeroSection.tsx`

Remove `useCountUp`, animated counters, and the full-height layout. Replace with a compact newspaper masthead.

- [ ] **Step 1: Replace HeroSection**

```tsx
import { shulman } from "@/data/shulman";
import { aschenbrenner } from "@/data/aschenbrenner";
import { getStatusCounts, getHitRate } from "@/lib/utils";

export function HeroSection() {
  const allPredictions = [...shulman.predictions, ...aschenbrenner.predictions];
  const counts = getStatusCounts(allPredictions);
  const total = allPredictions.length;
  const hitRate = getHitRate(allPredictions);

  const stats = [
    { label: "Predictions", value: total },
    { label: "Got it right", value: counts.confirmed },
    { label: "Got it wrong", value: counts.incorrect },
    { label: "Still unfolding", value: counts.in_progress },
    { label: "Too early to tell", value: counts.outstanding },
    { label: "Hit rate", value: `${hitRate}%` },
  ];

  return (
    <header className="border-b-2" style={{ borderColor: "var(--rule-heavy)" }}>
      <div className="mx-auto max-w-2xl px-6 pt-10 pb-0 text-center">
        {/* Kicker */}
        <p
          className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em]"
          style={{ color: "var(--text-muted)" }}
        >
          Accountability Project · Est. 2025
        </p>

        {/* Title */}
        <h1
          className="text-5xl md:text-7xl leading-[1.05] tracking-tight"
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontWeight: 400,
            color: "var(--text-primary)",
          }}
        >
          AI Prophecy Index
        </h1>

        {/* Rule + deck */}
        <div className="my-4 flex items-center gap-4 justify-center">
          <div className="flex-1 h-px max-w-[80px]" style={{ background: "var(--rule-heavy)" }} />
          <p
            className="text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            Who got it right, who didn&apos;t, and what the record says
          </p>
          <div className="flex-1 h-px max-w-[80px]" style={{ background: "var(--rule-heavy)" }} />
        </div>

        {/* Stats row */}
        <div
          className="flex border-t border-b mt-4"
          style={{ borderColor: "var(--rule-light)" }}
        >
          {stats.map(({ label, value }, i) => (
            <div
              key={label}
              className="flex-1 py-3 text-center"
              style={{
                borderRight: i < stats.length - 1 ? `1px solid var(--rule-light)` : "none",
              }}
            >
              <div
                className="font-mono text-lg font-medium leading-none mb-1"
                style={{ color: "var(--text-primary)" }}
              >
                {value}
              </div>
              <div
                className="font-mono text-[9px] uppercase tracking-widest leading-tight"
                style={{ color: "var(--text-muted)" }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sentinel for intersection observer (keep for future use) */}
      <div id="hero-sentinel" className="h-px w-full" />
    </header>
  );
}
```

Note: `HeroSection` no longer needs `"use client"` since there are no hooks. Remove it.

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

- [ ] **Step 3: Check dev server — masthead**

Visit http://localhost:3000. The page should open with the newspaper masthead: large serif italic title, deck subtitle, stats row with vertical rule dividers.

- [ ] **Step 4: Commit**

```bash
git add src/components/HeroSection.tsx
git commit -m "feat: newspaper masthead replaces HeroSection"
```

---

## Task 10: Update SummarySection footer

**Files:**
- Modify: `src/components/SummarySection.tsx`

Keep the ThinkerCard stats and DonutChart. Replace the rounded-xl card styles with ruled editorial styling. Update the footer to two-line ruled format.

- [ ] **Step 1: Update ThinkerCard styles inside SummarySection**

Find the `ThinkerCard` sub-component (lines ~14–80 in the current file). Change:
- Container: replace `rounded-xl` and `border: "1px solid var(--border-card)"` with a `border-t-2 pt-6` top rule style
- `h3` thinker name: keep serif italic but bump color contrast
- Status label strings in the `stats` array: update "In Progress" → "Still unfolding", "Outstanding" → "Too early to tell", "Confirmed" → "Got it right", "Incorrect" → "Got it wrong"

- [ ] **Step 2: Update the footer at the bottom of SummarySection**

Replace the footer JSX (the `<footer>` block) with:

```tsx
<footer
  className="border-t-2 pt-6 mt-8"
  style={{ borderColor: "var(--rule-heavy)" }}
>
  <div className="flex items-center justify-between gap-4 mb-4">
    <p className="font-mono text-[10px]" style={{ color: "var(--text-muted)" }}>
      AI PROPHECY INDEX · Last updated {LAST_UPDATED}
    </p>
    <div className="flex items-center gap-3">
      <a
        href="https://scotthazlitt.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-[10px] hover:underline"
        style={{ color: "var(--text-muted)" }}
      >
        A project by Scott Hazlitt
      </a>
      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/scott-hazlitt/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: "var(--text-muted)" }} className="transition-opacity hover:opacity-70">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
      </a>
      {/* GitHub */}
      <a href="https://github.com/scott-cmd11" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: "var(--text-muted)" }} className="transition-opacity hover:opacity-70">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
      </a>
    </div>
  </div>

  {/* Legal row */}
  <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
    <p className="font-mono text-[10px]" style={{ color: "var(--text-muted)" }}>
      © {new Date().getFullYear()} Scott Hazlitt. AI-generated content is clearly labelled and may contain errors.
    </p>
    <a href="/privacy" className="font-mono text-[10px] hover:underline" style={{ color: "var(--text-muted)" }}>
      Privacy &amp; Legal
    </a>
  </div>

  {/* AI disclosure */}
  <div
    className="border-l-2 pl-4 py-3 mb-8"
    style={{ borderColor: "var(--rule-light)" }}
  >
    <p className="font-mono text-[9px] uppercase tracking-widest mb-1" style={{ color: "var(--text-muted)" }}>
      AI-generated content — use with caution
    </p>
    <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
      Prediction summaries, evidence assessments, and implication statements on this site were generated with the assistance of AI language models. While sourced from public interviews and published writing, the framing, interpretation, and status judgements reflect automated analysis and may contain errors, omissions, or bias. This site is an independent tracking project and is not affiliated with Carl Shulman, Leopold Aschenbrenner, or their associated organisations. Content should not be used to inform investment, policy, or other consequential decisions without independent verification.
    </p>
  </div>
</footer>
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

- [ ] **Step 4: Check dev server — scroll to bottom**

Visit http://localhost:3000, scroll to "The Reckoning" section and footer. Verify the ruled footer style renders correctly.

- [ ] **Step 5: Commit**

```bash
git add src/components/SummarySection.tsx
git commit -m "feat: broadsheet SummarySection and footer"
```

---

## Task 11: Jargon tooltips

**Files:**
- Create: `src/lib/jargon.ts`
- Create: `src/components/JargonTooltip.tsx`
- Modify: `src/components/TimelineCard.tsx`

- [ ] **Step 1: Create jargon definition map**

Create `src/lib/jargon.ts`:

```ts
// Terms and their plain-English definitions shown to non-technical readers.
// Keys are lowercase exact-match strings (case-insensitive matching applied at render time).
export const JARGON: Record<string, string> = {
  "agi": "Artificial General Intelligence — an AI system that can do any intellectual task a human can do.",
  "artificial general intelligence": "An AI system that can do any intellectual task a human can do.",
  "frontier model": "The most capable AI systems available at any given time, typically from a handful of leading labs.",
  "frontier models": "The most capable AI systems available at any given time, typically from a handful of leading labs.",
  "alignment": "The challenge of making sure AI systems do what humans actually want, not just what they were literally told.",
  "inference compute": "The computing power used when an AI model answers a question or completes a task (as opposed to training).",
  "pretraining": "The initial phase of building an AI model, where it learns from vast amounts of text and data.",
  "rlhf": "Reinforcement Learning from Human Feedback — a technique for training AI to give responses humans rate as better.",
  "rl": "Reinforcement learning — a training method where an AI learns by receiving rewards for correct actions.",
  "capability overhang": "A situation where AI capabilities exist in a model but haven't been unlocked or discovered yet.",
  "scaling laws": "The observed pattern that AI models become more capable predictably as they get larger and are trained on more data.",
};
```

- [ ] **Step 2: Create JargonTooltip component**

Create `src/components/JargonTooltip.tsx`:

```tsx
import { JARGON } from "@/lib/jargon";

/** Wraps a text string, returning a React node array with jargon terms underlined + title tooltips. */
export function annotateJargon(text: string): React.ReactNode[] {
  // Build a regex that matches any jargon term (longest first to prefer specific matches)
  const terms = Object.keys(JARGON).sort((a, b) => b.length - a.length);
  const pattern = new RegExp(`\\b(${terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})\\b`, "gi");

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const term = match[0];
    const definition = JARGON[term.toLowerCase()] ?? JARGON[term] ?? "";
    parts.push(
      <abbr
        key={match.index}
        title={definition}
        style={{
          textDecoration: "underline dotted",
          textUnderlineOffset: "2px",
          cursor: "help",
        }}
      >
        {term}
      </abbr>
    );
    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}
```

- [ ] **Step 3: Apply annotateJargon in TimelineCard**

In `src/components/TimelineCard.tsx`:

1. Add import at top: `import { annotateJargon } from "@/lib/jargon";`

2. In the Assessment section, replace `{prediction.evidence}` with:
   ```tsx
   {prediction.evidence ? annotateJargon(prediction.evidence) : null}
   ```

3. In the "Why incorrect" block, replace `{prediction.whyIncorrect}` with:
   ```tsx
   {prediction.whyIncorrect ? annotateJargon(prediction.whyIncorrect) : null}
   ```

- [ ] **Step 4: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

- [ ] **Step 5: Check dev server — hover over jargon terms**

Open a card with evidence text. If it contains a term like "AGI" or "frontier model", hovering should show the definition tooltip (native browser title tooltip).

- [ ] **Step 6: Commit**

```bash
git add src/lib/jargon.ts src/components/TimelineCard.tsx
git commit -m "feat: jargon tooltips for non-technical readers"
```

Note: `JargonTooltip.tsx` is not a separate file — the `annotateJargon` function lives in `src/lib/jargon.ts`. Do not stage a non-existent `JargonTooltip.tsx`.

---

## Task 12: Final visual polish pass

- [ ] **Step 1: Run dev server and do a full page review**

```bash
npm run dev
```

Check the following:
- [ ] Masthead renders correctly — title, deck, stats row
- [ ] Timeline opens with filter bar visible
- [ ] Cards from both thinkers appear interleaved by year
- [ ] Thinker bio appears once per thinker per year group
- [ ] Expanding a card pushes content down — no upward clipping
- [ ] "Got it wrong" cards show the red "Why incorrect" block when expanded
- [ ] "Got it right" cards show the green "If true" block when expanded
- [ ] Status badges show plain-language labels ("Got it right", etc.)
- [ ] Footer has 2px top rule and ruled editorial style
- [ ] Jargon terms underlined with dotted underline + title tooltip on hover
- [ ] Page looks correct on mobile (narrow browser window)

- [ ] **Step 2: Fix any visual regressions found in Step 1**

- [ ] **Step 3: Run build to check for production errors**

```bash
npm run build
```

Expected: successful build with no TypeScript or lint errors.

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "feat: broadsheet editorial redesign complete"
```

---

## Verification Checklist

End-to-end acceptance criteria:

| Check | How to verify |
|-------|--------------|
| No card expansion clipping | Expand a card near the top of a year section — content must be fully visible |
| Plain-language labels | StatusBadge shows "Got it right" not "Confirmed" |
| Incorrect cards have explanation | Expand an incorrect card — red "Why incorrect" block appears |
| Confirmed cards still show "If true" | Expand a confirmed card — green block appears |
| Thinker bio appears once per year | First card of each thinker per year shows bio in mono text |
| Filter bar works | Toggle Shulman off — all Shulman cards disappear |
| Status filter works | Select "Got it wrong" — only incorrect cards visible |
| Mobile layout | Cards stack cleanly, left bars visible, readable at 375px width |
| No TypeScript errors | `npx tsc --noEmit` exits 0 |
| Production build passes | `npm run build` exits 0 |
