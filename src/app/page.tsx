import { HeroSection } from "@/components/HeroSection";
import { Timeline } from "@/components/Timeline";
import { SummarySection } from "@/components/SummarySection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Timeline />
      <SummarySection />
    </main>
  );
}
