// src/components/thinker-profile/ResourceItem.tsx
import type { ResourceItemData } from "@/types/thinker-profile";

export function ResourceItem({ year, title, tags = [], description, meta, link }: ResourceItemData) {
  return (
    <div
      className="flex gap-5 border-b py-5 last:border-b-0"
      style={{ borderColor: "rgba(0,0,0,0.05)" }}
    >
      {year !== undefined && (
        <div
          className="w-12 flex-shrink-0 pt-0.5 font-mono text-xs"
          style={{ color: "var(--text-muted)" }}
        >
          {year}
        </div>
      )}
      <div className="flex-1">
        <div className="mb-1.5 flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
            {title}
          </span>
          {tags.map((tag) => (
            <span
              key={tag.label}
              className="font-mono text-[9px] uppercase tracking-wider rounded px-1.5 py-0.5"
              style={
                tag.variant === "landmark"
                  ? { background: "rgba(5,150,105,0.08)", color: "#059669" }
                  : { background: "rgba(0,0,0,0.05)", color: "var(--text-muted)" }
              }
            >
              {tag.label}
            </span>
          ))}
        </div>
        {description && (
          <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {description}
          </p>
        )}
        {meta && (
          <p
            className="mt-1.5 font-mono text-[10px]"
            style={{ color: "var(--text-faint)" }}
          >
            {meta}
          </p>
        )}
        {link && (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-xs underline decoration-current/30 underline-offset-2 transition-colors hover:decoration-current"
            style={{ color: "var(--text-secondary)" }}
          >
            {link.label}
          </a>
        )}
      </div>
    </div>
  );
}
