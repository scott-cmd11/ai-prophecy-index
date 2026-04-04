import { HeroSection } from "@/components/HeroSection";
import { ThinkersSection } from "@/components/ThinkersSection";
import { AnalysisSection } from "@/components/AnalysisSection";
import { Timeline } from "@/components/Timeline";
import { SummarySection } from "@/components/SummarySection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ThinkersSection />
      <AnalysisSection />
      <Timeline />
      <SummarySection />
    </main>
  );
}
