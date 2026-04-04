"use client";

import { useState } from "react";
import { shulman } from "@/data/shulman";
import { aschenbrenner } from "@/data/aschenbrenner";
import { cotra } from "@/data/cotra";
import { TIMELINE_YEARS } from "@/data/milestones";
import { YearSection, MergedCard } from "@/components/YearSection";
import { FilterBar } from "@/components/FilterBar";
import { PredictionStatus } from "@/types";
import { PredictionTag } from "@/lib/constants";

export function Timeline() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [visibleThinkers, setVisibleThinkers] = useState({
    shulman: true,
    aschenbrenner: true,
    cotra: true,
  });
  const [activeStatuses, setActiveStatuses] = useState<PredictionStatus[] | "all">("all");
  const [activeTags, setActiveTags] = useState<PredictionTag[] | "all">("all");

  function handleExpand(id: string) {
    setExpandedId((prev) => (prev === id ? null : id));
  }

  function handleToggleThinker(thinker: "shulman" | "aschenbrenner" | "cotra") {
    setVisibleThinkers((prev) => {
      const next = { ...prev, [thinker]: !prev[thinker] };
      // Prevent disabling the last active thinker
      return next.shulman || next.aschenbrenner || next.cotra ? next : prev;
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

  function handleToggleTag(tag: PredictionTag) {
    setActiveTags((prev) => {
      if (prev === "all") return [tag];
      const next = prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag];
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
    const cotraPreds = visibleThinkers.cotra
      ? cotra.predictions.filter((p) => p.year === year)
      : [];

    // Interleave: shulman[0], aschenbrenner[0], cotra[0], shulman[1], ...
    const maxLen = Math.max(shulmanPreds.length, aschenbrennerPreds.length, cotraPreds.length);
    const merged: MergedCard[] = [];

    // Track if we've already shown the bio for each thinker in this year
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
          activeTags={activeTags}
          onToggleTag={handleToggleTag}
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
