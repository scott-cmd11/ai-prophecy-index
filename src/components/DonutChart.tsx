"use client";

import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { Prediction } from "@/types";
import { getStatusCounts } from "@/lib/utils";
import { STATUS_COLORS, STATUS_LABELS } from "@/lib/constants";
import { PredictionStatus } from "@/types";

const STATUS_ORDER: PredictionStatus[] = [
  "confirmed",
  "in_progress",
  "outstanding",
  "incorrect",
];

export function DonutChart({
  predictions,
  size = "normal",
}: {
  predictions: Prediction[];
  size?: "small" | "normal";
}) {
  const counts = getStatusCounts(predictions);
  const total = predictions.length;

  const data = STATUS_ORDER.map((status) => ({
    name: STATUS_LABELS[status],
    value: counts[status],
    color: STATUS_COLORS[status],
  })).filter((d) => d.value > 0);

  const chartSize = size === "small" ? 150 : 200;
  const innerRadius = size === "small" ? 42 : 58;
  const outerRadius = size === "small" ? 62 : 84;

  return (
    <div className="flex flex-col items-center gap-4">
      <div style={{ width: chartSize, height: chartSize }} className="relative">
        <PieChart width={chartSize} height={chartSize}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            dataKey="value"
            stroke="var(--bg-primary)"
            strokeWidth={2}
            animationBegin={0}
            animationDuration={1000}
            animationEasing="ease-out"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-card)",
              borderRadius: "10px",
              fontSize: "12px",
              fontFamily: "var(--font-mono)",
              padding: "8px 12px",
              boxShadow: "0 8px 32px -4px rgba(0, 0, 0, 0.4)",
            }}
            itemStyle={{ color: "var(--text-primary)" }}
          />
          <text
            x="50%"
            y="46%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="var(--text-primary)"
            fontSize={size === "small" ? 22 : 30}
            fontWeight="600"
            fontFamily="var(--font-mono)"
          >
            {total}
          </text>
          <text
            x="50%"
            y={size === "small" ? "60%" : "58%"}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="var(--text-muted)"
            fontSize={size === "small" ? 8 : 9}
            fontWeight="500"
            fontFamily="var(--font-sans)"
            letterSpacing="0.1em"
          >
            PREDICTIONS
          </text>
        </PieChart>
      </div>

      <div className="flex flex-wrap justify-center gap-x-5 gap-y-1.5">
        {data.map((entry) => (
          <div
            key={entry.name}
            className="flex items-center gap-2 font-mono text-[11px]"
            style={{ color: "var(--text-secondary)" }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span style={{ color: "var(--text-muted)" }}>{entry.name}</span>
            <span className="font-semibold" style={{ color: entry.color }}>
              {entry.value}
            </span>
            <span style={{ color: "var(--text-muted)" }}>
              ({Math.round((entry.value / total) * 100)}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
