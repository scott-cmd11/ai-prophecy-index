"use client";

import { useEffect, useRef, useState } from "react";
import { Prediction } from "@/types";
import { TimelineCard } from "@/components/TimelineCard";

interface YearSectionProps {
  year: number;
  milestones: string[];
  shulmanCards: Prediction[];
  aschenbrennerCards: Prediction[];
  expandedId: string | null;
  onExpand: (id: string) => void;
  visibleThinkers: { shulman: boolean; aschenbrenner: boolean };
}

export function YearSection({
  year,
  milestones,
  shulmanCards,
  aschenbrennerCards,
  expandedId,
  onExpand,
  visibleThinkers,
}: YearSectionProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const [chipsVisible, setChipsVisible] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setChipsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const maxCards = Math.max(shulmanCards.length, aschenbrennerCards.length);

  return (
    <section id={`year-${year}`} className="relative">
      {/* Sticky year header */}
      <div
        ref={headerRef}
        className="sticky top-0 z-10 backdrop-blur-md"
        style={{ backgroundColor: "var(--bg-overlay)" }}
      >
        <div className="px-4 pb-3 pt-4 md:px-8">
          {/* Year number */}
          <div
            className="select-none leading-none"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(80px, 12vw, 160px)",
              fontWeight: 700,
              color: "var(--year-fill)",
              WebkitTextStroke: "1px var(--year-stroke)",
              lineHeight: 0.9,
            }}
            aria-label={String(year)}
          >
            {year}
          </div>

          {/* Milestone chips */}
          {milestones.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {milestones.map((milestone, i) => (
                <span
                  key={i}
                  className="rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-widest transition-all duration-300"
                  style={{
                    borderColor: "var(--spine-glow)",
                    color: "var(--text-muted)",
                    backgroundColor: "var(--bg-card)",
                    opacity: chipsVisible ? 1 : 0,
                    transform: chipsVisible
                      ? "translateY(0)"
                      : "translateY(4px)",
                    transitionDelay: `${i * 150}ms`,
                  }}
                >
                  {milestone}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Split-spine card area */}
      <div className="px-4 py-6 md:px-8">
        {/* Desktop: 3-column grid with spine */}
        <div className="hidden md:grid" style={{ gridTemplateColumns: "1fr 24px 1fr", gap: "0 0" }}>
          {/* Left column — Shulman */}
          <div className="flex flex-col items-end gap-4 pr-6">
            {visibleThinkers.shulman &&
              shulmanCards.map((prediction, i) => (
                <div key={prediction.id} className="w-full max-w-lg">
                  <TimelineCard
                    prediction={prediction}
                    thinker="shulman"
                    isExpanded={expandedId === prediction.id}
                    onToggle={() => onExpand(prediction.id)}
                  />
                </div>
              ))}
          </div>

          {/* Center spine */}
          <div className="relative flex justify-center">
            <div
              className="absolute inset-y-0 w-[2px]"
              style={{ backgroundColor: "var(--spine)" }}
            />
            {/* Dot markers — one per card row (based on max cards) */}
            {Array.from({ length: maxCards }).map((_, i) => (
              <div
                key={i}
                className="absolute z-10"
                style={{
                  // Rough vertical positioning: header offset + per-card spacing
                  top: `${i * 140 + 24}px`,
                }}
              >
                <div
                  className="h-2 w-2 -translate-x-1/2 rounded-full"
                  style={{
                    backgroundColor: "var(--spine-glow)",
                    boxShadow: "0 0 6px var(--spine-glow)",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Right column — Aschenbrenner */}
          <div className="flex flex-col items-start gap-4 pl-6">
            {visibleThinkers.aschenbrenner &&
              aschenbrennerCards.map((prediction, i) => (
                <div key={prediction.id} className="w-full max-w-lg">
                  <TimelineCard
                    prediction={prediction}
                    thinker="aschenbrenner"
                    isExpanded={expandedId === prediction.id}
                    onToggle={() => onExpand(prediction.id)}
                  />
                </div>
              ))}
          </div>
        </div>

        {/* Mobile: single column, no spine */}
        <div className="flex flex-col gap-4 md:hidden">
          {visibleThinkers.shulman &&
            shulmanCards.map((prediction, i) => (
              <TimelineCard
                key={prediction.id}
                prediction={prediction}
                thinker="shulman"
                isExpanded={expandedId === prediction.id}
                onToggle={() => onExpand(prediction.id)}
              />
            ))}
          {visibleThinkers.aschenbrenner &&
            aschenbrennerCards.map((prediction, i) => (
              <TimelineCard
                key={prediction.id}
                prediction={prediction}
                thinker="aschenbrenner"
                isExpanded={expandedId === prediction.id}
                onToggle={() => onExpand(prediction.id)}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
