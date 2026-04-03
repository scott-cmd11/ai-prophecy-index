import type { Metadata } from "next";
import Link from "next/link";
import { LAST_UPDATED } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy & Legal — AI Prophecy Index",
  description: "Privacy policy and legal notices for the AI Prophecy Index.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <Link
        href="/"
        className="mb-12 inline-block font-mono text-[10px] uppercase tracking-widest transition-colors hover:underline"
        style={{ color: "var(--text-muted)" }}
      >
        ← Back
      </Link>

      <h1
        className="mb-2 font-serif text-4xl italic"
        style={{ color: "var(--text-primary)" }}
      >
        Privacy &amp; Legal
      </h1>
      <p className="mb-12 font-mono text-xs" style={{ color: "var(--text-muted)" }}>
        Last updated: {LAST_UPDATED}
      </p>

      <div className="space-y-10">
        <section>
          <h2 className="mb-3 font-mono text-[10px] font-medium uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
            About This Site
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            AI Prophecy Index is an independent research and tracking project created by Scott Hazlitt. It documents and evaluates publicly stated predictions about artificial intelligence made by Carl Shulman and Leopold Aschenbrenner. This site is not affiliated with, endorsed by, or connected to either individual or their associated organisations.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-mono text-[10px] font-medium uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
            AI-Generated Content
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Prediction summaries, evidence assessments, implication statements, and other editorial content on this site were produced with the assistance of AI language models, including Claude (Anthropic). While source materials are drawn from public interviews, podcasts, and published writing, the framing, interpretation, categorisation, and status judgements reflect automated analysis and editorial choices. This content may contain errors, omissions, or unintended bias.
          </p>
          <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            All AI-generated content is clearly labelled. No content on this site should be taken as a definitive or authoritative representation of the views of the individuals tracked.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-mono text-[10px] font-medium uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
            No Investment or Policy Advice
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Nothing on this site constitutes investment advice, financial advice, legal advice, or policy guidance. Prediction tracking is provided for informational and educational purposes only. Do not rely on content from this site to inform consequential decisions without conducting independent research and seeking qualified professional advice.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-mono text-[10px] font-medium uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
            Privacy
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            This site does not collect personal information, use tracking cookies, or operate user accounts. Standard server logs (IP address, browser type, referring URL) may be retained by the hosting provider (Vercel) for security and operational purposes in accordance with their{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-current/30 underline-offset-2 transition-colors hover:decoration-current"
              style={{ color: "var(--accent-aschenbrenner)" }}
            >
              Privacy Policy
            </a>
            . No analytics scripts or third-party trackers are loaded.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-mono text-[10px] font-medium uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
            Intellectual Property
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Quoted material from public interviews and published writing belongs to the respective authors and is reproduced here in brief for commentary and analysis purposes consistent with fair dealing. Original site design, code, and editorial content are copyright © {new Date().getFullYear()} Scott Hazlitt. The source code for this site is available on{" "}
            <a
              href="https://github.com/scott-cmd11/ai-prophecy-index"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-current/30 underline-offset-2 transition-colors hover:decoration-current"
              style={{ color: "var(--accent-aschenbrenner)" }}
            >
              GitHub
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-mono text-[10px] font-medium uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
            Contact
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            For questions, corrections, or takedown requests, contact Scott Hazlitt at{" "}
            <a
              href="mailto:scott@scotthazlitt.ai"
              className="underline decoration-current/30 underline-offset-2 transition-colors hover:decoration-current"
              style={{ color: "var(--accent-aschenbrenner)" }}
            >
              scott@scotthazlitt.ai
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
