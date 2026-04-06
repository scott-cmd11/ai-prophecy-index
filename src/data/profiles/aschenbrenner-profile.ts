import type { ThinkerProfileData } from "@/types/thinker-profile";

export const aschenbrennerProfile: ThinkerProfileData = {
  name: "Leopold Aschenbrenner",
  slug: "aschenbrenner",
  subtitle:
    "Former OpenAI Superalignment researcher. Author of Situational Awareness. Founder and CIO of Situational Awareness LP, an AI-focused hedge fund managing over $1.5 billion.",
  photoUrl: "https://www.forourposterity.com/about",
  bioCards: [
    {
      title: "Education",
      content:
        "Graduated as valedictorian from Columbia University in 2021 at age 19, majoring in economics and mathematics-statistics. Entered college at 15. Educated at the John F. Kennedy School in Berlin.",
    },
    {
      title: "Career",
      content:
        "OpenAI Superalignment team (2023–2024, fired April 2024). FTX Future Fund (Feb–Nov 2022). Global Priorities Institute, Oxford (research intern). Emergent Ventures grant recipient (age 17). Founded Situational Awareness LP (2024).",
    },
  ],
  bioFull:
    "Leopold Aschenbrenner is a German AI researcher and investor who became one of the most influential voices on AI trajectory after publishing <em>Situational Awareness: The Decade Ahead</em> in June 2024 — a 165-page, five-chapter essay series arguing that AGI is imminent and will trigger a rapid intelligence explosion. The essays went viral, drawing praise from figures including Ivanka Trump, and cemented Aschenbrenner's credibility as an AI forecaster. He founded Situational Awareness LP shortly after, an AI-focused hedge fund backed by Patrick and John Collison (Stripe), Daniel Gross, and Nat Friedman. Before OpenAI, he co-founded Columbia's effective altruism chapter and co-authored a working paper on economic growth with Philip Trammell at Oxford. His firing from OpenAI — which he attributes to a security memo warning that lab security was inadequate to resist state-level IP theft — preceded the dissolution of the Superalignment team and the departures of Ilya Sutskever and Jan Leike.",
  sections: [
    {
      label: "Primary Work",
      groups: [
        {
          title: "Situational Awareness: The Decade Ahead",
          items: [
            {
              title: "Introduction",
              description: "History is live in San Francisco.",
              link: { href: "https://situational-awareness.ai/", label: "Read →" },
            },
            {
              title: "Chapter I: From GPT-4 to AGI: Counting the OOMs",
              description: "AGI by 2027 via ~0.5 OOM/year compute scaling + ~0.5 OOM/year algorithmic efficiency + unhobbling gains.",
              link: { href: "https://situational-awareness.ai/from-gpt-4-to-agi/", label: "Read →" },
            },
            {
              title: "Chapter II: From AGI to Superintelligence: the Intelligence Explosion",
              description: "Hundreds of millions of AGIs automating AI research, compressing 5+ OOMs of algorithmic progress into ≤1 year.",
              link: { href: "https://situational-awareness.ai/from-agi-to-superintelligence/", label: "Read →" },
            },
            {
              title: "Chapter IIIa: Racing to the Trillion-Dollar Cluster",
              description: "The techno-capital acceleration: trillions into GPUs, data centres, and power before end of decade.",
              link: { href: "https://situational-awareness.ai/racing-to-the-trillion-dollar-cluster/", label: "Read →" },
            },
            {
              title: "Chapter IIIb: Lock Down the Labs: Security for AGI",
              description: "Labs are handing AGI secrets to the CCP on a silver platter. State-actor-level security is nowhere close.",
              link: { href: "https://situational-awareness.ai/lock-down-the-labs/", label: "Read →" },
            },
            {
              title: "Chapter IIIc: Superalignment",
              description: "Controlling AI systems smarter than us is unsolved. Failure during a rapid intelligence explosion could be catastrophic.",
              link: { href: "https://situational-awareness.ai/superalignment/", label: "Read →" },
            },
            {
              title: "Chapter IIId: The Free World Must Prevail",
              description: "Superintelligence confers decisive military advantage. The free world's survival is at stake.",
              link: { href: "https://situational-awareness.ai/the-free-world-must-prevail/", label: "Read →" },
            },
            {
              title: "Chapter IV: The Project",
              description: "The national security state will get involved. By 2027–28, a government AGI project will be on.",
              link: { href: "https://situational-awareness.ai/the-project/", label: "Read →" },
            },
            {
              title: "Chapter V: Parting Thoughts",
              description: "No crack team is coming. The few hundred with situational awareness must act.",
              link: { href: "https://situational-awareness.ai/parting-thoughts/", label: "Read →" },
            },
          ],
        },
      ],
    },
    {
      label: "Interviews & Appearances",
      groups: [
        {
          title: "Podcast Interviews",
          items: [
            {
              year: "2024",
              title: "2027 AGI, China/US Super-Intelligence Race, & the Return of History",
              tags: [{ label: "Cited" }],
              description:
                "The interview that accompanied the Situational Awareness launch. Covers the OOM trendlines, trillion-dollar clusters, Chinese espionage, OpenAI firing, lab security failures, and the national security implications of superintelligence.",
              meta: "Dwarkesh Podcast · June 4, 2024 · ~3h",
              link: { href: "https://www.dwarkesh.com/p/leopold-aschenbrenner", label: "Listen / Read transcript →" },
            },
            {
              year: "2024",
              title: "Stanford Digital Economy Lab Talk",
              description:
                "Presentation on the AGI strategic picture to a Stanford audience, covering the same core arguments as the essay series with additional Q&A on economic implications.",
              meta: "Stanford University · September 2024",
            },
            {
              year: "2021",
              title: "Existential Risk, German Culture, Valedictorian Efficiency",
              description:
                "Early interview covering Aschenbrenner's background, effective altruism involvement, Columbia experience, career decision-making, and initial thoughts on existential risk and long-termism.",
              meta: "Then Do Better Podcast · June 2021",
              link: { href: "https://www.thendobetter.com/arts/2021/6/22/leopold-aschenbrenner-on-existential-risk-german-culture-valedictorian-efficiency-podcast", label: "Listen →" },
            },
          ],
        },
      ],
    },
    {
      label: "Academic & Other Writing",
      groups: [
        {
          title: "Publications & Research",
          items: [
            {
              year: "2024",
              title: "Weak to Strong Generalization",
              description:
                "Co-authored while at OpenAI's Superalignment team. Explores whether weak AI models can supervise stronger AI models — a core challenge for aligning superhuman AI. Presented at ICML 2024.",
              meta: "International Conference on Machine Learning (ICML) · 2024",
            },
            {
              year: "2024",
              title: "Economic Growth Under Transformative AI (Working Paper)",
              description:
                "Co-authored with Philip Trammell at Oxford's Global Priorities Institute. Models economic growth trajectories under scenarios of increasingly capable AI systems.",
              meta: "Global Priorities Institute, Oxford · with Philip Trammell",
            },
            {
              year: "—",
              title: "For Our Posterity (Blog / Newsletter)",
              description:
                "Aschenbrenner's personal blog and Substack. Covers AI scaling trends, economic growth, and AGI strategy. Where the Situational Awareness essays were first announced.",
              link: { href: "https://www.forourposterity.com/", label: "Visit blog →" },
            },
            {
              year: "—",
              title: "Works in Progress (Contributor)",
              description:
                "Essays published in the Stripe-funded publication covering progress studies, economic growth, and policy.",
              link: { href: "https://www.worksinprogress.co/", label: "Works in Progress →" },
            },
          ],
        },
      ],
    },
    {
      label: "Additional Context",
      groups: [
        {
          title: "Notable Coverage & Responses",
          items: [
            {
              year: "2025",
              title: "Fortune Profile: How a 23-Year-Old Turned a Viral AI Prophecy into a $1.5B Hedge Fund",
              description:
                "Detailed profile covering Aschenbrenner's career trajectory from FTX Future Fund through OpenAI firing to founding Situational Awareness LP.",
              link: { href: "https://finance.yahoo.com/news/23-old-former-openai-researcher-170509906.html", label: "Read →" },
            },
            {
              year: "2024",
              title: "EA Forum: Summary & Community Response",
              description:
                "Detailed summary of all Situational Awareness chapters with community discussion, critiques, and compiled response links from across the rationalist and EA communities.",
              link: { href: "https://forum.effectivealtruism.org/posts/zmRTWsYZ4ifQKrX26/summary-of-situational-awareness-the-decade-ahead", label: "Read →" },
            },
            {
              year: "2024",
              title: "Axios: AI from Now to 2034",
              description:
                "Mainstream tech media perspective on the essay series, noting both its influence and the reality check that Aschenbrenner's AGI timeline remains a minority position among experts.",
              link: { href: "https://www.axios.com/2024/06/23/leopold-aschenbrenner-ai-future-silicon-valley", label: "Read →" },
            },
          ],
        },
      ],
      noBorderBottom: true,
    },
  ],
};
