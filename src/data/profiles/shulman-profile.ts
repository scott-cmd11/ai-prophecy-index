import type { ThinkerProfileData } from "@/types/thinker-profile";

export const shulmanProfile: ThinkerProfileData = {
  name: "Carl Shulman",
  slug: "shulman",
  subtitle:
    "AI policy researcher and independent scholar. Behind the scenes, his work has greatly influenced how leaders in artificial general intelligence picture the world they're creating.",
  bioCards: [
    {
      title: "Education",
      content:
        "BA in Philosophy from Harvard University. Studied law at New York University School of Law. Born circa 1982; Canadian-American.",
    },
    {
      title: "Affiliations",
      content:
        "Research Associate, Future of Humanity Institute (Oxford, 2012–2024). Advisor to Open Philanthropy. Former Research Fellow, Machine Intelligence Research Institute. Former Director of Careers Research at 80,000 Hours.",
    },
  ],
  bioFull:
    "Carl Shulman is one of the most influential behind-the-scenes thinkers in AI safety and existential risk. He has spent more time than almost anyone modelling the dynamics of a transition to a world where AI systems do most or all of the work — the intelligence explosion, the economic implications, the geopolitical consequences, and the alignment challenges. He consults for Open Philanthropy and administers a $5M discretionary fund held by the Centre for Effective Altruism. His original concepts include iterated embryo selection, donor lotteries, and hedonium. He has published on AI risk, decision theory, whole brain emulation, and the moral status of digital minds, frequently in collaboration with Nick Bostrom and other Oxford researchers. While keeping a notably low public profile, he is widely regarded within the AI safety community as one of the most rigorous and broadly knowledgeable thinkers working on these problems.",
  sections: [
    {
      label: "Podcast Appearances",
      groups: [
        {
          title: "Long-form Interviews",
          items: [
            {
              year: "2024",
              title: "The Economy and National Security After AGI (Part 1)",
              tags: [{ label: "Cited" }],
              description:
                "4-hour marathon interview with Rob Wiblin. Covers intelligence explosion dynamics, economic growth post-AGI, 20-watt brain efficiency argument, the robotics bottleneck, training compute trajectories, and the physical automation constraint.",
              meta: "80,000 Hours Podcast · Episode #191 Pt 1 · June 27, 2024 · ~4h 15m",
              link: { href: "https://80000hours.org/podcast/episodes/carl-shulman-economy-agi/", label: "Listen / Read transcript →" },
            },
            {
              year: "2024",
              title: "Government and Society After AGI (Part 2)",
              tags: [{ label: "Cited" }],
              description:
                "Covers AI-assisted governance, AI forecasting, locking in values, preventing AI-enabled coups, international treaties, the case against voluntary pauses, and binding controls at crunch time.",
              meta: "80,000 Hours Podcast · Episode #191 Pt 2 · July 5, 2024 · ~2h 21m",
              link: { href: "https://80000hours.org/podcast/episodes/carl-shulman-society-agi/", label: "Listen / Read transcript →" },
            },
            {
              year: "2023",
              title: "Intelligence Explosion, Primate Evolution, Robot Doublings, & Alignment (Part 1)",
              tags: [{ label: "Cited" }],
              description:
                "The interview that broke Shulman into wider public awareness. Covers how the intelligence explosion happens before AGI, the fastest path to billions of robots, hardware fab constraints, and a step-by-step account of how AGI might attempt world takeover.",
              meta: "Dwarkesh Podcast · June 14, 2023 · ~2h 44m",
              link: { href: "https://www.dwarkesh.com/p/carl-shulman", label: "Listen / Read transcript →" },
            },
            {
              year: "2023",
              title: "AI Takeover, Bio & Cyber Attacks, Detecting Deception, & Humanity's Far Future (Part 2)",
              tags: [{ label: "Cited" }],
              description:
                "Covers concrete AI takeover scenarios, bioweapons risk from advanced AI, cyber vulnerabilities, deception detection in AI systems, explosion speed as the key risk variable, and the 20-25% forcible takeover probability estimate.",
              meta: "Dwarkesh Podcast · June 2023 · ~4h+",
              link: { href: "https://www.dwarkesh.com/p/carl-shulman-2", label: "Listen / Read transcript →" },
            },
            {
              year: "2021",
              title: "The Common-Sense Case for Existential Risk Work and Its Practical Implications",
              description:
                "Shulman's first long-form public interview. Makes the case that existential risk reduction passes standard cost-benefit analyses. Covers asteroid deflection analogy, expected value reasoning, and why the public health framing works for catastrophic risk.",
              meta: "80,000 Hours Podcast · Episode #112 · 2021",
              link: { href: "https://80000hours.org/podcast/episodes/carl-shulman-common-sense-case-existential-risks/", label: "Listen / Read transcript →" },
            },
          ],
        },
      ],
    },
    {
      label: "Academic Publications",
      groups: [
        {
          title: "Papers & Book Chapters",
          items: [
            {
              year: "2025",
              title: "How Much Should Governments Pay to Prevent Catastrophes? Longtermism's Limited Role",
              description:
                "Co-authored with Elliott Thornley. Argues that standard cost-benefit analysis — not longtermism — already implies governments should spend much more on reducing catastrophic risk. Published in Essays on Longtermism.",
              meta: "Oxford University Press · with Elliott Thornley · 2025",
            },
            {
              year: "2024",
              title: "Normative Uncertainty and Decision-Making (Working Paper)",
              description:
                "Co-authored with William MacAskill, Aron Vallinder, Caspar Oesterheld, and Johannes Treutlein on decision theory under moral uncertainty — an altruistic agent uncertain between evidential and causal decision theory.",
              meta: "Working paper",
            },
            {
              year: "2021",
              title: "Sharing the World with Digital Minds",
              description:
                "Co-authored with Nick Bostrom. Explores the moral status of digital minds and how human-centric moral intuitions break down when applied to copyable, modifiable AI minds. Published in Rethinking Moral Status.",
              meta: "Oxford University Press · with Nick Bostrom · 52+ citations",
              link: { href: "https://academic.oup.com/book/41245/chapter-abstract/350760172", label: "Oxford Academic →" },
            },
            {
              year: "2016",
              title: "Racing to the Precipice: A Model of Artificial Intelligence Development",
              description:
                "Co-authored with Stuart Armstrong and Nick Bostrom. Models an AI arms race as a Nash equilibrium where teams skimp on safety to finish first. Finds that more information and more teams increase danger. 122+ citations.",
              meta: "AI & Society, vol. 31 · with Armstrong & Bostrom · 122+ citations",
              link: { href: "https://link.springer.com/article/10.1007/s00146-015-0590-y", label: "Springer →" },
            },
            {
              year: "2012",
              title: "How Hard Is Artificial Intelligence? Evolutionary Arguments and Selection Effects",
              description:
                "Co-authored with Nick Bostrom. Evaluates the claim that because evolution produced human intelligence, engineers should be able to create AI — and examines the selection effects that complicate the analogy.",
              meta: "Journal of Consciousness Studies, vol. 19, no. 7-8 · with Nick Bostrom",
            },
          ],
        },
      ],
    },
    {
      label: "Writing & Community",
      groups: [
        {
          title: "Selected Writing",
          items: [
            {
              year: "—",
              title: "Reflective Disequilibrium (Blog)",
              description:
                "Shulman's personal blog covering AI risk, decision theory, effective altruism, immigration policy, and more. Sporadically updated but influential within the EA and AI safety communities.",
              link: { href: "https://reflectivedisequilibrium.blogspot.com/", label: "Visit blog →" },
            },
            {
              year: "—",
              title: "LessWrong Posts",
              description:
                "Extensive comment history and posts on LessWrong covering decision theory, Newcomb's problem, AI existential risk, and responses to AI governance proposals.",
              link: { href: "https://www.lesswrong.com/users/carl_shulman", label: "LessWrong profile →" },
            },
            {
              year: "—",
              title: "EA Forum Posts",
              description:
                "Contributions on effective altruism strategy, cause prioritization, donor lotteries, open borders, and wild animal welfare.",
              link: { href: "https://forum.effectivealtruism.org/topics/carl-shulman", label: "EA Forum profile →" },
            },
            {
              year: "—",
              title: "Complete Publication Timeline",
              description:
                "Comprehensive chronological list of all known Shulman publications, talks, and writing maintained by the Timelines wiki.",
              link: { href: "https://timelines.issarice.com/wiki/Timeline_of_Carl_Shulman_publications", label: "View timeline →" },
            },
          ],
        },
      ],
      noBorderBottom: true,
    },
  ],
};
