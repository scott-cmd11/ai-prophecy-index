import { Prediction, PredictionStatus } from "@/types";

export function getStatusCounts(predictions: Prediction[]): Record<PredictionStatus, number> {
  return {
    confirmed: predictions.filter((p) => p.status === "confirmed").length,
    in_progress: predictions.filter((p) => p.status === "in_progress").length,
    outstanding: predictions.filter((p) => p.status === "outstanding").length,
    incorrect: predictions.filter((p) => p.status === "incorrect").length,
  };
}

export function getHitRate(predictions: Prediction[]): number {
  const confirmed = predictions.filter((p) => p.status === "confirmed").length;
  const incorrect = predictions.filter((p) => p.status === "incorrect").length;
  const total = confirmed + incorrect;
  if (total === 0) return 0;
  return Math.round((confirmed / total) * 100);
}

export function getCategories(predictions: Prediction[]): string[] {
  return [...new Set(predictions.map((p) => p.category))].sort();
}
