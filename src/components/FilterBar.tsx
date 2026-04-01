"use client";

import { PredictionStatus } from "@/types";
import { STATUS_LABELS } from "@/lib/constants";

interface FilterBarProps {
  visibleThinkers: { shulman: boolean; aschenbrenner: boolean };
  onToggleThinker: (t: "shulman" | "aschenbrenner") => void;
  activeStatuses: PredictionStatus[] | "all";
  onToggleStatus: (s: PredictionStatus | "all") => void;
}

const PILL_BASE =
  "font-mono text-[10px] px-3 py-1 cursor-pointer transition-colors duration-100 select-none";
const PILL_INACTIVE =
  "border border-[var(--rule-light)] text-[var(--text-muted)] bg-white hover:border-[var(--text-muted)]";
const PILL_ACTIVE = "border bg-[var(--text-primary)] text-white border-[var(--text-primary)]";

export function FilterBar({
  visibleThinkers,
  onToggleThinker,
  activeStatuses,
  onToggleStatus,
}: FilterBarProps) {
  const statuses: PredictionStatus[] = ["confirmed", "in_progress", "outstanding", "incorrect"];

  return (
    <div
      className="flex flex-wrap items-center gap-2 py-3 border-b mb-0"
      style={{ borderColor: "var(--rule-light)" }}
    >
      {/* Thinker filters */}
      <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-faint)] mr-1">
        Show
      </span>
      <button
        className={`${PILL_BASE} rounded-sm`}
        style={{
          border: `1px solid ${visibleThinkers.shulman ? "var(--accent-shulman)" : "var(--rule-light)"}`,
          color: visibleThinkers.shulman ? "var(--accent-shulman)" : "var(--text-muted)",
          backgroundColor: visibleThinkers.shulman ? "color-mix(in srgb, var(--accent-shulman) 8%, white)" : "white",
        }}
        onClick={() => onToggleThinker("shulman")}
      >
        Shulman
      </button>
      <button
        className={`${PILL_BASE} rounded-sm`}
        style={{
          border: `1px solid ${visibleThinkers.aschenbrenner ? "var(--accent-aschenbrenner)" : "var(--rule-light)"}`,
          color: visibleThinkers.aschenbrenner ? "var(--accent-aschenbrenner)" : "var(--text-muted)",
          backgroundColor: visibleThinkers.aschenbrenner ? "color-mix(in srgb, var(--accent-aschenbrenner) 8%, white)" : "white",
        }}
        onClick={() => onToggleThinker("aschenbrenner")}
      >
        Aschenbrenner
      </button>

      {/* Divider */}
      <span className="h-4 w-px mx-1" style={{ background: "var(--rule-light)" }} />

      {/* Status filters */}
      <button
        className={`${PILL_BASE} rounded-sm ${activeStatuses === "all" ? PILL_ACTIVE : PILL_INACTIVE}`}
        onClick={() => onToggleStatus("all")}
      >
        All
      </button>
      {statuses.map((s) => (
        <button
          key={s}
          className={`${PILL_BASE} rounded-sm ${
            activeStatuses !== "all" && activeStatuses.includes(s)
              ? PILL_ACTIVE
              : PILL_INACTIVE
          }`}
          onClick={() => onToggleStatus(s)}
        >
          {STATUS_LABELS[s]}
        </button>
      ))}
    </div>
  );
}
