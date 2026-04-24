import { shulman } from "@/data/shulman";
import { aschenbrenner } from "@/data/aschenbrenner";
import { cotra } from "@/data/cotra";
import { getStatusCounts, getHitRate } from "@/lib/utils";
import { STATUS_LABELS } from "@/lib/constants";

export function HeroSection() {
  const allPredictions = [...shulman.predictions, ...aschenbrenner.predictions, ...cotra.predictions];
  const counts = getStatusCounts(allPredictions);
  const total = allPredictions.length;
  const hitRate = getHitRate(allPredictions);

  const stats = [
    { label: "Predictions", value: total },
    { label: STATUS_LABELS.confirmed, value: counts.confirmed },
    { label: STATUS_LABELS.incorrect, value: counts.incorrect },
    { label: STATUS_LABELS.in_progress, value: counts.in_progress },
    { label: STATUS_LABELS.outstanding, value: counts.outstanding },
    { label: "Hit rate", value: `${hitRate}%` },
  ];

  return (
    <header className="border-b-2" style={{ borderColor: "var(--rule-heavy)" }}>
      <div className="mx-auto max-w-2xl px-6 pt-10 pb-0 text-center">
        {/* Kicker */}
        <p
          className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em]"
          style={{ color: "var(--text-muted)" }}
        >
          Accountability Project · Est. 2025
        </p>

        {/* Title */}
        <h1
          className="text-5xl md:text-7xl leading-[1.05] tracking-tight"
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontWeight: 400,
            color: "var(--text-primary)",
          }}
        >
          AI Prophecy Index
        </h1>

        {/* Rule + deck */}
        <div className="my-4 flex items-center gap-4 justify-center">
          <div className="flex-1 h-px max-w-[80px]" style={{ background: "var(--rule-heavy)" }} />
          <p
            className="text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            Who got it right, who didn&apos;t, and what the record says
          </p>
          <div className="flex-1 h-px max-w-[80px]" style={{ background: "var(--rule-heavy)" }} />
        </div>

        {/* Stats row */}
        <div
          className="flex border-t border-b mt-4"
          style={{ borderColor: "var(--rule-light)" }}
        >
          {stats.map(({ label, value }, i) => (
            <div
              key={label}
              className="flex-1 py-3 text-center"
              style={{
                borderRight: i < stats.length - 1 ? `1px solid var(--rule-light)` : "none",
              }}
            >
              <div
                className="font-mono text-lg font-medium leading-none mb-1"
                style={{ color: "var(--text-primary)" }}
              >
                {value}
              </div>
              <div
                className="font-mono text-[9px] uppercase tracking-widest leading-tight"
                style={{ color: "var(--text-muted)" }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sentinel for intersection observer (keep for future use) */}
      <div id="hero-sentinel" className="h-px w-full" />
    </header>
  );
}
