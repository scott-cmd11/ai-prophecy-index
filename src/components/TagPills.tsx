import type { PredictionTag } from "@/lib/constants";

interface TagPillsProps {
  tags?: PredictionTag[];
}

export function TagPills({ tags }: TagPillsProps) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="mt-1.5 flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <span
          key={tag}
          className="font-mono text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded-sm"
          style={{
            color: "var(--text-faint)",
            border: "1px solid var(--rule-light)",
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
