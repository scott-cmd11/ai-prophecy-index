import { AIEvent } from "@/types";

export const events: AIEvent[] = [
  // 2022
  {
    id: "evt-2022-chatgpt",
    date: "2022-11-30",
    year: 2022,
    title: "ChatGPT released",
    summary:
      "OpenAI launches ChatGPT as a free research preview, reaching 1M users in five days and kicking off the public generative-AI era.",
    category: "release",
    source: "OpenAI",
    sourceUrl: "https://openai.com/index/chatgpt/",
  },

  // 2023
  {
    id: "evt-2023-gpt4",
    date: "2023-03-14",
    year: 2023,
    title: "GPT-4 released",
    summary:
      "OpenAI releases GPT-4, a large multimodal model with substantial gains on professional and academic benchmarks.",
    category: "release",
    source: "OpenAI",
    sourceUrl: "https://openai.com/index/gpt-4-research/",
  },
  {
    id: "evt-2023-fli-letter",
    date: "2023-03-22",
    year: 2023,
    title: "FLI open letter calls for 6-month pause",
    summary:
      "Over 1,000 signatories including Musk and Wozniak call for a training pause on systems more powerful than GPT-4.",
    category: "safety",
    source: "Future of Life Institute",
    sourceUrl: "https://futureoflife.org/open-letter/pause-giant-ai-experiments/",
  },
  {
    id: "evt-2023-cais-statement",
    date: "2023-05-30",
    year: 2023,
    title: "CAIS extinction-risk statement",
    summary:
      "Hinton, Bengio, Altman, Hassabis and hundreds of researchers sign a one-sentence statement calling AI extinction risk a global priority.",
    category: "safety",
    source: "Center for AI Safety",
    sourceUrl: "https://www.safe.ai/work/statement-on-ai-risk",
  },
  {
    id: "evt-2023-claude2",
    date: "2023-07-11",
    year: 2023,
    title: "Claude 2 released",
    summary:
      "Anthropic releases Claude 2 with a 100K-token context window and improved coding and reasoning performance.",
    category: "release",
    source: "Anthropic",
    sourceUrl: "https://www.anthropic.com/news/claude-2",
  },
  {
    id: "evt-2023-llama2",
    date: "2023-07-18",
    year: 2023,
    title: "Llama 2 open-weighted",
    summary:
      "Meta releases Llama 2 with a commercial-use license, establishing a credible open-weight frontier alternative.",
    category: "release",
    source: "Meta",
    sourceUrl: "https://ai.meta.com/llama/",
  },
  {
    id: "evt-2023-biden-eo",
    date: "2023-10-30",
    year: 2023,
    title: "Biden AI Executive Order",
    summary:
      "EO 14110 imposes safety-test reporting for frontier models trained above a compute threshold and directs NIST to develop red-teaming standards.",
    category: "policy",
    source: "The White House",
    sourceUrl:
      "https://bidenwhitehouse.archives.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/",
  },
  {
    id: "evt-2023-bletchley",
    date: "2023-11-01",
    year: 2023,
    title: "Bletchley AI Safety Summit",
    summary:
      "28 countries and the EU sign the Bletchley Declaration on frontier AI risks; UK and US announce national AI Safety Institutes.",
    category: "policy",
    source: "UK Government",
    sourceUrl:
      "https://www.gov.uk/government/publications/ai-safety-summit-2023-the-bletchley-declaration",
  },
  {
    id: "evt-2023-openai-board",
    date: "2023-11-17",
    year: 2023,
    title: "OpenAI board ousts Altman, then reinstates",
    summary:
      "The OpenAI board fires Sam Altman; after a staff revolt and Microsoft pressure, he returns five days later with a reconstituted board.",
    category: "safety",
    source: "The New York Times",
    sourceUrl:
      "https://www.nytimes.com/2023/11/21/technology/openai-sam-altman-returns.html",
  },
  {
    id: "evt-2023-gemini1",
    date: "2023-12-06",
    year: 2023,
    title: "Gemini 1.0 announced",
    summary:
      "Google DeepMind announces Gemini Ultra/Pro/Nano, claiming frontier benchmark results and native multimodality.",
    category: "release",
    source: "Google DeepMind",
    sourceUrl: "https://blog.google/technology/ai/google-gemini-ai/",
  },
  {
    id: "evt-2023-eu-ai-act-deal",
    date: "2023-12-08",
    year: 2023,
    title: "EU AI Act political agreement",
    summary:
      "Trilogue negotiators reach a provisional deal on the world's first horizontal AI regulation, including rules for general-purpose models.",
    category: "policy",
    source: "European Parliament",
    sourceUrl:
      "https://www.europarl.europa.eu/news/en/press-room/20231206IPR15699/artificial-intelligence-act-deal-on-comprehensive-rules-for-trustworthy-ai",
  },

  // 2024
  {
    id: "evt-2024-sora",
    date: "2024-02-15",
    year: 2024,
    title: "Sora text-to-video demoed",
    summary:
      "OpenAI previews Sora, a diffusion transformer capable of minute-long coherent video from text prompts.",
    category: "release",
    source: "OpenAI",
    sourceUrl: "https://openai.com/index/sora/",
  },
  {
    id: "evt-2024-claude3",
    date: "2024-03-04",
    year: 2024,
    title: "Claude 3 family released",
    summary:
      "Anthropic releases Haiku, Sonnet, and Opus — Opus claims state-of-the-art results on graduate reasoning benchmarks.",
    category: "release",
    source: "Anthropic",
    sourceUrl: "https://www.anthropic.com/news/claude-3-family",
  },
  {
    id: "evt-2024-eu-ai-act-adopted",
    date: "2024-03-13",
    year: 2024,
    title: "EU Parliament adopts AI Act",
    summary:
      "European Parliament formally adopts the AI Act; it enters into force August 2024 with phased obligations through 2027.",
    category: "policy",
    source: "European Parliament",
    sourceUrl:
      "https://www.europarl.europa.eu/news/en/press-room/20240308IPR19015/artificial-intelligence-act-meps-adopt-landmark-law",
  },
  {
    id: "evt-2024-gpt4o",
    date: "2024-05-13",
    year: 2024,
    title: "GPT-4o released",
    summary:
      "OpenAI launches GPT-4o, a natively multimodal model with voice, vision, and text in a single architecture at half the prior API cost.",
    category: "release",
    source: "OpenAI",
    sourceUrl: "https://openai.com/index/hello-gpt-4o/",
  },
  {
    id: "evt-2024-llama3-405b",
    date: "2024-07-23",
    year: 2024,
    title: "Llama 3.1 405B open-weighted",
    summary:
      "Meta releases a 405B-parameter open-weight model, the first to credibly match closed frontier models on major benchmarks.",
    category: "release",
    source: "Meta",
    sourceUrl: "https://ai.meta.com/blog/meta-llama-3-1/",
  },
  {
    id: "evt-2024-o1-preview",
    date: "2024-09-12",
    year: 2024,
    title: "OpenAI o1-preview — reasoning era",
    summary:
      "OpenAI launches o1-preview, a chain-of-thought reasoning model that dramatically outperforms GPT-4o on math and coding.",
    category: "release",
    source: "OpenAI",
    sourceUrl: "https://openai.com/index/learning-to-reason-with-llms/",
  },
  {
    id: "evt-2024-o1",
    date: "2024-12-05",
    year: 2024,
    title: "OpenAI o1 general release",
    summary:
      "Full o1 launches with stronger reasoning and the first $200/mo ChatGPT Pro tier.",
    category: "release",
    source: "OpenAI",
    sourceUrl: "https://openai.com/index/openai-o1-system-card/",
  },
  {
    id: "evt-2024-gemini2",
    date: "2024-12-11",
    year: 2024,
    title: "Gemini 2.0 Flash released",
    summary:
      "Google launches Gemini 2.0 Flash with native tool use, multimodal output, and a new agentic Project Astra preview.",
    category: "release",
    source: "Google DeepMind",
    sourceUrl: "https://blog.google/technology/google-deepmind/google-gemini-ai-update-december-2024/",
  },
  {
    id: "evt-2024-o3-arc",
    date: "2024-12-20",
    year: 2024,
    title: "o3 preview saturates ARC-AGI",
    summary:
      "OpenAI previews o3 with an 87.5% score on ARC-AGI, a benchmark designed to resist brute-force scaling.",
    category: "safety",
    source: "ARC Prize",
    sourceUrl: "https://arcprize.org/blog/oai-o3-pub-breakthrough",
  },

  // 2025
  {
    id: "evt-2025-deepseek-r1",
    date: "2025-01-20",
    year: 2025,
    title: "DeepSeek R1 released",
    summary:
      "Chinese lab DeepSeek open-weights a reasoning model competitive with o1 at a fraction of reported training cost, rattling US markets.",
    category: "release",
    source: "DeepSeek",
    sourceUrl: "https://api-docs.deepseek.com/news/news250120",
  },
  {
    id: "evt-2025-stargate",
    date: "2025-01-21",
    year: 2025,
    title: "Stargate $500B announced",
    summary:
      "OpenAI, Oracle, SoftBank, and MGX announce a $500B US AI infrastructure joint venture at the White House.",
    category: "policy",
    source: "The White House",
    sourceUrl: "https://www.whitehouse.gov/briefings-statements/2025/01/remarks-by-president-trump-on-the-stargate-initiative/",
  },
  {
    id: "evt-2025-trump-eo",
    date: "2025-01-23",
    year: 2025,
    title: "Trump rescinds Biden AI EO",
    summary:
      "EO 14179 revokes the 2023 Biden executive order and directs an action plan prioritizing AI dominance over safety rules.",
    category: "policy",
    source: "The White House",
    sourceUrl:
      "https://www.whitehouse.gov/presidential-actions/2025/01/removing-barriers-to-american-leadership-in-artificial-intelligence/",
  },
  {
    id: "evt-2025-claude37",
    date: "2025-02-24",
    year: 2025,
    title: "Claude 3.7 Sonnet released",
    summary:
      "Anthropic releases the first hybrid reasoning model with a toggleable extended-thinking mode and strong SWE-bench results.",
    category: "release",
    source: "Anthropic",
    sourceUrl: "https://www.anthropic.com/news/claude-3-7-sonnet",
  },
  {
    id: "evt-2025-gpt45",
    date: "2025-02-27",
    year: 2025,
    title: "GPT-4.5 released",
    summary:
      "OpenAI's largest pretrained model ships as a research preview, emphasizing knowledge and writing quality over reasoning.",
    category: "release",
    source: "OpenAI",
    sourceUrl: "https://openai.com/index/introducing-gpt-4-5/",
  },
  {
    id: "evt-2025-claude4",
    date: "2025-05-22",
    year: 2025,
    title: "Claude Opus 4 & Sonnet 4",
    summary:
      "Anthropic launches Claude 4, with Opus 4 positioned as the top coding model and multi-hour agentic workloads.",
    category: "release",
    source: "Anthropic",
    sourceUrl: "https://www.anthropic.com/news/claude-4",
  },
  {
    id: "evt-2025-gpt5",
    date: "2025-08-07",
    year: 2025,
    title: "GPT-5 released",
    summary:
      "OpenAI launches GPT-5 as a unified reasoning+fast model router, standard for all ChatGPT users.",
    category: "release",
    source: "OpenAI",
    sourceUrl: "https://openai.com/index/introducing-gpt-5/",
  },
  {
    id: "evt-2025-claude-sonnet-45",
    date: "2025-09-29",
    year: 2025,
    title: "Claude Sonnet 4.5 released",
    summary:
      "Anthropic ships Sonnet 4.5 with new agent-context tooling and leading SWE-bench Verified scores.",
    category: "release",
    source: "Anthropic",
    sourceUrl: "https://www.anthropic.com/news/claude-sonnet-4-5",
  },
  {
    id: "evt-2025-gemini3",
    date: "2025-11-18",
    year: 2025,
    title: "Gemini 3 released",
    summary:
      "Google launches Gemini 3 with a new reasoning mode and generative UI capabilities across Search and Workspace.",
    category: "release",
    source: "Google",
    sourceUrl: "https://blog.google/technology/google-deepmind/gemini-3/",
  },
  {
    id: "evt-2025-genesis-mission",
    date: "2025-11-24",
    year: 2025,
    title: "Genesis Mission Executive Order",
    summary:
      "Trump EO directs the DOE and its 17 National Laboratories to build an integrated AI-driven scientific discovery platform, framed as a Manhattan-Project-scale effort.",
    category: "policy",
    source: "The White House",
    sourceUrl:
      "https://www.whitehouse.gov/presidential-actions/2025/11/launching-the-genesis-mission/",
  },
  {
    id: "evt-2025-claude-opus-45",
    date: "2025-11-24",
    year: 2025,
    title: "Claude Opus 4.5 released",
    summary:
      "Anthropic launches Opus 4.5 with stronger agentic coding, better long-task reliability, and improved reasoning on Humanity's Last Exam.",
    category: "release",
    source: "Anthropic",
    sourceUrl: "https://www.anthropic.com/news/claude-opus-4-5",
  },

  // 2026
  {
    id: "evt-2026-ding-conviction",
    date: "2026-01-30",
    year: 2026,
    title: "First AI-related economic espionage conviction",
    summary:
      "Former Google engineer Linwei Ding is convicted on 14 counts for stealing thousands of pages of TPU/GPU architecture trade secrets for Chinese companies — the DOJ's first AI-related economic espionage conviction.",
    category: "policy",
    source: "U.S. Department of Justice",
    sourceUrl:
      "https://www.justice.gov/opa/pr/former-google-engineer-found-guilty-economic-espionage-and-theft-confidential-ai-technology",
  },
  {
    id: "evt-2026-claude-opus-46",
    date: "2026-02-05",
    year: 2026,
    title: "Claude Opus 4.6 released",
    summary:
      "Anthropic ships Opus 4.6 with a 1M-token context beta, stronger agentic coding in larger codebases, and top scores on Terminal-Bench 2.0 and Humanity's Last Exam.",
    category: "release",
    source: "Anthropic",
    sourceUrl: "https://www.anthropic.com/news/claude-opus-4-6",
  },
  {
    id: "evt-2026-mythos",
    date: "2026-04-07",
    year: 2026,
    title: "Claude Mythos Preview & Project Glasswing",
    summary:
      "Anthropic unveils Claude Mythos Preview — a model that found thousands of zero-days across major OSes and browsers — and restricts access through Project Glasswing, releasing it only to critical infrastructure partners and open-source defenders.",
    category: "safety",
    source: "Anthropic",
    sourceUrl: "https://red.anthropic.com/2026/mythos-preview/",
  },
  {
    id: "evt-2026-altman-industrial-policy",
    date: "2026-04-06",
    year: 2026,
    title: "Altman publishes \"Industrial Policy for the Intelligence Age\"",
    summary:
      "Sam Altman releases a 13-page blueprint invoking Progressive Era and New Deal framing, proposing a Public Wealth Fund, robot taxes, a payroll-to-capital tax shift, a 32-hour workweek pilot, and automatic safety-net triggers — the first time a frontier-lab CEO has publicly proposed state-scale redistribution mechanisms.",
    category: "policy",
    source: "The Hill",
    sourceUrl:
      "https://thehill.com/policy/technology/5817906-openai-ai-policy-recommendations/",
  },
  {
    id: "evt-2026-opus-47",
    date: "2026-04-16",
    year: 2026,
    title: "Claude Opus 4.7 released",
    summary:
      "Anthropic ships Opus 4.7 and publicly concedes it trails the still-unreleased Mythos Preview on key cyber and coding benchmarks — a rare admission that the gated model is the frontier.",
    category: "release",
    source: "Axios",
    sourceUrl:
      "https://www.axios.com/2026/04/16/anthropic-claude-opus-model-mythos",
  },
  {
    id: "evt-2026-wh-china-theft",
    date: "2026-04-23",
    year: 2026,
    title: "White House alleges \"industrial-scale\" China AI theft",
    summary:
      "An OSTP memo by director Michael Kratsios accuses China-based entities of running coordinated campaigns to distil US frontier models — using tens of thousands of proxy accounts and jailbreaks to extract proprietary capabilities. Reported by the Financial Times ahead of a planned Trump–Xi meeting in Beijing.",
    category: "policy",
    source: "Financial Times (via U.S. News)",
    sourceUrl:
      "https://www.usnews.com/news/top-news/articles/2026-04-23/white-house-accuses-china-of-industrial-scale-theft-of-ai-technology-ft-reports",
  },
  {
    id: "evt-2026-agent-market-evals",
    date: "2026-04-24",
    year: 2026,
    title: "Agent markets expose bargaining gains and betting losses",
    summary:
      "Anthropic's Project Deal shows Opus agents out-negotiating Haiku agents in a simulated market, while General Reasoning's KellyBench finds frontier agents losing money in adversarial sports betting. The paired results suggest agents are starting to compete economically but remain exploitable when incentives are noisy and adversarial.",
    category: "market",
    sources: [
      {
        label: "Anthropic Project Deal",
        url: "https://www.anthropic.com/features/project-deal",
      },
      {
        label: "General Reasoning KellyBench",
        url: "https://www.gr.inc/releases/introducing-kellybench",
      },
      {
        label: "Air Street State of AI: May 2026",
        url: "https://press.airstreet.com/p/state-of-ai-may-2026",
      },
    ],
  },
  {
    id: "evt-2026-microsoft-openai-compute-reset",
    date: "2026-04-27",
    year: 2026,
    title: "Microsoft and OpenAI end exclusive compute terms",
    summary:
      "Microsoft and OpenAI revise their partnership so OpenAI can multi-source compute while Microsoft keeps strategic access and a non-exclusive licence. The reset makes frontier-model infrastructure more multi-cloud and weakens the assumption that one hyperscaler controls OpenAI's scaling path.",
    category: "market",
    sources: [
      {
        label: "Microsoft official blog",
        url: "https://blogs.microsoft.com/blog/2026/04/27/the-next-phase-of-the-microsoft-openai-partnership/",
      },
      {
        label: "Air Street State of AI: May 2026",
        url: "https://press.airstreet.com/p/state-of-ai-may-2026",
      },
    ],
  },
  {
    id: "evt-2026-aisi-cyber-range-threshold",
    date: "2026-04-30",
    year: 2026,
    title: "AISI cyber range cleared by Mythos, then GPT-5.5",
    summary:
      "The UK AI Security Institute reports Claude Mythos clearing its 32-step cyber-offense range and GPT-5.5 reaching similar results three weeks later. AISI frames the gap as evidence that autonomous offensive-cyber capability is advancing on roughly a four-month doubling time.",
    category: "research",
    sources: [
      {
        label: "AISI Claude Mythos evaluation",
        url: "https://www.aisi.gov.uk/blog/our-evaluation-of-claude-mythos-previews-cyber-capabilities",
      },
      {
        label: "AISI GPT-5.5 evaluation",
        url: "https://www.aisi.gov.uk/blog/our-evaluation-of-openais-gpt-5-5-cyber-capabilities",
      },
      {
        label: "AISI cyber capability trend",
        url: "https://www.aisi.gov.uk/blog/how-fast-is-autonomous-ai-cyber-capability-advancing",
      },
    ],
  },
  {
    id: "evt-2026-compute-policy-push",
    date: "2026-05-04",
    year: 2026,
    title: "US compute politics move into legislative proposals",
    summary:
      "US lawmakers and policy shops float a Bureau of Compute, CHIPS Act 2.0, and AI data-centre moratorium proposals as power, chip access, and land-use pressure intensifies. The proposals mark compute scarcity as a policy problem rather than just a hyperscaler procurement issue.",
    category: "policy",
    sources: [
      {
        label: "Air Street State of AI: May 2026",
        url: "https://press.airstreet.com/p/state-of-ai-may-2026",
      },
      {
        label: "Sanders-Ocasio-Cortez AI Data Center Moratorium Act",
        url: "https://www.sanders.senate.gov/press-releases/news-sanders-ocasio-cortez-announce-ai-data-center-moratorium-act/",
      },
      {
        label: "CNAS chip supply report",
        url: "https://www.cnas.org/publications/reports/american-ai-companies-cant-get-enough-chips",
      },
    ],
  },
  {
    id: "evt-2026-china-open-weight-coding-wave",
    date: "2026-05-04",
    year: 2026,
    title: "Chinese labs ship open-weight coding wave",
    summary:
      "Zhipu AI, MiniMax, Moonshot, and DeepSeek release GLM-5.1, M2.7, Kimi K2.6, and V4 within a 12-day window. The burst keeps open-weight coding capability close to the closed frontier and reinforces the speed of China-based lab iteration.",
    category: "release",
    sources: [
      {
        label: "Air Street State of AI: May 2026",
        url: "https://press.airstreet.com/p/state-of-ai-may-2026",
      },
      {
        label: "MiniMax M2.7 release coverage",
        url: "https://www.unite.ai/minimax-open-sources-m2-7-a-self-evolving-agent-model/",
      },
      {
        label: "DeepSeek V4 Pro weights",
        url: "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      },
    ],
  },
  {
    id: "evt-2026-robotics-long-horizon-agents",
    date: "2026-05-04",
    year: 2026,
    title: "π0.7 and ML-Master 2.0 extend long-horizon agents",
    summary:
      "The π0.7 robotics foundation model demonstrates stronger generalist manipulation and steering, while ML-Master 2.0 introduces hierarchical memory for long-horizon machine-learning tasks. Both point toward agents that can maintain context and control across longer real-world workflows.",
    category: "research",
    sources: [
      {
        label: "π0.7 arXiv paper",
        url: "https://arxiv.org/abs/2604.15483",
      },
      {
        label: "ML-Master 2.0 arXiv paper",
        url: "https://arxiv.org/abs/2601.10402",
      },
      {
        label: "Air Street State of AI: May 2026",
        url: "https://press.airstreet.com/p/state-of-ai-may-2026",
      },
    ],
  },
  {
    id: "evt-2026-gpt-55-instant-default",
    date: "2026-05-05",
    year: 2026,
    title: "GPT-5.5 Instant becomes the default ChatGPT model",
    summary:
      "OpenAI releases GPT-5.5 Instant and makes it the default ChatGPT model, pairing faster interactive use with lower latency and stronger everyday coding and reasoning. The default switch matters because it moves frontier-level capability into the product surface most users actually touch.",
    category: "release",
    sources: [
      {
        label: "OpenAI GPT-5.5 Instant",
        url: "https://openai.com/index/gpt-5-5-instant/",
      },
      {
        label: "OpenAI GPT-5.5 Instant system card",
        url: "https://deploymentsafety.openai.com/gpt-5-5-instant/gpt-5-5-instant.pdf",
      },
      {
        label: "Air Street State of AI: May 2026",
        url: "https://press.airstreet.com/p/state-of-ai-may-2026",
      },
    ],
  },
];
