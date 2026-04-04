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
}

export function StickyStatsBar({ stats, visible }: StickyStatsBarProps) {
  const resolved = stats.confirmed + stats.incorrect;
  const hitRate = resolved > 0 ? Math.round((stats.confirmed / resolved) * 100) : -1;

  return (
    <div
      className="sticky top-0 z-40 transition-all duration-300 border-b"
      style={{
        borderColor: "var(--rule-light)",
        backgroundColor: "color-mix(in srgb, var(--bg-primary) 95%, transparent)",
        backdropFilter: "blur(8px)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div className="mx-auto max-w-2xl px-6 py-2 flex items-center justify-between">
        <Metric label="Seen" value={stats.seen} />
        <Metric label="Confirmed" value={stats.confirmed} color="var(--confirmed)" />
        <Metric label="Unfolding" value={stats.in_progress} color="var(--in-progress)" />
        <Metric label="Early" value={stats.outstanding} color="var(--outstanding)" />
        <Metric label="Incorrect" value={stats.incorrect} color="var(--incorrect)" />
        <div className="flex flex-col items-center">
          <span
            className="font-mono text-sm font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            {hitRate >= 0 ? <AnimatedNumber value={hitRate} suffix="%" /> : "—"}
          </span>
          <span
            className="font-mono text-[8px] uppercase tracking-widest"
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
        className="font-mono text-sm font-semibold"
        style={{ color: color ?? "var(--text-primary)" }}
      />
      <span
        className="font-mono text-[8px] uppercase tracking-widest"
        style={{ color: "var(--text-faint)" }}
      >
        {label}
      </span>
    </div>
  );
}
