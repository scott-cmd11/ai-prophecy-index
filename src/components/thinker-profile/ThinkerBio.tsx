// src/components/thinker-profile/ThinkerBio.tsx
import type { BioCardData } from "@/types/thinker-profile";

interface ThinkerBioProps {
  cards: BioCardData[];
  fullBio: string;
}

export function ThinkerBio({ cards, fullBio }: ThinkerBioProps) {
  return (
    <section
      className="border-b py-14"
      style={{ borderColor: "var(--rule-light)" }}
    >
      <div className="mx-auto max-w-4xl px-6">
        <p
          className="mb-6 font-mono text-[9px] uppercase tracking-widest"
          style={{ color: "var(--text-faint)" }}
        >
          Background
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border p-6"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border-card)",
              }}
            >
              <h3
                className="mb-3 font-serif text-lg italic"
                style={{ color: "var(--text-primary)" }}
              >
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {card.content}
              </p>
            </div>
          ))}
        </div>
        <p
          className="mt-8 max-w-3xl text-sm leading-loose"
          style={{ color: "var(--text-secondary)" }}
          dangerouslySetInnerHTML={{ __html: fullBio }}
        />
      </div>
    </section>
  );
}
