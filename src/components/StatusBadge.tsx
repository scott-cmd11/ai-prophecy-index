"use client";

import { PredictionStatus } from "@/types";
import { STATUS_LABELS } from "@/lib/constants";

const STATUS_STYLES: Record<PredictionStatus, { color: string; bg: string; border: string }> = {
  confirmed:    { color: "#166534", bg: "#f0fdf4", border: "#bbf7d0" },
  in_progress:  { color: "#92400e", bg: "#fffbeb", border: "#fde68a" },
  outstanding:  { color: "#475569", bg: "#f8fafc", border: "#e2e8f0" },
  incorrect:    { color: "#991b1b", bg: "#fef2f2", border: "#fecaca" },
};

export function StatusBadge({
  status,
  animated = true,
}: {
  status: PredictionStatus;
  animated?: boolean;
}) {
  const s = STATUS_STYLES[status];
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2 py-0.5 font-mono text-[9px] font-medium uppercase tracking-wider"
      style={{
        color: s.color,
        backgroundColor: s.bg,
        border: `1px solid ${s.border}`,
        borderRadius: "2px",
      }}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full flex-shrink-0 ${animated && status === "in_progress" ? "status-pulse" : ""}`}
        style={{ backgroundColor: s.color }}
      />
      {STATUS_LABELS[status]}
    </span>
  );
}
