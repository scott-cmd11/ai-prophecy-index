"use client";

import { AIEvent, AIEventCategory } from "@/types";
import { LAST_UPDATED } from "@/lib/constants";

const CATEGORY_COLOR: Record<AIEventCategory, string> = {
  release: "var(--event-release)",
  policy: "var(--event-policy)",
  safety: "var(--event-safety)",
  research: "var(--event-research)",
  market: "var(--event-market)",
};

const CATEGORY_LABEL: Record<AIEventCategory, string> = {
  release: "Release",
  policy: "Policy",
  safety: "Safety",
  research: "Research",
  market: "Market",
};

interface EventCardProps {
  event: AIEvent;
  isExpanded: boolean;
  onToggle: () => void;
}

export function EventCard({ event, isExpanded, onToggle }: EventCardProps) {
  const color = CATEGORY_COLOR[event.category];
  const label = CATEGORY_LABEL[event.category];
  const sourceLinks =
    event.sources && event.sources.length > 0
      ? event.sources
      : event.sourceUrl
        ? [{ label: event.source ?? "Source", url: event.sourceUrl }]
        : [];

  const [y, m, d] = event.date.split("-").map(Number);
  const formattedDate = new Date(y, m - 1, d).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  function handleKeyDown(keyboardEvent: React.KeyboardEvent<HTMLDivElement>) {
    if (keyboardEvent.key === "Enter" || keyboardEvent.key === " ") {
      keyboardEvent.preventDefault();
      onToggle();
    }
  }

  return (
    <div
      className="relative border-b scroll-mt-16"
      style={{ borderColor: "var(--rule-light)" }}
    >
      <div
        className="flex cursor-pointer items-start gap-0 py-3 transition-colors duration-100 hover:bg-[#f5f3ec] -mx-3 px-3"
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
        aria-label={`${isExpanded ? "Close" : "Open"} event details for ${event.title}`}
      >
        <div
          className="mt-1 mr-2.5 w-[2px] self-stretch flex-shrink-0 rounded-sm"
          style={{ backgroundColor: color, minHeight: "16px" }}
        />
        <div className="flex-1 min-w-0">
          <div className="mb-0.5 flex items-center gap-1.5 flex-wrap">
            <span
              className="font-mono text-[9px] font-semibold uppercase tracking-widest"
              style={{ color }}
            >
              {label}
            </span>
            <span
              className="font-mono text-[9px]"
              style={{ color: "var(--text-faint)" }}
            >
              · {formattedDate}
            </span>
          </div>
          <p
            className="text-[13px] leading-snug"
            style={{ color: "var(--text-primary)", fontWeight: 500 }}
          >
            {event.title}
          </p>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateRows: isExpanded ? "1fr" : "0fr",
          transition: "grid-template-rows 240ms ease-out",
        }}
      >
        <div className="min-h-0 overflow-hidden">
        <div className="pb-3 pt-0.5 pl-[14px] pr-2">
          {event.summary && (
            <p
              className="text-[12px] leading-relaxed mb-2"
              style={{ color: "var(--text-secondary)" }}
            >
              {event.summary}
            </p>
          )}
          <p
            className="mb-1.5 font-mono text-[9px] uppercase tracking-widest"
            style={{ color: "var(--text-faint)" }}
          >
            Sourced event. Compare with predictions in this year. Ledger reviewed {LAST_UPDATED}.
          </p>
          {sourceLinks.length > 0 ? (
            <ul
              className="space-y-0.5 font-mono text-[9px]"
              style={{ color: "var(--text-faint)" }}
            >
              {sourceLinks.map((source) => (
                <li key={`${event.id}-${source.url}`}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex min-h-8 max-w-full items-center whitespace-normal break-words hover:underline"
                    style={{ color }}
                  >
                    {source.label} →
                  </a>
                </li>
              ))}
            </ul>
          ) : event.source ? (
            <div
              className="font-mono text-[9px]"
              style={{ color: "var(--text-faint)" }}
            >
              <span style={{ color }}>{event.source}</span>
            </div>
          ) : null}
        </div>
        </div>
      </div>
    </div>
  );
}
