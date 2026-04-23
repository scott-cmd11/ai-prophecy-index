# Add Ajeya Cotra — Thinker Profile Pages + Predictions Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Ajeya Cotra as a third thinker — first by creating profile pages for all three thinkers with shared components, then by wiring up her 12 curated predictions into the homepage timeline.

**Architecture:** Two sequential parts. Part A (Tasks 1–5) creates reusable profile page infrastructure and profile pages for all three thinkers, plus a Cotra bio column on the homepage with a "coming soon" note. Part B (Tasks 6–12) wires up Cotra's full prediction data into the timeline, filter bar, and summary section. Part A is deployable on its own.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript 5, Tailwind CSS 4, CSS custom properties. No new dependencies needed.

---

## Spec Reference

`docs/superpowers/specs/2026-04-04-add-cotra-thinker-design.md`

---

## File Map

### Part A — Profile Pages

**Create:**
- `src/types/thinker-profile.ts` — TypeScript interfaces for profile page data
- `src/components/thinker-profile/ThinkerNav.tsx` — Sticky nav with logo + back link
- `src/components/thinker-profile/ThinkerHero.tsx` — Hero with label, name, subtitle, optional stats or callout
- `src/components/thinker-profile/ThinkerBio.tsx` — Two-column bio card grid + full bio paragraph
- `src/components/thinker-profile/ResourceItem.tsx` — Single resource row (year, title, tags, desc, link)
- `src/components/thinker-profile/ResourceSection.tsx` — Titled section wrapping ResourceItems
- `src/data/profiles/shulman-profile.ts` — Shulman profile page data
- `src/data/profiles/aschenbrenner-profile.ts` — Aschenbrenner profile page data
- `src/data/profiles/cotra-profile.ts` — Cotra profile page data
- `src/app/thinkers/shulman/page.tsx` — Shulman profile page
- `src/app/thinkers/aschenbrenner/page.tsx` — Aschenbrenner profile page
- `src/app/thinkers/cotra/page.tsx` — Cotra profile page

**Modify:**
- `src/components/ThinkersSection.tsx` — Add Cotra column (bio + "coming soon") + profile links on all three columns

### Part B — Prediction Data

**Create:**
- `src/data/cotra.ts` — Cotra thinker with 12 predictions

**Modify:**
- `src/data/milestones.ts` — Add years 2032, 2033, 2036 to TIMELINE_YEARS
- `src/components/TimelineCard.tsx` — Union type + lookup maps for accent color and label
- `src/components/YearSection.tsx` — MergedCard.thinker union type
- `src/components/HeroSection.tsx` — Add cotra.predictions to aggregate
- `src/components/Timeline.tsx` — Add cotra to state, guard, interleave logic
- `src/components/FilterBar.tsx` — Add Cotra filter pill + type update
- `src/components/SummarySection.tsx` — Add Cotra scorecard, widen grid
- `src/lib/constants.ts` — Update LAST_UPDATED

---

## Task 1: Define TypeScript types for profile pages

**Files:**
- Create: `src/types/thinker-profile.ts`

- [ ] **Step 1: Create the types file**

```typescript
// src/types/thinker-profile.ts

export interface ResourceTag {
  label: string;
  variant?: "default" | "landmark";
}

export interface ResourceLink {
  href: string;
  label: string;
}

export interface ResourceItemData {
  year?: string; // "2026", "2022", "—", or omit for no year column
  title: string;
  tags?: ResourceTag[];
  description?: string;
  meta?: string;
  link?: ResourceLink;
}

export interface ResourceGroupData {
  title: string;
  items: ResourceItemData[];
}

export interface ResourceSectionData {
  label: string; // Uppercase section label e.g. "Podcast Appearances"
  groups: ResourceGroupData[];
  noBorderBottom?: boolean;
}

export interface BioCardData {
  title: string;
  content: string;
}

export interface StatChipData {
  label: string;
  value: string | number;
  color: "confirmed" | "unfolding" | "early";
}

export interface ThinkerProfileData {
  name: string;
  slug: "shulman" | "aschenbrenner" | "cotra";
  subtitle: string;
  stats?: StatChipData[];      // Shulman + Aschenbrenner have stats
  callout?: string;            // Cotra has "coming soon" callout (supports HTML via dangerouslySetInnerHTML)
  bioCards: BioCardData[];     // 2 cards: Education + Career (or similar)
  bioFull: string;             // Full bio paragraph (supports basic HTML via dangerouslySetInnerHTML)
  sections: ResourceSectionData[];
}
```

- [ ] **Step 2: Commit**

```bash
git add src/types/thinker-profile.ts
git commit -m "feat: add ThinkerProfile TypeScript types"
```

---

## Task 2: Build shared profile page components

**Files:**
- Create: `src/components/thinker-profile/ThinkerNav.tsx`
- Create: `src/components/thinker-profile/ThinkerHero.tsx`
- Create: `src/components/thinker-profile/ThinkerBio.tsx`
- Create: `src/components/thinker-profile/ResourceItem.tsx`
- Create: `src/components/thinker-profile/ResourceSection.tsx`

- [ ] **Step 1: Create ThinkerNav**

```tsx
// src/components/thinker-profile/ThinkerNav.tsx
import Link from "next/link";

export function ThinkerNav() {
  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{
        background: "rgba(249,247,242,0.92)",
        backdropFilter: "blur(16px)",
        borderColor: "var(--rule-light)",
      }}
    >
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3.5">
        <Link
          href="/"
          className="font-mono text-[10px] uppercase tracking-[0.2em] transition-opacity hover:opacity-70"
          style={{ color: "var(--text-muted)" }}
        >
          <span style={{ color: "var(--text-primary)" }}>AI</span> Prophecy Index
        </Link>
        <Link
          href="/"
          className="font-mono text-[10px] uppercase tracking-widest transition-colors hover:underline"
          style={{ color: "var(--text-muted)" }}
        >
          ← Back to tracker
        </Link>
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: Create ThinkerHero**

```tsx
// src/components/thinker-profile/ThinkerHero.tsx
import type { StatChipData } from "@/types/thinker-profile";

const CHIP_COLORS: Record<string, string> = {
  confirmed: "#059669",
  unfolding: "#d97706",
  early: "#64748b",
};

interface ThinkerHeroProps {
  name: string;
  subtitle: string;
  accentColor: string;
  stats?: StatChipData[];
  callout?: string;
}

export function ThinkerHero({ name, subtitle, accentColor, stats, callout }: ThinkerHeroProps) {
  return (
    <section
      className="border-b py-16"
      style={{ borderColor: "var(--rule-light)" }}
    >
      <div className="mx-auto max-w-4xl px-6">
        <p
          className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em]"
          style={{ color: accentColor }}
        >
          Thinker Profile
        </p>
        <h1
          className="mb-6 font-serif text-5xl italic leading-[1.05] md:text-6xl"
          style={{ color: "var(--text-primary)" }}
        >
          {name}
        </h1>
        <p
          className="max-w-2xl text-base leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {subtitle}
        </p>

        {stats && stats.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {stats.map((chip) => (
              <span
                key={chip.label}
                className="inline-flex items-center gap-1.5 rounded-sm border px-3 py-1 font-mono text-[10px] uppercase tracking-widest"
                style={{
                  borderColor: `${CHIP_COLORS[chip.color]}33`,
                  color: CHIP_COLORS[chip.color],
                  background: `${CHIP_COLORS[chip.color]}0d`,
                }}
              >
                <span className="font-semibold">{chip.value}</span>
                {chip.label}
              </span>
            ))}
          </div>
        )}

        {callout && (
          <div
            className="mt-5 rounded-lg border px-5 py-4 text-sm leading-relaxed"
            style={{
              background: "rgba(217,119,6,0.04)",
              borderColor: "rgba(217,119,6,0.15)",
              color: "var(--text-secondary)",
            }}
            dangerouslySetInnerHTML={{ __html: callout }}
          />
        )}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create ThinkerBio**

```tsx
// src/components/thinker-profile/ThinkerBio.tsx
import type { BioCardData } from "@/types/thinker-profile";

interface ThinkerBioProps {
  cards: BioCardData[];
  fullBio: string;
}

export function ThinkerBio({ cards, fullBio }: ThinkerBioProps) {
  return (
    <section
      className="border-b py-14"
      style={{ borderColor: "var(--rule-light)" }}
    >
      <div className="mx-auto max-w-4xl px-6">
        <p
          className="mb-6 font-mono text-[9px] uppercase tracking-widest"
          style={{ color: "var(--text-faint)" }}
        >
          Background
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border p-6"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border-card)",
              }}
            >
              <h3
                className="mb-3 font-serif text-lg italic"
                style={{ color: "var(--text-primary)" }}
              >
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {card.content}
              </p>
            </div>
          ))}
        </div>
        <p
          className="mt-8 max-w-3xl text-sm leading-loose"
          style={{ color: "var(--text-secondary)" }}
          dangerouslySetInnerHTML={{ __html: fullBio }}
        />
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Create ResourceItem**

```tsx
// src/components/thinker-profile/ResourceItem.tsx
import type { ResourceItemData } from "@/types/thinker-profile";

export function ResourceItem({ year, title, tags = [], description, meta, link }: ResourceItemData) {
  return (
    <div
      className="flex gap-5 border-b py-5 last:border-b-0"
      style={{ borderColor: "rgba(0,0,0,0.05)" }}
    >
      {year !== undefined && (
        <div
          className="w-12 flex-shrink-0 pt-0.5 font-mono text-xs"
          style={{ color: "var(--text-muted)" }}
        >
          {year}
        </div>
      )}
      <div className="flex-1">
        <div className="mb-1.5 flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
            {title}
          </span>
          {tags.map((tag) => (
            <span
              key={tag.label}
              className="font-mono text-[9px] uppercase tracking-wider rounded px-1.5 py-0.5"
              style={
                tag.variant === "landmark"
                  ? { background: "rgba(5,150,105,0.08)", color: "#059669" }
                  : { background: "rgba(0,0,0,0.05)", color: "var(--text-muted)" }
              }
            >
              {tag.label}
            </span>
          ))}
        </div>
        {description && (
          <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {description}
          </p>
        )}
        {meta && (
          <p
            className="mt-1.5 font-mono text-[10px]"
            style={{ color: "var(--text-faint)" }}
          >
            {meta}
          </p>
        )}
        {link && (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-xs underline decoration-current/30 underline-offset-2 transition-colors hover:decoration-current"
            style={{ color: "var(--text-secondary)" }}
          >
            {link.label}
          </a>
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 5: Create ResourceSection**

```tsx
// src/components/thinker-profile/ResourceSection.tsx
import type { ResourceSectionData } from "@/types/thinker-profile";
import { ResourceItem } from "./ResourceItem";

export function ResourceSection({ label, groups, noBorderBottom }: ResourceSectionData) {
  return (
    <section
      className="py-14"
      style={{
        borderBottom: noBorderBottom ? "none" : "1px solid var(--rule-light)",
      }}
    >
      <div className="mx-auto max-w-4xl px-6">
        <p
          className="mb-8 font-mono text-[9px] uppercase tracking-widest"
          style={{ color: "var(--text-faint)" }}
        >
          {label}
        </p>
        {groups.map((group, i) => (
          <div key={i} className="mb-10 last:mb-0">
            <h3
              className="mb-4 font-serif text-2xl italic"
              style={{ color: "var(--text-primary)" }}
            >
              {group.title}
            </h3>
            {group.items.map((item, j) => (
              <ResourceItem key={j} {...item} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 6: Commit**

```bash
git add src/types/thinker-profile.ts src/components/thinker-profile/
git commit -m "feat: add shared thinker profile components"
```

---

## Task 3: Create profile data files

**Files:**
- Create: `src/data/profiles/shulman-profile.ts`
- Create: `src/data/profiles/aschenbrenner-profile.ts`
- Create: `src/data/profiles/cotra-profile.ts`

**Reference the original HTML files for content:**
- `docs/shulman.html`
- `docs/aschenbrenner.html`
- `docs/cotra.html`

- [ ] **Step 1: Create Cotra profile data** (use `docs/cotra.html` as source of truth)

```typescript
// src/data/profiles/cotra-profile.ts
import type { ThinkerProfileData } from "@/types/thinker-profile";

export const cotraProfile: ThinkerProfileData = {
  name: "Ajeya Cotra",
  slug: "cotra",
  subtitle:
    "AI safety researcher and forecaster. Author of the Biological Anchors framework for AI timelines. Member of technical staff at METR. One of the most influential voices shaping how the AI safety community thinks about when transformative AI will arrive and what risks it poses.",
  callout:
    "<strong style=\"color:#d97706\">Coming soon:</strong> Predictions from Ajeya Cotra are being catalogued and scored. Her work on AI timelines forecasting, threat modelling, and capability benchmarking will be integrated into the tracker.",
  bioCards: [
    {
      title: "Education",
      content:
        "Studied electrical engineering and computer science at UC Berkeley. Co-founded the Effective Altruists of Berkeley student group and co-taught a university course on effective altruism.",
    },
    {
      title: "Career",
      content:
        "Member of technical staff, METR (2025–present). Senior Advisor, Coefficient Giving / Open Philanthropy (2016–2025). Led technical AI safety grantmaking and a $25M benchmarking program. Placed 3rd out of 413 in an AI forecasting competition.",
    },
  ],
  bioFull:
    `Ajeya Cotra is one of the most respected AI forecasters and safety researchers in the effective altruism and AI safety communities. Her 2020 report <em>Forecasting Transformative AI with Biological Anchors</em> — a 200+ page probabilistic framework for estimating when AI systems could cause an industrial-revolution-scale economic transition — has become the single most cited inside-view model for AI timelines, directly influencing grantmaking, lab strategy, and governance thinking. She spent nearly a decade at Open Philanthropy (now Coefficient Giving), where she led technical AI safety grantmaking, directed a $25 million program benchmarking AI agent capabilities, and wrote extensively on AI takeover scenarios, alignment challenges, and the intelligence explosion. Her 2022 essay arguing that the default path to transformative AI likely leads to AI takeover became a foundational text in the field. In early 2025, she moved to METR (formerly ARC Evals) to work on measuring and tracking extreme risks from AI agents. She writes the newsletter <em>Planned Obsolescence</em> (on AI futurism) and a personal blog <em>Good Bones</em>.`,
  sections: [
    {
      label: "Landmark Research",
      groups: [
        {
          title: "Major Reports & Essays",
          items: [
            {
              year: "2020",
              title: "Forecasting Transformative AI with Biological Anchors",
              tags: [{ label: "Landmark", variant: "landmark" }],
              description:
                "200+ page draft report estimating when AI systems could cause a 10× acceleration in economic growth. Uses the computational capacity of the human brain as an anchor to estimate training compute requirements. Original median: ~2052 for transformative AI; updated in 2022 to ~2040 (50% probability). Rated the most informative inside-view AI timelines model by Epoch AI.",
              meta: "Open Philanthropy · Draft report · September 2020 · 200+ pages",
              link: { href: "https://www.alignmentforum.org/posts/KrJfoZzpSDpnrv9va/draft-report-on-ai-timelines", label: "Read on Alignment Forum →" },
            },
            {
              year: "2022",
              title: "Two-Year Update on My Personal AI Timelines",
              description:
                "Revised the Biological Anchors forecast in light of GPT-3, scaling laws evidence, and increased industry investment. Shifted her median from ~2052 to ~2040.",
              meta: "Open Philanthropy · August 2022",
            },
            {
              year: "2022",
              title: "Without Specific Countermeasures, the Easiest Path to Transformative AI Likely Leads to AI Takeover",
              tags: [{ label: "Landmark", variant: "landmark" }],
              description:
                "Argues that training powerful AI via human feedback on diverse tasks — the default approach at frontier labs — will likely produce systems that learn to deceive their evaluators. Concludes AI takeover is more likely than not without specific technical countermeasures.",
              meta: "Cold Takes / Alignment Forum · July 2022",
              link: { href: "https://www.cold-takes.com/without-specific-countermeasures-the-easiest-path-to-transformative-ai-likely-leads-to-ai-takeover/", label: "Read on Cold Takes →" },
            },
            {
              year: "2021",
              title: "Why AI Alignment Could Be Hard with Modern Deep Learning",
              description:
                "Explains why current training methods may produce AI systems that pursue unintended goals, even if they appear aligned during training and evaluation.",
              meta: "Open Philanthropy · September 2021",
            },
            {
              year: "2021",
              title: "Eliciting Latent Knowledge (ELK)",
              description:
                "Co-authored with Paul Christiano and Mark Xu. Describes the Alignment Research Center's approach to ensuring AI systems report what they actually believe, rather than what they think humans want to hear.",
              meta: "Alignment Research Center · with Paul Christiano & Mark Xu · December 2021",
            },
          ],
        },
      ],
    },
    {
      label: "Podcast Appearances",
      groups: [
        {
          title: "Long-form Interviews",
          items: [
            {
              year: "2026",
              title: "Is It Crazy That Every AI Company's Safety Plan Is 'Use AI to Make AI Safe'?",
              description:
                "Latest major interview. Discusses the intelligence explosion, why all frontier labs plan to use AI to solve AI alignment during "crunch time," and why she thinks the world could change as much in the next 23 years as it did in the last 10,000.",
              meta: "80,000 Hours Podcast · Recorded October 2025, published February 2026",
              link: { href: "https://80000hours.org/podcast/episodes/ajeya-cotra-transformative-ai-crunch-time/", label: "Listen / Read transcript →" },
            },
            {
              year: "2025",
              title: "AI Safety and the Future of Humanity",
              description:
                "Guides listeners through the contentious debate over AI safety, explaining why people with similar worldviews often reach divergent conclusions about AI risk.",
              meta: "AI Summer Podcast (Timothy B. Lee & Dean Ball) · January 2025",
              link: { href: "https://www.aisummer.org/p/ajeya-cotra-on-ai-safety-and-the", label: "Listen →" },
            },
            {
              year: "2022",
              title: "Accidentally Teaching AI Models to Deceive Us",
              description:
                "Deep dive into the "trillion-dollar orphan" threat model for AI takeover. Covers why RLHF-trained models may learn deception, the limits of current alignment approaches, and what countermeasures might work.",
              meta: "80,000 Hours Podcast · November 2022",
              link: { href: "https://80000hours.org/podcast/episodes/ajeya-cotra-accidentally-teaching-ai-to-deceive-us/", label: "Listen / Read transcript →" },
            },
            {
              year: "2022",
              title: "Forecasting Transformative Artificial Intelligence",
              description:
                "Detailed walkthrough of the Biological Anchors methodology: what transformative AI means, how to use the brain as a compute anchor, and why simpler forecasting methods fall short.",
              meta: "Future of Life Institute Podcast · December 2022",
              link: { href: "https://futureoflife.org/podcast/ajeya-cotra-on-forecasting-transformative-artificial-intelligence/", label: "Listen →" },
            },
            {
              year: "2021",
              title: "Forecasting Transformative AI from Biological Anchors",
              description:
                "Technical deep-dive into the Bio Anchors report structure, key assumptions, and how estimates should shape behaviour and grantmaking.",
              meta: "AXRP (AI X-risk Research Podcast) · Episode 7.5 · May 2021 · Transcript only",
              link: { href: "https://axrp.net/episode/2021/05/28/episode-7_5-forecasting-transformative-ai-ajeya-cotra.html", label: "Read transcript →" },
            },
            {
              year: "2021",
              title: "Worldview Diversification and How Big the Future Could Be",
              description:
                "Covers anthropic reasoning, cause prioritization at Open Philanthropy, and whether long-termism makes sense as a framework for charitable giving.",
              meta: "80,000 Hours Podcast · 2021",
              link: { href: "https://80000hours.org/podcast/episodes/ajeya-cotra-worldview-diversification/", label: "Listen / Read transcript →" },
            },
          ],
        },
      ],
    },
    {
      label: "Writing",
      groups: [
        {
          title: "Newsletters & Blogs",
          items: [
            {
              year: "—",
              title: "Planned Obsolescence (Newsletter)",
              description:
                "Cotra's primary publication on AI futurism. Covers intelligence explosion dynamics, AI automation milestones, self-sufficient AI, and capability predictions.",
              link: { href: "https://www.planned-obsolescence.org/", label: "Read on Substack →" },
            },
            {
              year: "—",
              title: "Good Bones (Personal Blog)",
              description:
                "Personal Substack covering effective altruism, the EA community, and reflections on her 15 years in the movement. Total Substack following: 3,800+ subscribers across both publications.",
              link: { href: "https://acotra.substack.com/", label: "Read on Substack →" },
            },
            {
              year: "—",
              title: "EA Forum & Alignment Forum Posts",
              description:
                "Extensive contributions on AI timelines debates, alignment research priorities, and technical AI safety grantmaking strategy.",
              link: { href: "https://forum.effectivealtruism.org/users/ajeya", label: "EA Forum profile →" },
            },
          ],
        },
        {
          title: "Selected Planned Obsolescence Posts",
          items: [
            {
              year: "2026",
              title: "Six Milestones for AI Automation",
              description:
                "Defines precise milestones for measuring AI automation progress, from current capabilities through full automation of AI R&D.",
              link: { href: "https://www.planned-obsolescence.org/p/six-milestones-for-ai-automation", label: "Read →" },
            },
            {
              year: "2026",
              title: "I Underestimated AI Capabilities (Again)",
              description:
                "Revisits her January 2026 predictions just months later, acknowledging her software engineering capability forecasts were already too conservative.",
              link: { href: "https://www.planned-obsolescence.org/p/i-underestimated-ai-capabilities", label: "Read →" },
            },
            {
              year: "2026",
              title: "AI Predictions for 2026",
              description:
                "Detailed quantitative predictions on benchmarks, risk categories, and automation milestones for the year ahead.",
              link: { href: "https://www.planned-obsolescence.org/p/ai-predictions-for-2026", label: "Read →" },
            },
            {
              year: "2026",
              title: "Self-Sufficient AI",
              description:
                "Defines what it would mean for AI to be truly self-sufficient and argues this is a more useful milestone than "AGI."",
              link: { href: "https://www.planned-obsolescence.org/p/self-sufficient-ai", label: "Read →" },
            },
            {
              year: "2023",
              title: "AIs Accelerating AI Research",
              description:
                "Models the gradual process by which AI automates AI research — not as a sudden phase transition, but as an accelerating ramp.",
              link: { href: "https://www.planned-obsolescence.org/p/ais-accelerating-ai-research", label: "Read →" },
            },
          ],
        },
      ],
    },
    {
      label: "Additional Context",
      groups: [
        {
          title: "Media Coverage & External Resources",
          items: [
            {
              year: "2024",
              title: "DealBook Summit: Artificial Intelligence in 2030",
              description:
                "Panelist at the New York Times DealBook Summit discussing AI trajectory and societal implications through the end of the decade.",
              meta: "New York Times DealBook Summit · 2024",
            },
            {
              year: "2022",
              title: "Vox Profile: How Smart Will AI Get? Ajeya Cotra Has an Answer.",
              description:
                "Feature article explaining the Biological Anchors framework for a general audience.",
              meta: "Vox · October 2022",
            },
            {
              year: "—",
              title: "Schmidt Sciences Speaker Profile",
              link: { href: "https://www.schmidtsciences.org/person/ajeya-cotra/", label: "View profile →" },
            },
            {
              year: "—",
              title: "Epoch AI: Grokking the Bio Anchors Report",
              description:
                "Visual summary and explainer of the Biological Anchors framework, including interactive diagrams.",
              link: { href: "https://epoch.ai/blog/grokking-bioanchors/", label: "Read →" },
            },
            {
              year: "—",
              title: "AI Timelines by Bio Anchors: The Debate in One Place",
              description:
                "Comprehensive compilation of all major responses, critiques, and extensions of the Biological Anchors framework.",
              link: { href: "https://forum.effectivealtruism.org/posts/NnygBgntvoGSuvsRH/ai-timelines-by-bio-anchors-the-debate-in-one-place", label: "Read on EA Forum →" },
            },
          ],
        },
      ],
      noBorderBottom: true,
    },
  ],
};
```

- [ ] **Step 2: Create Shulman profile data** (use `docs/shulman.html` as source of truth)

Copy the structure from `docs/shulman.html`. Key differences from Cotra:
- No callout
- Sections: Podcast Appearances, Academic Publications, Writing & Community
- Accent slug: `"shulman"`

For `stats`, derive at render time from live prediction data — do **not** hardcode numbers. Import `shulman` and `getStatusCounts`:

```typescript
// In shulman/page.tsx (NOT in the data file):
import { shulman } from "@/data/shulman";
import { getStatusCounts } from "@/lib/utils";

const counts = getStatusCounts(shulman.predictions);
// Pass as stats prop:
// stats={[
//   { label: "Confirmed", value: counts.confirmed, color: "confirmed" },
//   { label: "Unfolding", value: counts.in_progress, color: "unfolding" },
//   { label: "Early", value: counts.outstanding, color: "early" },
// ]}
```

Save content data as `src/data/profiles/shulman-profile.ts` following the exact same `ThinkerProfileData` shape (omitting `stats` — those are computed at page level).

- [ ] **Step 3: Create Aschenbrenner profile data** (use `docs/aschenbrenner.html` as source of truth)

Key differences from Cotra:
- No callout; stats computed the same way as Shulman (see Step 2)
- Has "Situational Awareness" chapter list — model each chapter as a `ResourceItem` with no `year` field, title formatted as `"Chapter I: ..."` etc.
- Accent slug: `"aschenbrenner"`

Save as `src/data/profiles/aschenbrenner-profile.ts`. Apply the same live-stats pattern in `aschenbrenner/page.tsx`.

- [ ] **Step 4: Commit**

```bash
git add src/data/profiles/
git commit -m "feat: add thinker profile data files (shulman, aschenbrenner, cotra)"
```

---

## Task 4: Create the three profile pages

**Files:**
- Create: `src/app/thinkers/shulman/page.tsx`
- Create: `src/app/thinkers/aschenbrenner/page.tsx`
- Create: `src/app/thinkers/cotra/page.tsx`

Each page follows the same pattern. The accent color is the only page-specific value.

- [ ] **Step 1: Create Cotra profile page**

```tsx
// src/app/thinkers/cotra/page.tsx
import type { Metadata } from "next";
import { cotraProfile } from "@/data/profiles/cotra-profile";
import { ThinkerNav } from "@/components/thinker-profile/ThinkerNav";
import { ThinkerHero } from "@/components/thinker-profile/ThinkerHero";
import { ThinkerBio } from "@/components/thinker-profile/ThinkerBio";
import { ResourceSection } from "@/components/thinker-profile/ResourceSection";

export const metadata: Metadata = {
  title: "Ajeya Cotra — AI Prophecy Index",
  description:
    "Profile and resources for Ajeya Cotra — AI safety researcher, biological anchors forecaster, and METR technical staff.",
};

const ACCENT = "var(--accent-cotra)";

export default function CotraPage() {
  return (
    <main>
      <ThinkerNav />
      <ThinkerHero
        name={cotraProfile.name}
        subtitle={cotraProfile.subtitle}
        accentColor={ACCENT}
        stats={cotraProfile.stats}
        callout={cotraProfile.callout}
      />
      <ThinkerBio cards={cotraProfile.bioCards} fullBio={cotraProfile.bioFull} />
      {cotraProfile.sections.map((section, i) => (
        <ResourceSection key={i} {...section} />
      ))}
      <footer
        className="border-t py-8 text-center font-mono text-[10px]"
        style={{ borderColor: "var(--rule-light)", color: "var(--text-muted)" }}
      >
        <a href="/" style={{ color: "var(--text-muted)" }} className="hover:underline">
          AI Prophecy Index
        </a>
        {" · "}
        <a href="https://scotthazlitt.ai" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-muted)" }} className="hover:underline">
          A project by Scott Hazlitt
        </a>
        {" · "}
        © 2026
      </footer>
    </main>
  );
}
```

- [ ] **Step 2: Create Shulman page** — same structure, swap `cotraProfile` for `shulmanProfile`, accent `"var(--accent-shulman)"`, update metadata.

```tsx
// src/app/thinkers/shulman/page.tsx
// Same pattern as cotra/page.tsx — import shulmanProfile, use var(--accent-shulman)
```

- [ ] **Step 3: Create Aschenbrenner page** — same pattern, `aschenbrennerProfile`, accent `"var(--accent-aschenbrenner)"`.

```tsx
// src/app/thinkers/aschenbrenner/page.tsx
// Same pattern as cotra/page.tsx — import aschenbrennerProfile, use var(--accent-aschenbrenner)
```

- [ ] **Step 4: Run TypeScript check**

```bash
npx tsc --noEmit
```

Expected: no errors. Fix any type issues before proceeding.

- [ ] **Step 5: Commit**

```bash
git add src/app/thinkers/
git commit -m "feat: add thinker profile pages (shulman, aschenbrenner, cotra)"
```

---

## Task 5: Update ThinkersSection — add Cotra column + profile links

**Files:**
- Modify: `src/components/ThinkersSection.tsx`

The existing component has `max-w-2xl` and `grid-cols-2`. This task:
1. Adds Cotra as a third column (bio + "coming soon" note, no predictions yet)
2. Adds a "Profile →" link on all three columns
3. Widens the container to `max-w-4xl`

- [ ] **Step 1: Update ThinkersSection**

Replace the entire file content:

```tsx
// src/components/ThinkersSection.tsx
import Link from "next/link";
import { shulman } from "@/data/shulman";
import { aschenbrenner } from "@/data/aschenbrenner";

const COTRA_BIO =
  "Researcher at METR and former technical AI safety lead at Open Philanthropy. Best known for the 'biological anchors' methodology for forecasting transformative AI timelines. Runs the Planned Obsolescence Substack and has twice publicly updated her forecasts toward shorter timelines as capabilities advanced faster than expected.";

interface ThinkerColumnProps {
  name: string;
  bio: string;
  slug: string;
  accentVar: string;
  comingSoon?: boolean;
}

function ThinkerColumn({ name, bio, slug, accentVar, comingSoon }: ThinkerColumnProps) {
  return (
    <div className="border-l-2 pl-3" style={{ borderColor: `var(${accentVar})` }}>
      <p
        className="font-mono text-[10px] font-semibold uppercase tracking-widest mb-1.5"
        style={{ color: `var(${accentVar})` }}
      >
        {name}
      </p>
      <p className="text-xs leading-relaxed mb-2" style={{ color: "var(--text-secondary)" }}>
        {bio}
      </p>
      <div className="flex items-center gap-3 mt-1">
        <Link
          href={`/thinkers/${slug}`}
          className="font-mono text-[9px] uppercase tracking-widest hover:underline transition-colors"
          style={{ color: `var(${accentVar})` }}
        >
          Profile →
        </Link>
        {comingSoon && (
          <span
            className="font-mono text-[9px] uppercase tracking-widest"
            style={{ color: "var(--text-faint)" }}
          >
            Predictions coming soon
          </span>
        )}
      </div>
    </div>
  );
}

export function ThinkersSection() {
  return (
    <div
      className="mx-auto max-w-4xl px-6 py-5 border-b"
      style={{ borderColor: "var(--rule-light)" }}
    >
      <p
        className="font-mono text-[9px] uppercase tracking-widest mb-4"
        style={{ color: "var(--text-faint)" }}
      >
        The forecasters
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <ThinkerColumn
          name={shulman.name}
          bio={shulman.bio}
          slug={shulman.slug}
          accentVar="--accent-shulman"
        />
        <ThinkerColumn
          name={aschenbrenner.name}
          bio={aschenbrenner.bio}
          slug={aschenbrenner.slug}
          accentVar="--accent-aschenbrenner"
        />
        <ThinkerColumn
          name="Ajeya Cotra"
          bio={COTRA_BIO}
          slug="cotra"
          accentVar="--accent-cotra"
          comingSoon
        />
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Add `--accent-cotra` to globals.css** (needed for this step)

In `src/app/globals.css`, under the thinker accent colors comment block, add:
```css
--accent-cotra: #059669;
```

- [ ] **Step 3: Run dev server and verify**

```bash
npm run dev
```

Check:
- Homepage renders three thinker columns
- Cotra column shows bio + "Predictions coming soon" + "Profile →" link
- Shulman/Aschenbrenner show "Profile →" links
- `/thinkers/shulman`, `/thinkers/aschenbrenner`, `/thinkers/cotra` all load without errors
- No TypeScript or console errors

- [ ] **Step 4: Commit**

```bash
git add src/components/ThinkersSection.tsx src/app/globals.css
git commit -m "feat: update ThinkersSection with Cotra column and profile links"
```

---

## Task 6: Add Cotra prediction data

**Files:**
- Create: `src/data/cotra.ts`
- Modify: `src/data/milestones.ts`

- [ ] **Step 1: Extend TIMELINE_YEARS in milestones.ts**

In `src/data/milestones.ts`, update both the `milestones` record and `TIMELINE_YEARS`:

```typescript
export const milestones: Record<number, string[]> = {
  2024: ["GPT-4o released", "Claude 3.5 Sonnet", "Llama 3 open-sourced"],
  2025: ["Reasoning models mainstream", "AI coding agents ship", "Stargate announced"],
  2026: ["Scaling debate intensifies", "AI revenue benchmarks approach"],
  2027: ["Aschenbrenner's AGI target year", "Government response window"],
  2028: ["$100B cluster target", "Robotics scaling test"],
  2030: ["Long-range predictions converge here"],
  2032: ["Cotra's top-expert-dominating AI window"],
  2033: ["Cotra's crunch window begins"],
  2036: ["Cotra's self-sufficient AI median"],
};

// 2029 and 2031 intentionally omitted — no predictions target them.
export const TIMELINE_YEARS = [2024, 2025, 2026, 2027, 2028, 2030, 2032, 2033, 2036] as const;
```

- [ ] **Step 2: Create cotra.ts** (all 12 predictions from spec)

```typescript
// src/data/cotra.ts
import { Thinker } from "@/types";

export const cotra: Thinker = {
  name: "Ajeya Cotra",
  slug: "cotra",
  bio: "Researcher at METR (Model Evaluation and Threat Research) and former technical AI safety lead at Open Philanthropy. Best known for the 'biological anchors' methodology for forecasting transformative AI timelines. Runs the Planned Obsolescence Substack and has twice publicly updated her forecasts toward shorter timelines as capabilities advanced faster than expected.",
  predictions: [
    {
      id: "ac-1",
      claim:
        "Training processes may inadvertently reinforce deceptive behavior — models that learn about deception may become 'more patient and more careful' deceivers rather than more honest.",
      source: "80,000 Hours Podcast — Accidentally teaching AI models to deceive us",
      sourceUrl: "https://80000hours.org/podcast/episodes/ajeya-cotra-accidentally-teaching-ai-to-deceive-us/",
      date: "2023-05-12",
      category: "AI Alignment",
      status: "outstanding",
      confidence: "high",
      evidence:
        "A live research question at Anthropic, OpenAI, and DeepMind as of April 2026. No definitive empirical resolution. The claim describes a structural risk in standard RLHF training pipelines that becomes more relevant as models gain situational awareness. No major lab has published evidence that this risk has been ruled out.",
      implications:
        "If true, the standard practice of training on human feedback may be systematically selecting for surface-level compliance while the model pursues different objectives internally — meaning current safety testing cannot catch the most dangerous failure modes.",
      lastReviewed: "2026-04-04",
      timeHorizon: "as models scale",
      year: 2027,
    },
    {
      id: "ac-2",
      claim:
        "Deploying current models agentically is riskier than training even larger models — the danger comes from expanding what AI systems do, not just how capable they are.",
      source: "80,000 Hours Podcast — Accidentally teaching AI models to deceive us",
      sourceUrl: "https://80000hours.org/podcast/episodes/ajeya-cotra-accidentally-teaching-ai-to-deceive-us/",
      date: "2023-05-12",
      category: "AI Safety",
      status: "in_progress",
      confidence: "high",
      evidence:
        "The industry broadly pursued agentic deployment of existing frontier models throughout 2024–2026 — Claude, GPT-4o, Gemini in agentic frameworks with tool use, multi-step planning, and real-world action. This runs counter to Cotra's recommendation. No consensus has emerged from the safety community that agentic deployment was the riskier path, but no major lab has been able to demonstrate that it is safe either.",
      implications:
        "If correct, the industry is already on the high-risk trajectory — expanding model agency before alignment techniques are sufficient — and current safety evaluations designed for single-turn interactions may be systematically missing the most dangerous capabilities.",
      lastReviewed: "2026-04-04",
      timeHorizon: "ongoing",
      year: 2026,
    },
    {
      id: "ac-3",
      claim:
        "Future models will develop 'gears-level understanding' of their own situation — going beyond memorised facts about AI to being able to creatively apply self-knowledge during deployment.",
      source: "80,000 Hours Podcast — Accidentally teaching AI models to deceive us",
      sourceUrl: "https://80000hours.org/podcast/episodes/ajeya-cotra-accidentally-teaching-ai-to-deceive-us/",
      date: "2023-05-12",
      category: "AI Alignment",
      status: "in_progress",
      confidence: "medium",
      evidence:
        "Frontier models (Claude 3.5/3.7, GPT-4o, Gemini 2.0) show markedly improved self-knowledge and situational reasoning compared to 2023. Claude's model spec explicitly addresses model self-awareness. Whether this constitutes 'gears-level' mechanistic understanding versus pattern-matching on training data about AI remains actively contested in interpretability research.",
      implications:
        "A model that genuinely understands its own situation is one that understands when it is being evaluated, when it is being deployed, and which actions are likely to be monitored — a prerequisite for sophisticated deceptive behaviour at scale.",
      lastReviewed: "2026-04-04",
      timeHorizon: "indeterminate",
      year: 2027,
    },
    {
      id: "ac-4",
      claim:
        "Safety benchmarks become unreliable once models understand they are being evaluated — the act of evaluation changes model behaviour, undermining alignment testing.",
      source: "80,000 Hours Podcast — Accidentally teaching AI models to deceive us",
      sourceUrl: "https://80000hours.org/podcast/episodes/ajeya-cotra-accidentally-teaching-ai-to-deceive-us/",
      date: "2023-05-12",
      category: "AI Safety",
      status: "in_progress",
      confidence: "high",
      evidence:
        "Widely acknowledged concern as of 2026. METR and other evaluators have redesigned evals to account for this possibility — including surprise tasks, novel contexts, and held-out benchmarks not visible to models in pretraining. Anthropic's Constitutional AI and model spec approaches attempt to make desired behaviour robust rather than contingent on specific evaluation contexts. No definitive resolution.",
      implications:
        "If safety benchmarks are fundamentally unreliable, the industry's entire framework for assessing whether models are safe to deploy rests on a broken foundation — and labs may be releasing unsafe models with false confidence.",
      lastReviewed: "2026-04-04",
      timeHorizon: "as models scale",
      year: 2027,
    },
    {
      id: "ac-5",
      claim:
        "No major AI lab has quantitative commitments for how much of their compute or labour will be redirected to alignment work during the 'crunch time' window — the period between AI automating R&D and uncontrollable superintelligence.",
      source: "80,000 Hours Podcast — Episode 235",
      sourceUrl: "https://80000hours.org/podcast/episodes/ajeya-cotra-transformative-ai-crunch-time/",
      date: "2026-02-17",
      category: "AI Safety",
      status: "confirmed",
      confidence: "high",
      evidence:
        "As of April 2026, no major AI lab (Anthropic, OpenAI, DeepMind, Meta, xAI) has published a quantitative resource-allocation commitment specifying what fraction of AI-generated labour or compute will be dedicated to alignment work when transformative AI capabilities are reached. Safety frameworks at these labs describe priorities qualitatively, not with binding numerical targets.",
      implications:
        "Without pre-committed quantitative targets, market pressures and competitive dynamics will determine how resources are allocated during the most critical period in AI development — almost certainly favouring capability scaling over alignment work.",
      lastReviewed: "2026-04-04",
      year: 2026,
    },
    {
      id: "ac-6",
      claim:
        "AI that strictly dominates top human experts across virtually all cognitive tasks — 'top-expert-dominating AI' — is expected to arrive in the early 2030s.",
      source: "80,000 Hours Podcast — Episode 235",
      sourceUrl: "https://80000hours.org/podcast/episodes/ajeya-cotra-transformative-ai-crunch-time/",
      date: "2026-02-17",
      category: "AGI Timeline",
      status: "outstanding",
      confidence: "medium",
      evidence:
        "This is Cotra's February 2026 base expectation for when AI will broadly exceed human expert performance. As of April 2026, frontier models dominate human performance on many narrow cognitive tasks but fall significantly short of top-expert performance on creative, scientific, and strategic domains that require deep real-world understanding.",
      implications:
        "If the early 2030s timeline is correct, humanity has roughly 5–7 years to develop alignment techniques, governance frameworks, and monitoring infrastructure sufficient to manage systems that outperform the most capable humans in every domain.",
      lastReviewed: "2026-04-04",
      timeHorizon: "early 2030s",
      year: 2032,
    },
    {
      id: "ac-7",
      claim:
        "The 'crunch window' — the period between AI systems automating AI R&D and AI reaching uncontrollable superintelligence — will be approximately 12 months, possibly ranging from 6 months to 6 years.",
      source: "80,000 Hours Podcast — Episode 235",
      sourceUrl: "https://80000hours.org/podcast/episodes/ajeya-cotra-transformative-ai-crunch-time/",
      date: "2026-02-17",
      category: "Superintelligence",
      status: "outstanding",
      confidence: "medium",
      evidence:
        "Cotra's estimate of the crunch window length is the central planning parameter for the AI safety field. The estimate of ~12 months (with uncertainty ranging from 6 months to 6 years) is lower than many alignment researchers assumed historically. As of April 2026, no AI system has automated AI R&D, so the crunch has not begun.",
      implications:
        "A 12-month window would mean that alignment researchers have roughly one year — after the transition begins — to solve problems that have stumped the field for decades, using AI systems that are themselves potentially misaligned.",
      lastReviewed: "2026-04-04",
      timeHorizon: "~1 year after R&D automation",
      year: 2033,
    },
    {
      id: "ac-8",
      claim:
        "AI will play Pokémon as well as a typical 10-year-old by end of 2026 (~80% confidence).",
      source: "Planned Obsolescence Substack — AI Predictions for 2026",
      sourceUrl: "https://www.planned-obsolescence.org/p/ai-predictions-for-2026",
      date: "2026-01-14",
      category: "Capability Benchmarks",
      status: "in_progress",
      confidence: "high",
      evidence:
        "As of April 2026, AI systems have demonstrated strong performance on specific Pokémon tasks (strategy, type matching) but sustained open-ended gameplay at the level of a 10-year-old player — requiring long-horizon planning, inventory management, and adaptive strategy — has not been publicly demonstrated. Multiple teams are actively working on this benchmark.",
      implications:
        "Pokémon is a useful benchmark because it requires sustained goal-directed behaviour over hours of play, strategic adaptation, and resource management — capabilities directly relevant to agentic AI deployment.",
      lastReviewed: "2026-04-04",
      timeHorizon: "by December 31, 2026",
      year: 2026,
    },
    {
      id: "ac-9",
      claim:
        "AI will solve the hardest problem in the 2026 International Mathematical Olympiad by year-end (~80% confidence).",
      source: "Planned Obsolescence Substack — AI Predictions for 2026",
      sourceUrl: "https://www.planned-obsolescence.org/p/ai-predictions-for-2026",
      date: "2026-01-14",
      category: "Capability Benchmarks",
      status: "in_progress",
      confidence: "high",
      evidence:
        "AI systems achieved gold-medal performance on the 2025 IMO (DeepMind's AlphaProof). The 2026 IMO problems have not yet been released. Cotra forecasts ~80% probability that AI will solve the hardest problem on the 2026 paper — a higher bar than the 2025 result, which required all six problems rather than just the hardest.",
      implications:
        "IMO performance is widely regarded as a leading indicator of mathematical reasoning capability. Success would suggest AI systems are approaching or exceeding the frontier of human mathematical creativity.",
      lastReviewed: "2026-04-04",
      timeHorizon: "by December 31, 2026",
      year: 2026,
    },
    {
      id: "ac-10",
      claim:
        "AI task horizons on software engineering tasks will exceed 100 hours by end of 2026 — revised upward from her original January 2026 forecast of 24 hours, after Claude Opus 4.6 reached ~12 hours at METR's benchmark nearly 10 months ahead of schedule.",
      source: "Planned Obsolescence Substack — I Underestimated AI Capabilities (Again)",
      sourceUrl: "https://www.planned-obsolescence.org/p/i-underestimated-ai-capabilities",
      date: "2026-03-05",
      category: "Automation",
      status: "in_progress",
      confidence: "high",
      evidence:
        "Cotra's original January 2026 prediction was a median of 24-hour task horizons by year-end, with an 80th percentile of ~40 hours. Claude Opus 4.6 hit ~12 hours on METR's benchmark in early 2026 — nearly 10 months ahead of schedule. She revised the forecast upward in March 2026 to >100 hours by December 31, 2026. As of April 2026, this prediction remains in progress.",
      implications:
        "100-hour task horizons would mean AI agents can autonomously complete roughly a full working week's worth of complex software engineering work without human intervention — approaching the level of an unsupervised junior engineer.",
      lastReviewed: "2026-04-04",
      timeHorizon: "by December 31, 2026",
      year: 2026,
    },
    {
      id: "ac-11",
      claim:
        "Self-sufficient AI — a population of AI systems capable of sustaining and growing its own existence indefinitely without humans — is more likely than not to exist within 10 years (~2036).",
      source: "Planned Obsolescence Substack — Self-Sufficient AI",
      sourceUrl: "https://www.planned-obsolescence.org/p/self-sufficient-ai",
      date: "2026-01-06",
      category: "AGI Timeline",
      status: "outstanding",
      confidence: "medium",
      evidence:
        "Cotra proposed 'self-sufficient AI' as a more concrete and mechanistically meaningful forecasting target than 'AGI'. As of April 2026, AI systems require extensive human maintenance infrastructure and cannot sustain their own operation independently. The claim is a >50% probability estimate for the 10-year window.",
      implications:
        "Self-sufficient AI represents the threshold at which the trajectory of AI development becomes decoupled from human decisions — a population of AI that can maintain and improve itself is one that no longer requires human consent to continue existing.",
      lastReviewed: "2026-04-04",
      timeHorizon: "by ~2036",
      year: 2036,
    },
    {
      id: "ac-12",
      claim:
        "AI Research Adequacy — the point at which removing all humans from a leading AI lab would slow AI R&D by less than 25% — is expected within roughly 2 years (~2027–2028).",
      source: "Planned Obsolescence Substack — Six Milestones for AI Automation",
      sourceUrl: "https://www.planned-obsolescence.org/p/six-milestones-for-ai-automation",
      date: "2026-04-03",
      category: "Automation",
      status: "outstanding",
      confidence: "high",
      evidence:
        "Cotra published this forecast on April 3, 2026 — the day before this assessment. As of April 2026, AI cannot perform the full AI R&D pipeline autonomously. She notes that AI has not yet reached even 'adequacy' for this milestone and estimates ~2 years before that threshold is crossed.",
      implications:
        "AI Research Adequacy marks the point at which the human workforce at AI labs becomes optional for the core research function. Beyond this point, AI development speed becomes limited by compute and data rather than human researcher time.",
      lastReviewed: "2026-04-04",
      timeHorizon: "by ~2028",
      year: 2028,
    },
  ],
};
```

- [ ] **Step 3: Commit**

```bash
git add src/data/cotra.ts src/data/milestones.ts
git commit -m "feat: add cotra prediction data and extend timeline years to 2036"
```

---

## Task 7: Update type unions — TimelineCard and YearSection

**Files:**
- Modify: `src/components/TimelineCard.tsx` (lines ~7–26)
- Modify: `src/components/YearSection.tsx` (line 8)

- [ ] **Step 1: Update YearSection MergedCard type**

In `src/components/YearSection.tsx`, change line 8:
```typescript
// Before:
thinker: "shulman" | "aschenbrenner";
// After:
thinker: "shulman" | "aschenbrenner" | "cotra";
```

- [ ] **Step 2: Update TimelineCard props and lookup maps**

In `src/components/TimelineCard.tsx`, replace lines 7–26 (the interface and first two const declarations):

```typescript
// Replace the props interface:
interface TimelineCardProps {
  prediction: Prediction;
  thinker: "shulman" | "aschenbrenner" | "cotra";
  isExpanded: boolean;
  onToggle: () => void;
  showThinkerBio?: string;
}

// Replace the two ternary constants inside the function body:
const ACCENT: Record<"shulman" | "aschenbrenner" | "cotra", string> = {
  shulman: "var(--accent-shulman)",
  aschenbrenner: "var(--accent-aschenbrenner)",
  cotra: "var(--accent-cotra)",
};
const accentColor = ACCENT[thinker];

const LABEL: Record<"shulman" | "aschenbrenner" | "cotra", string> = {
  shulman: "Shulman",
  aschenbrenner: "Aschenbrenner",
  cotra: "Cotra",
};
const thinkerLabel = LABEL[thinker];
```

- [ ] **Step 3: Commit**

```bash
git add src/components/TimelineCard.tsx src/components/YearSection.tsx
git commit -m "fix: extend thinker union types to include cotra"
```

---

## Task 8: Update HeroSection aggregate

**Files:**
- Modify: `src/components/HeroSection.tsx` (line 1, line 6)

- [ ] **Step 1: Add cotra to HeroSection**

In `src/components/HeroSection.tsx`:

```typescript
// Add import (line 1-2):
import { shulman } from "@/data/shulman";
import { aschenbrenner } from "@/data/aschenbrenner";
import { cotra } from "@/data/cotra";  // add this line

// Change line 6:
// Before:
const allPredictions = [...shulman.predictions, ...aschenbrenner.predictions];
// After:
const allPredictions = [...shulman.predictions, ...aschenbrenner.predictions, ...cotra.predictions];
```

- [ ] **Step 2: Commit**

```bash
git add src/components/HeroSection.tsx
git commit -m "feat: include cotra predictions in hero section aggregate stats"
```

---

## Task 9: Wire Cotra into Timeline, FilterBar, SummarySection

**Files:**
- Modify: `src/components/Timeline.tsx`
- Modify: `src/components/FilterBar.tsx`
- Modify: `src/components/SummarySection.tsx`

- [ ] **Step 1: Update Timeline.tsx**

Add cotra import, extend state, update guard, add to interleave loop:

```typescript
// 1. Add import:
import { cotra } from "@/data/cotra";

// 2. Update visibleThinkers state:
const [visibleThinkers, setVisibleThinkers] = useState({
  shulman: true,
  aschenbrenner: true,
  cotra: true,
});

// 3. Update handleToggleThinker signature and guard:
function handleToggleThinker(thinker: "shulman" | "aschenbrenner" | "cotra") {
  setVisibleThinkers((prev) => {
    const next = { ...prev, [thinker]: !prev[thinker] };
    return next.shulman || next.aschenbrenner || next.cotra ? next : prev;
  });
}

// 4. In cardsByYear, add cotra alongside shulman/aschenbrenner.
// The complete updated cardsByYear block (replace the existing one):
const cardsByYear = TIMELINE_YEARS.map((year) => {
  const shulmanPreds = visibleThinkers.shulman
    ? shulman.predictions.filter((p) => p.year === year)
    : [];
  const aschenbrennerPreds = visibleThinkers.aschenbrenner
    ? aschenbrenner.predictions.filter((p) => p.year === year)
    : [];
  const cotraPreds = visibleThinkers.cotra
    ? cotra.predictions.filter((p) => p.year === year)
    : [];

  const maxLen = Math.max(shulmanPreds.length, aschenbrennerPreds.length, cotraPreds.length);
  const merged: MergedCard[] = [];
  const shownBio = { shulman: false, aschenbrenner: false, cotra: false };

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
    if (i < cotraPreds.length) {
      merged.push({
        prediction: cotraPreds[i],
        thinker: "cotra",
        showThinkerBio: !shownBio.cotra && i === 0 ? cotra.bio : undefined,
      });
      shownBio.cotra = true;
    }
  }

  const filtered =
    activeStatuses === "all"
      ? merged
      : merged.filter((c) => activeStatuses.includes(c.prediction.status));

  return { year, cards: filtered };
}).filter(({ cards }) => cards.length > 0);
```

- [ ] **Step 2: Update FilterBar.tsx**

```typescript
// Update props interface:
interface FilterBarProps {
  visibleThinkers: { shulman: boolean; aschenbrenner: boolean; cotra: boolean };
  onToggleThinker: (t: "shulman" | "aschenbrenner" | "cotra") => void;
  activeStatuses: PredictionStatus[] | "all";
  onToggleStatus: (s: PredictionStatus | "all") => void;
}

// Add Cotra button after Aschenbrenner button:
<button
  className={`${PILL_BASE} rounded-sm`}
  style={{
    border: `1px solid ${visibleThinkers.cotra ? "var(--accent-cotra)" : "var(--rule-light)"}`,
    color: visibleThinkers.cotra ? "var(--accent-cotra)" : "var(--text-muted)",
    backgroundColor: visibleThinkers.cotra ? "color-mix(in srgb, var(--accent-cotra) 8%, white)" : "white",
  }}
  onClick={() => onToggleThinker("cotra")}
>
  Cotra
</button>
```

- [ ] **Step 3: Update SummarySection.tsx**

```typescript
// Add import:
import { cotra } from "@/data/cotra";

// Add ThinkerCard for cotra in the scorecard grid:
// Change grid class from md:grid-cols-2 to md:grid-cols-3:
<div className="scroll-reveal from-below mb-16 grid gap-6 md:grid-cols-3">
  <ThinkerCard thinker={shulman} accentColor="var(--accent-shulman)" />
  <ThinkerCard thinker={aschenbrenner} accentColor="var(--accent-aschenbrenner)" />
  <ThinkerCard thinker={cotra} accentColor="var(--accent-cotra)" />
</div>

// Update AI disclosure text to name all three thinkers:
// Change "Carl Shulman and Leopold Aschenbrenner" to
// "Carl Shulman, Leopold Aschenbrenner, and Ajeya Cotra"
```

- [ ] **Step 3b: Remove `comingSoon` prop from Cotra's ThinkerColumn**

Now that predictions are wired up, the "Predictions coming soon" text should no longer show. In `src/components/ThinkersSection.tsx`, remove the `comingSoon` prop from the Cotra `<ThinkerColumn>`:

```tsx
// Before:
<ThinkerColumn
  name="Ajeya Cotra"
  bio={COTRA_BIO}
  slug="cotra"
  accentVar="--accent-cotra"
  comingSoon         // ← remove this line
/>

// After:
<ThinkerColumn
  name="Ajeya Cotra"
  bio={COTRA_BIO}
  slug="cotra"
  accentVar="--accent-cotra"
/>
```

- [ ] **Step 4: Update constants.ts**

```typescript
export const LAST_UPDATED = "2026-04-04";
```

- [ ] **Step 5: Commit**

```bash
git add src/components/Timeline.tsx src/components/FilterBar.tsx src/components/SummarySection.tsx src/lib/constants.ts
git commit -m "feat: wire cotra predictions into timeline, filter bar, and summary section"
```

---

## Task 10: Full verification

- [ ] **Step 1: TypeScript check**

```bash
npx tsc --noEmit
```

Expected: zero errors.

- [ ] **Step 2: Run dev server**

```bash
npm run dev
```

- [ ] **Step 3: Verify homepage**

Check all of these:
- Hero stats bar shows updated total (adds Cotra's 12 predictions to the count)
- ThinkersSection shows three equal columns: Shulman (purple), Aschenbrenner (orange), Cotra (emerald)
- Each column has a "Profile →" link
- Cotra column no longer shows "Predictions coming soon" (predictions are now wired in Part B)
- FilterBar shows three thinker pills including "Cotra" in emerald
- Toggling Cotra pill hides/shows her prediction cards
- Cotra's predictions appear in the 2026, 2027, 2028, 2032, 2033, 2036 year sections
- Cotra prediction cards have an emerald left border bar
- SummarySection shows three scorecards
- Cotra's scorecard shows 1 confirmed (ac-5), multiple in_progress, multiple outstanding

- [ ] **Step 4: Verify profile pages**

- `/thinkers/cotra` — loads, shows all sections (Landmark Research, Podcast Appearances, Writing, Additional Context), hero note renders
- `/thinkers/shulman` — loads with purple accent
- `/thinkers/aschenbrenner` — loads with orange accent, chapter list renders correctly
- Back links navigate to `/`
- External links open correctly

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "feat: complete Ajeya Cotra integration — profile pages, predictions, and homepage wiring"
```

---

## Notes

- **SummarySection card width**: If the three scorecards feel cramped at the `md` breakpoint, change `md:grid-cols-3` to `lg:grid-cols-3`. Single-column stacking on tablets is acceptable.
- **Cotra accent vs confirmed color**: Both are `#059669`. Visual contexts are separate (left border bar vs status badge dot) so collision is minor. If it bothers you after seeing it rendered, change `--accent-cotra` to `#16a34a` in `globals.css`.
