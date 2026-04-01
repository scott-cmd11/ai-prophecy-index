"use client";

import { useEffect, useRef, useState } from "react";
import { Prediction } from "@/types";
import { StatusBadge } from "@/components/StatusBadge";

interface TimelineCardProps {
  prediction: Prediction;
  thinker: "shulman" | "aschenbrenner";
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}

export function TimelineCard({
  prediction,
  thinker,
  isExpanded,
  onToggle,
  index,
}: TimelineCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const direction = thinker === "shulman" ? "from-left" : "from-right";
  const accentVar = `var(--accent-${thinker})`;

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const formattedDate = prediction.lastReviewed
    ? new Date(prediction.lastReviewed).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  return (
    <div
      ref={cardRef}
      className={`scroll-reveal ${direction} ${isVisible ? "visible" : ""} timeline-card`}
      data-thinker={thinker}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div
        onClick={onToggle}
        className="group relative cursor-pointer rounded-xl transition-all duration-200 hover:-translate-y-0.5"
        style={{
          backgroundColor: "var(--bg-card)",
          border: "1px solid var(--border-card)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor =
            "var(--spine-glow)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor =
            "var(--border-card)";
        }}
      >
        {/* Top accent line */}
        <div
          className="h-[3px] w-full rounded-t-xl"
          style={{ backgroundColor: accentVar }}
        />

        <div className="px-4 pb-4 pt-3">
          {/* Category + time horizon row */}
          <div className="mb-2 flex items-center gap-0">
            <span
              className="font-mono text-[10px] font-medium uppercase tracking-widest"
              style={{ color: "var(--text-muted)" }}
            >
              {prediction.category}
            </span>
            {prediction.timeHorizon && (
              <>
                <span
                  className="mx-1.5 font-mono text-[10px]"
                  style={{ color: "var(--text-faint)" }}
                >
                  &middot;
                </span>
                <span
                  className="font-mono text-[10px] tracking-wide"
                  style={{ color: "var(--text-faint)" }}
                >
                  {prediction.timeHorizon}
                </span>
              </>
            )}
          </div>

          {/* Claim text */}
          <p
            className={`mb-3 text-sm leading-relaxed ${isExpanded ? "" : "line-clamp-2"}`}
            style={{ color: "var(--text-primary)" }}
          >
            {prediction.claim}
          </p>

          {/* Status + expand toggle row */}
          <div className="flex items-center justify-between">
            <StatusBadge status={prediction.status} />
            <span
              className="inline-flex h-5 w-5 items-center justify-center rounded-full text-xs transition-transform duration-200"
              style={{
                color: "var(--text-muted)",
                transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
              }}
              aria-hidden="true"
            >
              &#9662;
            </span>
          </div>

          {/* Expanded details */}
          {isExpanded && (
            <div
              className="mt-4 space-y-3 border-t pt-4"
              style={{ borderColor: "var(--border-card)" }}
            >
              {prediction.evidence && (
                <div>
                  <h4
                    className="mb-1 font-mono text-[9px] font-medium uppercase tracking-widest"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Assessment
                  </h4>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {prediction.evidence}
                  </p>
                </div>
              )}

              {prediction.implications && (
                <div>
                  <h4
                    className="mb-1 font-mono text-[9px] font-medium uppercase tracking-widest"
                    style={{ color: "var(--text-muted)" }}
                  >
                    If true
                  </h4>
                  <p
                    className="italic text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {prediction.implications}
                  </p>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                {prediction.sourceUrl && (
                  <a
                    href={prediction.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="font-mono text-[10px] tracking-wide underline decoration-current/30 underline-offset-2 transition-colors hover:decoration-current"
                    style={{ color: accentVar }}
                  >
                    {prediction.source}
                  </a>
                )}
                {!prediction.sourceUrl && prediction.source && (
                  <span
                    className="font-mono text-[10px] tracking-wide"
                    style={{ color: accentVar }}
                  >
                    {prediction.source}
                  </span>
                )}

                {prediction.confidence && (
                  <span
                    className="font-mono text-[9px] font-medium uppercase tracking-widest"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {prediction.confidence} confidence
                  </span>
                )}

                {formattedDate && (
                  <span
                    className="font-mono text-[9px] tracking-wide"
                    style={{ color: "var(--text-faint)" }}
                  >
                    Last reviewed {formattedDate}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
