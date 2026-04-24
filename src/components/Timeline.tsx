"use client";

import { useState, useEffect, useRef } from "react";
import { shulman } from "@/data/shulman";
import { aschenbrenner } from "@/data/aschenbrenner";
import { cotra } from "@/data/cotra";
import { TIMELINE_YEARS } from "@/data/milestones";
import { events } from "@/data/events";
import { YearSection, MergedCard } from "@/components/YearSection";
import { FilterBar } from "@/components/FilterBar";
import { PredictionStatus } from "@/types";
import { PredictionTag } from "@/lib/constants";
import { StickyStatsBar } from "@/components/StickyStatsBar";

export function Timeline() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [visibleThinkers, setVisibleThinkers] = useState({
    shulman: true,
    aschenbrenner: true,
    cotra: true,
  });
  const [activeStatuses, setActiveStatuses] = useState<PredictionStatus[] | "all">("all");
  const [activeTags, setActiveTags] = useState<PredictionTag[] | "all">("all");
  const [activeYear, setActiveYear] = useState<number | null>(null);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const timelineRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-year]");
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (intersecting.length > 0) {
          const year = Number(intersecting[0].target.getAttribute("data-year"));
          setActiveYear(year);
          setShowStickyBar(true);
        } else {
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
  }, [visibleThinkers, activeStatuses, activeTags]);

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

    const yearEvents = events
      .filter((e) => e.year === year)
      .sort((a, b) => a.date.localeCompare(b.date));

    return { year, cards: filtered, events: yearEvents };
  }).filter(({ cards, events }) => cards.length > 0 || events.length > 0);

  // Compute cumulative stats through the active year (unfiltered)
  const allPredictions = [
    ...shulman.predictions,
    ...aschenbrenner.predictions,
    ...cotra.predictions,
  ];

  const cumulativeStats = (() => {
    // When no year is resolved yet (initial load, fast scroll past collapsed
    // sections, etc.), fall back to totals across all predictions so the bar
    // always shows meaningful data instead of zeros.
    const through =
      activeYear === null
        ? allPredictions
        : allPredictions.filter((p) => p.year <= activeYear);
    return {
      seen: through.length,
      confirmed: through.filter((p) => p.status === "confirmed").length,
      in_progress: through.filter((p) => p.status === "in_progress").length,
      outstanding: through.filter((p) => p.status === "outstanding").length,
      incorrect: through.filter((p) => p.status === "incorrect").length,
    };
  })();

  return (
    <section ref={timelineRef} className="py-8">
      <StickyStatsBar stats={cumulativeStats} visible={showStickyBar} />

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
      {cardsByYear.map(({ year, cards, events }) => (
        <YearSection
          key={year}
          year={year}
          cards={cards}
          events={events}
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
