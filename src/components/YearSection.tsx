"use client";

import { useState } from "react";
import { AIEvent, Prediction } from "@/types";
import { TimelineCard } from "@/components/TimelineCard";
import { EventsRail } from "@/components/EventsRail";

const CURRENT_YEAR = 2026;

export interface MergedCard {
  prediction: Prediction;
  thinker: "shulman" | "aschenbrenner" | "cotra";
  showThinkerBio?: string;
}

interface YearSectionProps {
  year: number;
  cards: MergedCard[];
  events: AIEvent[];
  expandedId: string | null;
  onExpand: (id: string) => void;
}

export function YearSection({
  year,
  cards,
  events,
  expandedId,
  onExpand,
}: YearSectionProps) {
  const [collapsed, setCollapsed] = useState(year < CURRENT_YEAR);

  if (cards.length === 0 && events.length === 0) return null;

  const predictionCount = cards.length;

  return (
    <section
      id={`year-${year}`}
      data-year={year}
      className="mx-auto max-w-5xl px-6"
    >
      {/* Broadsheet year heading — sticky, spans both columns, clickable to toggle */}
      <div
        role="button"
        tabIndex={0}
        aria-expanded={!collapsed}
        onClick={() => setCollapsed((c) => !c)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setCollapsed((c) => !c);
          }
        }}
        className="sticky z-30 flex items-center gap-4 pt-8 pb-3 border-t-2 cursor-pointer select-none"
        style={{
          top: "43px",
          borderColor: "var(--rule-heavy)",
          backgroundColor: "var(--bg-primary)",
        }}
      >
        <span
          className="font-mono text-[12px] flex-shrink-0 w-3 inline-block transition-transform duration-150"
          style={{
            color: "var(--text-faint)",
            transform: collapsed ? "rotate(0deg)" : "rotate(90deg)",
          }}
          aria-hidden="true"
        >
          ▸
        </span>
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
          {predictionCount > 0
            ? `${predictionCount} prediction${predictionCount !== 1 ? "s" : ""}`
            : "Events only"}
          {events.length > 0 && ` · ${events.length} event${events.length !== 1 ? "s" : ""}`}
        </span>
        <div className="flex-1 h-px" style={{ background: "var(--rule-light)" }} />
      </div>

      {/* Two-track layout: events rail + predictions */}
      {!collapsed && (
      <div
        className="md:grid md:grid-cols-[14rem_1fr] md:gap-8"
      >
        {/* Events rail */}
        <aside className="md:pt-0">
          <EventsRail
            events={events}
            expandedId={expandedId}
            onExpand={onExpand}
          />
        </aside>

        {/* Predictions */}
        <div>
          {cards.length > 0 ? (
            cards.map(({ prediction, thinker, showThinkerBio }) => (
              <TimelineCard
                key={prediction.id}
                prediction={prediction}
                thinker={thinker}
                isExpanded={expandedId === prediction.id}
                onToggle={() => onExpand(prediction.id)}
                showThinkerBio={showThinkerBio}
              />
            ))
          ) : (
            <div
              className="font-mono text-[9px] uppercase tracking-widest pt-3"
              style={{ color: "var(--text-faint)" }}
            >
              No predictions target this year
            </div>
          )}
        </div>
      </div>
      )}
    </section>
  );
}
