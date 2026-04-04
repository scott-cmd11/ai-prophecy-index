"use client";

import { useMemo } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { shulman } from "@/data/shulman";
import { aschenbrenner } from "@/data/aschenbrenner";
import { cotra } from "@/data/cotra";
import { TIMELINE_YEARS } from "@/data/milestones";
import type { Prediction, PredictionStatus } from "@/types";

const COLORS: Record<string, string> = {
  shulman: "#7c3aed",
  aschenbrenner: "#ea580c",
  cotra: "#059669",
};

interface DotData {
  x: number;
  y: number;
  status: PredictionStatus;
  thinker: string;
}

function StatusDot(props: { cx?: number; cy?: number; payload?: DotData }) {
  const { cx = 0, cy = 0, payload } = props;
  if (!payload) return null;

  const color = COLORS[payload.thinker] || "#94a3b8";
  const r = 5;

  switch (payload.status) {
    case "confirmed":
      return <circle cx={cx} cy={cy} r={r} fill={color} />;
    case "in_progress":
      return <circle cx={cx} cy={cy} r={r} fill={color} opacity={0.5} />;
    case "outstanding":
      return <circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth={1.5} />;
    case "incorrect":
      return (
        <g>
          <line x1={cx - 3.5} y1={cy - 3.5} x2={cx + 3.5} y2={cy + 3.5} stroke={color} strokeWidth={1.5} />
          <line x1={cx + 3.5} y1={cy - 3.5} x2={cx - 3.5} y2={cy + 3.5} stroke={color} strokeWidth={1.5} />
        </g>
      );
    default:
      return <circle cx={cx} cy={cy} r={r} fill={color} />;
  }
}

export function TimelineScatterChart() {
  const data = useMemo(() => {
    const dots: DotData[] = [];
    const yearIndex: Record<number, number> = {};

    function addPredictions(predictions: Prediction[], thinker: string) {
      predictions.forEach((p) => {
        const idx = yearIndex[p.year] ?? 0;
        yearIndex[p.year] = idx + 1;
        dots.push({
          x: p.year,
          y: idx,
          status: p.status,
          thinker,
        });
      });
    }

    addPredictions(shulman.predictions, "shulman");
    addPredictions(aschenbrenner.predictions, "aschenbrenner");
    addPredictions(cotra.predictions, "cotra");

    return dots;
  }, []);

  const maxY = Math.max(...data.map((d) => d.y), 0);
  const minYear = Math.min(...TIMELINE_YEARS);
  const maxYear = Math.max(...TIMELINE_YEARS);

  return (
    <div>
      <p
        className="mb-4 font-mono text-[9px] uppercase tracking-widest"
        style={{ color: "var(--text-faint)" }}
      >
        Prediction Density by Year
      </p>
      <ResponsiveContainer width="100%" height={Math.max(180, (maxY + 2) * 16)}>
        <ScatterChart margin={{ top: 10, right: 20, bottom: 10, left: 20 }}>
          <XAxis
            type="number"
            dataKey="x"
            domain={[minYear - 0.5, maxYear + 0.5]}
            ticks={[...TIMELINE_YEARS]}
            tick={{
              fontSize: 10,
              fill: "#bbbbbb",
              fontFamily: "var(--font-mono)",
            }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            type="number"
            dataKey="y"
            domain={[0, maxY + 1]}
            hide
          />
          <Scatter data={data} shape={<StatusDot />} isAnimationActive={false} />
        </ScatterChart>
      </ResponsiveContainer>

      {/* Legend row 1: thinker colors */}
      <div className="mt-3 flex items-center gap-4">
        {(["shulman", "aschenbrenner", "cotra"] as const).map((key) => (
          <div key={key} className="flex items-center gap-1.5">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: COLORS[key] }}
            />
            <span className="font-mono text-[9px]" style={{ color: "var(--text-faint)" }}>
              {key === "aschenbrenner" ? "Aschenbrenner" : key.charAt(0).toUpperCase() + key.slice(1)}
            </span>
          </div>
        ))}
      </div>
      {/* Legend row 2: status encoding */}
      <div className="mt-1.5 flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <svg width="10" height="10"><circle cx="5" cy="5" r="4" fill="#334155" /></svg>
          <span className="font-mono text-[9px]" style={{ color: "var(--text-faint)" }}>Confirmed</span>
        </div>
        <div className="flex items-center gap-1.5">
          <svg width="10" height="10"><circle cx="5" cy="5" r="4" fill="#334155" opacity="0.5" /></svg>
          <span className="font-mono text-[9px]" style={{ color: "var(--text-faint)" }}>Unfolding</span>
        </div>
        <div className="flex items-center gap-1.5">
          <svg width="10" height="10"><circle cx="5" cy="5" r="4" fill="none" stroke="#334155" strokeWidth="1.5" /></svg>
          <span className="font-mono text-[9px]" style={{ color: "var(--text-faint)" }}>Early</span>
        </div>
        <div className="flex items-center gap-1.5">
          <svg width="10" height="10">
            <line x1="2" y1="2" x2="8" y2="8" stroke="#334155" strokeWidth="1.5" />
            <line x1="8" y1="2" x2="2" y2="8" stroke="#334155" strokeWidth="1.5" />
          </svg>
          <span className="font-mono text-[9px]" style={{ color: "var(--text-faint)" }}>Incorrect</span>
        </div>
      </div>
    </div>
  );
}
