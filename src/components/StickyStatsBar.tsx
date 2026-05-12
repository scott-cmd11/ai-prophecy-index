"use client";

import { AnimatedNumber } from "@/components/AnimatedNumber";

interface CumulativeStats {
  seen: number;
  confirmed: number;
  in_progress: number;
  outstanding: number;
  incorrect: number;
}

interface StickyStatsBarProps {
  stats: CumulativeStats;
  visible: boolean;
  activeYear: number | null;
  isFiltered: boolean;
}

export function StickyStatsBar({
  stats,
  visible,
  activeYear,
  isFiltered,
}: StickyStatsBarProps) {
  const resolved = stats.confirmed + stats.incorrect;
  const open = stats.in_progress + stats.outstanding;
  const hitRate = resolved > 0 ? Math.round((stats.confirmed / resolved) * 100) : -1;
  const yearLabel = stats.seen === 0 && activeYear !== null ? `${activeYear} events` : (activeYear ?? "All years");
  const scopeLabel = isFiltered ? "Full record" : "Through";

  return (
    <div
      className="sticky top-0 z-40 min-h-[var(--sticky-stats-height)] border-b transition-all duration-300"
      style={{
        borderColor: "var(--rule-light)",
        backgroundColor: "color-mix(in srgb, var(--bg-primary) 95%, transparent)",
        backdropFilter: "blur(8px)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div className="mx-auto flex max-w-2xl items-center gap-3 px-4 py-2 sm:gap-4 sm:px-6">
        <div className="flex flex-shrink-0 flex-col">
          <span
            className="font-mono text-xs font-semibold tabular-nums sm:text-sm"
            style={{ color: "var(--text-primary)" }}
          >
            {yearLabel}
          </span>
          <span
            className="font-mono text-[7px] uppercase tracking-widest sm:text-[8px]"
            style={{ color: "var(--text-faint)" }}
          >
            {scopeLabel}
          </span>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-1 sm:hidden">
          <Metric label="Seen" value={stats.seen} />
          <Metric label="Open" value={open} />
        </div>

        <div className="hidden flex-1 grid-cols-5 gap-1 sm:grid sm:gap-0">
          <Metric label="Seen" value={stats.seen} />
          <Metric label="Right" value={stats.confirmed} color="var(--confirmed)" />
          <Metric label="Unfolding" value={stats.in_progress} color="var(--in-progress)" />
          <Metric label="Early" value={stats.outstanding} color="var(--outstanding)" />
          <Metric label="Wrong" value={stats.incorrect} color="var(--incorrect)" />
        </div>

        <div className="flex flex-shrink-0 flex-col items-center">
          <span
            className="font-mono text-xs font-semibold sm:text-sm"
            style={{ color: "var(--text-primary)" }}
          >
            {hitRate >= 0 ? <AnimatedNumber value={hitRate} suffix="%" /> : "N/A"}
          </span>
          <span
            className="font-mono text-[7px] uppercase tracking-widest sm:text-[8px]"
            style={{ color: "var(--text-faint)" }}
          >
            Hit rate
          </span>
        </div>
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color?: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <AnimatedNumber
        value={value}
        className="font-mono text-xs font-semibold sm:text-sm"
        style={{ color: color ?? "var(--text-primary)" }}
      />
      <span
        className="font-mono text-[7px] uppercase tracking-widest sm:text-[8px]"
        style={{ color: "var(--text-faint)" }}
      >
        {label}
      </span>
    </div>
  );
}
