"use client";

import { useMemo, useState } from "react";
import { TagDistributionChart } from "@/components/TagDistributionChart";
import { TimelineScatterChart } from "@/components/TimelineScatterChart";
import { shulman } from "@/data/shulman";
import { aschenbrenner } from "@/data/aschenbrenner";
import { cotra } from "@/data/cotra";
import { getStatusCounts } from "@/lib/utils";
import { STATUS_COLORS } from "@/lib/constants";

export function AnalysisSection() {
  const [open, setOpen] = useState(false);

  const stats = useMemo(() => {
    const all = [
      ...shulman.predictions,
      ...aschenbrenner.predictions,
      ...cotra.predictions,
    ];
    const counts = getStatusCounts(all);
    return {
      total: all.length,
      ...counts,
    };
  }, []);

  const statItems = [
    { label: "Total", value: stats.total, color: "var(--text-primary)" },
    { label: "Confirmed", value: stats.confirmed, color: STATUS_COLORS.confirmed },
    { label: "Unfolding", value: stats.in_progress, color: STATUS_COLORS.in_progress },
    { label: "Early", value: stats.outstanding, color: STATUS_COLORS.outstanding },
    { label: "Incorrect", value: stats.incorrect, color: STATUS_COLORS.incorrect },
  ];

  return (
    <section
      className="border-t py-10"
      style={{ borderColor: "var(--rule-light)" }}
    >
      <div className="mx-auto max-w-4xl px-6">
        {/* Heading row: title + compact stat strip + toggle, all inline */}
        <div
          role="button"
          tabIndex={0}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setOpen((o) => !o);
            }
          }}
          className="flex flex-wrap items-baseline gap-x-6 gap-y-3 cursor-pointer select-none"
        >
          <h2
            className="text-2xl flex items-baseline gap-2"
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontWeight: 400,
              color: "var(--text-primary)",
            }}
          >
            <span
              className="font-mono text-[12px] inline-block transition-transform duration-150"
              style={{
                color: "var(--text-faint)",
                transform: open ? "rotate(90deg)" : "rotate(0deg)",
              }}
              aria-hidden="true"
            >
              ▸
            </span>
            The Data
          </h2>

          {/* Always-visible compact stat strip */}
          <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
            {statItems.map(({ label, value, color }) => (
              <div key={label} className="flex items-baseline gap-1.5">
                <span
                  className="font-mono text-sm font-semibold tabular-nums"
                  style={{ color }}
                >
                  {value}
                </span>
                <span
                  className="font-mono text-[9px] uppercase tracking-widest"
                  style={{ color: "var(--text-faint)" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          <span
            className="ml-auto font-mono text-[9px] uppercase tracking-widest"
            style={{ color: "var(--text-faint)" }}
          >
            {open ? "Hide charts" : "Show charts"}
          </span>
        </div>

        {/* Full charts — collapsed by default */}
        {open && (
          <div className="mt-10 flex flex-col gap-12">
            <TagDistributionChart />
            <TimelineScatterChart />
          </div>
        )}
      </div>
    </section>
  );
}
