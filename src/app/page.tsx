import { HeroSection } from "@/components/HeroSection";
import { ThinkersSection } from "@/components/ThinkersSection";
import { Timeline } from "@/components/Timeline";
import { SummarySection } from "@/components/SummarySection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ThinkersSection />
      <Timeline />
      <SummarySection />
    </main>
  );
}
