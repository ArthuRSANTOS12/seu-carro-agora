import { Shield, FileSignature, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-christmas-banner-hd.jpeg";
const HeroSection = () => {
  const badges = [{
    icon: Shield,
    text: "Segurança Criptografada"
  }, {
    icon: FileSignature,
    text: "Assinatura Digital"
  }, {
    icon: BadgeCheck,
    text: "Integrado ao Gov.br"
  }];
  return <section className="relative flex flex-col overflow-hidden" style={{ backgroundColor: '#1a5a2a' }}>
      {/* Christmas Background Image */}
      <img 
        src={heroBg} 
        alt="Promoção de Natal Dancar" 
        className="w-full h-auto object-contain"
      />

      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 pb-8 pt-16 bg-gradient-to-t from-[#1a5a2a] via-[#1a5a2a]/80 to-transparent">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button variant="hero" size="xl" asChild>
                <a href="#estoque">Ver Estoque Disponível</a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="#como-funciona">Como Funciona</a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {badges.map((badge, index) => <div key={index} className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 border border-green-600/30 shadow-md">
                  <badge.icon className="w-5 h-5 text-green-700" />
                  <span className="text-sm font-medium text-green-800">
                    {badge.text}
                  </span>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;