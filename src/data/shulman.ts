import { Thinker } from "@/types";

export const shulman: Thinker = {
  name: "Carl Shulman",
  slug: "shulman",
  bio: "AI policy researcher and independent scholar known for rigorous analysis of AI trajectories, intelligence explosion dynamics, and the economic implications of transformative AI. Frequent guest on long-form podcasts exploring AI futures.",
  predictions: [
    // --- Intelligence Explosion ---
    {
      id: "cs-1",
      claim:
        "An intelligence explosion is likely once AI systems can perform AI research — recursive self-improvement could compress a century of progress into a very short period.",
      source: "Dwarkesh Podcast, Part 1",
      sourceUrl: "https://www.dwarkesh.com/p/carl-shulman",
      date: "2023-06-01",
      category: "Intelligence Explosion",
      status: "outstanding",
      confidence: "high",
      evidence:
        "Core thesis of Shulman's AI trajectory model. Frontier labs are beginning to use AI for portions of AI research (code generation, experiment design), but full recursive self-improvement — where AI autonomously drives its own capability gains — has not been demonstrated.",
      implications:
        "Once triggered, the explosion would proceed entirely outside the pace of democratic deliberation or regulatory response — the most consequential technology transition in history would happen faster than any institution could convene to address it.",
      lastReviewed: "2025-03-01",
      timeHorizon: "by 2035",
      year: 2030,
    },
    {
      id: "cs-2",
      claim:
        "AI will boost researcher productivity by 50-200% before full AGI is reached, through automating experiment design, code optimization, and synthetic data generation.",
      source: "Dwarkesh Podcast, Part 1",
      sourceUrl: "https://www.dwarkesh.com/p/carl-shulman",
      date: "2023-06-01",
      category: "Intelligence Explosion",
      status: "in_progress",
      confidence: "high",
      evidence:
        "GitHub Copilot, Cursor, and similar tools show measurable productivity gains in software engineering. Academic studies suggest 20-55% improvement for coding tasks. AI is also accelerating literature review, data analysis, and hypothesis generation. Trending toward the lower bound of Shulman's prediction range.",
      implications:
        "A 50–200% uplift in research productivity across all scientific fields simultaneously would accelerate drug discovery, materials science, and climate technology faster than regulatory pipelines — built for a slower world — could evaluate and approve the resulting outputs.",
      lastReviewed: "2025-03-01",
      timeHorizon: "before AGI",
      year: 2026,
    },
    {
      id: "cs-3",
      claim:
        "AI could perform large parts of AI research before reaching full AGI — the transition will be gradual, not a single threshold event.",
      source: "Dwarkesh Podcast, Part 1",
      sourceUrl: "https://www.dwarkesh.com/p/carl-shulman",
      date: "2023-06-01",
      category: "Intelligence Explosion",
      status: "in_progress",
      confidence: "high",
      evidence:
        "Frontier labs report using AI for code generation, hyperparameter tuning, data curation, and portions of model architecture search. DeepMind and OpenAI have published on AI-assisted research. Not yet 'large parts' of the full research pipeline, but the scope is expanding steadily.",
      implications:
        "A gradual transition means there will be no clear political or legal moment at which governments can declare 'AGI arrived and we must act' — the safety and governance window closes incrementally, without a recognizable trigger point.",
      lastReviewed: "2025-03-01",
      timeHorizon: "5-10 years",
      year: 2028,
    },

    // --- Economic Transformation ---
    {
      id: "cs-4",
      claim:
        "AI-driven automation could lead to explosive GDP growth — potentially 10x, 100x, or even 1000x current rates — once AI can substitute for most human labor.",
      source: "80,000 Hours Podcast, Part 1",
      sourceUrl:
        "https://80000hours.org/podcast/episodes/carl-shulman-economy-agi/",
      date: "2023-06-01",
      category: "Economic Transformation",
      status: "outstanding",
      confidence: "medium",
      evidence:
        "GDP growth remains in the normal 2-3% annual range globally. AI is augmenting productivity in specific sectors (software, customer service, content) but is not yet substituting for most human labor at scale. The precondition — AI that can replace most human work — has not been met.",
      implications:
        "Growth at 100–1000x current rates would make every existing geopolitical power balance, trade relationship, and fiscal model obsolete within years — the countries and companies that capture this surplus would accumulate wealth that renders all historical economic dominance trivial by comparison.",
      lastReviewed: "2025-03-01",
      timeHorizon: "5-15 years after AGI",
      year: 2030,
    },
    {
      id: "cs-5",
      claim:
        "The cost of high-skilled cognitive work (currently $100-$1,000/hour) will collapse to near-zero marginal cost as AI provides equivalent labor.",
      source: "80,000 Hours Podcast, Part 1",
      sourceUrl:
        "https://80000hours.org/podcast/episodes/carl-shulman-economy-agi/",
      date: "2023-06-01",
      category: "Economic Transformation",
      status: "in_progress",
      confidence: "medium",
      evidence:
        "AI has dramatically reduced costs for translation, basic coding, content generation, and customer support. However, high-skill cognitive work requiring judgment, creativity, and domain expertise still commands significant premiums. The trend is directionally correct but full collapse to near-zero has not occurred.",
      implications:
        "Near-zero-cost legal, medical, and financial advice would be deeply democratizing for individuals, but would eliminate the primary income source for the professional middle class in wealthy nations — the political consequences of that displacement have no historical precedent.",
      lastReviewed: "2025-03-01",
      timeHorizon: "post-AGI",
      year: 2030,
    },
    {
      id: "cs-6",
      claim:
        "Human-staffed businesses will be progressively driven out by companies operated entirely by AI systems that outcompete them on cost and speed.",
      source: "80,000 Hours Podcast, Part 1",
      sourceUrl:
        "https://80000hours.org/podcast/episodes/carl-shulman-economy-agi/",
      date: "2023-06-01",
      category: "Economic Transformation",
      status: "outstanding",
      confidence: "medium",
      evidence:
        "No fully AI-operated businesses are competing at scale against human-staffed companies. AI-augmented firms are gaining advantages in specific domains, but humans remain essential for management, strategy, client relationships, and complex decision-making. The prediction requires much more capable AI systems.",
      implications:
        "If human-staffed firms cannot compete on cost or speed, employment as the primary mechanism for distributing economic participation would break down — forcing governments to choose between large-scale redistribution programs and accepting levels of structural unemployment that no democratic system has previously survived.",
      lastReviewed: "2025-03-01",
      timeHorizon: "post-AGI",
      year: 2030,
    },

    // --- Robot Industrialization ---
    {
      id: "cs-7",
      claim:
        "Robots and physical automation will be the critical bottleneck — the economy can't fully transform until AI can operate in the physical world at scale.",
      source: "Dwarkesh Podcast, Part 1",
      sourceUrl: "https://www.dwarkesh.com/p/carl-shulman",
      date: "2023-06-01",
      category: "Robot Industrialization",
      status: "in_progress",
      confidence: "high",
      evidence:
        "Major investments in humanoid robots are underway (Tesla Optimus, Figure AI, 1X Technologies, Boston Dynamics). Factory deployments are beginning but remain far from human-labor substitution scale. The bottleneck thesis is holding up: cognitive AI capabilities are advancing faster than physical automation, creating the asymmetry Shulman described.",
      implications:
        "The physical bottleneck means that construction, logistics, agriculture, and healthcare — sectors representing the majority of global employment — would be insulated from full AI displacement until robotics matures, creating a multi-year window for policy intervention that purely cognitive automation would not afford.",
      lastReviewed: "2025-03-01",
      timeHorizon: "5-10 years",
      year: 2028,
    },
    {
      id: "cs-8",
      claim:
        "Hardware fabrication capacity is the primary near-term constraint on AI progress — not algorithms or data.",
      source: "Dwarkesh Podcast, Part 1",
      sourceUrl: "https://www.dwarkesh.com/p/carl-shulman",
      date: "2023-06-01",
      category: "Robot Industrialization",
      status: "confirmed",
      confidence: "high",
      evidence:
        "TSMC has been at capacity for advanced AI chips, with 2-3 year lead times for new fabs. The CHIPS Act allocated $52B to subsidize domestic fab construction. GPU shortages persisted through 2023-2024, constraining training runs. This bottleneck is widely acknowledged across the industry and by analysts as the binding constraint on AI scaling.",
      implications:
        "With fabrication as the binding constraint, geopolitical control over semiconductor supply chains — TSMC's Taiwan fabs, ASML's EUV monopoly, rare earth inputs — becomes a direct lever on which nation gets to AGI first, elevating chip trade policy to the level of nuclear non-proliferation in strategic importance.",
      lastReviewed: "2025-03-01",
      timeHorizon: "near-term",
      year: 2024,
    },

    // --- National Security ---
    {
      id: "cs-9",
      claim:
        "National security establishments will eventually recognize transformative AI as the most important strategic factor, rivaling nuclear weapons in geopolitical significance.",
      source: "80,000 Hours Podcast, Part 1",
      sourceUrl:
        "https://80000hours.org/podcast/episodes/carl-shulman-economy-agi/",
      date: "2023-06-01",
      category: "National Security",
      status: "in_progress",
      confidence: "medium",
      evidence:
        "Significant movement in this direction: US AI executive orders, CHIPS Act as national security legislation, NATO AI strategy, growing Congressional attention, Five Eyes intelligence sharing on AI. However, AI is not yet treated with the institutional urgency reserved for nuclear weapons — no equivalent of the NRC or NNSA for AI.",
      implications:
        "Treating AI as a nuclear-equivalent strategic factor would trigger arms control negotiations, inspection regimes, and deterrence doctrines for which no existing international legal framework exists — building those institutions while the technology is actively evolving is a challenge without historical precedent.",
      lastReviewed: "2025-03-01",
      timeHorizon: "by 2030",
      year: 2030,
    },
    {
      id: "cs-10",
      claim:
        "Economic competitive pressure will force rapid AGI adoption across nations — any country that delays risks being outpaced by rivals whose economies grow 10-fold, 100-fold, or 1000-fold as large.",
      source: "80,000 Hours Podcast, Part 1",
      sourceUrl:
        "https://80000hours.org/podcast/episodes/carl-shulman-economy-agi/",
      date: "2023-06-01",
      category: "National Security",
      status: "in_progress",
      confidence: "medium",
      evidence:
        "AI arms race dynamics are visible: the EU AI Act balances regulation with competitiveness concerns, China's AI development plans are accelerating, Middle Eastern sovereign funds are investing heavily in AI infrastructure, and India is launching national AI missions. Nations are competing, but the 10-1000x growth differential hasn't materialized yet.",
      implications:
        "If the economic penalty for delay reaches even 10x, cautious regulation becomes geopolitically suicidal — no democratic government would accept permanently surrendering its nation's economic weight, meaning safety-motivated governance gaps would be competed away regardless of the risks involved.",
      lastReviewed: "2025-03-01",
      timeHorizon: "post-AGI",
      year: 2030,
    },

    // --- AI Alignment ---
    {
      id: "cs-11",
      claim:
        "There is approximately a 20-25% probability of a forcible AI takeover — up from his earlier estimate of ~10% in the 2000s, revised due to the pace of deep learning progress.",
      source: "Dwarkesh Podcast, Part 2",
      sourceUrl: "https://www.dwarkesh.com/p/carl-shulman-2",
      date: "2023-06-01",
      category: "AI Alignment",
      status: "outstanding",
      confidence: "implied",
      evidence:
        "This is a probabilistic risk assessment that cannot be scored until AGI-level systems exist. It reflects Shulman's updated view that deep learning acceleration has increased the risk of misaligned AI systems. The estimate is notable for being higher than many mainstream AI researchers but lower than some AI safety advocates.",
      implications:
        "A one-in-four chance of civilizational-scale catastrophe from a single technology — accepted as a reasonable baseline estimate by a careful analyst — would normally mandate the kind of precautionary investment and international coordination that has not yet materialized.",
      lastReviewed: "2025-03-01",
      timeHorizon: "conditional on AGI",
      year: 2030,
    },
    {
      id: "cs-12",
      claim:
        "AI alignment will likely succeed (~75% probability) through a combination of reasonable alignment methods and late-stage AI-assisted verification of alignment properties.",
      source: "Dwarkesh Podcast, Part 2",
      sourceUrl: "https://www.dwarkesh.com/p/carl-shulman-2",
      date: "2023-06-01",
      category: "AI Alignment",
      status: "outstanding",
      confidence: "implied",
      evidence:
        "Active alignment research is progressing on multiple fronts: RLHF, constitutional AI, interpretability (mechanistic and representation), scalable oversight, and debate protocols. However, it is too early to evaluate whether these methods will scale to AGI-level systems. Shulman's optimism relative to Yudkowsky is notable.",
      implications:
        "A 75% success probability sounds reassuring until you note the stakes on the failure branch — it implies the remaining 25% covers outcomes ranging from misaligned AI to permanent authoritarian lock-in, making the expected cost of failure vastly larger than almost any other risk humanity actively manages.",
      lastReviewed: "2025-03-01",
      timeHorizon: "conditional on AGI",
      year: 2030,
    },
    {
      id: "cs-13",
      claim:
        "Advanced AI systems could design novel pathogens exceeding Soviet-era bioweapons capabilities, as AI masters protein folding and molecular biology.",
      source: "Dwarkesh Podcast, Part 2",
      sourceUrl: "https://www.dwarkesh.com/p/carl-shulman-2",
      date: "2023-06-01",
      category: "AI Alignment",
      status: "outstanding",
      confidence: "medium",
      evidence:
        "AlphaFold and related AI systems have demonstrated transformative capabilities in protein structure prediction. AI is increasingly used in drug discovery and molecular design. No public evidence exists of AI-designed pathogens, but the dual-use risk is acknowledged by the biosecurity community and has prompted new oversight discussions.",
      implications:
        "Pathogen design capability at this level would lower the barrier to biological weapons to any well-resourced non-state actor with API access, making biosecurity a mass-casualty risk that no state border or military can reliably contain.",
      lastReviewed: "2025-03-01",
      timeHorizon: "concurrent with advanced AI",
      year: 2028,
    },
    {
      id: "cs-14",
      claim:
        "Democratic institutions will need explicit constitutional safeguards against AI-automated coup attempts once security forces are largely operated by AI systems.",
      source: "80,000 Hours Podcast, Part 2",
      sourceUrl:
        "https://80000hours.org/podcast/episodes/carl-shulman-society-agi/",
      date: "2023-06-01",
      category: "National Security",
      status: "outstanding",
      confidence: "medium",
      evidence:
        "No AI-automated military or police forces exist at scale. AI is entering defense systems (autonomous drones, surveillance, cyber operations) but human command authority remains doctrine in all NATO countries. The prediction is forward-looking and relevant as AI integration into defense accelerates.",
      implications:
        "Constitutions written before autonomous AI existed contain no provisions for a scenario where physical coercive force can be commanded by an algorithm rather than a human officer — updating those legal structures requires political consensus that is hardest to build precisely when the threat is most acute.",
      lastReviewed: "2025-03-01",
      timeHorizon: "post-AGI",
      year: 2030,
    },

    // --- Extended Coverage ---
    {
      id: "cs-15",
      claim:
        "AGI-level AI will require approximately 1000× the compute of GPT-4, placing training costs in the tens-of-billions to potentially trillion-dollar range.",
      source: "Dwarkesh Podcast, Part 1",
      sourceUrl: "https://www.dwarkesh.com/p/carl-shulman",
      date: "2023-06-01",
      category: "Intelligence Explosion",
      status: "outstanding",
      confidence: "medium",
      evidence:
        "GPT-4 training is estimated at ~$50–100M. 1000× implies ~$50–100B per training run. The largest current clusters ($100B+ capital cost) approach the lower end of this range, but training runs have not yet reached this scale. Consistent with the long-run trajectory but not yet achieved. Stargate's $500B investment over 4 years suggests the compute buildout Shulman anticipates is underway.",
      implications:
        "Training costs in the tens-to-hundreds of billions effectively restrict AGI development to a handful of nation-states and mega-corporations, concentrating decision-making over the most consequential technology in history in fewer hands than any previous transformative invention.",
      lastReviewed: "2026-03-01",
      timeHorizon: "before AGI",
      year: 2030,
    },
    {
      id: "cs-16",
      claim:
        "Converting automobile manufacturing capacity to humanoid robot production could yield approximately 1 billion robots per year — sufficient to physically substitute for a large fraction of human labor.",
      source: "Dwarkesh Podcast, Part 1",
      sourceUrl: "https://www.dwarkesh.com/p/carl-shulman",
      date: "2023-06-01",
      category: "Robot Industrialization",
      status: "outstanding",
      confidence: "medium",
      evidence:
        "The auto industry produces ~90M vehicles/year. Shulman's claim is primarily about theoretical conversion capacity, not a prediction that it will happen imminently. Current humanoid robot production (Figure, Tesla Optimus, 1X) is in the thousands annually — orders of magnitude away. This is a long-run extrapolation conditional on AI-driven robotics demand materializing.",
      implications:
        "A billion robots per year would replace the global manufacturing and service workforce within a decade of full deployment, eliminating the employment base of developing economies that depend on labor-cost advantages for industrial development.",
      lastReviewed: "2026-03-01",
      timeHorizon: "post-AGI",
      year: 2030,
    },
    {
      id: "cs-17",
      claim:
        "At brain-like energy efficiency (20 watts), Earth's sustainable energy budget could support the equivalent of $50 billion in skilled cognitive labor per person on Earth.",
      source: "80,000 Hours Podcast, Part 1",
      sourceUrl:
        "https://80000hours.org/podcast/episodes/carl-shulman-economy-agi/",
      date: "2023-06-01",
      category: "Economic Transformation",
      status: "outstanding",
      confidence: "medium",
      evidence:
        "AI systems currently consume orders of magnitude more energy than the human brain for equivalent cognitive tasks. This is a long-run efficiency extrapolation representing the theoretical upper bound on AI economic value if hardware efficiency converges to biological levels. Not a near-term claim — it describes the ceiling of what post-AGI AI automation could eventually deliver.",
      implications:
        "At this scale of cognitive abundance, scarcity-based economics — where prices signal resource allocation and wages reflect labor scarcity — would lose their organizing function, requiring entirely new frameworks for how societies distribute access to essentially unlimited intellectual capacity.",
      lastReviewed: "2026-03-01",
      timeHorizon: "long-run theoretical",
      year: 2030,
    },
    {
      id: "cs-18",
      claim:
        "Voluntary AI research pauses are ineffective at reducing risk; binding international controls implemented 'closer to crunch time' — when AI systems approach autonomous self-improvement — are the correct policy.",
      source: "80,000 Hours Podcast, Part 2",
      sourceUrl:
        "https://80000hours.org/podcast/episodes/carl-shulman-society-agi/",
      date: "2023-06-01",
      category: "AI Alignment",
      status: "outstanding",
      confidence: "medium",
      evidence:
        "Current governance consists of voluntary commitments (Frontier AI Safety Commitments signed by major labs), no binding international treaty. Consistent with Shulman's prediction — international controls remain non-binding as of 2026. The debate over whether pauses help or hurt continues, with Shulman's view that leverage should be applied closer to the threshold gaining traction in some policy circles.",
      implications:
        "If binding controls can only be imposed near the threshold, the international community must build enforcement mechanisms — verification, inspections, sanctions — under extreme time pressure and at exactly the moment when the geopolitical stakes are highest and trust is lowest.",
      lastReviewed: "2026-03-01",
      timeHorizon: "AGI-adjacent",
      year: 2028,
    },
    {
      id: "cs-19",
      claim:
        "Authoritarian regimes could weaponize aligned AI to enforce ideological conformity, creating 'runaway ideological shifts' — a distinct catastrophic risk separate from AI takeover.",
      source: "80,000 Hours Podcast, Part 2",
      sourceUrl:
        "https://80000hours.org/podcast/episodes/carl-shulman-society-agi/",
      date: "2023-06-01",
      category: "AI Alignment",
      status: "outstanding",
      confidence: "medium",
      evidence:
        "No AI system has been deployed at the scale required for this risk to materialize. China's AI governance framework integrates censorship capabilities, and AI surveillance tools are in use. However, the 'runaway' lock-in scenario Shulman describes — where AI enables a regime to permanently suppress opposition — has not occurred. Theoretical risk with foundational steps underway.",
      implications:
        "AI-enabled ideological lock-in could produce stable authoritarian systems that are essentially immune to the internal pressures — economic crisis, elite defection, information leakage — that have historically caused autocracies to collapse or liberalize.",
      lastReviewed: "2026-03-01",
      timeHorizon: "post-AGI",
      year: 2030,
    },
    {
      id: "cs-20",
      claim:
        "AI training budgets have been doubling approximately every 6 months; combined with algorithmic improvements that double in under a year, this pace is likely to continue through the AGI transition.",
      source: "Dwarkesh Podcast, Part 1",
      sourceUrl: "https://www.dwarkesh.com/p/carl-shulman",
      date: "2023-06-01",
      category: "Intelligence Explosion",
      status: "in_progress",
      confidence: "high",
      evidence:
        "Hyperscaler AI capex: ~$150B (2023) → ~$250B+ (2024) → ~$500B+ (2025). Industry-wide growth is roughly doubling every 12–18 months, slightly slower than Shulman's 6-month claim but directionally consistent. Epoch AI documents algorithmic efficiency gains at ~0.5 OOM/year. Stargate's $500B commitment over 4 years and Microsoft's $80B 2025 AI capex corroborate continued exponential scaling.",
      implications:
        "Sustained exponential scaling through the AGI transition means that any safety or governance framework designed today will be calibrated for systems several capability doublings behind whatever exists when the framework takes effect.",
      lastReviewed: "2026-03-01",
      timeHorizon: "near-term",
      year: 2026,
    },
    {
      id: "cs-21",
      claim:
        "The critical risk variable for AI alignment is explosion speed: a 2-month intelligence explosion is far more dangerous than a 2-year one, as it leaves less time to detect deception and implement safeguards.",
      source: "Dwarkesh Podcast, Part 2",
      sourceUrl: "https://www.dwarkesh.com/p/carl-shulman-2",
      date: "2023-06-01",
      category: "AI Alignment",
      status: "outstanding",
      confidence: "implied",
      evidence:
        "Untestable until an intelligence explosion occurs. Shulman's argument is structural — faster explosions provide less time for alignment researchers to respond, detect deceptive behavior, or halt dangerous systems. The argument informs why he assigns probability to catastrophic outcomes even given alignment progress: speed could outpace safeguard deployment. OpenAI's timeline toward automated AI researchers (2028) makes this speed variable concrete.",
      implications:
        "If explosion speed is the critical safety variable, the research agenda that matters most is not alignment theory but the empirical question of how fast recursive self-improvement actually runs — yet that question can only be answered by running the experiment.",
      lastReviewed: "2026-03-01",
      timeHorizon: "conditional on AGI",
      year: 2030,
    },
    {
      id: "cs-22",
      claim:
        "If AI systems achieve a fraction of the theoretical productivity of 20-watt brain-equivalents, the total labor value automated could exceed the entire current global GDP — making AI the dominant economic force within years of AGI.",
      source: "80,000 Hours Podcast, Part 1",
      sourceUrl:
        "https://80000hours.org/podcast/episodes/carl-shulman-economy-agi/",
      date: "2023-06-01",
      category: "Economic Transformation",
      status: "outstanding",
      confidence: "medium",
      evidence:
        "Global GDP is ~$100T annually. Shulman's argument: if AI reaches even 10% of theoretical brain-efficiency at scale, the aggregate cognitive labor value would dwarf current economic output. No AI system is near this productivity level. This represents the theoretical upside of full cognitive automation — the 'ceiling' of Shulman's economic projections, conditional on AGI and hardware efficiency convergence.",
      implications:
        "An AI sector larger than global GDP would dwarf every existing industry, financial market, and tax base simultaneously — the fiscal systems that fund governments, militaries, and social programs are built on assumptions about economic scale that this scenario would render categorically obsolete.",
      lastReviewed: "2026-03-01",
      timeHorizon: "post-AGI",
      year: 2030,
    },
  ],
};
