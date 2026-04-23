# AI Prophecy Index — Redesign Spec
**Date:** 2026-04-01
**Status:** Approved for implementation

---

## Context

The current design reads as AI-generated: uniform cards with generic rounded corners, an `#f8f7f4` warm background that doesn't commit to anything, and a split two-column layout that's interesting structurally but hard to scan. Cards also have a bug where expanding them causes content to scroll upward and get clipped. The goal is a distinctive 2026 redesign that feels editorial and considered — not a template — and accessible to readers with no AI background.

---

## Design Direction: Broadsheet Editorial

**Aesthetic reference:** *The Economist* meets a Vercel-era data dashboard. Strong horizontal rules as structure. Serif italic for the prediction claims. Monospace for all metadata. Typography-driven hierarchy — no decorative chrome, no gradients, no glassmorphism.

**Background:** `#f9f7f2` (warm off-white, paper-like)
**Text:** `#1a1a1a`
**Cards:** white with `1px solid #e0ddd6` bottom-rule separators (not box borders)
**Thinker accents:** purple `#7c3aed` (Shulman), orange `#ea580c` (Aschenbrenner) — keep existing
**Status colors:** keep existing semantic palette (green/amber/slate/red)

---

## Layout

**Change from two-column split to single-column chronological.**

Cards from both thinkers are interleaved in one column, sorted by prediction year. A 3px colored left-bar identifies the thinker (purple = Shulman, orange = Aschenbrenner). The direct comparison is still possible by scanning the left bars, but the reading flow is linear and mobile-friendly.

Sections are grouped by year with a strong typographic year heading.

---

## Components

### Masthead (replaces HeroSection)

- Newspaper-style centered masthead
- Kicker line in JetBrains Mono: `"Accountability Project · Est. 2025"`
- Title in large Instrument Serif italic: *AI Prophecy Index*
- Thin horizontal rules flanking a deck subtitle
- Stats row: 5 cells (Predictions / Confirmed / Incorrect / Pending / Hit Rate) separated by 1px vertical rules — replaces animated count-up counters
- Stats use JetBrains Mono numbers at ~20px

### Year Headings (replaces YearSection spine)

- 2px top rule (full width, `#1a1a1a`) opens each year group
- Year number in Instrument Serif ~28px, followed by mono count ("14 predictions"), then a 1px rule to fill the row
- No glassmorphism, no sticky blur

### Prediction Cards (replaces TimelineCard)

**Collapsed state:**
- Bottom border only (`1px solid #e0ddd6`) — no box
- 3px colored left-bar (thinker color), full card height
- Claim in Instrument Serif italic, 16px
- Thinker name + prediction number in JetBrains Mono 10px above the claim
- Status badge (pill, subtle background) right-aligned
- Hover: subtle `#f5f3ec` background tint, extends edge-to-edge

**Expanded state (inline accordion — fixes clip bug):**
- Card gets a highlight border (`1px solid <thinker-color>33`) and faint box-shadow
- Content flows below the claim, pushing cards downward — no upward clipping
- Sections:
  - **Assessment** label (mono, uppercase, 9px) + body text (13px, `#444`)
  - Conditional colored block (see below)
  - Footer row: Source link · Confidence % · Reviewed date (all mono 10px)
- Only one card can be expanded at a time (existing behavior — keep)

**Conditional expansion blocks:**

| Status | Block style | Source field | Label |
|--------|------------|--------------|-------|
| Got it right | Green left-border (`#16a34a`), `#f0fdf4` bg | `implications` | **If true —** |
| Got it wrong | Red left-border (`#dc2626`), `#fef2f2` bg | `whyIncorrect` | **Why incorrect —** |
| Still unfolding | No colored block | — | — |
| Too early to tell | No colored block | — | — |

The existing `implications` field continues to be used — it now renders only for "Got it right" predictions (it was previously rendered for all statuses; restrict this). The `whyIncorrect` field is a new optional field added to incorrect predictions only. The "Why incorrect" block is the key new addition — it explicitly explains the failure mode in plain language.

### Status Labels (plain language)

Replace all four status labels site-wide:

| Old | New |
|-----|-----|
| Confirmed | Got it right |
| Incorrect | Got it wrong |
| In Progress | Still unfolding |
| Outstanding | Too early to tell |

Update `src/lib/constants.ts` — only the display labels in `STATUS_LABELS` change, not the underlying key strings (`confirmed`, `incorrect`, `in_progress`, `outstanding`) used in the `PredictionStatus` type union, data files, and `STATUS_COLORS`. Update `StatusBadge.tsx` to use the new labels.

### Plain Language Supporting Changes

1. **Thinker explainer** — first time each thinker appears in a year group, show a one-line description under their name: e.g. *"Leopold Aschenbrenner — former OpenAI researcher, author of Situational Awareness."* The `Thinker` interface already has a `bio: string` field in `src/types/index.ts` — use this existing field. No new type field needed.

2. **Jargon tooltips** — a small set of recurring technical terms (AGI, frontier model, inference compute, alignment) get an underline + tooltip on hover with a one-sentence plain-English definition. Implement as: (a) a `src/lib/jargon.ts` map of `term → definition`, (b) a `src/components/JargonTooltip.tsx` component that wraps a string with a dotted underline + native `title` attribute or a small CSS tooltip, and (c) a utility function that scans the `evidence` and `whyIncorrect` string fields via regex, splits on matched terms, and returns a React node array with `<JargonTooltip>` wrapping each match. Apply at render time in `TimelineCard`.

3. **Plain-language assessments** — content-level guideline (not a code change): all Assessment and "Why incorrect" copy should be written at a newspaper reading level — no assumed knowledge of AI discourse.

4. **Masthead deck line** — a single sentence under the title explaining the site's purpose. Already present in the mockup: *"A running audit of AI forecasters' predictions — who got it right, who didn't, and what the record says."*

### Filter Bar (replaces TimelineNav floating pill)

- Inline at the top of the feed, below the masthead
- Left side: thinker filters (All / Shulman / Aschenbrenner)
- Right side: status filters (Got it right / Got it wrong / etc.)
- Minimal pill buttons (`border-radius: 2px`, not fully rounded)
- Replaces the floating bottom-right nav orb

### Footer

- Full-width 2px top rule
- Two-column row: site name + date on left, author attribution on right
- All JetBrains Mono, 10px, `#aaa`
- Existing Privacy & Legal link kept

---

## Typography

No font changes — the existing stack is well-chosen for this direction:

| Font | Use |
|------|-----|
| Instrument Serif italic | Card claims, masthead title, year numbers |
| DM Sans | Body text, assessments, UI labels |
| JetBrains Mono | All metadata: status labels, dates, numbers, thinker names, filter pills |

---

## Animation

- Remove scroll-reveal fade-in animations (they feel AI-generated filler)
- Keep card expand/collapse with a `max-height` CSS transition (~200ms ease) — transition from `max-height: 0` to `max-height: 2000px` (a concrete large value; `none` cannot be animated)
- Remove count-up animation from stats (replace with static numbers)
- Keep reduced-motion media query

---

## Bug Fix: Card Expansion Clipping

**Root cause:** The current layout uses `gridTemplateColumns: "1fr 24px 1fr"` with absolute/relative positioning for the connecting lines. When a card expands, the grid cell doesn't reflow correctly, causing the expanded content to overflow upward into the viewport without scroll.

**Fix:** Single-column layout eliminates the two-column grid entirely. Cards are standard block elements. Use `max-height: 0` → `max-height: 2000px` CSS transition (~200ms ease) for smooth expand. No overflow clipping possible.

---

## Files to Modify

| File | Change |
|------|--------|
| `src/components/HeroSection.tsx` | Replace with masthead design |
| `src/components/Timeline.tsx` | Remove two-column grid, single-column layout |
| `src/components/TimelineCard.tsx` | New card design + expanded states + fix clip bug |
| `src/components/YearSection.tsx` | New year heading design, remove spine |
| `src/components/TimelineNav.tsx` | Replace floating nav with inline filter bar |
| `src/components/StatusBadge.tsx` | Update label text + pill style |
| `src/components/SummarySection.tsx` | Update footer design |
| `src/lib/constants.ts` | Update status label strings |
| `src/app/globals.css` | Update tokens, remove scroll-reveal/count-up animations |
| `src/types/index.ts` | Add `whyIncorrect?: string` to `Prediction` interface. The `Thinker` interface already has `bio: string` — no change needed there. |
| `src/data/aschenbrenner.ts` / `shulman.ts` | Add `whyIncorrect` string to each prediction with status `incorrect` |

**New files to create:**
- `src/components/JargonTooltip.tsx` — lightweight tooltip for technical terms
- `src/lib/jargon.ts` — term → definition map

---

## Out of Scope

- Changing data content or adding new predictions
- Dark mode
- Search functionality
- Any backend changes
