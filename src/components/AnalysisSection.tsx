"use client";

import { TagDistributionChart } from "@/components/TagDistributionChart";
import { TimelineScatterChart } from "@/components/TimelineScatterChart";

export function AnalysisSection() {
  return (
    <section
      className="border-t py-16"
      style={{ borderColor: "var(--rule-light)" }}
    >
      <div className="mx-auto max-w-4xl px-6">
        <h2
          className="mb-12 text-3xl"
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontWeight: 400,
            color: "var(--text-primary)",
          }}
        >
          The Data
        </h2>

        <div className="flex flex-col gap-12">
          <TagDistributionChart />
          <TimelineScatterChart />
        </div>
      </div>
    </section>
  );
}
