import { PredictionStatus } from "@/types";
import { STATUS_LABELS } from "@/lib/constants";

const BADGE_STYLES: Record<PredictionStatus, { bg: string; color: string; border: string; dot: string }> = {
  confirmed: {
    bg: "var(--confirmed-bg)",
    color: "var(--confirmed)",
    border: "var(--confirmed-border)",
    dot: "var(--confirmed)",
  },
  in_progress: {
    bg: "var(--in-progress-bg)",
    color: "var(--in-progress)",
    border: "var(--in-progress-border)",
    dot: "var(--in-progress)",
  },
  outstanding: {
    bg: "var(--outstanding-bg)",
    color: "var(--outstanding)",
    border: "var(--outstanding-border)",
    dot: "var(--outstanding)",
  },
  incorrect: {
    bg: "var(--incorrect-bg)",
    color: "var(--incorrect)",
    border: "var(--incorrect-border)",
    dot: "var(--incorrect)",
  },
};

export function StatusBadge({ status }: { status: PredictionStatus }) {
  const style = BADGE_STYLES[status];
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase"
      style={{
        backgroundColor: style.bg,
        color: style.color,
        border: `1px solid ${style.border}`,
      }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: style.dot }}
      />
      {STATUS_LABELS[status]}
    </span>
  );
}
