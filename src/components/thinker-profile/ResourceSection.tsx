// src/components/thinker-profile/ResourceSection.tsx
import type { ResourceSectionData } from "@/types/thinker-profile";
import { ResourceItem } from "./ResourceItem";

export function ResourceSection({ label, groups, noBorderBottom }: ResourceSectionData) {
  return (
    <section
      className="py-14"
      style={{
        borderBottom: noBorderBottom ? "none" : "1px solid var(--rule-light)",
      }}
    >
      <div className="mx-auto max-w-4xl px-6">
        <p
          className="mb-8 font-mono text-[9px] uppercase tracking-widest"
          style={{ color: "var(--text-faint)" }}
        >
          {label}
        </p>
        {groups.map((group, i) => (
          <div key={i} className="mb-10 last:mb-0">
            <h3
              className="mb-4 font-serif text-2xl italic"
              style={{ color: "var(--text-primary)" }}
            >
              {group.title}
            </h3>
            {group.items.map((item, j) => (
              <ResourceItem key={j} {...item} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
