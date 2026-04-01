import { shulman } from "@/data/shulman";
import { aschenbrenner } from "@/data/aschenbrenner";

export function ThinkersSection() {
  return (
    <div
      className="mx-auto max-w-2xl px-6 py-5 border-b"
      style={{ borderColor: "var(--rule-light)" }}
    >
      <p
        className="font-mono text-[9px] uppercase tracking-widest mb-4"
        style={{ color: "var(--text-faint)" }}
      >
        The forecasters
      </p>
      <div className="grid grid-cols-2 gap-6">
        <div className="border-l-2 pl-3" style={{ borderColor: "var(--accent-shulman)" }}>
          <p
            className="font-mono text-[10px] font-semibold uppercase tracking-widest mb-1.5"
            style={{ color: "var(--accent-shulman)" }}
          >
            {shulman.name}
          </p>
          <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {shulman.bio}
          </p>
        </div>
        <div className="border-l-2 pl-3" style={{ borderColor: "var(--accent-aschenbrenner)" }}>
          <p
            className="font-mono text-[10px] font-semibold uppercase tracking-widest mb-1.5"
            style={{ color: "var(--accent-aschenbrenner)" }}
          >
            {aschenbrenner.name}
          </p>
          <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {aschenbrenner.bio}
          </p>
        </div>
      </div>
    </div>
  );
}
