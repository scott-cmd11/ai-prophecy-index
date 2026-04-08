"use client";

import { useRef, useCallback } from "react";
import { Prediction } from "@/types";
import { StatusBadge } from "@/components/StatusBadge";
import { annotateJargon } from "@/lib/jargon";
import { TagPills } from "@/components/TagPills";

interface TimelineCardProps {
  prediction: Prediction;
  thinker: "shulman" | "aschenbrenner" | "cotra";
  isExpanded: boolean;
  onToggle: () => void;
  showThinkerBio?: string;
}

const ACCENT: Record<"shulman" | "aschenbrenner" | "cotra", string> = {
  shulman: "var(--accent-shulman)",
  aschenbrenner: "var(--accent-aschenbrenner)",
  cotra: "var(--accent-cotra)",
};

const LABEL: Record<"shulman" | "aschenbrenner" | "cotra", string> = {
  shulman: "Shulman",
  aschenbrenner: "Aschenbrenner",
  cotra: "Cotra",
};

export function TimelineCard({
  prediction,
  thinker,
  isExpanded,
  onToggle,
  showThinkerBio,
}: TimelineCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const accentColor = ACCENT[thinker];
  const thinkerLabel = LABEL[thinker];

  const handleClick = useCallback(() => {
    onToggle();
    // When expanding, scroll card into view after the state update
    if (!isExpanded && cardRef.current) {
      requestAnimationFrame(() => {
        const el = cardRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // If the top of the card is above the viewport (behind sticky bar), scroll it into view
        if (rect.top < 60) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          // Offset for sticky bar
          window.scrollBy({ top: -60, behavior: "smooth" });
        }
      });
    }
  }, [isExpanded, onToggle]);

  const formattedDate = prediction.lastReviewed
    ? new Date(prediction.lastReviewed).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
      })
    : null;

  return (
    <div
      ref={cardRef}
      className="relative border-b scroll-mt-16"
      style={{ borderColor: "var(--rule-light)" }}
    >
      {/* Collapsed header — always visible, click to toggle */}
      <div
        className="flex cursor-pointer items-start gap-0 py-3.5 transition-colors duration-100 hover:bg-[#f5f3ec] -mx-6 px-6"
        onClick={handleClick}
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

          {/* Claim */}
          <p
            className="text-[15px] leading-relaxed"
            style={{
              fontFamily: "var(--font-lora)",
              color: "var(--text-primary)",
            }}
          >
            {prediction.claim}
          </p>
          <TagPills tags={prediction.tags} />
        </div>

        {/* Status badge + expand label — right-aligned */}
        <div className="ml-4 flex-shrink-0 mt-0.5 flex flex-col items-end gap-1.5">
          <StatusBadge status={prediction.status} />
          <span
            className="font-mono text-[9px] uppercase tracking-widest flex items-center gap-1"
            style={{ color: "var(--text-faint)" }}
          >
            {isExpanded ? "close" : "details"}
            <svg
              width="10"
              height="10"
              viewBox="0 0 12 12"
              fill="none"
              style={{
                transition: "transform 200ms ease",
                transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>

      {/* Expanded content — grid row transition for smooth expand/collapse */}
      <div
        className="pl-[17px]"
        style={{
          overflow: "hidden",
          maxHeight: isExpanded ? "600px" : "0px",
          transition: "max-height 300ms ease-out",
        }}
      >
          <div className="pb-4 pt-0.5">

          {/* Assessment */}
          {prediction.evidence && (
            <div className="mb-3">
              <p
                className="mb-1 font-mono text-[9px] uppercase tracking-widest"
                style={{ color: "var(--text-faint)" }}
              >
                {prediction.status === "confirmed"
                  ? "How we scored it"
                  : prediction.status === "incorrect"
                    ? "Why it missed"
                    : "Assessment"}
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {prediction.evidence ? annotateJargon(prediction.evidence) : null}
              </p>
            </div>
          )}

          {/* References */}
          {prediction.references && prediction.references.length > 0 && (
            <div className="mb-3">
              <p
                className="mb-1 font-mono text-[9px] uppercase tracking-widest"
                style={{ color: "var(--text-faint)" }}
              >
                References
              </p>
              <ul className="list-none pl-0 space-y-0.5">
                {prediction.references.map((ref, i) => (
                  <li key={i} className="text-sm leading-relaxed">
                    <span
                      className="font-mono text-[11px]"
                      style={{ color: "var(--text-faint)" }}
                    >
                      [{i + 1}]
                    </span>{" "}
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="hover:underline"
                      style={{ color: accentColor }}
                    >
                      {ref.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* "Why it matters" block — confirmed only */}
          {prediction.status === "confirmed" && prediction.implications && (
            <div
              className="mb-3 border-l-2 pl-3 py-2 pr-2 rounded-r-sm text-sm leading-relaxed"
              style={{
                borderColor: "#16a34a",
                backgroundColor: "#f0fdf4",
                color: "#166534",
              }}
            >
              <strong className="font-semibold">Why it matters — </strong>
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
              {prediction.whyIncorrect ? annotateJargon(prediction.whyIncorrect) : null}
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
