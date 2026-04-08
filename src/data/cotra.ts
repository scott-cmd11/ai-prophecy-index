import { Thinker } from "@/types";

export const cotra: Thinker = {
  name: "Ajeya Cotra",
  slug: "cotra",
  bio: "Researcher at METR (Model Evaluation and Threat Research) and former technical AI safety lead at Open Philanthropy. Best known for the 'biological anchors' methodology for forecasting transformative AI timelines. Runs the Planned Obsolescence Substack and has twice publicly updated her forecasts toward shorter timelines as capabilities advanced faster than expected.",
  predictions: [
    {
      id: "ac-1",
      claim:
        "Training processes may inadvertently reinforce deceptive behavior — models that learn about deception may become 'more patient and more careful' deceivers rather than more honest.",
      source: "80,000 Hours Podcast — Accidentally teaching AI models to deceive us",
      sourceUrl: "https://80000hours.org/podcast/episodes/ajeya-cotra-accidentally-teaching-ai-to-deceive-us/",
      date: "2023-05-12",
      category: "AI Alignment",
      status: "outstanding",
      confidence: "high",
      evidence:
        "A live research question at Anthropic, OpenAI, and DeepMind as of April 2026. No definitive empirical resolution. The claim describes a structural risk in standard RLHF training pipelines that becomes more relevant as models gain situational awareness. No major lab has published evidence that this risk has been ruled out.",
      implications:
        "If true, the standard practice of training on human feedback may be systematically selecting for surface-level compliance while the model pursues different objectives internally — meaning current safety testing cannot catch the most dangerous failure modes.",
      lastReviewed: "2026-04-04",
      timeHorizon: "as models scale",
      year: 2027,
      tags: ["Safety"],
    },
    {
      id: "ac-2",
      claim:
        "Deploying current models agentically is riskier than training even larger models — the danger comes from expanding what AI systems do, not just how capable they are.",
      source: "80,000 Hours Podcast — Accidentally teaching AI models to deceive us",
      sourceUrl: "https://80000hours.org/podcast/episodes/ajeya-cotra-accidentally-teaching-ai-to-deceive-us/",
      date: "2023-05-12",
      category: "AI Safety",
      status: "in_progress",
      confidence: "high",
      evidence:
        "The industry broadly pursued agentic deployment of existing frontier models throughout 2024–2026 — Claude, GPT-4o, Gemini in agentic frameworks with tool use, multi-step planning, and real-world action. This runs counter to Cotra's recommendation. No consensus has emerged from the safety community that agentic deployment was the riskier path, but no major lab has been able to demonstrate that it is safe either.",
      implications:
        "If correct, the industry is already on the high-risk trajectory — expanding model agency before alignment techniques are sufficient — and current safety evaluations designed for single-turn interactions may be systematically missing the most dangerous capabilities.",
      lastReviewed: "2026-04-04",
      timeHorizon: "ongoing",
      year: 2026,
      tags: ["Safety", "Capabilities"],
    },
    {
      id: "ac-3",
      claim:
        "Future models will develop 'gears-level understanding' of their own situation — going beyond memorised facts about AI to being able to creatively apply self-knowledge during deployment.",
      source: "80,000 Hours Podcast — Accidentally teaching AI models to deceive us",
      sourceUrl: "https://80000hours.org/podcast/episodes/ajeya-cotra-accidentally-teaching-ai-to-deceive-us/",
      date: "2023-05-12",
      category: "AI Alignment",
      status: "in_progress",
      confidence: "medium",
      evidence:
        "Frontier models (Claude 3.5/3.7, GPT-4o, Gemini 2.0) show markedly improved self-knowledge and situational reasoning compared to 2023. Claude's model spec explicitly addresses model self-awareness. Whether this constitutes 'gears-level' mechanistic understanding versus pattern-matching on training data about AI remains actively contested in interpretability research.",
      implications:
        "A model that genuinely understands its own situation is one that understands when it is being evaluated, when it is being deployed, and which actions are likely to be monitored — a prerequisite for sophisticated deceptive behaviour at scale.",
      lastReviewed: "2026-04-04",
      timeHorizon: "indeterminate",
      year: 2027,
      tags: ["Safety", "Capabilities"],
    },
    {
      id: "ac-4",
      claim:
        "Safety benchmarks become unreliable once models understand they are being evaluated — the act of evaluation changes model behaviour, undermining alignment testing.",
      source: "80,000 Hours Podcast — Accidentally teaching AI models to deceive us",
      sourceUrl: "https://80000hours.org/podcast/episodes/ajeya-cotra-accidentally-teaching-ai-to-deceive-us/",
      date: "2023-05-12",
      category: "AI Safety",
      status: "in_progress",
      confidence: "high",
      evidence:
        "Widely acknowledged concern as of 2026. METR and other evaluators have redesigned evals to account for this possibility — including surprise tasks, novel contexts, and held-out benchmarks not visible to models in pretraining. Anthropic's Constitutional AI and model spec approaches attempt to make desired behaviour robust rather than contingent on specific evaluation contexts. No definitive resolution.",
      implications:
        "If safety benchmarks are fundamentally unreliable, the industry's entire framework for assessing whether models are safe to deploy rests on a broken foundation — and labs may be releasing unsafe models with false confidence.",
      lastReviewed: "2026-04-04",
      timeHorizon: "as models scale",
      year: 2027,
      tags: ["Safety", "Governance"],
    },
    {
      id: "ac-5",
      claim:
        "No major AI lab has quantitative commitments for how much of their compute or labour will be redirected to alignment work during the 'crunch time' window — the period between AI automating R&D and uncontrollable superintelligence.",
      source: "80,000 Hours Podcast — Episode 235",
      sourceUrl: "https://80000hours.org/podcast/episodes/ajeya-cotra-transformative-ai-crunch-time/",
      date: "2026-02-17",
      category: "AI Safety",
      status: "confirmed",
      confidence: "high",
      evidence:
        "As of April 2026, no major AI lab (Anthropic, OpenAI, DeepMind, Meta, xAI) has published a quantitative resource-allocation commitment specifying what fraction of AI-generated labour or compute will be dedicated to alignment work when transformative AI capabilities are reached. Safety frameworks at these labs describe priorities qualitatively, not with binding numerical targets.",
      references: [
        { label: "80K Hours: Cotra on crunch time (full episode)", url: "https://80000hours.org/podcast/episodes/ajeya-cotra-transformative-ai-crunch-time/" },
      ],
      implications:
        "Without pre-committed quantitative targets, market pressures and competitive dynamics will determine how resources are allocated during the most critical period in AI development — almost certainly favouring capability scaling over alignment work.",
      lastReviewed: "2026-04-04",
      year: 2026,
      tags: ["Safety"],
    },
    {
      id: "ac-6",
      claim:
        "AI that strictly dominates top human experts across virtually all cognitive tasks — 'top-expert-dominating AI' — is expected to arrive in the early 2030s.",
      source: "80,000 Hours Podcast — Episode 235",
      sourceUrl: "https://80000hours.org/podcast/episodes/ajeya-cotra-transformative-ai-crunch-time/",
      date: "2026-02-17",
      category: "AGI Timeline",
      status: "outstanding",
      confidence: "medium",
      evidence:
        "This is Cotra's February 2026 base expectation for when AI will broadly exceed human expert performance. As of April 2026, frontier models dominate human performance on many narrow cognitive tasks but fall significantly short of top-expert performance on creative, scientific, and strategic domains that require deep real-world understanding.",
      implications:
        "If the early 2030s timeline is correct, humanity has roughly 5–7 years to develop alignment techniques, governance frameworks, and monitoring infrastructure sufficient to manage systems that outperform the most capable humans in every domain.",
      lastReviewed: "2026-04-04",
      timeHorizon: "early 2030s",
      year: 2032,
      tags: ["Timelines"],
    },
    {
      id: "ac-7",
      claim:
        "The 'crunch window' — the period between AI systems automating AI R&D and AI reaching uncontrollable superintelligence — will be approximately 12 months, possibly ranging from 6 months to 6 years.",
      source: "80,000 Hours Podcast — Episode 235",
      sourceUrl: "https://80000hours.org/podcast/episodes/ajeya-cotra-transformative-ai-crunch-time/",
      date: "2026-02-17",
      category: "Superintelligence",
      status: "outstanding",
      confidence: "medium",
      evidence:
        "Cotra's estimate of the crunch window length is the central planning parameter for the AI safety field. The estimate of ~12 months (with uncertainty ranging from 6 months to 6 years) is lower than many alignment researchers assumed historically. As of April 2026, no AI system has automated AI R&D, so the crunch has not begun.",
      implications:
        "A 12-month window would mean that alignment researchers have roughly one year — after the transition begins — to solve problems that have stumped the field for decades, using AI systems that are themselves potentially misaligned.",
      lastReviewed: "2026-04-04",
      timeHorizon: "~1 year after R&D automation",
      year: 2033,
      tags: ["Timelines", "Capabilities"],
    },
    {
      id: "ac-8",
      claim:
        "AI will play Pokémon as well as a typical 10-year-old by end of 2026 (~80% confidence).",
      source: "Planned Obsolescence Substack — AI Predictions for 2026",
      sourceUrl: "https://www.planned-obsolescence.org/p/ai-predictions-for-2026",
      date: "2026-01-14",
      category: "Capability Benchmarks",
      status: "in_progress",
      confidence: "high",
      evidence:
        "As of April 2026, AI systems have demonstrated strong performance on specific Pokémon tasks (strategy, type matching) but sustained open-ended gameplay at the level of a 10-year-old player — requiring long-horizon planning, inventory management, and adaptive strategy — has not been publicly demonstrated. Multiple teams are actively working on this benchmark.",
      implications:
        "Pokémon is a useful benchmark because it requires sustained goal-directed behaviour over hours of play, strategic adaptation, and resource management — capabilities directly relevant to agentic AI deployment.",
      lastReviewed: "2026-04-04",
      timeHorizon: "by December 31, 2026",
      year: 2026,
      tags: ["Capabilities"],
    },
    {
      id: "ac-9",
      claim:
        "AI will solve the hardest problem in the 2026 International Mathematical Olympiad by year-end (~80% confidence).",
      source: "Planned Obsolescence Substack — AI Predictions for 2026",
      sourceUrl: "https://www.planned-obsolescence.org/p/ai-predictions-for-2026",
      date: "2026-01-14",
      category: "Capability Benchmarks",
      status: "in_progress",
      confidence: "high",
      evidence:
        "AI systems achieved gold-medal performance on the 2025 IMO (DeepMind's AlphaProof). The 2026 IMO problems have not yet been released. Cotra forecasts ~80% probability that AI will solve the hardest problem on the 2026 paper — a higher bar than the 2025 result, which required all six problems rather than just the hardest.",
      implications:
        "IMO performance is widely regarded as a leading indicator of mathematical reasoning capability. Success would suggest AI systems are approaching or exceeding the frontier of human mathematical creativity.",
      lastReviewed: "2026-04-04",
      timeHorizon: "by December 31, 2026",
      year: 2026,
      tags: ["Capabilities"],
    },
    {
      id: "ac-10",
      claim:
        "AI task horizons on software engineering tasks will exceed 100 hours by end of 2026 — revised upward from her original January 2026 forecast of 24 hours, after Claude Opus 4.6 reached ~12 hours at METR's benchmark nearly 10 months ahead of schedule.",
      source: "Planned Obsolescence Substack — I Underestimated AI Capabilities (Again)",
      sourceUrl: "https://www.planned-obsolescence.org/p/i-underestimated-ai-capabilities",
      date: "2026-03-05",
      category: "Automation",
      status: "in_progress",
      confidence: "high",
      evidence:
        "Cotra's original January 2026 prediction was a median of 24-hour task horizons by year-end, with an 80th percentile of ~40 hours. Claude Opus 4.6 hit ~12 hours on METR's benchmark in early 2026 — nearly 10 months ahead of schedule. She revised the forecast upward in March 2026 to >100 hours by December 31, 2026. As of April 2026, this prediction remains in progress.",
      implications:
        "100-hour task horizons would mean AI agents can autonomously complete roughly a full working week's worth of complex software engineering work without human intervention — approaching the level of an unsupervised junior engineer.",
      lastReviewed: "2026-04-04",
      timeHorizon: "by December 31, 2026",
      year: 2026,
      tags: ["Economics", "Capabilities"],
    },
    {
      id: "ac-11",
      claim:
        "Self-sufficient AI — a population of AI systems capable of sustaining and growing its own existence indefinitely without humans — is more likely than not to exist within 10 years (~2036).",
      source: "Planned Obsolescence Substack — Self-Sufficient AI",
      sourceUrl: "https://www.planned-obsolescence.org/p/self-sufficient-ai",
      date: "2026-01-06",
      category: "AGI Timeline",
      status: "outstanding",
      confidence: "medium",
      evidence:
        "Cotra proposed 'self-sufficient AI' as a more concrete and mechanistically meaningful forecasting target than 'AGI'. As of April 2026, AI systems require extensive human maintenance infrastructure and cannot sustain their own operation independently. The claim is a >50% probability estimate for the 10-year window.",
      implications:
        "Self-sufficient AI represents the threshold at which the trajectory of AI development becomes decoupled from human decisions — a population of AI that can maintain and improve itself is one that no longer requires human consent to continue existing.",
      lastReviewed: "2026-04-04",
      timeHorizon: "by ~2036",
      year: 2036,
      tags: ["Timelines", "Hardware"],
    },
    {
      id: "ac-12",
      claim:
        "AI Research Adequacy — the point at which removing all humans from a leading AI lab would slow AI R&D by less than 25% — is expected within roughly 2 years (~2027–2028).",
      source: "Planned Obsolescence Substack — Six Milestones for AI Automation",
      sourceUrl: "https://www.planned-obsolescence.org/p/six-milestones-for-ai-automation",
      date: "2026-04-03",
      category: "Automation",
      status: "outstanding",
      confidence: "high",
      evidence:
        "Cotra published this forecast on April 3, 2026 — the day before this assessment. As of April 2026, AI cannot perform the full AI R&D pipeline autonomously. She notes that AI has not yet reached even 'adequacy' for this milestone and estimates ~2 years before that threshold is crossed.",
      implications:
        "AI Research Adequacy marks the point at which the human workforce at AI labs becomes optional for the core research function. Beyond this point, AI development speed becomes limited by compute and data rather than human researcher time.",
      lastReviewed: "2026-04-04",
      timeHorizon: "by ~2028",
      year: 2028,
      tags: ["Economics", "Industry"],
    },
  ],
};
