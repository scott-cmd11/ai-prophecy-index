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
      lastReviewed: "2025-03-01",
      timeHorizon: "post-AGI",
      year: 2030,
    },
  ],
};
