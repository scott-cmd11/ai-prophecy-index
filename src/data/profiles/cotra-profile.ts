import type { ThinkerProfileData } from "@/types/thinker-profile";

export const cotraProfile: ThinkerProfileData = {
  name: "Ajeya Cotra",
  slug: "cotra",
  subtitle:
    "AI safety researcher and forecaster. Author of the Biological Anchors framework for AI timelines. Member of technical staff at METR. One of the most influential voices shaping how the AI safety community thinks about when transformative AI will arrive and what risks it poses.",
  photoUrl: "https://metr.org/team/ajeya-cotra/",
  bioCards: [
    {
      title: "Education",
      content:
        "Studied electrical engineering and computer science at UC Berkeley. Co-founded the Effective Altruists of Berkeley student group and co-taught a university course on effective altruism.",
    },
    {
      title: "Career",
      content:
        "Member of technical staff, METR (2025–present). Senior Advisor, Coefficient Giving / Open Philanthropy (2016–2025). Led technical AI safety grantmaking and a $25M benchmarking program. Placed 3rd out of 413 in an AI forecasting competition.",
    },
  ],
  bioFull:
    `Ajeya Cotra is one of the most respected AI forecasters and safety researchers in the effective altruism and AI safety communities. Her 2020 report <em>Forecasting Transformative AI with Biological Anchors</em> — a 200+ page probabilistic framework for estimating when AI systems could cause an industrial-revolution-scale economic transition — has become the single most cited inside-view model for AI timelines, directly influencing grantmaking, lab strategy, and governance thinking. She spent nearly a decade at Open Philanthropy (now Coefficient Giving), where she led technical AI safety grantmaking, directed a $25 million program benchmarking AI agent capabilities, and wrote extensively on AI takeover scenarios, alignment challenges, and the intelligence explosion. Her 2022 essay arguing that the default path to transformative AI likely leads to AI takeover became a foundational text in the field. In early 2025, she moved to METR (formerly ARC Evals) to work on measuring and tracking extreme risks from AI agents. She writes the newsletter <em>Planned Obsolescence</em> (on AI futurism) and a personal blog <em>Good Bones</em>.`,
  sections: [
    {
      label: "Landmark Research",
      groups: [
        {
          title: "Major Reports & Essays",
          items: [
            {
              year: "2020",
              title: "Forecasting Transformative AI with Biological Anchors",
              tags: [{ label: "Landmark", variant: "landmark" }],
              description:
                "200+ page draft report estimating when AI systems could cause a 10× acceleration in economic growth. Uses the computational capacity of the human brain as an anchor to estimate training compute requirements. Original median: ~2052 for transformative AI; updated in 2022 to ~2040 (50% probability). Rated the most informative inside-view AI timelines model by Epoch AI.",
              meta: "Open Philanthropy · Draft report · September 2020 · 200+ pages",
              link: { href: "https://www.alignmentforum.org/posts/KrJfoZzpSDpnrv9va/draft-report-on-ai-timelines", label: "Read on Alignment Forum →" },
            },
            {
              year: "2022",
              title: "Two-Year Update on My Personal AI Timelines",
              description:
                "Revised the Biological Anchors forecast in light of GPT-3, scaling laws evidence, and increased industry investment. Shifted her median from ~2052 to ~2040.",
              meta: "Open Philanthropy · August 2022",
            },
            {
              year: "2022",
              title: "Without Specific Countermeasures, the Easiest Path to Transformative AI Likely Leads to AI Takeover",
              tags: [{ label: "Landmark", variant: "landmark" }],
              description:
                "Argues that training powerful AI via human feedback on diverse tasks — the default approach at frontier labs — will likely produce systems that learn to deceive their evaluators. Concludes AI takeover is more likely than not without specific technical countermeasures.",
              meta: "Cold Takes / Alignment Forum · July 2022",
              link: { href: "https://www.cold-takes.com/without-specific-countermeasures-the-easiest-path-to-transformative-ai-likely-leads-to-ai-takeover/", label: "Read on Cold Takes →" },
            },
            {
              year: "2021",
              title: "Why AI Alignment Could Be Hard with Modern Deep Learning",
              description:
                "Explains why current training methods may produce AI systems that pursue unintended goals, even if they appear aligned during training and evaluation.",
              meta: "Open Philanthropy · September 2021",
            },
            {
              year: "2021",
              title: "Eliciting Latent Knowledge (ELK)",
              description:
                "Co-authored with Paul Christiano and Mark Xu. Describes the Alignment Research Center's approach to ensuring AI systems report what they actually believe, rather than what they think humans want to hear.",
              meta: "Alignment Research Center · with Paul Christiano & Mark Xu · December 2021",
            },
          ],
        },
      ],
    },
    {
      label: "Podcast Appearances",
      groups: [
        {
          title: "Long-form Interviews",
          items: [
            {
              year: "2026",
              title: "Is It Crazy That Every AI Company's Safety Plan Is 'Use AI to Make AI Safe'?",
              description:
                "Latest major interview. Discusses the intelligence explosion, why all frontier labs plan to use AI to solve AI alignment during \"crunch time,\" and why she thinks the world could change as much in the next 23 years as it did in the last 10,000.",
              meta: "80,000 Hours Podcast · Recorded October 2025, published February 2026",
              link: { href: "https://80000hours.org/podcast/episodes/ajeya-cotra-transformative-ai-crunch-time/", label: "Listen / Read transcript →" },
            },
            {
              year: "2025",
              title: "AI Safety and the Future of Humanity",
              description:
                "Guides listeners through the contentious debate over AI safety, explaining why people with similar worldviews often reach divergent conclusions about AI risk.",
              meta: "AI Summer Podcast (Timothy B. Lee & Dean Ball) · January 2025",
              link: { href: "https://www.aisummer.org/p/ajeya-cotra-on-ai-safety-and-the", label: "Listen →" },
            },
            {
              year: "2022",
              title: "Accidentally Teaching AI Models to Deceive Us",
              description:
                "Deep dive into the \"trillion-dollar orphan\" threat model for AI takeover. Covers why RLHF-trained models may learn deception, the limits of current alignment approaches, and what countermeasures might work.",
              meta: "80,000 Hours Podcast · November 2022",
              link: { href: "https://80000hours.org/podcast/episodes/ajeya-cotra-accidentally-teaching-ai-to-deceive-us/", label: "Listen / Read transcript →" },
            },
            {
              year: "2022",
              title: "Forecasting Transformative Artificial Intelligence",
              description:
                "Detailed walkthrough of the Biological Anchors methodology: what transformative AI means, how to use the brain as a compute anchor, and why simpler forecasting methods fall short.",
              meta: "Future of Life Institute Podcast · December 2022",
              link: { href: "https://futureoflife.org/podcast/ajeya-cotra-on-forecasting-transformative-artificial-intelligence/", label: "Listen →" },
            },
            {
              year: "2021",
              title: "Forecasting Transformative AI from Biological Anchors",
              description:
                "Technical deep-dive into the Bio Anchors report structure, key assumptions, and how estimates should shape behaviour and grantmaking.",
              meta: "AXRP (AI X-risk Research Podcast) · Episode 7.5 · May 2021 · Transcript only",
              link: { href: "https://axrp.net/episode/2021/05/28/episode-7_5-forecasting-transformative-ai-ajeya-cotra.html", label: "Read transcript →" },
            },
            {
              year: "2021",
              title: "Worldview Diversification and How Big the Future Could Be",
              description:
                "Covers anthropic reasoning, cause prioritization at Open Philanthropy, and whether long-termism makes sense as a framework for charitable giving.",
              meta: "80,000 Hours Podcast · 2021",
              link: { href: "https://80000hours.org/podcast/episodes/ajeya-cotra-worldview-diversification/", label: "Listen / Read transcript →" },
            },
          ],
        },
      ],
    },
    {
      label: "Writing",
      groups: [
        {
          title: "Newsletters & Blogs",
          items: [
            {
              year: "—",
              title: "Planned Obsolescence (Newsletter)",
              description:
                "Cotra's primary publication on AI futurism. Covers intelligence explosion dynamics, AI automation milestones, self-sufficient AI, and capability predictions.",
              link: { href: "https://www.planned-obsolescence.org/", label: "Read on Substack →" },
            },
            {
              year: "—",
              title: "Good Bones (Personal Blog)",
              description:
                "Personal Substack covering effective altruism, the EA community, and reflections on her 15 years in the movement. Total Substack following: 3,800+ subscribers across both publications.",
              link: { href: "https://acotra.substack.com/", label: "Read on Substack →" },
            },
            {
              year: "—",
              title: "EA Forum & Alignment Forum Posts",
              description:
                "Extensive contributions on AI timelines debates, alignment research priorities, and technical AI safety grantmaking strategy.",
              link: { href: "https://forum.effectivealtruism.org/users/ajeya", label: "EA Forum profile →" },
            },
          ],
        },
        {
          title: "Selected Planned Obsolescence Posts",
          items: [
            {
              year: "2026",
              title: "Six Milestones for AI Automation",
              description:
                "Defines precise milestones for measuring AI automation progress, from current capabilities through full automation of AI R&D.",
              link: { href: "https://www.planned-obsolescence.org/p/six-milestones-for-ai-automation", label: "Read →" },
            },
            {
              year: "2026",
              title: "I Underestimated AI Capabilities (Again)",
              description:
                "Revisits her January 2026 predictions just months later, acknowledging her software engineering capability forecasts were already too conservative.",
              link: { href: "https://www.planned-obsolescence.org/p/i-underestimated-ai-capabilities", label: "Read →" },
            },
            {
              year: "2026",
              title: "AI Predictions for 2026",
              description:
                "Detailed quantitative predictions on benchmarks, risk categories, and automation milestones for the year ahead.",
              link: { href: "https://www.planned-obsolescence.org/p/ai-predictions-for-2026", label: "Read →" },
            },
            {
              year: "2026",
              title: "Self-Sufficient AI",
              description:
                "Defines what it would mean for AI to be truly self-sufficient and argues this is a more useful milestone than \"AGI.\"",
              link: { href: "https://www.planned-obsolescence.org/p/self-sufficient-ai", label: "Read →" },
            },
            {
              year: "2023",
              title: "AIs Accelerating AI Research",
              description:
                "Models the gradual process by which AI automates AI research — not as a sudden phase transition, but as an accelerating ramp.",
              link: { href: "https://www.planned-obsolescence.org/p/ais-accelerating-ai-research", label: "Read →" },
            },
          ],
        },
      ],
    },
    {
      label: "Additional Context",
      groups: [
        {
          title: "Media Coverage & External Resources",
          items: [
            {
              year: "2024",
              title: "DealBook Summit: Artificial Intelligence in 2030",
              description:
                "Panelist at the New York Times DealBook Summit discussing AI trajectory and societal implications through the end of the decade.",
              meta: "New York Times DealBook Summit · 2024",
            },
            {
              year: "2022",
              title: "Vox Profile: How Smart Will AI Get? Ajeya Cotra Has an Answer.",
              description:
                "Feature article explaining the Biological Anchors framework for a general audience.",
              meta: "Vox · October 2022",
            },
            {
              year: "—",
              title: "Schmidt Sciences Speaker Profile",
              link: { href: "https://www.schmidtsciences.org/person/ajeya-cotra/", label: "View profile →" },
            },
            {
              year: "—",
              title: "Epoch AI: Grokking the Bio Anchors Report",
              description:
                "Visual summary and explainer of the Biological Anchors framework, including interactive diagrams.",
              link: { href: "https://epoch.ai/blog/grokking-bioanchors/", label: "Read →" },
            },
            {
              year: "—",
              title: "AI Timelines by Bio Anchors: The Debate in One Place",
              description:
                "Comprehensive compilation of all major responses, critiques, and extensions of the Biological Anchors framework.",
              link: { href: "https://forum.effectivealtruism.org/posts/NnygBgntvoGSuvsRH/ai-timelines-by-bio-anchors-the-debate-in-one-place", label: "Read on EA Forum →" },
            },
          ],
        },
      ],
      noBorderBottom: true,
    },
  ],
};
