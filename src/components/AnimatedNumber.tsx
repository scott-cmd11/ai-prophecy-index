"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
  suffix?: string;
}

export function AnimatedNumber({
  value,
  duration = 300,
  className,
  style,
  suffix = "",
}: AnimatedNumberProps) {
  const [display, setDisplay] = useState(value);
  const prevRef = useRef(value);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const from = prevRef.current;
    const to = value;
    prevRef.current = value;

    if (from === to) return;

    const start = performance.now();
    const diff = to - from;

    function step(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      setDisplay(Math.round(from + diff * eased));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      }
    }

    frameRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameRef.current);
  }, [value, duration]);

  return (
    <span className={className} style={style}>
      {display}{suffix}
    </span>
  );
}
