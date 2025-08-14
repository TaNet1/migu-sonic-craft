import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import StudioSection from "@/components/StudioSection";
import CommunitySection from "@/components/CommunitySection";
import EcosystemSection from "@/components/EcosystemSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <StudioSection />
      <CommunitySection />
      <EcosystemSection />
      <Footer />
    </div>
  );
};

export default Index;
