import Link from "next/link";
import { shulman } from "@/data/shulman";
import { aschenbrenner } from "@/data/aschenbrenner";
import { getHitRate, getStatusCounts } from "@/lib/utils";
import { DonutChart } from "@/components/DonutChart";
import { CompareLink } from "@/components/CompareLink";

const thinkers = [shulman, aschenbrenner];

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <div className="animate-in relative">
        <div
          className="mb-2 font-mono text-[10px] font-medium uppercase tracking-[0.2em]"
          style={{ color: "var(--accent)" }}
        >
          Intelligence Brief
        </div>
        <h1
          className="font-serif text-5xl italic leading-tight md:text-6xl"
          style={{ color: "var(--text-primary)" }}
        >
          AI Prediction
          <br />
          Tracker
        </h1>
        <p
          className="mt-5 max-w-xl text-[15px] leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          Tracking and scoring public predictions about artificial intelligence
          from two prominent thinkers. Each prediction is sourced, categorized,
          and scored against real-world outcomes.
        </p>
      </div>

      {/* Thinker cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {thinkers.map((thinker, i) => {
          const hitRate = getHitRate(thinker.predictions);
          const counts = getStatusCounts(thinker.predictions);

          return (
            <Link
              key={thinker.slug}
              href={`/${thinker.slug}`}
              className={`card-glow animate-in delay-${i + 2} group relative overflow-hidden rounded-xl transition-all duration-300`}
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              {/* Card header */}
              <div className="p-6 pb-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h2
                      className="font-serif text-2xl italic transition-colors duration-200"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {thinker.name}
                    </h2>
                    <p
                      className="mt-1.5 text-sm leading-relaxed line-clamp-2"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {thinker.bio}
                    </p>
                  </div>
                </div>
              </div>

              {/* Chart */}
              <div className="flex justify-center py-6">
                <DonutChart predictions={thinker.predictions} size="small" />
              </div>

              {/* Stats footer */}
              <div
                className="grid grid-cols-4 divide-x px-1 py-3"
                style={{
                  borderTop: "1px solid var(--border-subtle)",
                  backgroundColor: "var(--bg-secondary)",
                  borderColor: "var(--border-subtle)",
                }}
              >
                {[
                  { label: "Total", value: thinker.predictions.length, color: "var(--text-primary)" },
                  { label: "Confirmed", value: counts.confirmed, color: "var(--confirmed)" },
                  { label: "In Progress", value: counts.in_progress, color: "var(--in-progress)" },
                  { label: "Outstanding", value: counts.outstanding, color: "var(--outstanding)" },
                ].map(({ label, value, color }) => (
                  <div key={label} className="text-center">
                    <div
                      className="font-mono text-lg font-semibold tabular-nums"
                      style={{ color }}
                    >
                      {value}
                    </div>
                    <div
                      className="font-mono text-[9px] font-medium uppercase tracking-widest"
                      style={{ color: "var(--text-faint)" }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Hit rate banner */}
              <div
                className="flex items-center justify-between px-6 py-3"
                style={{
                  borderTop: "1px solid var(--border-subtle)",
                  backgroundColor: "var(--bg-elevated)",
                }}
              >
                <span
                  className="font-mono text-[10px] font-medium uppercase tracking-widest"
                  style={{ color: "var(--text-faint)" }}
                >
                  Hit Rate
                </span>
                <span
                  className="font-mono text-sm font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  {hitRate}%
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Compare CTA */}
      <div className="animate-in delay-5 flex justify-center">
        <CompareLink />
      </div>
    </div>
  );
}
