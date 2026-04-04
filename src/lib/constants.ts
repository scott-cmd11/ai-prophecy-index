export const LAST_UPDATED = "2026-04-04";

export const STATUS_COLORS: Record<string, string> = {
  confirmed: "#34d399",
  in_progress: "#fbbf24",
  outstanding: "#475569",
  incorrect: "#ef4444",
};

export const STATUS_LABELS: Record<string, string> = {
  confirmed: "Got it right",
  in_progress: "Still unfolding",
  outstanding: "Too early to tell",
  incorrect: "Got it wrong",
};

export const PREDICTION_TAGS = [
  "Hardware",
  "Timelines",
  "Geopolitics",
  "Economics",
  "Safety",
  "Governance",
  "Capabilities",
  "Industry",
] as const;

export type PredictionTag = (typeof PREDICTION_TAGS)[number];
