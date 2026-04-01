"use client";

import { Prediction } from "@/types";
import { StatusBadge } from "@/components/StatusBadge";

interface TimelineCardProps {
  prediction: Prediction;
  thinker: "shulman" | "aschenbrenner";
  isExpanded: boolean;
  onToggle: () => void;
  showThinkerBio?: string;
}

export function TimelineCard({
  prediction,
  thinker,
  isExpanded,
  onToggle,
  showThinkerBio,
}: TimelineCardProps) {
  const accentColor =
    thinker === "shulman" ? "var(--accent-shulman)" : "var(--accent-aschenbrenner)";

  const thinkerLabel =
    thinker === "shulman" ? "Shulman" : "Aschenbrenner";

  const formattedDate = prediction.lastReviewed
    ? new Date(prediction.lastReviewed).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
      })
    : null;

  return (
    <div
      className="relative border-b"
      style={{ borderColor: "var(--rule-light)" }}
    >
      {/* Collapsed header — always visible, click to toggle */}
      <div
        className="flex cursor-pointer items-start gap-0 py-3.5 transition-colors duration-100 hover:bg-[#f5f3ec] -mx-6 px-6"
        onClick={onToggle}
        role="button"
        aria-expanded={isExpanded}
      >
        {/* Thinker colour bar */}
        <div
          className="mt-1 mr-3.5 w-[3px] self-stretch flex-shrink-0 rounded-sm"
          style={{ backgroundColor: accentColor, minHeight: "20px" }}
        />

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Meta row */}
          <div className="mb-1 flex items-center gap-2">
            <span
              className="font-mono text-[10px] font-semibold uppercase tracking-widest"
              style={{ color: accentColor }}
            >
              {thinkerLabel}
            </span>
            {prediction.timeHorizon && (
              <span
                className="font-mono text-[10px]"
                style={{ color: "var(--text-faint)" }}
              >
                · {prediction.timeHorizon}
              </span>
            )}
          </div>

          {/* Thinker bio — shown first time per year group */}
          {showThinkerBio && (
            <p
              className="mb-1.5 font-mono text-[10px] leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {showThinkerBio}
            </p>
          )}

          {/* Claim */}
          <p
            className="text-base leading-snug"
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              color: "var(--text-primary)",
            }}
          >
            {prediction.claim}
          </p>
        </div>

        {/* Status badge — right-aligned */}
        <div className="ml-4 flex-shrink-0 mt-0.5">
          <StatusBadge status={prediction.status} />
        </div>
      </div>

      {/* Expanded content — max-height CSS transition (fixes clip bug) */}
      <div className={`card-expanded-content pl-[17px]${isExpanded ? " expanded" : ""}`}>
        <div className="pb-4 pt-0.5">

          {/* Assessment */}
          {prediction.evidence && (
            <div className="mb-3">
              <p
                className="mb-1 font-mono text-[9px] uppercase tracking-widest"
                style={{ color: "var(--text-faint)" }}
              >
                Assessment
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {prediction.evidence}
              </p>
            </div>
          )}

          {/* "If true" block — confirmed only */}
          {prediction.status === "confirmed" && prediction.implications && (
            <div
              className="mb-3 border-l-2 pl-3 py-2 pr-2 rounded-r-sm text-sm leading-relaxed"
              style={{
                borderColor: "#16a34a",
                backgroundColor: "#f0fdf4",
                color: "#166534",
              }}
            >
              <strong className="font-semibold">If true — </strong>
              {prediction.implications}
            </div>
          )}

          {/* "Why incorrect" block — incorrect only */}
          {prediction.status === "incorrect" && prediction.whyIncorrect && (
            <div
              className="mb-3 border-l-2 pl-3 py-2 pr-2 rounded-r-sm text-sm leading-relaxed"
              style={{
                borderColor: "#dc2626",
                backgroundColor: "#fef2f2",
                color: "#7f1d1d",
              }}
            >
              <strong className="font-semibold">Why incorrect — </strong>
              {prediction.whyIncorrect}
            </div>
          )}

          {/* Footer metadata */}
          <div
            className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[10px]"
            style={{ color: "var(--text-faint)" }}
          >
            {prediction.sourceUrl ? (
              <a
                href={prediction.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hover:underline"
                style={{ color: accentColor }}
              >
                {prediction.source}
              </a>
            ) : prediction.source ? (
              <span style={{ color: accentColor }}>{prediction.source}</span>
            ) : null}
            {prediction.confidence && (
              <span>Confidence: {prediction.confidence}</span>
            )}
            {formattedDate && <span>Reviewed {formattedDate}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
