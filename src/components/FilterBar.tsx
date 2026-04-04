"use client";

import { PredictionStatus } from "@/types";
import { STATUS_LABELS, PREDICTION_TAGS, PredictionTag } from "@/lib/constants";
import { STATUS_STYLES } from "@/components/StatusBadge";

interface FilterBarProps {
  visibleThinkers: { shulman: boolean; aschenbrenner: boolean; cotra: boolean };
  onToggleThinker: (t: "shulman" | "aschenbrenner" | "cotra") => void;
  activeStatuses: PredictionStatus[] | "all";
  onToggleStatus: (s: PredictionStatus | "all") => void;
  activeTags: PredictionTag[] | "all";
  onToggleTag: (tag: PredictionTag) => void;
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
  activeTags,
  onToggleTag,
}: FilterBarProps) {
  const statuses: PredictionStatus[] = ["confirmed", "in_progress", "outstanding", "incorrect"];

  return (
    <div
      className="py-3 border-b mb-0"
      style={{ borderColor: "var(--rule-light)" }}
    >
      {/* Row 1: Thinker filters */}
      <div className="flex items-center gap-2 mb-2 flex-wrap">
        <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-faint)] w-12 flex-shrink-0">
          Thinker
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
        <button
          className={`${PILL_BASE} rounded-sm`}
          style={{
            border: `1px solid ${visibleThinkers.cotra ? "var(--accent-cotra)" : "var(--rule-light)"}`,
            color: visibleThinkers.cotra ? "var(--accent-cotra)" : "var(--text-muted)",
            backgroundColor: visibleThinkers.cotra ? "color-mix(in srgb, var(--accent-cotra) 8%, white)" : "white",
          }}
          onClick={() => onToggleThinker("cotra")}
        >
          Cotra
        </button>
      </div>

      {/* Row 2: Status filters */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-faint)] w-12 flex-shrink-0">
          Status
        </span>
        <button
          className={`${PILL_BASE} rounded-sm ${activeStatuses === "all" ? PILL_ACTIVE : PILL_INACTIVE}`}
          onClick={() => onToggleStatus("all")}
        >
          All
        </button>
        {statuses.map((s) => {
          const isActive = activeStatuses !== "all" && activeStatuses.includes(s);
          const style = STATUS_STYLES[s];
          return (
            <button
              key={s}
              className={`${PILL_BASE} rounded-sm ${isActive ? "" : PILL_INACTIVE}`}
              style={isActive ? {
                color: style.color,
                backgroundColor: style.bg,
                border: `1px solid ${style.border}`,
              } : undefined}
              onClick={() => onToggleStatus(s)}
            >
              {STATUS_LABELS[s]}
            </button>
          );
        })}
      </div>

      {/* Row 3: Topic filters */}
      <div className="flex items-center gap-2 mt-2 flex-wrap">
        <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-faint)] w-12 flex-shrink-0">
          Topic
        </span>
        {PREDICTION_TAGS.map((tag) => {
          const isActive = activeTags !== "all" && activeTags.includes(tag);
          return (
            <button
              key={tag}
              className={`${PILL_BASE} rounded-sm ${isActive ? "" : PILL_INACTIVE}`}
              style={isActive ? {
                color: "var(--text-primary)",
                backgroundColor: "color-mix(in srgb, var(--text-primary) 8%, white)",
                border: "1px solid var(--text-primary)",
              } : undefined}
              onClick={() => onToggleTag(tag)}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
}
