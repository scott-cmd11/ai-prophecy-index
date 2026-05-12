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
  onClearTags: () => void;
  resultCount: number;
  eventCount: number;
  isFiltered: boolean;
  onReset: () => void;
}

const PILL_BASE =
  "inline-flex min-h-9 items-center justify-center border px-3 py-2 font-mono text-[10px] leading-none cursor-pointer transition-colors duration-100 select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text-primary)] disabled:cursor-not-allowed disabled:opacity-60";
const PILL_INACTIVE =
  "border-[var(--rule-light)] text-[var(--text-muted)] bg-white hover:border-[var(--text-muted)]";
const PILL_ACTIVE =
  "border-[var(--text-primary)] bg-[var(--text-primary)] text-white font-semibold shadow-[inset_0_-2px_0_rgba(255,255,255,0.25)]";

export function FilterBar({
  visibleThinkers,
  onToggleThinker,
  activeStatuses,
  onToggleStatus,
  activeTags,
  onToggleTag,
  onClearTags,
  resultCount,
  eventCount,
  isFiltered,
  onReset,
}: FilterBarProps) {
  const statuses: PredictionStatus[] = ["confirmed", "in_progress", "outstanding", "incorrect"];
  const activeThinkerCount = Object.values(visibleThinkers).filter(Boolean).length;

  return (
    <div
      className="py-3 border-t border-b mb-0"
      style={{ borderColor: "var(--rule-light)" }}
    >
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <p
          className="font-mono text-[9px] uppercase tracking-widest"
          style={{ color: "var(--text-muted)" }}
        >
          Showing {resultCount} prediction{resultCount === 1 ? "" : "s"}
          {eventCount > 0 ? ` and ${eventCount} event${eventCount === 1 ? "" : "s"}` : ""}
        </p>
        {isFiltered && (
          <button
            type="button"
            className="inline-flex min-h-8 items-center font-mono text-[9px] uppercase tracking-widest hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text-primary)]"
            style={{ color: "var(--text-muted)" }}
            onClick={onReset}
          >
            Reset filters
          </button>
        )}
      </div>

      {/* Row 1: Thinker filters */}
      <div className="flex items-center gap-2 mb-2 flex-wrap">
        <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-faint)] w-12 flex-shrink-0">
          Thinker
        </span>
        <button
          type="button"
          className={`${PILL_BASE} rounded-sm ${visibleThinkers.shulman ? "font-semibold" : ""}`}
          aria-pressed={visibleThinkers.shulman}
          disabled={visibleThinkers.shulman && activeThinkerCount === 1}
          title={
            visibleThinkers.shulman && activeThinkerCount === 1
              ? "At least one thinker must stay visible"
              : undefined
          }
          style={{
            border: `1px solid ${visibleThinkers.shulman ? "var(--accent-shulman)" : "var(--rule-light)"}`,
            color: visibleThinkers.shulman ? "var(--accent-shulman)" : "var(--text-muted)",
            backgroundColor: visibleThinkers.shulman ? "color-mix(in srgb, var(--accent-shulman) 8%, white)" : "white",
            boxShadow: visibleThinkers.shulman ? "inset 0 -2px 0 color-mix(in srgb, var(--accent-shulman) 35%, transparent)" : undefined,
          }}
          onClick={() => onToggleThinker("shulman")}
        >
          Shulman
        </button>
        <button
          type="button"
          className={`${PILL_BASE} rounded-sm ${visibleThinkers.aschenbrenner ? "font-semibold" : ""}`}
          aria-pressed={visibleThinkers.aschenbrenner}
          disabled={visibleThinkers.aschenbrenner && activeThinkerCount === 1}
          title={
            visibleThinkers.aschenbrenner && activeThinkerCount === 1
              ? "At least one thinker must stay visible"
              : undefined
          }
          style={{
            border: `1px solid ${visibleThinkers.aschenbrenner ? "var(--accent-aschenbrenner)" : "var(--rule-light)"}`,
            color: visibleThinkers.aschenbrenner ? "var(--accent-aschenbrenner)" : "var(--text-muted)",
            backgroundColor: visibleThinkers.aschenbrenner ? "color-mix(in srgb, var(--accent-aschenbrenner) 8%, white)" : "white",
            boxShadow: visibleThinkers.aschenbrenner ? "inset 0 -2px 0 color-mix(in srgb, var(--accent-aschenbrenner) 35%, transparent)" : undefined,
          }}
          onClick={() => onToggleThinker("aschenbrenner")}
        >
          Aschenbrenner
        </button>
        <button
          type="button"
          className={`${PILL_BASE} rounded-sm ${visibleThinkers.cotra ? "font-semibold" : ""}`}
          aria-pressed={visibleThinkers.cotra}
          disabled={visibleThinkers.cotra && activeThinkerCount === 1}
          title={
            visibleThinkers.cotra && activeThinkerCount === 1
              ? "At least one thinker must stay visible"
              : undefined
          }
          style={{
            border: `1px solid ${visibleThinkers.cotra ? "var(--accent-cotra)" : "var(--rule-light)"}`,
            color: visibleThinkers.cotra ? "var(--accent-cotra)" : "var(--text-muted)",
            backgroundColor: visibleThinkers.cotra ? "color-mix(in srgb, var(--accent-cotra) 8%, white)" : "white",
            boxShadow: visibleThinkers.cotra ? "inset 0 -2px 0 color-mix(in srgb, var(--accent-cotra) 35%, transparent)" : undefined,
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
          type="button"
          className={`${PILL_BASE} rounded-sm ${activeStatuses === "all" ? PILL_ACTIVE : PILL_INACTIVE}`}
          aria-pressed={activeStatuses === "all"}
          onClick={() => onToggleStatus("all")}
        >
          All
        </button>
        {statuses.map((s) => {
          const isActive = activeStatuses !== "all" && activeStatuses.includes(s);
          const style = STATUS_STYLES[s];
          return (
            <button
              type="button"
              key={s}
              className={`${PILL_BASE} rounded-sm ${
                isActive
                  ? "font-semibold shadow-[inset_0_-2px_0_rgba(26,26,26,0.18)]"
                  : PILL_INACTIVE
              }`}
              aria-pressed={isActive}
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
      <div className="flex items-start gap-2 mt-2 flex-wrap">
        <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-faint)] w-12 flex-shrink-0 mt-1">
          Topic
        </span>
        <button
          type="button"
          className={`${PILL_BASE} rounded-sm ${activeTags === "all" ? PILL_ACTIVE : PILL_INACTIVE}`}
          aria-pressed={activeTags === "all"}
          onClick={onClearTags}
        >
          All topics
        </button>
        {PREDICTION_TAGS.map((tag) => {
          const isActive = activeTags !== "all" && activeTags.includes(tag);
          return (
            <button
              type="button"
              key={tag}
              className={`${PILL_BASE} rounded-sm ${
                isActive
                  ? "font-semibold shadow-[inset_0_-2px_0_rgba(26,26,26,0.18)]"
                  : PILL_INACTIVE
              }`}
              aria-pressed={isActive}
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
