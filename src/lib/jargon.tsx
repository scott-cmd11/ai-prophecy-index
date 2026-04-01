// Terms and their plain-English definitions shown to non-technical readers.
// Keys are lowercase exact-match strings (case-insensitive matching applied at render time).
export const JARGON: Record<string, string> = {
  "agi": "Artificial General Intelligence — an AI system that can do any intellectual task a human can do.",
  "artificial general intelligence": "An AI system that can do any intellectual task a human can do.",
  "frontier model": "The most capable AI systems available at any given time, typically from a handful of leading labs.",
  "frontier models": "The most capable AI systems available at any given time, typically from a handful of leading labs.",
  "alignment": "The challenge of making sure AI systems do what humans actually want, not just what they were literally told.",
  "inference compute": "The computing power used when an AI model answers a question or completes a task (as opposed to training).",
  "pretraining": "The initial phase of building an AI model, where it learns from vast amounts of text and data.",
  "rlhf": "Reinforcement Learning from Human Feedback — a technique for training AI to give responses humans rate as better.",
  "rl": "Reinforcement learning — a training method where an AI learns by receiving rewards for correct actions.",
  "capability overhang": "A situation where AI capabilities exist in a model but haven't been unlocked or discovered yet.",
  "scaling laws": "The observed pattern that AI models become more capable predictably as they get larger and are trained on more data.",
};

import React from "react";

/** Wraps a text string, returning a React node array with jargon terms underlined + title tooltips. */
export function annotateJargon(text: string): React.ReactNode[] {
  // Build a regex that matches any jargon term (longest first to prefer specific matches)
  const terms = Object.keys(JARGON).sort((a, b) => b.length - a.length);
  const pattern = new RegExp(`\\b(${terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})\\b`, "gi");

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const term = match[0];
    const definition = JARGON[term.toLowerCase()] ?? JARGON[term] ?? "";
    parts.push(
      <abbr
        key={match.index}
        title={definition}
        style={{
          textDecoration: "underline dotted",
          textUnderlineOffset: "2px",
          cursor: "help",
        }}
      >
        {term}
      </abbr>
    );
    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}
