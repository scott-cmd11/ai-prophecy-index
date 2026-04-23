"use client";

import { AIEvent } from "@/types";
import { EventCard } from "@/components/EventCard";

interface EventsRailProps {
  events: AIEvent[];
  expandedId: string | null;
  onExpand: (id: string) => void;
}

export function EventsRail({ events, expandedId, onExpand }: EventsRailProps) {
  if (events.length === 0) {
    return (
      <div
        className="font-mono text-[9px] uppercase tracking-widest pt-3"
        style={{ color: "var(--text-faint)" }}
      >
        No events logged
      </div>
    );
  }

  return (
    <div>
      <div
        className="font-mono text-[9px] uppercase tracking-widest pt-3 pb-1.5"
        style={{ color: "var(--text-faint)" }}
      >
        What actually happened
      </div>
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          isExpanded={expandedId === event.id}
          onToggle={() => onExpand(event.id)}
        />
      ))}
    </div>
  );
}
