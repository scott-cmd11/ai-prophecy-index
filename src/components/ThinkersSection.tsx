import Link from "next/link";
import { shulman } from "@/data/shulman";
import { aschenbrenner } from "@/data/aschenbrenner";

const COTRA_BIO =
  "Researcher at METR and former technical AI safety lead at Open Philanthropy. Best known for the 'biological anchors' methodology for forecasting transformative AI timelines. Runs the Planned Obsolescence Substack and has twice publicly updated her forecasts toward shorter timelines as capabilities advanced faster than expected.";

interface ThinkerColumnProps {
  name: string;
  bio: string;
  slug: string;
  accentVar: string;
  comingSoon?: boolean;
}

function ThinkerColumn({ name, bio, slug, accentVar, comingSoon }: ThinkerColumnProps) {
  return (
    <div className="border-l-2 pl-3" style={{ borderColor: `var(${accentVar})` }}>
      <p
        className="font-mono text-[10px] font-semibold uppercase tracking-widest mb-1.5"
        style={{ color: `var(${accentVar})` }}
      >
        {name}
      </p>
      <p className="text-xs leading-relaxed mb-2" style={{ color: "var(--text-secondary)" }}>
        {bio}
      </p>
      <div className="flex items-center gap-3 mt-1">
        <Link
          href={`/thinkers/${slug}`}
          className="font-mono text-[9px] uppercase tracking-widest hover:underline transition-colors"
          style={{ color: `var(${accentVar})` }}
        >
          Profile →
        </Link>
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
          bio={shulman.bio}
          slug={shulman.slug}
          accentVar="--accent-shulman"
        />
        <ThinkerColumn
          name={aschenbrenner.name}
          bio={aschenbrenner.bio}
          slug={aschenbrenner.slug}
          accentVar="--accent-aschenbrenner"
        />
        <ThinkerColumn
          name="Ajeya Cotra"
          bio={COTRA_BIO}
          slug="cotra"
          accentVar="--accent-cotra"
        />
      </div>
    </div>
  );
}
