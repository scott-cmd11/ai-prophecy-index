"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let rafId: number;

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    }

    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, [target, duration]);

  return count;
}

export function HeroSection() {
  const shulmanCount = useCountUp(14, 1500);
  const aschenbrennerCount = useCountUp(14, 1500);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6">
      {/* Label */}
      <div
        className="mb-6 font-mono text-[10px] font-medium uppercase tracking-[0.3em]"
        style={{ color: "var(--text-muted)" }}
      >
        Two minds. Twenty-eight predictions. One future.
      </div>

      {/* Main headline */}
      <h1
        className="text-center font-serif text-6xl italic leading-tight md:text-8xl"
        style={{ color: "var(--text-primary)" }}
      >
        The AI Prophecy
        <br />
        Index
      </h1>

      {/* Thinker counts */}
      <div className="mt-12 flex gap-16 md:gap-24">
        {/* Shulman */}
        <div className="text-center">
          <div
            className="font-mono text-5xl font-bold tabular-nums md:text-6xl"
            style={{ color: "var(--accent-shulman)" }}
          >
            {shulmanCount}
          </div>
          <div
            className="mt-2 font-serif text-sm italic md:text-base"
            style={{ color: "var(--text-secondary)" }}
          >
            Carl Shulman
          </div>
        </div>

        {/* Divider */}
        <div
          className="w-px self-stretch"
          style={{ background: "var(--spine)" }}
        />

        {/* Aschenbrenner */}
        <div className="text-center">
          <div
            className="font-mono text-5xl font-bold tabular-nums md:text-6xl"
            style={{ color: "var(--accent-aschenbrenner)" }}
          >
            {aschenbrennerCount}
          </div>
          <div
            className="mt-2 font-serif text-sm italic md:text-base"
            style={{ color: "var(--text-secondary)" }}
          >
            Leopold Aschenbrenner
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div
          className="scroll-indicator font-mono text-xs"
          style={{ color: "var(--text-faint)" }}
        >
          ▼
        </div>
      </div>

      {/* Sentinel for intersection observer */}
      <div id="hero-sentinel" className="absolute bottom-0 h-px w-full" />
    </section>
  );
}
