// src/types/thinker-profile.ts

export interface ResourceTag {
  label: string;
  variant?: "default" | "landmark";
}

export interface ResourceLink {
  href: string;
  label: string;
}

export interface ResourceItemData {
  year?: string; // "2026", "2022", "—", or omit for no year column
  title: string;
  tags?: ResourceTag[];
  description?: string;
  meta?: string;
  link?: ResourceLink;
}

export interface ResourceGroupData {
  title: string;
  items: ResourceItemData[];
}

export interface ResourceSectionData {
  label: string; // Uppercase section label e.g. "Podcast Appearances"
  groups: ResourceGroupData[];
  noBorderBottom?: boolean;
}

export interface BioCardData {
  title: string;
  content: string;
}

export interface StatChipData {
  label: string;
  value: string | number;
  color: "confirmed" | "unfolding" | "early";
}

export interface ThinkerProfileData {
  name: string;
  slug: "shulman" | "aschenbrenner" | "cotra";
  subtitle: string;
  stats?: StatChipData[];      // Shulman + Aschenbrenner have stats
  callout?: string;            // Cotra has "coming soon" callout (supports HTML via dangerouslySetInnerHTML)
  bioCards: BioCardData[];     // 2 cards: Education + Career (or similar)
  bioFull: string;             // Full bio paragraph (supports basic HTML via dangerouslySetInnerHTML)
  sections: ResourceSectionData[];
}