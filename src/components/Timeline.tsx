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
