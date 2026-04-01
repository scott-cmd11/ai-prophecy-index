"use client";

import { useEffect, useState } from "react";
import { shulman } from "@/data/shulman";
import { aschenbrenner } from "@/data/aschenbrenner";
import { TIMELINE_YEARS, milestones } from "@/data/milestones";
import { YearSection } from "@/components/YearSection";
import { TimelineNav } from "@/components/TimelineNav";

export function Timeline() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [visibleThinkers, setVisibleThinkers] = useState<{
    shulman: boolean;
    aschenbrenner: boolean;
  }>({ shulman: true, aschenbrenner: true });
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("hero-sentinel");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setNavVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  function handleExpand(id: string) {
    setExpandedId((prev) => (prev === id ? null : id));
  }

  function handleToggleThinker(thinker: "shulman" | "aschenbrenner") {
    setVisibleThinkers((prev) => {
      const next = { ...prev, [thinker]: !prev[thinker] };
      // Prevent turning off the last active thinker
      const anyActive = next.shulman || next.aschenbrenner;
      return anyActive ? next : prev;
    });
  }

  // Derive per-year card lists outside JSX so the map callback stays pure
  const cardsByYear = TIMELINE_YEARS.map((year) => ({
    year,
    shulmanCards: shulman.predictions.filter((p) => p.year === year),
    aschenbrennerCards: aschenbrenner.predictions.filter((p) => p.year === year),
  }));

  return (
    <section className="relative py-16 px-4">
      {/* Full-height spine line */}
      <div
        className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 hidden md:block"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--spine) 5%, var(--spine) 95%, transparent)",
        }}
      />

      {/* Year sections */}
      {cardsByYear.map(({ year, shulmanCards, aschenbrennerCards }) => (
        <YearSection
          key={year}
          year={year}
          milestones={milestones[year] || []}
          shulmanCards={shulmanCards}
          aschenbrennerCards={aschenbrennerCards}
          expandedId={expandedId}
          onExpand={handleExpand}
          visibleThinkers={visibleThinkers}
        />
      ))}

      {/* Floating nav */}
      <TimelineNav
        visibleThinkers={visibleThinkers}
        onToggleThinker={handleToggleThinker}
        years={TIMELINE_YEARS as unknown as number[]}
        isVisible={navVisible}
      />
    </section>
  );
}
