export type PredictionStatus = "confirmed" | "in_progress" | "outstanding" | "incorrect";
export type Confidence = "high" | "medium" | "low" | "implied";

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
  lastReviewed: string;
  timeHorizon?: string;
  year: number;
}

export interface Thinker {
  name: string;
  slug: string;
  bio: string;
  predictions: Prediction[];
}
