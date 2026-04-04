import type { Metadata } from "next";
import { shulmanProfile } from "@/data/profiles/shulman-profile";
import { shulman } from "@/data/shulman";
import { getStatusCounts } from "@/lib/utils";
import { ThinkerNav } from "@/components/thinker-profile/ThinkerNav";
import { ThinkerHero } from "@/components/thinker-profile/ThinkerHero";
import { ThinkerBio } from "@/components/thinker-profile/ThinkerBio";
import { ResourceSection } from "@/components/thinker-profile/ResourceSection";

export const metadata: Metadata = {
  title: "Carl Shulman — AI Prophecy Index",
  description:
    "Profile and resources for Carl Shulman — AI policy researcher, independent scholar, and one of the most influential behind-the-scenes thinkers in AI safety.",
};

const ACCENT = "var(--accent-shulman)";

export default function ShulmanPage() {
  const counts = getStatusCounts(shulman.predictions);
  const stats = [
    { label: "Confirmed", value: counts.confirmed, color: "confirmed" as const },
    { label: "Unfolding", value: counts.in_progress, color: "unfolding" as const },
    { label: "Early", value: counts.outstanding, color: "early" as const },
  ];

  return (
    <main>
      <ThinkerNav />
      <ThinkerHero
        name={shulmanProfile.name}
        subtitle={shulmanProfile.subtitle}
        accentColor={ACCENT}
        stats={stats}
      />
      <ThinkerBio cards={shulmanProfile.bioCards} fullBio={shulmanProfile.bioFull} />
      {shulmanProfile.sections.map((section, i) => (
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
