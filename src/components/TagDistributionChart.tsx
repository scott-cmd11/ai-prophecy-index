"use client";

import { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { shulman } from "@/data/shulman";
import { aschenbrenner } from "@/data/aschenbrenner";
import { cotra } from "@/data/cotra";
import { PREDICTION_TAGS } from "@/lib/constants";

interface TagRow {
  tag: string;
  shulman: number;
  aschenbrenner: number;
  cotra: number;
  total: number;
}

const COLORS = {
  shulman: "#7c3aed",
  aschenbrenner: "#ea580c",
  cotra: "#059669",
};

export function TagDistributionChart() {
  const data = useMemo(() => {
    const rows: TagRow[] = PREDICTION_TAGS.map((tag) => ({
      tag,
      shulman: shulman.predictions.filter((p) => p.tags?.includes(tag)).length,
      aschenbrenner: aschenbrenner.predictions.filter((p) => p.tags?.includes(tag)).length,
      cotra: cotra.predictions.filter((p) => p.tags?.includes(tag)).length,
      total: 0,
    }));
    rows.forEach((r) => (r.total = r.shulman + r.aschenbrenner + r.cotra));
    rows.sort((a, b) => b.total - a.total);
    return rows;
  }, []);

  return (
    <div>
      <p
        className="mb-4 font-mono text-[9px] uppercase tracking-widest"
        style={{ color: "var(--text-faint)" }}
      >
        Predictions by Topic
      </p>
      <ResponsiveContainer width="100%" height={data.length * 32 + 40}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 0, right: 40, bottom: 0, left: 0 }}
          barSize={8}
          barGap={0}
        >
          <XAxis type="number" hide />
          <YAxis
            type="category"
            dataKey="tag"
            width={90}
            tick={{
              fontSize: 11,
              fill: "#334155",
              fontFamily: "var(--font-mono)",
            }}
            axisLine={false}
            tickLine={false}
          />
          <Bar dataKey="shulman" stackId="a" fill={COLORS.shulman} radius={[0, 0, 0, 0]} />
          <Bar dataKey="aschenbrenner" stackId="a" fill={COLORS.aschenbrenner} radius={[0, 0, 0, 0]} />
          <Bar dataKey="cotra" stackId="a" fill={COLORS.cotra} radius={[1, 1, 1, 1]}>
            <LabelList
              dataKey="total"
              position="right"
              style={{
                fontSize: 10,
                fill: "#bbbbbb",
                fontFamily: "var(--font-mono)",
              }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="mt-3 flex items-center gap-4">
        {(["shulman", "aschenbrenner", "cotra"] as const).map((key) => (
          <div key={key} className="flex items-center gap-1.5">
            <div
              className="w-2 h-2 rounded-sm"
              style={{ backgroundColor: COLORS[key] }}
            />
            <span
              className="font-mono text-[9px] capitalize"
              style={{ color: "var(--text-faint)" }}
            >
              {key === "aschenbrenner" ? "Aschenbrenner" : key.charAt(0).toUpperCase() + key.slice(1)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
