import Navigation from "@/HomePage/Navigation";
import HeroSection from "@/HomePage/HeroSection";
import GameifiedProgress from "@/HomePage/GameifiedProgress";
import DashboardPreview from "@/HomePage/DashboardPreview";
import PlatformShowcase from "@/HomePage/PlatformShowcase";
import CTAFooter from "@/HomePage/CTAFooter";

const IndexPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <GameifiedProgress />
      <DashboardPreview />
      <PlatformShowcase />
      <CTAFooter />
    </div>
  );
};

export default IndexPage;