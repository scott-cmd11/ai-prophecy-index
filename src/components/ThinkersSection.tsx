import Link from "next/link";
import { shulman } from "@/data/shulman";
import { aschenbrenner } from "@/data/aschenbrenner";
import { cotra } from "@/data/cotra";
import { shulmanProfile } from "@/data/profiles/shulman-profile";
import { aschenbrennerProfile } from "@/data/profiles/aschenbrenner-profile";
import { cotraProfile } from "@/data/profiles/cotra-profile";

const COTRA_BIO =
  "METR researcher and former Open Philanthropy technical AI safety lead, best known for biological anchors and shorter transformative-AI timeline updates.";

interface ThinkerColumnProps {
  name: string;
  bio: string;
  slug: string;
  accentVar: string;
  predictionCount: number;
  photoUrl?: string;
  comingSoon?: boolean;
}

function ThinkerColumn({ name, bio, slug, accentVar, predictionCount, photoUrl, comingSoon }: ThinkerColumnProps) {
  return (
    <div className="border-l-2 pl-3" style={{ borderColor: `var(${accentVar})` }}>
      <div className="mb-1.5 flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <p
          className="font-mono text-[10px] font-semibold uppercase tracking-widest"
          style={{ color: `var(${accentVar})` }}
        >
          {name}
        </p>
        <span
          className="font-mono text-[9px] uppercase tracking-widest"
          style={{ color: "var(--text-faint)" }}
        >
          {predictionCount} tracked
        </span>
      </div>
      <p className="text-[13px] leading-relaxed mb-2" style={{ color: "var(--text-secondary)" }}>
        {bio}
      </p>
      <div className="flex items-center gap-3 mt-1">
        <Link
          href={`/thinkers/${slug}`}
          className="inline-flex min-h-8 items-center font-mono text-[9px] uppercase tracking-widest hover:underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text-primary)]"
          style={{ color: `var(${accentVar})` }}
        >
          Profile →
        </Link>
        {photoUrl && (
          <a
            href={photoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-8 items-center font-mono text-[9px] uppercase tracking-widest hover:underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text-primary)]"
            style={{ color: "var(--text-faint)" }}
          >
            Source profile ↗
          </a>
        )}
        {comingSoon && (
          <span
            className="font-mono text-[9px] uppercase tracking-widest"
            style={{ color: "var(--text-faint)" }}
          >
            Predictions coming soon
          </span>
        )}
      </div>
    </div>
  );
}

export function ThinkersSection() {
  return (
    <div
      className="mx-auto max-w-4xl px-6 py-5 border-b"
      style={{ borderColor: "var(--rule-light)" }}
    >
      <p
        className="font-mono text-[9px] uppercase tracking-widest mb-4"
        style={{ color: "var(--text-faint)" }}
      >
        The forecasters
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <ThinkerColumn
          name={shulman.name}
          bio="Policy researcher and independent scholar tracking AI trajectories, intelligence explosions, and economic transformation."
          slug={shulman.slug}
          accentVar="--accent-shulman"
          predictionCount={shulman.predictions.length}
          photoUrl={shulmanProfile.photoUrl}
        />
        <ThinkerColumn
          name={aschenbrenner.name}
          bio="Former OpenAI researcher and author of Situational Awareness, focused on near-term AGI, compute, and national security."
          slug={aschenbrenner.slug}
          accentVar="--accent-aschenbrenner"
          predictionCount={aschenbrenner.predictions.length}
          photoUrl={aschenbrennerProfile.photoUrl}
        />
        <ThinkerColumn
          name="Ajeya Cotra"
          bio={COTRA_BIO}
          slug="cotra"
          accentVar="--accent-cotra"
          predictionCount={cotra.predictions.length}
          photoUrl={cotraProfile.photoUrl}
        />
      </div>
    </div>
  );
}
