import type { Metadata } from "next";
import { cotraProfile } from "@/data/profiles/cotra-profile";
import { ThinkerNav } from "@/components/thinker-profile/ThinkerNav";
import { ThinkerHero } from "@/components/thinker-profile/ThinkerHero";
import { ThinkerBio } from "@/components/thinker-profile/ThinkerBio";
import { ResourceSection } from "@/components/thinker-profile/ResourceSection";

export const metadata: Metadata = {
  title: "Ajeya Cotra — AI Prophecy Index",
  description:
    "Profile and resources for Ajeya Cotra — AI safety researcher, biological anchors forecaster, and METR technical staff.",
};

const ACCENT = "var(--accent-cotra)";

export default function CotraPage() {
  return (
    <main>
      <ThinkerNav />
      <ThinkerHero
        name={cotraProfile.name}
        subtitle={cotraProfile.subtitle}
        accentColor={ACCENT}
        stats={cotraProfile.stats}
        callout={cotraProfile.callout}
      />
      <ThinkerBio cards={cotraProfile.bioCards} fullBio={cotraProfile.bioFull} />
      {cotraProfile.sections.map((section, i) => (
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
