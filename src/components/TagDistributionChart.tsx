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
  const topRows = data.slice(0, 3);

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
          margin={{ top: 0, right: 30, bottom: 0, left: 0 }}
          barSize={8}
          barGap={0}
        >
          <XAxis type="number" hide />
          <YAxis
            type="category"
            dataKey="tag"
            width={96}
            tick={{
              fontSize: 10,
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
      <table className="sr-only">
        <caption>Prediction counts by topic and thinker</caption>
        <thead>
          <tr>
            <th>Topic</th>
            <th>Shulman</th>
            <th>Aschenbrenner</th>
            <th>Cotra</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.tag}>
              <td>{row.tag}</td>
              <td>{row.shulman}</td>
              <td>{row.aschenbrenner}</td>
              <td>{row.cotra}</td>
              <td>{row.total}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p
        className="mt-3 text-xs leading-relaxed"
        style={{ color: "var(--text-secondary)" }}
      >
        Largest topic clusters:{" "}
        {topRows.map((row) => `${row.tag} (${row.total})`).join(", ")}.
      </p>

      {/* Legend */}
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
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
