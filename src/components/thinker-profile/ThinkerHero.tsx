import type { StatChipData } from "@/types/thinker-profile";
import Link from "next/link";

const CHIP_COLORS: Record<string, string> = {
  confirmed: "#059669",
  unfolding: "#d97706",
  early: "#64748b",
};

interface ThinkerHeroProps {
  name: string;
  subtitle: string;
  accentColor: string;
  stats?: StatChipData[];
  callout?: string;
  photoUrl?: string;
  trackerHref?: string;
}

export function ThinkerHero({
  name,
  subtitle,
  accentColor,
  stats,
  callout,
  photoUrl,
  trackerHref,
}: ThinkerHeroProps) {
  return (
    <section
      className="border-b py-16"
      style={{ borderColor: "var(--rule-light)" }}
    >
      <div className="mx-auto max-w-4xl px-6">
        <p
          className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em]"
          style={{ color: accentColor }}
        >
          Thinker Profile
        </p>
        <h1
          className="mb-6 font-serif text-5xl italic leading-[1.05] md:text-6xl"
          style={{ color: "var(--text-primary)" }}
        >
          {name}
        </h1>
        <p
          className="max-w-2xl text-base leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {subtitle}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
          {trackerHref && (
            <Link
              href={trackerHref}
              className="inline-flex min-h-9 items-center gap-1.5 border px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text-primary)]"
              style={{ borderColor: accentColor, color: accentColor }}
            >
              View tracked predictions
            </Link>
          )}
          {photoUrl && (
            <a
              href={photoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-9 items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text-primary)]"
              style={{ color: accentColor }}
            >
              Source profile
            </a>
          )}
        </div>

        {stats && stats.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {stats.map((chip) => (
              <span
                key={chip.label}
                className="inline-flex items-center gap-1.5 rounded-sm border px-3 py-1 font-mono text-[10px] uppercase tracking-widest"
                style={{
                  borderColor: `${CHIP_COLORS[chip.color]}33`,
                  color: CHIP_COLORS[chip.color],
                  background: `${CHIP_COLORS[chip.color]}0d`,
                }}
              >
                <span className="font-semibold">{chip.value}</span>
                {chip.label}
              </span>
            ))}
          </div>
        )}

        {callout && (
          <div
            className="mt-5 rounded-lg border px-5 py-4 text-sm leading-relaxed"
            style={{
              background: "rgba(217,119,6,0.04)",
              borderColor: "rgba(217,119,6,0.15)",
              color: "var(--text-secondary)",
            }}
            dangerouslySetInnerHTML={{ __html: callout }}
          />
        )}
      </div>
    </section>
  );
}
