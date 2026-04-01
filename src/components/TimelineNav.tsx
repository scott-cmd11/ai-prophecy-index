"use client";

import { ThemeToggle } from "@/components/ThemeToggle";

export function TimelineNav({
  visibleThinkers,
  onToggleThinker,
  years,
  isVisible,
}: {
  visibleThinkers: { shulman: boolean; aschenbrenner: boolean };
  onToggleThinker: (thinker: "shulman" | "aschenbrenner") => void;
  years: number[];
  isVisible: boolean;
}) {
  const canToggleShulman = visibleThinkers.aschenbrenner || !visibleThinkers.shulman;
  const canToggleAschenbrenner = visibleThinkers.shulman || !visibleThinkers.aschenbrenner;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3 rounded-xl p-3 backdrop-blur-md transition-opacity duration-300 max-md:bottom-4 max-md:left-1/2 max-md:right-auto max-md:-translate-x-1/2 max-md:flex-row ${
        isVisible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      style={{
        backgroundColor: "var(--bg-nav)",
        border: "1px solid var(--border-card)",
      }}
    >
      {/* Thinker toggles */}
      <div className="flex gap-2 max-md:flex-row md:flex-col">
        <button
          onClick={() => canToggleShulman && onToggleThinker("shulman")}
          className="flex h-8 w-8 items-center justify-center rounded-full font-mono text-[10px] font-bold transition-all duration-200"
          style={
            visibleThinkers.shulman
              ? { backgroundColor: "var(--accent-shulman)", color: "#fff" }
              : { border: "1.5px solid var(--accent-shulman)", color: "var(--accent-shulman)", backgroundColor: "transparent" }
          }
          title="Toggle Carl Shulman"
        >
          CS
        </button>
        <button
          onClick={() => canToggleAschenbrenner && onToggleThinker("aschenbrenner")}
          className="flex h-8 w-8 items-center justify-center rounded-full font-mono text-[10px] font-bold transition-all duration-200"
          style={
            visibleThinkers.aschenbrenner
              ? { backgroundColor: "var(--accent-aschenbrenner)", color: "#fff" }
              : { border: "1.5px solid var(--accent-aschenbrenner)", color: "var(--accent-aschenbrenner)", backgroundColor: "transparent" }
          }
          title="Toggle Leopold Aschenbrenner"
        >
          LA
        </button>
      </div>

      {/* Divider */}
      <div
        className="h-px w-6 max-md:h-6 max-md:w-px"
        style={{ backgroundColor: "var(--border-card)" }}
      />

      {/* Year scrubber */}
      <div className="flex gap-2 max-md:flex-row md:flex-col">
        {years.map((year) => (
          <button
            key={year}
            onClick={() =>
              document.getElementById(`year-${year}`)?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative flex h-3 w-3 items-center justify-center"
            aria-label={String(year)}
          >
            <span
              className="h-1.5 w-1.5 rounded-full transition-all duration-200 group-hover:h-2 group-hover:w-2"
              style={{ backgroundColor: "var(--spine)" }}
            />
          </button>
        ))}
      </div>

      {/* Divider */}
      <div
        className="h-px w-6 max-md:h-6 max-md:w-px"
        style={{ backgroundColor: "var(--border-card)" }}
      />

      {/* Theme toggle */}
      <ThemeToggle />
    </div>
  );
}
