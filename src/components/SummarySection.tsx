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
            entry.target.classList.add("visible");
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
        <div className="scroll-reveal from-below mb-16 text-center">
          <h2
            className="font-serif text-5xl italic md:text-6xl"
            style={{ color: "var(--text-primary)" }}
          >
            The Reckoning
          </h2>
        </div>

        {/* Side-by-side scorecards */}
        <div className="scroll-reveal from-below mb-16 grid gap-6 md:grid-cols-2">
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
        <div className="scroll-reveal from-below mb-12 text-center">
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Tracking predictions in real time. Updated as evidence emerges.
          </p>
        </div>

        {/* Footer */}
        <footer className="scroll-reveal from-below border-t pt-8" style={{ borderColor: "var(--border-card)" }}>
          {/* Top row: attribution + icons */}
          <div className="mb-4 flex items-center justify-between gap-4">
            <p className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
              AI Prophecy Index &middot; A project by{" "}
              <a
                href="https://scotthazlitt.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:underline"
                style={{ color: "var(--accent-aschenbrenner)" }}
              >
                Scott Hazlitt
              </a>
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/in/scott-hazlitt/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: "var(--text-muted)" }} className="transition-colors hover:opacity-70">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://github.com/scott-cmd11" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: "var(--text-muted)" }} className="transition-colors hover:opacity-70">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>

          {/* Bottom row: copyright + legal links */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
            <p className="font-mono text-[10px]" style={{ color: "var(--text-muted)" }}>
              © {new Date().getFullYear()} Scott Hazlitt. AI-generated content is clearly labelled and may contain errors.
            </p>
            <div className="flex items-center gap-1 font-mono text-[10px]" style={{ color: "var(--text-muted)" }}>
              <a href="/privacy" className="transition-colors hover:underline" style={{ color: "var(--text-muted)" }}>Privacy &amp; Legal</a>
              <span className="mx-1">&middot;</span>
              <span>Last updated: {LAST_UPDATED}</span>
            </div>
          </div>

          {/* AI disclosure */}
          <div
            className="rounded-lg border px-5 py-4"
            style={{ borderColor: "var(--border-card)", backgroundColor: "var(--bg-card)" }}
          >
            <p
              className="mb-1 font-mono text-[9px] font-medium uppercase tracking-widest"
              style={{ color: "var(--text-muted)" }}
            >
              AI-generated content — use with caution
            </p>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Prediction summaries, evidence assessments, and implication statements on this site were generated with the assistance of AI language models. While sourced from public interviews and published writing, the framing, interpretation, and status judgements reflect automated analysis and may contain errors, omissions, or bias. This site is an independent tracking project and is not affiliated with Carl Shulman, Leopold Aschenbrenner, or their associated organisations. Content should not be used to inform investment, policy, or other consequential decisions without independent verification.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
