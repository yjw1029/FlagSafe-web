import HeroSection from '@/components/HeroSection';
import ConsensusSection from '@/components/ConsensusSection';
import ResearchSection from '@/components/ResearchSection';
import PlatformSection from '@/components/PlatformSection';
import PartnersSection from '@/components/PartnersSection';
import VulnReportCTA from '@/components/VulnReportCTA';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ConsensusSection />
      <ResearchSection />
      <PlatformSection />
      <PartnersSection />
      <VulnReportCTA />
    </main>
  );
}
