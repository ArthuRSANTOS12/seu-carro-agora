import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import VehicleHighlight from "@/components/VehicleHighlight";
import RaffleSection from "@/components/RaffleSection";
import SocialProofSection from "@/components/SocialProofSection";
import SecuritySection from "@/components/SecuritySection";
import LGPDSection from "@/components/LGPDSection";
import TermsSection from "@/components/TermsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <VehicleHighlight />
        <RaffleSection />
        <SocialProofSection />
        <SecuritySection />
        <LGPDSection />
        <TermsSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
