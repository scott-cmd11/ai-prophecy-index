# Tags, Analysis Charts & Scrollytelling — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add prediction tags (display + filtering), a dedicated Analysis section with two Recharts charts, and a scrollytelling sticky stats panel to the AI Prophecy Index homepage.

**Architecture:** Tags are added to the `Prediction` type and manually assigned to all 56 predictions. A new `AnalysisSection` renders between `ThinkersSection` and `Timeline` with two client-side Recharts charts. The sticky stats bar lives inside the Timeline section using `position: sticky` and Intersection Observer to track the current year.

**Tech Stack:** Next.js App Router, React 19, TypeScript 5, Tailwind CSS 4, Recharts 3.8 (already installed)

**Spec:** `docs/superpowers/specs/2026-04-04-tags-charts-scrollytelling-design.md`

---

## File Map

### Files Created

| File | Responsibility |
|------|----------------|
| `src/components/TagPills.tsx` | Renders tag pills as monospace bordered spans |
| `src/components/AnalysisSection.tsx` | Wrapper section ("The Data") with both charts |
| `src/components/TagDistributionChart.tsx` | Horizontal stacked bar chart (Recharts) |
| `src/components/TimelineScatterChart.tsx` | Year-based scatter plot (Recharts) |
| `src/components/StickyStatsBar.tsx` | Scrollytelling sticky panel with animated numbers |
| `src/components/AnimatedNumber.tsx` | Counter animation utility (requestAnimationFrame) |

### Files Modified

| File | Change |
|------|--------|
| `src/lib/constants.ts` | Add `PREDICTION_TAGS` array and `PredictionTag` type |
| `src/types/index.ts` | Add `tags?: PredictionTag[]` to `Prediction` interface |
| `src/data/shulman.ts` | Add 1–3 tags to each of 22 predictions |
| `src/data/aschenbrenner.ts` | Add 1–3 tags to each of 22 predictions |
| `src/data/cotra.ts` | Add 1–3 tags to each of 12 predictions |
| `src/components/TimelineCard.tsx` | Import and render `TagPills` below claim text |
| `src/components/FilterBar.tsx` | Add TOPIC row with tag filter pills, accept new props |
| `src/components/Timeline.tsx` | Add `activeTags` state, tag filtering in `cardsByYear`, Intersection Observer, `StickyStatsBar` |
| `src/components/YearSection.tsx` | Add `data-year` attribute to section element |
| `src/app/page.tsx` | Import and render `AnalysisSection` between `ThinkersSection` and `Timeline` |

---

## Task 1: Tag Constants and Type Updates

**Files:**
- Modify: `src/lib/constants.ts`
- Modify: `src/types/index.ts`

- [ ] **Step 1: Add tag constants to `src/lib/constants.ts`**

Append to end of file:

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

- [ ] **Step 2: Add `tags` field to Prediction type in `src/types/index.ts`**

Add import at top:
```ts
import type { PredictionTag } from "@/lib/constants";
```

Add to the `Prediction` interface after the `year: number;` line:
```ts
  tags?: PredictionTag[];
```

- [ ] **Step 3: Verify the build compiles**

Run: `npx next build 2>&1 | head -20`
Expected: No type errors.

- [ ] **Step 4: Commit**

```bash
git add src/lib/constants.ts src/types/index.ts
git commit -m "feat: add PredictionTag type and PREDICTION_TAGS constants"
```

---

## Task 2: Tag All 56 Predictions

**Files:**
- Modify: `src/data/shulman.ts`
- Modify: `src/data/aschenbrenner.ts`
- Modify: `src/data/cotra.ts`

- [ ] **Step 1: Add `PredictionTag` import to each data file**

Add to the top of each file:
```ts
import type { PredictionTag } from "@/lib/constants";
```

Note: The `Prediction` type already includes the optional `tags` field from Task 1. TypeScript will validate the tag values.

- [ ] **Step 2: Tag Shulman predictions (22) in `src/data/shulman.ts`**

Add a `tags` field after the `year` field for each prediction. Use the existing `category` and `claim` to determine tags:

| ID | Category | Tags |
|----|----------|------|
| cs-1 | Intelligence Explosion | `["Capabilities", "Timelines"]` |
| cs-2 | Intelligence Explosion | `["Capabilities", "Industry"]` |
| cs-3 | Intelligence Explosion | `["Capabilities"]` |
| cs-4 | Economic Transformation | `["Economics"]` |
| cs-5 | Economic Transformation | `["Economics"]` |
| cs-6 | Economic Transformation | `["Economics", "Industry"]` |
| cs-7 | Robot Industrialization | `["Hardware", "Economics"]` |
| cs-8 | Robot Industrialization | `["Hardware", "Economics"]` |
| cs-9 | National Security | `["Geopolitics", "Governance"]` |
| cs-10 | National Security | `["Geopolitics"]` |
| cs-11 | AI Alignment | `["Safety"]` |
| cs-12 | AI Alignment | `["Safety", "Governance"]` |
| cs-13 | AI Alignment | `["Safety"]` |
| cs-14 | National Security | `["Geopolitics", "Governance"]` |
| cs-15 | Intelligence Explosion | `["Capabilities", "Timelines"]` |
| cs-16 | Robot Industrialization | `["Hardware", "Economics"]` |
| cs-17 | Economic Transformation | `["Economics", "Governance"]` |
| cs-18 | AI Alignment | `["Safety"]` |
| cs-19 | AI Alignment | `["Safety", "Capabilities"]` |
| cs-20 | Intelligence Explosion | `["Capabilities", "Hardware"]` |
| cs-21 | AI Alignment | `["Safety", "Governance"]` |
| cs-22 | Economic Transformation | `["Economics"]` |

For each prediction, add `tags: [...]` as the last field before the closing `},`. Example for cs-1:

```ts
      year: 2030,
      tags: ["Capabilities", "Timelines"],
    },
```

- [ ] **Step 3: Tag Aschenbrenner predictions (22) in `src/data/aschenbrenner.ts`**

| ID | Category | Tags |
|----|----------|------|
| la-1 | AGI Timeline | `["Timelines", "Capabilities"]` |
| la-2 | Superintelligence | `["Timelines", "Capabilities"]` |
| la-3 | Compute Scaling | `["Hardware", "Industry", "Economics"]` |
| la-4 | Compute Scaling | `["Hardware"]` |
| la-5 | Compute Scaling | `["Hardware", "Industry"]` |
| la-6 | Compute Scaling | `["Hardware", "Economics"]` |
| la-7 | Compute Scaling | `["Hardware"]` |
| la-8 | China Competition | `["Geopolitics"]` |
| la-9 | China Competition | `["Geopolitics", "Governance"]` |
| la-10 | Government Response | `["Governance"]` |
| la-11 | Government Response | `["Governance", "Geopolitics"]` |
| la-12 | Superintelligence | `["Capabilities", "Timelines"]` |
| la-13 | Superintelligence | `["Capabilities"]` |
| la-14 | Superintelligence | `["Safety", "Capabilities"]` |
| la-15 | Capability Milestones | `["Capabilities"]` |
| la-16 | Superintelligence | `["Capabilities", "Safety"]` |
| la-17 | Capability Milestones | `["Capabilities", "Industry"]` |
| la-18 | Government Response | `["Governance"]` |
| la-19 | China Competition | `["Geopolitics"]` |
| la-20 | Economic Transformation | `["Economics"]` |
| la-21 | Compute Scaling | `["Hardware", "Economics"]` |
| la-22 | China Competition | `["Geopolitics", "Governance"]` |

- [ ] **Step 4: Tag Cotra predictions (12) in `src/data/cotra.ts`**

| ID | Category | Tags |
|----|----------|------|
| ac-1 | AI Alignment | `["Safety"]` |
| ac-2 | AI Safety | `["Safety", "Capabilities"]` |
| ac-3 | AI Alignment | `["Safety", "Capabilities"]` |
| ac-4 | AI Safety | `["Safety", "Governance"]` |
| ac-5 | AI Safety | `["Safety"]` |
| ac-6 | AGI Timeline | `["Timelines"]` |
| ac-7 | Superintelligence | `["Timelines", "Capabilities"]` |
| ac-8 | Capability Benchmarks | `["Capabilities"]` |
| ac-9 | Capability Benchmarks | `["Capabilities"]` |
| ac-10 | Automation | `["Economics", "Capabilities"]` |
| ac-11 | AGI Timeline | `["Timelines", "Hardware"]` |
| ac-12 | Automation | `["Economics", "Industry"]` |

- [ ] **Step 5: Verify the build compiles with all tags**

Run: `npx next build 2>&1 | head -20`
Expected: No type errors. All 56 predictions should have valid `PredictionTag[]` values.

- [ ] **Step 6: Commit**

```bash
git add src/data/shulman.ts src/data/aschenbrenner.ts src/data/cotra.ts
git commit -m "feat: add topic tags to all 56 predictions"
```

---

## Task 3: TagPills Display Component

**Files:**
- Create: `src/components/TagPills.tsx`
- Modify: `src/components/TimelineCard.tsx`

- [ ] **Step 1: Create `src/components/TagPills.tsx`**

```tsx
import type { PredictionTag } from "@/lib/constants";

interface TagPillsProps {
  tags?: PredictionTag[];
}

export function TagPills({ tags }: TagPillsProps) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="mt-1.5 flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <span
          key={tag}
          className="font-mono text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded-sm"
          style={{
            color: "var(--text-faint)",
            border: "1px solid var(--rule-light)",
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Add TagPills to `src/components/TimelineCard.tsx`**

Add import at top:
```ts
import { TagPills } from "@/components/TagPills";
```

Find the claim `<p>` element (the one with `className="text-[15px] leading-relaxed"` and `fontFamily: "var(--font-lora)"`). Immediately after the closing `</p>`, add:

```tsx
          <TagPills tags={prediction.tags} />
```

This places the tag pills between the claim text and the expanded content area.

- [ ] **Step 3: Verify in dev server**

Run: `npm run dev`
Navigate to `http://localhost:3000`. Each timeline card should now show small bordered tag pills below the claim text.

- [ ] **Step 4: Commit**

```bash
git add src/components/TagPills.tsx src/components/TimelineCard.tsx
git commit -m "feat: display tag pills on timeline cards"
```

---

## Task 4: Tag Filtering in FilterBar

**Files:**
- Modify: `src/components/FilterBar.tsx`
- Modify: `src/components/Timeline.tsx`

- [ ] **Step 1: Update FilterBar props and add TOPIC row in `src/components/FilterBar.tsx`**

Add import at top:
```ts
import { PREDICTION_TAGS, PredictionTag } from "@/lib/constants";
```

Update the `FilterBarProps` interface to add:
```ts
  activeTags: PredictionTag[] | "all";
  onToggleTag: (tag: PredictionTag) => void;
```

Update the function signature to destructure the new props:
```ts
export function FilterBar({
  visibleThinkers,
  onToggleThinker,
  activeStatuses,
  onToggleStatus,
  activeTags,
  onToggleTag,
}: FilterBarProps) {
```

After the status filter `</div>` (Row 2), add Row 3:

```tsx
      {/* Row 3: Topic filters */}
      <div className="flex items-center gap-2 mt-2 flex-wrap">
        <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-faint)] w-12 flex-shrink-0">
          Topic
        </span>
        {PREDICTION_TAGS.map((tag) => {
          const isActive = activeTags !== "all" && activeTags.includes(tag);
          return (
            <button
              key={tag}
              className={`${PILL_BASE} rounded-sm ${isActive ? "" : PILL_INACTIVE}`}
              style={isActive ? {
                color: "var(--text-primary)",
                backgroundColor: "color-mix(in srgb, var(--text-primary) 8%, white)",
                border: "1px solid var(--text-primary)",
              } : undefined}
              onClick={() => onToggleTag(tag)}
            >
              {tag}
            </button>
          );
        })}
      </div>
```

- [ ] **Step 2: Add tag state and filtering to `src/components/Timeline.tsx`**

Add import:
```ts
import { PredictionTag } from "@/lib/constants";
```

Add state after the `activeStatuses` state:
```ts
const [activeTags, setActiveTags] = useState<PredictionTag[] | "all">("all");
```

Add handler after `handleToggleStatus`:
```ts
function handleToggleTag(tag: PredictionTag) {
  setActiveTags((prev) => {
    if (prev === "all") return [tag];
    const next = prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag];
    return next.length === 0 ? "all" : next;
  });
}
```

In the `cardsByYear` map, replace the status filter block (lines ~92-97):
```ts
    // Apply status filter
    const statusFiltered =
      activeStatuses === "all"
        ? merged
        : merged.filter((c) => activeStatuses.includes(c.prediction.status));

    // Apply tag filter
    const filtered =
      activeTags === "all"
        ? statusFiltered
        : statusFiltered.filter((c) =>
            c.prediction.tags?.some((t) => activeTags.includes(t))
          );

    return { year, cards: filtered };
```

Pass new props to `FilterBar`:
```tsx
<FilterBar
  visibleThinkers={visibleThinkers}
  onToggleThinker={handleToggleThinker}
  activeStatuses={activeStatuses}
  onToggleStatus={handleToggleStatus}
  activeTags={activeTags}
  onToggleTag={handleToggleTag}
/>
```

- [ ] **Step 3: Verify tag filtering works**

In the dev server, click a topic pill (e.g., "Safety"). Only predictions tagged with "Safety" should show. Click another pill (e.g., "Governance"). Predictions tagged with either "Safety" OR "Governance" should show. Click both pills again to deactivate — all predictions should return.

- [ ] **Step 4: Commit**

```bash
git add src/components/FilterBar.tsx src/components/Timeline.tsx
git commit -m "feat: add topic tag filtering to FilterBar and Timeline"
```

---

## Task 5: Tag Distribution Bar Chart

**Files:**
- Create: `src/components/TagDistributionChart.tsx`

- [ ] **Step 1: Create `src/components/TagDistributionChart.tsx`**

```tsx
"use client";

import { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";
import { shulman } from "@/data/shulman";
import { aschenbrenner } from "@/data/aschenbrenner";
import { cotra } from "@/data/cotra";
import { PREDICTION_TAGS } from "@/lib/constants";

interface TagRow {
  tag: string;
  shulman: number;
  aschenbrenner: number;
  cotra: number;
  total: number;
}

const COLORS = {
  shulman: "#7c3aed",
  aschenbrenner: "#ea580c",
  cotra: "#059669",
};

export function TagDistributionChart() {
  const data = useMemo(() => {
    const rows: TagRow[] = PREDICTION_TAGS.map((tag) => ({
      tag,
      shulman: shulman.predictions.filter((p) => p.tags?.includes(tag)).length,
      aschenbrenner: aschenbrenner.predictions.filter((p) => p.tags?.includes(tag)).length,
      cotra: cotra.predictions.filter((p) => p.tags?.includes(tag)).length,
      total: 0,
    }));
    rows.forEach((r) => (r.total = r.shulman + r.aschenbrenner + r.cotra));
    rows.sort((a, b) => b.total - a.total);
    return rows;
  }, []);

  return (
    <div>
      <p
        className="mb-4 font-mono text-[9px] uppercase tracking-widest"
        style={{ color: "var(--text-faint)" }}
      >
        Predictions by Topic
      </p>
      <ResponsiveContainer width="100%" height={data.length * 32 + 40}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 0, right: 40, bottom: 0, left: 0 }}
          barSize={8}
          barGap={0}
        >
          <XAxis type="number" hide />
          <YAxis
            type="category"
            dataKey="tag"
            width={90}
            tick={{
              fontSize: 11,
              fill: "#334155",
              fontFamily: "var(--font-mono)",
            }}
            axisLine={false}
            tickLine={false}
          />
          <Bar dataKey="shulman" stackId="a" fill={COLORS.shulman} radius={[0, 0, 0, 0]} />
          <Bar dataKey="aschenbrenner" stackId="a" fill={COLORS.aschenbrenner} radius={[0, 0, 0, 0]} />
          <Bar dataKey="cotra" stackId="a" fill={COLORS.cotra} radius={[1, 1, 1, 1]}>
            <LabelList
              dataKey="total"
              position="right"
              style={{
                fontSize: 10,
                fill: "#bbbbbb",
                fontFamily: "var(--font-mono)",
              }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="mt-3 flex items-center gap-4">
        {(["shulman", "aschenbrenner", "cotra"] as const).map((key) => (
          <div key={key} className="flex items-center gap-1.5">
            <div
              className="w-2 h-2 rounded-sm"
              style={{ backgroundColor: COLORS[key] }}
            />
            <span
              className="font-mono text-[9px] capitalize"
              style={{ color: "var(--text-faint)" }}
            >
              {key === "aschenbrenner" ? "Aschenbrenner" : key.charAt(0).toUpperCase() + key.slice(1)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify the component renders**

Temporarily import and render in `page.tsx` (or wait for Task 7). Check for no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/TagDistributionChart.tsx
git commit -m "feat: add tag distribution bar chart component"
```

---

## Task 6: Timeline Scatter Plot

**Files:**
- Create: `src/components/TimelineScatterChart.tsx`

- [ ] **Step 1: Create `src/components/TimelineScatterChart.tsx`**

```tsx
"use client";

import { useMemo } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { shulman } from "@/data/shulman";
import { aschenbrenner } from "@/data/aschenbrenner";
import { cotra } from "@/data/cotra";
import { TIMELINE_YEARS } from "@/data/milestones";
import type { Prediction, PredictionStatus } from "@/types";

const COLORS: Record<string, string> = {
  shulman: "#7c3aed",
  aschenbrenner: "#ea580c",
  cotra: "#059669",
};

interface DotData {
  x: number;
  y: number;
  status: PredictionStatus;
  thinker: string;
}

function StatusDot(props: { cx?: number; cy?: number; payload?: DotData }) {
  const { cx = 0, cy = 0, payload } = props;
  if (!payload) return null;

  const color = COLORS[payload.thinker] || "#94a3b8";
  const r = 5;

  switch (payload.status) {
    case "confirmed":
      return <circle cx={cx} cy={cy} r={r} fill={color} />;
    case "in_progress":
      return <circle cx={cx} cy={cy} r={r} fill={color} opacity={0.5} />;
    case "outstanding":
      return <circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth={1.5} />;
    case "incorrect":
      return (
        <g>
          <line x1={cx - 3.5} y1={cy - 3.5} x2={cx + 3.5} y2={cy + 3.5} stroke={color} strokeWidth={1.5} />
          <line x1={cx + 3.5} y1={cy - 3.5} x2={cx - 3.5} y2={cy + 3.5} stroke={color} strokeWidth={1.5} />
        </g>
      );
    default:
      return <circle cx={cx} cy={cy} r={r} fill={color} />;
  }
}

export function TimelineScatterChart() {
  const data = useMemo(() => {
    const dots: DotData[] = [];
    const yearIndex: Record<number, number> = {};

    function addPredictions(predictions: Prediction[], thinker: string) {
      predictions.forEach((p) => {
        const idx = yearIndex[p.year] ?? 0;
        yearIndex[p.year] = idx + 1;
        dots.push({
          x: p.year,
          y: idx,
          status: p.status,
          thinker,
        });
      });
    }

    addPredictions(shulman.predictions, "shulman");
    addPredictions(aschenbrenner.predictions, "aschenbrenner");
    addPredictions(cotra.predictions, "cotra");

    return dots;
  }, []);

  const maxY = Math.max(...data.map((d) => d.y), 0);
  const minYear = Math.min(...TIMELINE_YEARS);
  const maxYear = Math.max(...TIMELINE_YEARS);

  return (
    <div>
      <p
        className="mb-4 font-mono text-[9px] uppercase tracking-widest"
        style={{ color: "var(--text-faint)" }}
      >
        Prediction Density by Year
      </p>
      <ResponsiveContainer width="100%" height={Math.max(180, (maxY + 2) * 16)}>
        <ScatterChart margin={{ top: 10, right: 20, bottom: 10, left: 20 }}>
          <XAxis
            type="number"
            dataKey="x"
            domain={[minYear - 0.5, maxYear + 0.5]}
            ticks={[...TIMELINE_YEARS]}
            tick={{
              fontSize: 10,
              fill: "#bbbbbb",
              fontFamily: "var(--font-mono)",
            }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            type="number"
            dataKey="y"
            domain={[0, maxY + 1]}
            hide
          />
          <Scatter data={data} shape={<StatusDot />} isAnimationActive={false} />
        </ScatterChart>
      </ResponsiveContainer>

      {/* Legend row 1: thinker colors */}
      <div className="mt-3 flex items-center gap-4">
        {(["shulman", "aschenbrenner", "cotra"] as const).map((key) => (
          <div key={key} className="flex items-center gap-1.5">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: COLORS[key] }}
            />
            <span className="font-mono text-[9px]" style={{ color: "var(--text-faint)" }}>
              {key === "aschenbrenner" ? "Aschenbrenner" : key.charAt(0).toUpperCase() + key.slice(1)}
            </span>
          </div>
        ))}
      </div>
      {/* Legend row 2: status encoding */}
      <div className="mt-1.5 flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <svg width="10" height="10"><circle cx="5" cy="5" r="4" fill="#334155" /></svg>
          <span className="font-mono text-[9px]" style={{ color: "var(--text-faint)" }}>Confirmed</span>
        </div>
        <div className="flex items-center gap-1.5">
          <svg width="10" height="10"><circle cx="5" cy="5" r="4" fill="#334155" opacity="0.5" /></svg>
          <span className="font-mono text-[9px]" style={{ color: "var(--text-faint)" }}>Unfolding</span>
        </div>
        <div className="flex items-center gap-1.5">
          <svg width="10" height="10"><circle cx="5" cy="5" r="4" fill="none" stroke="#334155" strokeWidth="1.5" /></svg>
          <span className="font-mono text-[9px]" style={{ color: "var(--text-faint)" }}>Early</span>
        </div>
        <div className="flex items-center gap-1.5">
          <svg width="10" height="10">
            <line x1="2" y1="2" x2="8" y2="8" stroke="#334155" strokeWidth="1.5" />
            <line x1="8" y1="2" x2="2" y2="8" stroke="#334155" strokeWidth="1.5" />
          </svg>
          <span className="font-mono text-[9px]" style={{ color: "var(--text-faint)" }}>Incorrect</span>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/TimelineScatterChart.tsx
git commit -m "feat: add timeline scatter plot chart component"
```

---

## Task 7: Analysis Section & Homepage Integration

**Files:**
- Create: `src/components/AnalysisSection.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create `src/components/AnalysisSection.tsx`**

```tsx
"use client";

import { TagDistributionChart } from "@/components/TagDistributionChart";
import { TimelineScatterChart } from "@/components/TimelineScatterChart";

export function AnalysisSection() {
  return (
    <section
      className="border-t py-16"
      style={{ borderColor: "var(--rule-light)" }}
    >
      <div className="mx-auto max-w-4xl px-6">
        <h2
          className="mb-12 text-3xl"
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontWeight: 400,
            color: "var(--text-primary)",
          }}
        >
          The Data
        </h2>

        <div className="flex flex-col gap-12">
          <TagDistributionChart />
          <TimelineScatterChart />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add AnalysisSection to `src/app/page.tsx`**

Add import:
```ts
import { AnalysisSection } from "@/components/AnalysisSection";
```

Insert `<AnalysisSection />` between `<ThinkersSection />` and `<Timeline />`:
```tsx
export default function Home() {
  return (
    <main>
      <HeroSection />
      <ThinkersSection />
      <AnalysisSection />
      <Timeline />
      <SummarySection />
    </main>
  );
}
```

- [ ] **Step 3: Verify both charts render**

Navigate to `http://localhost:3000`. The "The Data" section should appear between the thinker cards and the timeline, showing:
- A horizontal stacked bar chart with 8 category bars
- A scatter plot with dots across years

- [ ] **Step 4: Commit**

```bash
git add src/components/AnalysisSection.tsx src/app/page.tsx
git commit -m "feat: add Analysis section with charts to homepage"
```

---

## Task 8: AnimatedNumber Component

**Files:**
- Create: `src/components/AnimatedNumber.tsx`

- [ ] **Step 1: Create `src/components/AnimatedNumber.tsx`**

```tsx
"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
  suffix?: string;
}

export function AnimatedNumber({
  value,
  duration = 300,
  className,
  style,
  suffix = "",
}: AnimatedNumberProps) {
  const [display, setDisplay] = useState(value);
  const prevRef = useRef(value);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const from = prevRef.current;
    const to = value;
    prevRef.current = value;

    if (from === to) return;

    const start = performance.now();
    const diff = to - from;

    function step(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      setDisplay(Math.round(from + diff * eased));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      }
    }

    frameRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameRef.current);
  }, [value, duration]);

  return (
    <span className={className} style={style}>
      {display}{suffix}
    </span>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/AnimatedNumber.tsx
git commit -m "feat: add AnimatedNumber component for counter transitions"
```

---

## Task 9: StickyStatsBar Component

**Files:**
- Create: `src/components/StickyStatsBar.tsx`

- [ ] **Step 1: Create `src/components/StickyStatsBar.tsx`**

```tsx
"use client";

import { AnimatedNumber } from "@/components/AnimatedNumber";

interface CumulativeStats {
  seen: number;
  confirmed: number;
  in_progress: number;
  outstanding: number;
  incorrect: number;
}

interface StickyStatsBarProps {
  stats: CumulativeStats;
  visible: boolean;
}

export function StickyStatsBar({ stats, visible }: StickyStatsBarProps) {
  const resolved = stats.confirmed + stats.incorrect;
  const hitRate = resolved > 0 ? Math.round((stats.confirmed / resolved) * 100) : -1;

  return (
    <div
      className="sticky top-0 z-40 transition-all duration-300 border-b"
      style={{
        borderColor: "var(--rule-light)",
        backgroundColor: "color-mix(in srgb, var(--bg-primary) 95%, transparent)",
        backdropFilter: "blur(8px)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div className="mx-auto max-w-2xl px-6 py-2 flex items-center justify-between">
        <Metric label="Seen" value={stats.seen} />
        <Metric label="Confirmed" value={stats.confirmed} color="var(--confirmed)" />
        <Metric label="Unfolding" value={stats.in_progress} color="var(--in-progress)" />
        <Metric label="Early" value={stats.outstanding} color="var(--outstanding)" />
        <Metric label="Incorrect" value={stats.incorrect} color="var(--incorrect)" />
        <div className="flex flex-col items-center">
          <span
            className="font-mono text-sm font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            {hitRate >= 0 ? <AnimatedNumber value={hitRate} suffix="%" /> : "—"}
          </span>
          <span
            className="font-mono text-[8px] uppercase tracking-widest"
            style={{ color: "var(--text-faint)" }}
          >
            Hit rate
          </span>
        </div>
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color?: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <AnimatedNumber
        value={value}
        className="font-mono text-sm font-semibold"
        style={{ color: color ?? "var(--text-primary)" }}
      />
      <span
        className="font-mono text-[8px] uppercase tracking-widest"
        style={{ color: "var(--text-faint)" }}
      >
        {label}
      </span>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/StickyStatsBar.tsx
git commit -m "feat: add StickyStatsBar component for scrollytelling"
```

---

## Task 10: Wire Scrollytelling into Timeline

**Files:**
- Modify: `src/components/YearSection.tsx`
- Modify: `src/components/Timeline.tsx`

- [ ] **Step 1: Add `data-year` to YearSection in `src/components/YearSection.tsx`**

Find the `<section>` element:
```tsx
<section id={`year-${year}`} className="mx-auto max-w-2xl px-6">
```

Add `data-year` attribute:
```tsx
<section id={`year-${year}`} data-year={year} className="mx-auto max-w-2xl px-6">
```

- [ ] **Step 2: Add Intersection Observer and StickyStatsBar to `src/components/Timeline.tsx`**

Add imports at top:
```ts
import { useEffect, useRef, useCallback } from "react";
import { StickyStatsBar } from "@/components/StickyStatsBar";
```

Update the existing `import { useState } from "react"` to include `useEffect`, `useRef`, `useCallback` (or merge).

Add state after `activeTags`:
```ts
const [activeYear, setActiveYear] = useState<number | null>(null);
const [showStickyBar, setShowStickyBar] = useState(false);
const timelineRef = useRef<HTMLElement>(null);
```

Add a cumulative stats computation. Place this before the `return`:
```ts
// Compute cumulative stats through the active year (unfiltered)
const allPredictions = [
  ...shulman.predictions,
  ...aschenbrenner.predictions,
  ...cotra.predictions,
];

const cumulativeStats = (() => {
  if (activeYear === null) {
    return { seen: 0, confirmed: 0, in_progress: 0, outstanding: 0, incorrect: 0 };
  }
  const through = allPredictions.filter((p) => p.year <= activeYear);
  return {
    seen: through.length,
    confirmed: through.filter((p) => p.status === "confirmed").length,
    in_progress: through.filter((p) => p.status === "in_progress").length,
    outstanding: through.filter((p) => p.status === "outstanding").length,
    incorrect: through.filter((p) => p.status === "incorrect").length,
  };
})();
```

Add the Intersection Observer `useEffect` after the state declarations:
```ts
useEffect(() => {
  const sections = document.querySelectorAll<HTMLElement>("[data-year]");
  if (sections.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      // Find the topmost intersecting year section
      const intersecting = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (intersecting.length > 0) {
        const year = Number(intersecting[0].target.getAttribute("data-year"));
        setActiveYear(year);
        setShowStickyBar(true);
      } else {
        // Check if any section is still in view
        const anyVisible = Array.from(sections).some((s) => {
          const rect = s.getBoundingClientRect();
          return rect.top < window.innerHeight && rect.bottom > 0;
        });
        if (!anyVisible) {
          setShowStickyBar(false);
        }
      }
    },
    { threshold: 0.3 }
  );

  sections.forEach((s) => observer.observe(s));
  return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [visibleThinkers, activeStatuses, activeTags]); // Re-observe when filters change which year sections exist
```

In the return JSX, add the `ref` to the `<section>` and render `StickyStatsBar` as the first child:
```tsx
return (
  <section ref={timelineRef} className="py-8">
    <StickyStatsBar stats={cumulativeStats} visible={showStickyBar} />

    {/* Inline filter bar */}
    <div className="mx-auto max-w-2xl px-6">
```

- [ ] **Step 3: Verify the scrollytelling works**

Scroll down the page. When year sections enter the viewport:
- The sticky bar should fade in at the top
- Numbers should update as you scroll through years
- The bar should disappear when you scroll past the timeline

- [ ] **Step 4: Commit**

```bash
git add src/components/YearSection.tsx src/components/Timeline.tsx
git commit -m "feat: wire scrollytelling sticky stats bar into Timeline"
```

---

## Task 11: Build Verification & Final Polish

**Files:**
- None new — verification only

- [ ] **Step 1: Run production build**

Run: `npx next build`
Expected: Clean build with no errors. All pages should be listed as prerendered or dynamic.

- [ ] **Step 2: Visual check of all features**

In the dev server, verify:
1. Tag pills appear on every timeline card
2. Topic filter row works in FilterBar (OR logic, multiple selection)
3. Tag distribution chart shows 8 bars with correct thinker color segments
4. Scatter plot shows dots at correct year positions with status encoding
5. Sticky stats bar fades in when scrolling into the Timeline
6. Numbers animate when transitioning between years
7. Sticky bar disappears when scrolling past the Timeline
8. Mobile responsive: check at 375px width — charts scale, sticky bar condenses

- [ ] **Step 3: Final commit**

```bash
git add -A
git commit -m "feat: complete tags, analysis charts, and scrollytelling implementation"
```
