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
        "Dario Amodei and Anthropic's formal OSTP submission predicted 'powerful AI systems broadly better than humans at almost all things' by late 2026 or early 2027. However, the original AI 2027 project authors (Kokotajlo, Lifland) revised their personal medians to around 2030, citing slower-than-expected progress. An 80,000 Hours survey of 29 prominent forecasters (March 2025) found a probability-weighted median of transformative AI between 2028–2033. Frontier models demonstrate extraordinary coding and reasoning capabilities but still exhibit persistent hallucinations and lack robust agency. The 2027 date remains possible but is no longer the median expert view.",
      implications:
        "The entire knowledge economy — law, medicine, finance, engineering — faces near-simultaneous disruption, eliminating the usual decades-long adjustment window that preceded past automation waves. Labor markets in high-skill sectors would reprice within years, not generations.",
      lastReviewed: "2026-04-01",
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
      status: "in_progress",
      confidence: "high",
      evidence:
        "Sam Altman publicly committed (confirmed by TechCrunch, October 2025) to two milestones: an automated AI research intern by September 2026 running on hundreds of thousands of GPUs, and a full automated AI researcher by March 2028. Altman has separately written that OpenAI is 'confident we know how to build AGI' and that superintelligence could arrive 'in a few thousand days' (roughly 2027–2030). No automated recursive self-improvement loop has been demonstrated, and no specific public commitment to the 1-year AGI-to-superintelligence gap has been made, but the institutional path Aschenbrenner describes is clearly underway.",
      implications:
        "If the transition from AGI to superintelligence takes months rather than years, there is no meaningful window for governments, institutions, or markets to adapt — decisions made in that compressed period could lock in outcomes for decades. Geopolitical and commercial advantages would be captured almost instantaneously.",
      lastReviewed: "2026-04-01",
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
      status: "confirmed",
      confidence: "high",
      evidence:
        "Azure posted $75B+ in full-year FY2025 revenue (up 34%, with Q4 growing 39% YoY). Google Cloud surpassed a $70B annual run rate by end of 2025 (Q4 up 48% to $17.7B). AWS hit $128.7B in full-year 2025 revenue. Meta's AI-powered advertising suite exceeded a $60B annual run rate. Combined, Azure + Google Cloud + AWS collectively surpassed $270B in cloud/AI-driven revenue annually — far exceeding $100B. The prediction is confirmed on a combined basis, even if individual companies don't break out pure 'AI revenue' separately.",
      implications:
        "Validated commercial returns at this scale would remove the last serious argument for slowing the compute buildout, accelerating the race dynamic Aschenbrenner describes and reducing the leverage any regulator or treaty could exert.",
      lastReviewed: "2026-04-01",
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
      status: "confirmed",
      confidence: "high",
      evidence:
        "The Stargate project (OpenAI, SoftBank, Oracle, MGX) announced $500B in planned US AI infrastructure in January 2025 and had already deployed over $100B in capital by early 2026 — years ahead of the ~2028 target. The flagship campus in Abilene, Texas went live with Oracle Cloud Infrastructure and 450,000+ Nvidia GB200 GPUs. Five additional US sites were announced, plus a 1 GW UAE facility. Some partner governance disputes caused delays, but construction is broadly on track and the $100B threshold has already been crossed.",
      implications:
        "Clusters at this cost require sovereign-scale energy and land commitments, effectively making AI infrastructure a matter of national industrial policy in every major economy — reshaping where factories, power plants, and transmission lines get built for a generation.",
      lastReviewed: "2026-04-01",
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
      status: "in_progress",
      confidence: "medium",
      evidence:
        "No single trillion-dollar cluster has been announced. However, Goldman Sachs projects $1.15T in combined hyperscaler capex from 2025–2027, and hyperscaler capex is projected to exceed $600B in 2026 alone. On electricity, the EIA projects data center demand at 325–580 TWh by 2028 (6.7–12% of US electricity), with multiple forecasts projecting 9–20% by 2030. Gartner projects data center electricity demand doubles by 2030. The aggregate infrastructure investment and power trajectory are broadly consistent with this prediction.",
      implications:
        "A single training cluster commanding 20% of US electricity would be the largest single energy consumer in American history, forcing an immediate national debate about who controls AI compute and whether it should be treated as regulated critical infrastructure.",
      lastReviewed: "2026-04-01",
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
      status: "in_progress",
      confidence: "medium",
      evidence:
        "US data centers consumed approximately 176–183 TWh in 2024–2025, representing roughly 4–4.4% of total US electricity. The EIA projects data center demand reaching 325–580 TWh by 2028 (6.7–12% of US electricity). Gartner projects electricity demand doubles by 2030, and some analyses project 20% by 2030 — but 2028 remains an aggressive target. Planned data center buildouts represent ~140 GW of new load against a US peak of ~760 GW. The trajectory is directionally correct but 20% by 2028 appears to have slipped to a 2030 outcome.",
      implications:
        "At that load share, AI compute would compete directly with residential heating, manufacturing, and electric vehicle charging, politicizing electricity pricing and triggering difficult trade-offs between AI development speed and household energy costs.",
      lastReviewed: "2026-04-01",
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
      status: "confirmed",
      confidence: "medium",
      evidence:
        "Gartner reported worldwide AI spending totalled approximately $1.5T in 2025, and projected $2.5T in 2026 and $3.3T in 2027, using a broad definition encompassing infrastructure, software, and services. Hyperscaler capex alone is projected to exceed $600B in 2026. On any broad measure of AI investment, the $1T threshold was crossed well before 2027 — and even on a narrow infrastructure/capex basis, $1T by 2027 appears achievable.",
      implications:
        "Capital at that scale would redirect global semiconductor, construction, and energy supply chains away from other industries, creating shortages and geopolitical leverage points for any country that controls critical inputs like advanced chip fabrication.",
      lastReviewed: "2026-04-01",
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
      status: "confirmed",
      confidence: "high",
      evidence:
        "The Department of Justice secured its first-ever AI-related economic espionage conviction on January 30, 2026, finding former Google engineer Linwei Ding guilty on 14 counts for stealing thousands of pages of Google AI trade secrets (TPU/GPU architecture) for Chinese companies. Separately, Chinese labs linked to DeepSeek were found to have used ~24,000 fraudulent accounts to conduct distillation attacks on Anthropic's Claude, generating over 16 million exchanges to shortcut frontier model training. Three individuals were also charged with conspiring to divert controlled GPU servers worth billions to China. A State Department-commissioned report noted lab security remains 'inadequate to resist a sustained IP exfiltration campaign by a sophisticated attacker.'",
      implications:
        "Successful theft of frontier model weights would collapse a multi-year US compute lead overnight, nullifying the strategic value of export controls and CHIPS Act investments without a single adversarial training run.",
      lastReviewed: "2026-04-01",
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
        "Theoretical claim contingent on superintelligence being achieved. No superintelligent systems exist to evaluate this claim. The assertion that AI could neutralize nuclear deterrents remains speculative and contested by defense analysts. The 2026 IC Annual Threat Assessment elevates AI as a top strategic concern but stops short of explicitly endorsing the nuclear-equivalence framing.",
      implications:
        "If true, nuclear deterrence — the strategic stability doctrine that has prevented great-power war since 1945 — would be rendered obsolete, forcing a fundamental renegotiation of international security architecture at precisely the moment when institutions are least equipped to respond.",
      lastReviewed: "2026-04-01",
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
      status: "in_progress",
      confidence: "medium",
      evidence:
        "The Stargate Initiative (Executive Order, January 2025) is a $500B public-private infrastructure partnership explicitly framed around US AI national security supremacy. The Genesis Mission Executive Order (November 2025) formally mobilizes all 17 DOE National Laboratories into an integrated AI-driven scientific discovery platform, targeting 'initial operating capability' by end of 2026. Neither constitutes a full lab merger or classified AGI crash program, but the Genesis Mission closely approximates a national science mobilization for AI. The NIST AI Safety Institute was renamed and deprioritized under the Trump administration. The prediction window has not closed.",
      implications:
        "Nationalizing AI development would immediately raise questions about private IP, researcher freedom, and civil liberties that have no clean legal precedent — and would likely trigger reciprocal state-led AI mobilizations in China and the EU.",
      lastReviewed: "2026-04-01",
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
      status: "confirmed",
      confidence: "medium",
      evidence:
        "As of early 2026, US national security institutions are deeply embedded in frontier AI. The Pentagon (CDAO) holds contracts with Anthropic, OpenAI, xAI, and Google, and is deploying GenAI.mil to its entire 3-million-person workforce. The DoD directed that new commercial AI models be deployed within 30 days of public release. The NSA launched a dedicated AI Security Center. The ODNI created a Chief AI Officer role and an IC-wide AI strategy. The 2026 Annual Threat Assessment (March 2026, DNI Gabbard) formally elevates AI as a top strategic threat. The FY2026 NDAA mandates strict AI supply chain controls for defense procurement.",
      implications:
        "Deep national security involvement would likely bring classification regimes, export controls, and security clearance requirements to frontier AI research, fundamentally changing the open-publication culture that has driven academic AI progress.",
      lastReviewed: "2026-04-01",
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
        "Core thesis of the Situational Awareness framework. No recursive self-improvement loop has been demonstrated. AI is accelerating research — Sakana's AI Scientist-v2 and DeepMind's AlphaEvolve represent early steps — but not at the pace described. The claim requires AGI-level systems to exist first, and the median expert timeline for AGI has shifted to 2028–2033.",
      implications:
        "A century of scientific progress compressed into a decade would deliver breakthroughs in medicine, materials, and energy faster than regulatory, legal, and social institutions could possibly absorb — making governance of the resulting technologies nearly impossible in real time.",
      lastReviewed: "2026-04-01",
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
        "Sam Altman publicly committed to an automated AI research intern by September 2026 (running on hundreds of thousands of GPUs) and a full automated AI researcher by March 2028. Small AI-assisted research discoveries were reportedly beginning in late 2025, ahead of OpenAI's original 2026 target. However, OpenAI's committed target is 1 automated researcher — the scale gap to Aschenbrenner's 100 million remains enormous. The direction is confirmed; the magnitude is entirely unvalidated.",
      implications:
        "An AI research workforce of that size would generate scientific output exceeding every human researcher who has ever lived, combined — making the pace of discovery in every field simultaneously outstrip humanity's capacity to evaluate, validate, or apply the results.",
      lastReviewed: "2026-04-01",
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
      status: "in_progress",
      confidence: "medium",
      evidence:
        "AI has substantially automated specific task categories — entry-level document review, data entry, basic financial analysis, customer service, and routine code generation — with entry-level job postings down roughly 35% since 2023 and workers aged 22–25 in AI-exposed roles seeing ~16% employment declines. However, 'full automation' has not occurred: a METR study found AI actually slowed experienced software developers by 20%, and Microsoft AI CEO Mustafa Suleyman placed full automation of office work still 12–18 months away as of February 2026. Senior and complex cognitive work remains substantially human-dependent.",
      implications:
        "The college-degree premium that has defined income distribution in wealthy nations for 50 years would collapse, eliminating the primary economic rationale for mass higher education and invalidating the career expectations of hundreds of millions of people.",
      lastReviewed: "2026-04-01",
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
      status: "confirmed",
      confidence: "high",
      evidence:
        "Frontier models as of early 2026 are approaching or exceeding graduate-level performance on major academic benchmarks. OpenAI's o3 scored 87.7% on GPQA Diamond (graduate-level science questions) and 71.7% on competitive coding benchmarks. Gemini 2.5 Pro reached 84.0% on GPQA Diamond. The bar exam and most professional licensing benchmarks have been surpassed by multiple frontier models. GPT-5.x generation models are approaching 90% on MMLU-Pro, causing benchmark saturation discussions. The threshold of 'basically smarter than most college graduates' is broadly met as of early 2026.",
      implications:
        "Entry-level knowledge work hiring — the traditional on-ramp for new graduates into professional careers — would contract sharply, creating a generational gap where the credential that once guaranteed employment no longer signals scarcity of any marketable skill.",
      lastReviewed: "2026-04-01",
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
        "The mechanism: AGI enables millions of AI researchers at 10× human speed, compressing a decade of algorithmic progress into ≤1 year. Algorithmic efficiency has been improving at ~0.5 OOM/year historically. Early steps are visible — Sakana AI's AI Scientist-v2, AlphaEvolve, OpenAI's GPT-5 optimizing gene-editing protocols — but no AI system runs autonomously at scale for research. OpenAI's 2028 target of one automated researcher is orders of magnitude below the scale required to trigger this mechanism.",
      implications:
        "Algorithmic capabilities achieved in a single year would obsolete every safety evaluation framework, governance treaty, and interpretability tool built for today's models — the gap between what AI can do and what humans can audit would become functionally unbridgeable.",
      lastReviewed: "2026-04-01",
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
      status: "in_progress",
      confidence: "high",
      evidence:
        "SWE-bench Verified scores climbed from ~49% (Claude 3.5 Sonnet, Oct 2024) to ~88% (GPT-5, Feb 2026), roughly doubling in 18 months. Claude Code Sonnet 4.5 achieved 77.2% on SWE-bench Verified. Cursor added parallel agent support (8 agents via git worktrees) in February 2026. However, Devin 2.0 achieved only 13–15% success on real production GitHub issues in independent testing, and fully autonomous management of entire production codebases as a senior engineer has not been demonstrated. The trajectory is strongly directional; the deadline remains ahead.",
      implications:
        "Software development — the world's highest-paying profession by headcount and the engine of the tech industry's trillion-dollar valuations — would see its labor market repriced to near-zero, eliminating the economic moat that has sustained Silicon Valley's talent competition for three decades.",
      lastReviewed: "2026-04-01",
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
        "Stargate ($500B over 4 years, announced January 2025) is the closest analog but remains private-sector led. The Genesis Mission EO (November 2025) mobilized all 17 DOE National Laboratories into an AI platform, but stops short of merging leading commercial labs into a government project. No Congressional appropriation at the trillion-dollar scale for AI has been passed. The prediction requires AGI to arrive first as the triggering condition.",
      implications:
        "A government-absorbed AI program would concentrate extraordinary technological power in the executive branch, raising constitutional questions about oversight and creating a permanent national security classification regime around the most consequential technology in history.",
      lastReviewed: "2026-04-01",
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
        "As of April 2026, there is no public evidence of successful complete model weight exfiltration of a frontier system to the CCP. What has been confirmed: distillation attacks on Anthropic's Claude (24,000 fraudulent accounts, 16 million exchanges), the Linwei Ding insider theft conviction (architectural secrets), and GPU smuggling prosecutions. Lab security has been substantially upgraded since Aschenbrenner's warnings. Forecasts suggest China 'stays significantly behind US internal frontier capabilities' through early 2027. The prediction's deadline window remains open through mid-to-late 2026.",
      implications:
        "A confirmed AGI-level leak to China would immediately invalidate the US strategic rationale for chip export controls and force a reassessment of whether an open-lab research model is compatible with the national security stakes now attached to AI development.",
      lastReviewed: "2026-04-01",
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
      lastReviewed: "2026-04-01",
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
        "Pennsylvania shale extraction capacity is real and substantial. However, no datacenter build at 200 GW scale has been attempted — Stargate ultimately targets ~5 GW at its Abilene campus. This is primarily a feasibility claim (it could be done) rather than a prediction it will be done. The bottleneck is mobilization, capital, and permitting — not geological resource availability. Planned US data center buildouts represent ~140 GW of new load in aggregate, suggesting the theoretical capacity is relevant but not being exploited at this claim's scale.",
      implications:
        "If true, the physical constraints on AI compute are purely political and financial rather than geological, meaning the primary variables governing how fast the US can scale AI are permitting regimes and capital allocation decisions — not resource limits.",
      lastReviewed: "2026-04-01",
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
        "US–China AI competition is intensifying: US chip export controls tightened significantly through 2025–2026, China's domestic semiconductor push continues (CXMT, SMIC advances), and the FY2026 NDAA mandates strict AI supply chain controls for defense procurement. The 2026 IC Annual Threat Assessment explicitly cites China's ambition to displace the US as global AI leader by 2030. The exact compute gap between US and China frontier AI is classified. The claim that a 6-month lead equals nuclear-level military dominance is contested by defense analysts but taken seriously in national security circles.",
      implications:
        "If compute lead equals military dominance, TSMC's fabrication capacity in Taiwan becomes arguably the most strategically important piece of infrastructure on the planet — making Taiwan Strait stability a first-order concern for AI policy, not just semiconductor supply chains.",
      lastReviewed: "2026-04-01",
      timeHorizon: "by 2030",
      year: 2030,
    },
  ],
};
