// src/components/thinker-profile/ThinkerNav.tsx
import Link from "next/link";

export function ThinkerNav() {
  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{
        background: "rgba(249,247,242,0.92)",
        backdropFilter: "blur(16px)",
        borderColor: "var(--rule-light)",
      }}
    >
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3.5">
        <Link
          href="/#tracker"
          className="inline-flex min-h-8 items-center font-mono text-[10px] uppercase tracking-[0.2em] transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text-primary)]"
          style={{ color: "var(--text-muted)" }}
        >
          <span style={{ color: "var(--text-primary)" }}>AI</span> Prophecy Index
        </Link>
        <Link
          href="/#tracker"
          className="inline-flex min-h-8 items-center font-mono text-[10px] uppercase tracking-widest transition-colors hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text-primary)]"
          style={{ color: "var(--text-muted)" }}
        >
          ← Back to tracker
        </Link>
      </div>
    </nav>
  );
}
