import type { PredictionTag } from "@/lib/constants";

export type PredictionStatus = "confirmed" | "in_progress" | "outstanding" | "incorrect";
export type Confidence = "high" | "medium" | "low" | "implied";

export interface Reference {
  label: string;
  url: string;
}

export interface Prediction {
  id: string;
  claim: string;
  source: string;
  sourceUrl?: string;
  date: string;
  category: string;
  status: PredictionStatus;
  confidence?: Confidence;
  evidence?: string;
  implications?: string;
  whyIncorrect?: string;
  references?: Reference[];
  lastReviewed: string;
  timeHorizon?: string;
  year: number;
  tags?: PredictionTag[];
}

export type AIEventCategory = "release" | "policy" | "safety";

export interface AIEvent {
  id: string;
  date: string;
  year: number;
  title: string;
  summary?: string;
  category: AIEventCategory;
  source?: string;
  sourceUrl?: string;
}

export interface Thinker {
  name: string;
  slug: string;
  bio: string;
  predictions: Prediction[];
}
