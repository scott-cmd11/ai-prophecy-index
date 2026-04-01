"use client";

import { PredictionStatus } from "@/types";
import { STATUS_LABELS } from "@/lib/constants";

const STATUS_STYLES: Record<PredictionStatus, { color: string; bgColor: string }> = {
  confirmed: { color: "var(--confirmed)", bgColor: "rgba(52, 211, 153, 0.15)" },
  in_progress: { color: "var(--in-progress)", bgColor: "rgba(251, 191, 36, 0.15)" },
  outstanding: { color: "var(--outstanding)", bgColor: "rgba(71, 85, 105, 0.15)" },
  incorrect: { color: "var(--incorrect)", bgColor: "rgba(239, 68, 68, 0.15)" },
};

export function StatusBadge({ status, animated = true }: { status: PredictionStatus; animated?: boolean }) {
  const style = STATUS_STYLES[status];

  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[9px] font-medium uppercase tracking-widest"
      style={{ backgroundColor: style.bgColor, color: style.color }}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${animated && status === "in_progress" ? "status-pulse" : ""}`}
        style={{ backgroundColor: style.color }}
      />
      {STATUS_LABELS[status]}
    </span>
  );
}
