"use client";

import { useEffect, useRef } from "react";
import { shulman } from "@/data/shulman";
import { aschenbrenner } from "@/data/aschenbrenner";
import { getStatusCounts, getHitRate } from "@/lib/utils";
import { DonutChart } from "@/components/DonutChart";
import { LAST_UPDATED, STATUS_COLORS } from "@/lib/constants";
import { Thinker } from "@/types";

function ThinkerCard({
  thinker,
  accentColor,
}: {
  thinker: Thinker;
  accentColor: string;
}) {
  const counts = getStatusCounts(thinker.predictions);
  const hitRate = getHitRate(thinker.predictions);
  const total = thinker.predictions.length;

  const stats = [
    { label: "Total", value: total, color: "var(--text-primary)" },
    {
      label: "Hit Rate",
      value: `${hitRate}%`,
      color: STATUS_COLORS.confirmed,
    },
    {
      label: "Confirmed",
      value: counts.confirmed,
      color: STATUS_COLORS.confirmed,
    },
    {
      label: "In Progress",
      value: counts.in_progress,
      color: STATUS_COLORS.in_progress,
    },
    {
      label: "Outstanding",
      value: counts.outstanding,
      color: STATUS_COLORS.outstanding,
    },
    {
      label: "Incorrect",
      value: counts.incorrect,
      color: STATUS_COLORS.incorrect,
    },
  ];

  return (
    <div
      className="flex flex-col gap-6 rounded-xl p-8"
      style={{
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--border-card)",
      }}
    >
      {/* Thinker name */}
      <h3
        className="font-serif text-2xl italic"
        style={{ color: accentColor }}
      >
        {thinker.name}
      </h3>

      {/* Stats grid */}
      <div className="grid grid-cols-3 gap-x-4 gap-y-4">
        {stats.map(({ label, value, color }) => (
          <div key={label} className="flex flex-col gap-1">
            <span
              className="font-mono text-xs uppercase tracking-widest"
              style={{ color: "var(--text-muted)" }}
            >
              {label}
            </span>
            <span
              className="font-mono text-xl font-semibold tabular-nums"
              style={{ color }}
            >
              {value}
            </span>
          </div>
        ))}
      </div>

      {/* Donut chart */}
      <div className="flex justify-center pt-2">
        <DonutChart predictions={thinker.predictions} size="small" />
      </div>
    </div>
  );
}

export function SummarySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements =
      sectionRef.current?.querySelectorAll(".scroll-reveal") ?? [];
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <div className="scroll-reveal from-bottom mb-16 text-center">
          <h2
            className="font-serif text-5xl italic md:text-6xl"
            style={{ color: "var(--text-primary)" }}
          >
            The Reckoning
          </h2>
        </div>

        {/* Side-by-side scorecards */}
        <div className="scroll-reveal from-bottom mb-16 grid gap-6 md:grid-cols-2">
          <ThinkerCard
            thinker={shulman}
            accentColor="var(--accent-shulman)"
          />
          <ThinkerCard
            thinker={aschenbrenner}
            accentColor="var(--accent-aschenbrenner)"
          />
        </div>

        {/* Closing editorial line */}
        <div className="scroll-reveal from-bottom mb-12 text-center">
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Tracking predictions in real time. Updated as evidence emerges.
          </p>
        </div>

        {/* Footer */}
        <footer className="scroll-reveal from-bottom border-t pt-8" style={{ borderColor: "var(--border-card)" }}>
          <div className="flex flex-col items-center gap-2 text-center">
            <p
              className="font-mono text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              Last updated: {LAST_UPDATED}
            </p>
            <p
              className="font-mono text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              Predictions sourced from public interviews and writing. Status
              assessed independently.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
