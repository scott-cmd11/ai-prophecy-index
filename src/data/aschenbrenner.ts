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
      implications:
        "The entire knowledge economy — law, medicine, finance, engineering — faces near-simultaneous disruption, eliminating the usual decades-long adjustment window that preceded past automation waves. Labor markets in high-skill sectors would reprice within years, not generations.",
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
        "Depends on AGI arriving first. No automated recursive self-improvement loop has been demonstrated. Current AI-assisted research is augmentative, not autonomous. Notably, Sam Altman publicly committed (2025) to building an automated AI research intern by September 2026 and a full automated AI researcher by March 2028 — this is mechanistically the path Aschenbrenner describes for triggering the explosion. Cannot be fully evaluated until AGI threshold is crossed.",
      implications:
        "If the transition from AGI to superintelligence takes months rather than years, there is no meaningful window for governments, institutions, or markets to adapt — decisions made in that compressed period could lock in outcomes for decades. Geopolitical and commercial advantages would be captured almost instantaneously.",
      lastReviewed: "2026-01-01",
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
      implications:
        "Validated commercial returns at this scale would remove the last serious argument for slowing the compute buildout, accelerating the race dynamic Aschenbrenner describes and reducing the leverage any regulator or treaty could exert.",
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
      implications:
        "Clusters at this cost require sovereign-scale energy and land commitments, effectively making AI infrastructure a matter of national industrial policy in every major economy — reshaping where factories, power plants, and transmission lines get built for a generation.",
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
      implications:
        "A single training cluster commanding 20% of US electricity would be the largest single energy consumer in American history, forcing an immediate national debate about who controls AI compute and whether it should be treated as regulated critical infrastructure.",
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
      implications:
        "At that load share, AI compute would compete directly with residential heating, manufacturing, and electric vehicle charging, politicizing electricity pricing and triggering difficult trade-offs between AI development speed and household energy costs.",
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
      implications:
        "Capital at that scale would redirect global semiconductor, construction, and energy supply chains away from other industries, creating shortages and geopolitical leverage points for any country that controls critical inputs like advanced chip fabrication.",
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
      implications:
        "Successful theft of frontier model weights would collapse a multi-year US compute lead overnight, nullifying the strategic value of export controls and CHIPS Act investments without a single adversarial training run.",
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
      implications:
        "If true, nuclear deterrence — the strategic stability doctrine that has prevented great-power war since 1945 — would be rendered obsolete, forcing a fundamental renegotiation of international security architecture at precisely the moment when institutions are least equipped to respond.",
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
      implications:
        "Nationalizing AI development would immediately raise questions about private IP, researcher freedom, and civil liberties that have no clean legal precedent — and would likely trigger reciprocal state-led AI mobilizations in China and the EU.",
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
      implications:
        "Deep national security involvement would likely bring classification regimes, export controls, and security clearance requirements to frontier AI research, fundamentally changing the open-publication culture that has driven academic AI progress.",
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
      implications:
        "A century of scientific progress compressed into a decade would deliver breakthroughs in medicine, materials, and energy faster than regulatory, legal, and social institutions could possibly absorb — making governance of the resulting technologies nearly impossible in real time.",
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
        "Sam Altman publicly committed (X, 2025) to an automated AI research intern by September 2026 running on hundreds of thousands of GPUs, and a full automated AI researcher by March 2028. Small AI-assisted research discoveries reportedly began in late 2025, ahead of OpenAI's original 2026 target. This directly corroborates the direction of Aschenbrenner's prediction. However, the scale gap remains enormous: OpenAI's target is 1 automated researcher; Aschenbrenner predicts 100 million.",
      implications:
        "An AI research workforce of that size would generate scientific output exceeding every human researcher who has ever lived, combined — making the pace of discovery in every field simultaneously outstrip humanity's capacity to evaluate, validate, or apply the results.",
      lastReviewed: "2026-01-01",
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
      implications:
        "The college-degree premium that has defined income distribution in wealthy nations for 50 years would collapse, eliminating the primary economic rationale for mass higher education and invalidating the career expectations of hundreds of millions of people.",
      lastReviewed: "2025-03-01",
      timeHorizon: "by 2030",
      year: 2030,
    },

    // --- Capability Milestones ---
    {
      id: "la-15",
      claim:
        "AI models will outpace most college graduates by 2025–2026, becoming 'basically smarter than most college graduates' across academic tasks.",
      source: "Situational Awareness, Ch. I / Dwarkesh Podcast",
      sourceUrl: "https://situational-awareness.ai/",
      date: "2024-06-01",
      category: "Capability Milestones",
      status: "in_progress",
      confidence: "high",
      evidence:
        "Frontier models in early 2026 score well above median graduates on standardized tests and professional benchmarks. Reasoning models (o3, Gemini 2.5, Claude 3.7) demonstrate graduate-level performance across STEM, law, and medicine. The threshold of 'basically smarter than most college graduates' is broadly consistent with current model capabilities.",
      implications:
        "Entry-level knowledge work hiring — the traditional on-ramp for new graduates into professional careers — would contract sharply, creating a generational gap where the credential that once guaranteed employment no longer signals scarcity of any marketable skill.",
      lastReviewed: "2026-01-01",
      timeHorizon: "by 2025-2026",
      year: 2026,
    },
    {
      id: "la-16",
      claim:
        "The automated AI research mechanism will compress a full decade of algorithmic progress (5+ orders of magnitude) into ≤1 year, via millions of AI researchers running at 10× human speed.",
      source: "Situational Awareness, Ch. V",
      sourceUrl: "https://situational-awareness.ai/",
      date: "2024-06-01",
      category: "Superintelligence",
      status: "outstanding",
      confidence: "high",
      evidence:
        "The mechanism: AGI enables 100M AI researchers at 10× human speed = effectively 1 million human-years of AI research per year, compressing a decade of algorithmic progress into ≤1 year. Algorithmic efficiency has been improving at ~0.5 OOM/year historically. No AI system yet runs autonomously at this scale. OpenAI's 2028 automated researcher plan is a step toward validating the mechanism, but orders of magnitude smaller.",
      implications:
        "Algorithmic capabilities achieved in a single year would obsolete every safety evaluation framework, governance treaty, and interpretability tool built for today's models — the gap between what AI can do and what humans can audit would become functionally unbridgeable.",
      lastReviewed: "2026-01-01",
      timeHorizon: "within 1 year of AGI",
      year: 2028,
    },
    {
      id: "la-17",
      claim:
        "Full automation of software engineering — AI independently managing entire codebases and functioning as a senior engineer — will arrive by 2027–2028.",
      source: "Situational Awareness, Ch. II / Dwarkesh Podcast",
      sourceUrl: "https://situational-awareness.ai/",
      date: "2024-06-01",
      category: "Capability Milestones",
      status: "outstanding",
      confidence: "high",
      evidence:
        "AI coding tools (Cursor, Devin, GitHub Copilot) handle subtasks and short-horizon agentic tasks well, but require human oversight for production systems and long-horizon engineering decisions. Fully autonomous software engineering across an entire codebase has not been demonstrated. Sam Altman's September 2026 'intern' milestone is a step toward this but falls short of 'senior engineer' equivalence.",
      implications:
        "Software development — the world's highest-paying profession by headcount and the engine of the tech industry's trillion-dollar valuations — would see its labor market repriced to near-zero, eliminating the economic moat that has sustained Silicon Valley's talent competition for three decades.",
      lastReviewed: "2026-01-01",
      timeHorizon: "by 2027-2028",
      year: 2027,
    },

    // --- Geopolitics & Government ---
    {
      id: "la-18",
      claim:
        "Post-AGI, Congress will appropriate trillions of dollars for AI compute and leading AI labs will be effectively merged into a national security project housed in secure government facilities.",
      source: "Dwarkesh Podcast",
      sourceUrl: "https://www.dwarkesh.com/p/leopold-aschenbrenner",
      date: "2024-03-01",
      category: "Government Response",
      status: "outstanding",
      confidence: "medium",
      evidence:
        "Stargate ($500B over 4 years, announced Jan 2025) is the closest analog but remains private-sector led. No congressional appropriation at the trillion-dollar scale for AI. Government involvement is growing significantly but the 'merge the labs into a national security project' threshold has not been reached.",
      implications:
        "A government-absorbed AI program would concentrate extraordinary technological power in the executive branch, raising constitutional questions about oversight and creating a permanent national security classification regime around the most consequential technology in history.",
      lastReviewed: "2026-01-01",
      timeHorizon: "post-AGI",
      year: 2030,
    },
    {
      id: "la-19",
      claim:
        "Key AGI breakthroughs will likely leak to the CCP within 12–24 months of June 2024 (i.e., by mid-to-late 2026), given current lab security posture.",
      source: "Situational Awareness, Ch. IIId / Aschenbrenner on X",
      sourceUrl: "https://situational-awareness.ai/",
      date: "2024-06-01",
      category: "China Competition",
      status: "outstanding",
      confidence: "medium",
      evidence:
        "Multiple espionage cases documented at AI labs — DOJ prosecutions increasing, including a Google engineer charged with stealing AI trade secrets for Chinese companies (2024). No confirmed leak of frontier model weights or AGI-level research secrets at the scale Aschenbrenner describes. Lab security has been substantially upgraded since these warnings were published.",
      implications:
        "A confirmed AGI-level leak to China would immediately invalidate the US strategic rationale for chip export controls and force a reassessment of whether an open-lab research model is compatible with the national security stakes now attached to AI development.",
      lastReviewed: "2026-01-01",
      timeHorizon: "by mid-2026",
      year: 2026,
    },
    {
      id: "la-20",
      claim:
        "Post-superintelligence economic growth will reach 30%+ per year — potentially doubling annually — representing an acceleration unprecedented in human history.",
      source: "Situational Awareness, Ch. IV",
      sourceUrl: "https://situational-awareness.ai/",
      date: "2024-06-01",
      category: "Economic Transformation",
      status: "outstanding",
      confidence: "medium",
      evidence:
        "Conditional entirely on superintelligence arriving first. Global GDP growth remains in the 2–3% annual range. No current indicators of this growth rate. This is a theoretical extrapolation from the premise that automated cognitive labor at scale would be the dominant economic input, with marginal cost near zero.",
      implications:
        "Growth at this rate would double global wealth within two to three years, making all existing economic models, debt structures, and distributional frameworks obsolete — who captures that surplus, and how, would become the defining political question of the era.",
      lastReviewed: "2026-01-01",
      timeHorizon: "post-superintelligence",
      year: 2030,
    },
    {
      id: "la-21",
      claim:
        "Infrastructure for trillion-dollar datacenters is physically feasible in 1–2 years using existing US natural gas — Pennsylvania shale fields alone could support ~200 GW of continuous power generation.",
      source: "Situational Awareness, Ch. IIIa",
      sourceUrl: "https://situational-awareness.ai/",
      date: "2024-06-01",
      category: "Compute Scaling",
      status: "outstanding",
      confidence: "medium",
      evidence:
        "Pennsylvania shale extraction capacity is real and substantial. However, no datacenter build at 200 GW scale has been attempted — Stargate targets ~5 GW eventually. This is primarily a feasibility claim (it *could* be done) rather than a prediction it *will* be done. The bottleneck is mobilization and capital, not physical resource availability.",
      implications:
        "If true, the physical constraints on AI compute are purely political and financial rather than geological, meaning the primary variables governing how fast the US can scale AI are permitting regimes and capital allocation decisions — not resource limits.",
      lastReviewed: "2026-01-01",
      timeHorizon: "by 2030",
      year: 2030,
    },
    {
      id: "la-22",
      claim:
        "The decisive factor in the US–China AI race will be the size of the compute lead at AGI/superintelligence; even a 6-month to 2-year gap could confer military dominance comparable to nuclear weapons.",
      source: "Situational Awareness, Ch. IIId",
      sourceUrl: "https://situational-awareness.ai/",
      date: "2024-06-01",
      category: "China Competition",
      status: "outstanding",
      confidence: "medium",
      evidence:
        "Geopolitical AI competition is intensifying: US chip export controls, China's domestic semiconductor push, CHIPS Act investments. The exact compute gap between US and China frontier AI is classified or unavailable. The claim that a 6-month lead equals nuclear-level military dominance is contested by defense analysts but taken seriously in national security circles.",
      implications:
        "If compute lead equals military dominance, TSMC's fabrication capacity in Taiwan becomes arguably the most strategically important piece of infrastructure on the planet — making Taiwan Strait stability a first-order concern for AI policy, not just semiconductor supply chains.",
      lastReviewed: "2026-01-01",
      timeHorizon: "by 2030",
      year: 2030,
    },
  ],
};
