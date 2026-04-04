import type { Metadata } from "next";
import { aschenbrennerProfile } from "@/data/profiles/aschenbrenner-profile";
import { aschenbrenner } from "@/data/aschenbrenner";
import { getStatusCounts } from "@/lib/utils";
import { ThinkerNav } from "@/components/thinker-profile/ThinkerNav";
import { ThinkerHero } from "@/components/thinker-profile/ThinkerHero";
import { ThinkerBio } from "@/components/thinker-profile/ThinkerBio";
import { ResourceSection } from "@/components/thinker-profile/ResourceSection";

export const metadata: Metadata = {
  title: "Leopold Aschenbrenner — AI Prophecy Index",
  description:
    "Profile and resources for Leopold Aschenbrenner — former OpenAI researcher, author of Situational Awareness, and founder of Situational Awareness LP.",
};

const ACCENT = "var(--accent-aschenbrenner)";

export default function AschenbrennerPage() {
  const counts = getStatusCounts(aschenbrenner.predictions);
  const stats = [
    { label: "Confirmed", value: counts.confirmed, color: "confirmed" as const },
    { label: "Unfolding", value: counts.in_progress, color: "unfolding" as const },
    { label: "Early", value: counts.outstanding, color: "early" as const },
  ];

  return (
    <main>
      <ThinkerNav />
      <ThinkerHero
        name={aschenbrennerProfile.name}
        subtitle={aschenbrennerProfile.subtitle}
        accentColor={ACCENT}
        stats={stats}
      />
      <ThinkerBio cards={aschenbrennerProfile.bioCards} fullBio={aschenbrennerProfile.bioFull} />
      {aschenbrennerProfile.sections.map((section, i) => (
        <ResourceSection key={i} {...section} />
      ))}
      <footer
        className="border-t py-8 text-center font-mono text-[10px]"
        style={{ borderColor: "var(--rule-light)", color: "var(--text-muted)" }}
      >
        <a href="/" style={{ color: "var(--text-muted)" }} className="hover:underline">
          AI Prophecy Index
        </a>
        {" · "}
        <a href="https://scotthazlitt.ai" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-muted)" }} className="hover:underline">
          A project by Scott Hazlitt
        </a>
        {" · "}
        © 2026
      </footer>
    </main>
  );
}
