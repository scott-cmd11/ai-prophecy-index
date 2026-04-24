"use client";

import { useState } from "react";
import { TagDistributionChart } from "@/components/TagDistributionChart";
import { TimelineScatterChart } from "@/components/TimelineScatterChart";

export function AnalysisSection() {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="border-t py-10"
      style={{ borderColor: "var(--rule-light)" }}
    >
      <div className="mx-auto max-w-4xl px-6">
        {/* Heading row: title + toggle */}
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
          className="flex flex-wrap items-baseline gap-x-4 gap-y-2 cursor-pointer select-none"
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
