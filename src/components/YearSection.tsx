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
