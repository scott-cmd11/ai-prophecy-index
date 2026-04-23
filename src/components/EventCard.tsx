"use client";

import { AIEvent, AIEventCategory } from "@/types";

const CATEGORY_COLOR: Record<AIEventCategory, string> = {
  release: "var(--event-release)",
  policy: "var(--event-policy)",
  safety: "var(--event-safety)",
};

const CATEGORY_LABEL: Record<AIEventCategory, string> = {
  release: "Release",
  policy: "Policy",
  safety: "Safety",
};

interface EventCardProps {
  event: AIEvent;
  isExpanded: boolean;
  onToggle: () => void;
}

export function EventCard({ event, isExpanded, onToggle }: EventCardProps) {
  const color = CATEGORY_COLOR[event.category];
  const label = CATEGORY_LABEL[event.category];

  const [y, m, d] = event.date.split("-").map(Number);
  const formattedDate = new Date(y, m - 1, d).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return (
    <div
      className="relative border-b scroll-mt-16"
      style={{ borderColor: "var(--rule-light)" }}
    >
      <div
        className="flex cursor-pointer items-start gap-0 py-3 transition-colors duration-100 hover:bg-[#f5f3ec] -mx-3 px-3"
        onClick={onToggle}
        role="button"
        aria-expanded={isExpanded}
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
          overflow: "hidden",
          maxHeight: isExpanded ? "400px" : "0px",
          transition: "max-height 300ms ease-out",
        }}
      >
        <div className="pb-3 pt-0.5 pl-[14px] pr-2">
          {event.summary && (
            <p
              className="text-[12px] leading-relaxed mb-2"
              style={{ color: "var(--text-secondary)" }}
            >
              {event.summary}
            </p>
          )}
          {(event.source || event.sourceUrl) && (
            <div
              className="font-mono text-[9px]"
              style={{ color: "var(--text-faint)" }}
            >
              {event.sourceUrl ? (
                <a
                  href={event.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="hover:underline"
                  style={{ color }}
                >
                  {event.source ?? "Source"} →
                </a>
              ) : (
                <span style={{ color }}>{event.source}</span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
