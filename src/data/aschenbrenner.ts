import { Thinker } from "@/types";

export const aschenbrenner: Thinker = {
  name: "Leopold Aschenbrenner",
  slug: "aschenbrenner",
  bio: "Former OpenAI researcher and author of 'Situational Awareness' (2024), a comprehensive analysis arguing that AGI is imminent and will trigger a rapid intelligence explosion. Founded an AI investment firm focused on the transformative potential of near-term AGI.",
  predictions: [
    // --- AGI Timeline ---
    {
      id: "la-1",
      claim:
        "AGI — AI systems that can fully substitute for human researchers and engineers — will be achieved by roughly 2027.",
      source: "Situational Awareness, Ch. I",
      sourceUrl: "https://situational-awareness.ai/",
      date: "2024-06-01",
      category: "AGI Timeline",
      status: "outstanding",
      confidence: "high",
      evidence:
        "Frontier models (GPT-4o, Claude 3.5, Gemini Ultra) show strong but incomplete capabilities as of early 2025. They can assist with research and engineering but cannot fully substitute for human researchers. The prediction window hasn't closed yet — 2027 is still ahead.",
      lastReviewed: "2025-03-01",
      timeHorizon: "by 2027",
      year: 2027,
    },
    {
      id: "la-2",
      claim:
        "Superintelligence will arrive within one year or less of AGI, as automated AI research compresses a decade of algorithmic progress into months.",
      source: "Situational Awareness, Ch. II",
      sourceUrl: "https://situational-awareness.ai/",
      date: "2024-06-01",
      category: "Superintelligence",
      status: "outstanding",
      confidence: "high",
      evidence:
        "Depends on AGI arriving first. No automated recursive self-improvement loop has been demonstrated. Current AI-assisted research is augmentative, not autonomous. Cannot be evaluated until AGI threshold is crossed.",
      lastReviewed: "2025-03-01",
      timeHorizon: "within 1 year of AGI",
      year: 2028,
    },

    // --- Compute Scaling ---
    {
      id: "la-3",
      claim:
        "Major tech companies will reach $100B+ in annual AI revenue by mid-2026, justifying the massive compute buildout.",
      source: "Situational Awareness, Ch. IIIa",
      sourceUrl: "https://situational-awareness.ai/",
      date: "2024-06-01",
      category: "Compute Scaling",
      status: "in_progress",
      confidence: "high",
      evidence:
        "Microsoft Azure AI revenue growing 50%+ YoY, Google Cloud AI revenue accelerating, Meta AI ad targeting revenue surging. Combined trajectories are consistent with $100B+ by mid-2026, though not yet confirmed at that scale.",
      lastReviewed: "2025-03-01",
      timeHorizon: "by mid-2026",
      year: 2026,
    },
    {
      id: "la-4",
      claim:
        "A $100 billion training cluster will be built by approximately 2028.",
      source: "Situational Awareness, Ch. IIIa",
      sourceUrl: "https://situational-awareness.ai/",
      date: "2024-06-01",
      category: "Compute Scaling",
      status: "in_progress",
      confidence: "high",
      evidence:
        "The Stargate project ($100B+ joint venture between OpenAI, SoftBank, and Oracle) was announced in January 2025. Microsoft committed $80B to AI data centers in FY2025. Construction is underway at multiple sites. Trajectory strongly consistent with this prediction.",
      lastReviewed: "2025-03-01",
      timeHorizon: "by 2028",
      year: 2028,
    },
    {
      id: "la-5",
      claim:
        "A trillion-dollar training cluster will be built by approximately 2030, consuming over 100 GW of power (>20% of US electricity production).",
      source: "Situational Awareness, Ch. IIIa",
      sourceUrl: "https://situational-awareness.ai/",
      date: "2024-06-01",
      category: "Compute Scaling",
      status: "outstanding",
      confidence: "medium",
      evidence:
        "No confirmed plans at the trillion-dollar scale. Current largest announced projects are in the $100-500B range. Power grid expansion at this scale would require unprecedented infrastructure buildout. Investment trajectory is accelerating but 10x jump in 2-3 years is unconfirmed.",
      lastReviewed: "2025-03-01",
      timeHorizon: "by 2030",
      year: 2030,
    },
    {
      id: "la-6",
      claim:
        "AI data centers will consume approximately 20% of US electricity by 2028.",
      source: "Situational Awareness, Ch. IIIa",
      sourceUrl: "https://situational-awareness.ai/",
      date: "2024-06-01",
      category: "Compute Scaling",
      status: "outstanding",
      confidence: "medium",
      evidence:
        "AI power consumption was estimated at 1-2% of US production in 2024. Reaching 20% by 2028 would require roughly 10x growth in 3 years. Major utilities are reporting surging demand from data centers, and nuclear/natural gas buildout is accelerating, but 20% remains an aggressive target.",
      lastReviewed: "2025-03-01",
      timeHorizon: "by 2028",
      year: 2028,
    },
    {
      id: "la-7",
      claim:
        "Total annual AI investment will reach $1 trillion by approximately 2027.",
      source: "Situational Awareness, Ch. IIIa",
      sourceUrl: "https://situational-awareness.ai/",
      date: "2024-06-01",
      category: "Compute Scaling",
      status: "outstanding",
      confidence: "medium",
      evidence:
        "2024 total AI investment estimated at $150-200B across infrastructure, chips, and R&D. Reaching $1T by 2027 would require a 5-7x increase in 3 years. While investment is accelerating rapidly, this pace would be historically unprecedented.",
      lastReviewed: "2025-03-01",
      timeHorizon: "by 2027",
      year: 2027,
    },

    // --- China Competition ---
    {
      id: "la-8",
      claim:
        "China will launch an all-out effort to infiltrate American AI labs to steal model weights and research secrets.",
      source: "Situational Awareness, Ch. IIId",
      sourceUrl: "https://situational-awareness.ai/",
      date: "2024-06-01",
      category: "China Competition",
      status: "in_progress",
      confidence: "high",
      evidence:
        "Multiple espionage cases involving Chinese nationals at US tech companies have been prosecuted by the DOJ. Google engineer charged with stealing AI trade secrets for Chinese companies (2024). Security concerns have led labs to restrict access. Consistent with prediction, though 'all-out' scope is hard to independently verify.",
      lastReviewed: "2025-03-01",
      timeHorizon: "ongoing",
      year: 2025,
    },
    {
      id: "la-9",
      claim:
        "A 1-3 year lead in superintelligence would yield a decisive military advantage comparable to or exceeding nuclear weapons — potentially enough to preemptively disable an adversary's nuclear deterrent.",
      source: "Situational Awareness, Ch. IIId",
      sourceUrl: "https://situational-awareness.ai/",
      date: "2024-06-01",
      category: "China Competition",
      status: "outstanding",
      confidence: "medium",
      evidence:
        "Theoretical claim contingent on superintelligence being achieved. No superintelligent systems exist to evaluate this claim. The assertion that AI could neutralize nuclear deterrents remains speculative and contested by defense analysts.",
      lastReviewed: "2025-03-01",
      timeHorizon: "post-superintelligence",
      year: 2030,
    },

    // --- Government Response ---
    {
      id: "la-10",
      claim:
        "A formal government AGI project — akin to a Manhattan Project for AI — will emerge by 2027-2028, with leading labs effectively merged into a national effort.",
      source: "Situational Awareness, Ch. IV",
      sourceUrl: "https://situational-awareness.ai/",
      date: "2024-06-01",
      category: "Government Response",
      status: "outstanding",
      confidence: "medium",
      evidence:
        "No formal government AGI project has been announced. NIST AI Safety Institute, executive orders, and bipartisan legislation exist but fall far short of the Manhattan Project-level mobilization and lab consolidation Aschenbrenner describes. The prediction window hasn't closed.",
      lastReviewed: "2025-03-01",
      timeHorizon: "by 2027-2028",
      year: 2027,
    },
    {
      id: "la-11",
      claim:
        "The national security establishment will get heavily involved in AI development around 2026-2027, triggered by AI systems that can outperform PhD-level researchers.",
      source: "Situational Awareness, Ch. IV / Dwarkesh Podcast",
      sourceUrl: "https://www.dwarkesh.com/p/leopold-aschenbrenner",
      date: "2024-06-01",
      category: "Government Response",
      status: "in_progress",
      confidence: "medium",
      evidence:
        "Significant and growing government involvement: Biden AI Executive Order (Oct 2023), CHIPS Act funding, bipartisan AI legislation, DoD AI adoption strategies, NIST AI Safety Institute. However, involvement is still regulatory/advisory rather than the direct operational control Aschenbrenner envisions.",
      lastReviewed: "2025-03-01",
      timeHorizon: "by 2026-2027",
      year: 2026,
    },

    // --- Superintelligence ---
    {
      id: "la-12",
      claim:
        "An intelligence explosion will compress a century's worth of technological progress into less than a decade.",
      source: "Dwarkesh Podcast",
      sourceUrl: "https://www.dwarkesh.com/p/leopold-aschenbrenner",
      date: "2024-03-01",
      category: "Superintelligence",
      status: "outstanding",
      confidence: "high",
      evidence:
        "Core thesis of the Situational Awareness framework. No recursive self-improvement loop has been demonstrated. AI is accelerating research but not at the pace described. The claim requires AGI-level systems to exist first.",
      lastReviewed: "2025-03-01",
      timeHorizon: "by 2030",
      year: 2030,
    },
    {
      id: "la-13",
      claim:
        "By 2027-2028, there will be the equivalent of 100 million automated AI researchers, initially running at human speed and soon scaling to 10-100x faster.",
      source: "Situational Awareness, Ch. II",
      sourceUrl: "https://situational-awareness.ai/",
      date: "2024-06-01",
      category: "Superintelligence",
      status: "outstanding",
      confidence: "medium",
      evidence:
        "Current AI coding and research assistants (Copilot, Claude, etc.) augment human researchers but cannot independently conduct research. The gap between current AI research assistance and 100 million autonomous researcher-equivalents is several orders of magnitude.",
      lastReviewed: "2025-03-01",
      timeHorizon: "by 2027-2028",
      year: 2027,
    },
    {
      id: "la-14",
      claim:
        "AI will achieve full automation of white-collar cognitive work, making human cognitive labor economically obsolete.",
      source: "Situational Awareness, Ch. II",
      sourceUrl: "https://situational-awareness.ai/",
      date: "2024-06-01",
      category: "Superintelligence",
      status: "outstanding",
      confidence: "medium",
      evidence:
        "AI assistants are widely adopted for writing, coding, analysis, and customer support, but handle narrow, well-defined tasks. Complex judgment, creative direction, and novel problem-solving still require human involvement. Full substitution across all white-collar work has not been demonstrated.",
      lastReviewed: "2025-03-01",
      timeHorizon: "by 2030",
      year: 2030,
    },
  ],
};
