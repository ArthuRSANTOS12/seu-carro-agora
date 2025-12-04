import { Shield, FileSignature, BadgeCheck, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-christmas-banner-hd.jpeg";
const HeroSection = () => {
  const badges = [{
    icon: Shield,
    text: "Segurança Criptografada",
    link: null
  }, {
    icon: FileSignature,
    text: "Assinatura Digital",
    link: null
  }, {
    icon: BadgeCheck,
    text: "Integrado ao Gov.br",
    link: "https://www.gov.br"
  }, {
    icon: Building2,
    text: "Parceria Detran",
    link: "https://www.detran.mg.gov.br"
  }];
  return <section className="relative">
      {/* Christmas Background Image */}
      <img src={heroBg} alt="Promoção de Natal Dancar" className="w-full h-auto block" />

      {/* Content overlay - positioned at bottom of image */}
      <div className="absolute bottom-4 md:bottom-8 left-0 right-0">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
              <Button variant="hero" size="xl" asChild>
                <a href="#estoque">Ver Estoque Disponível</a>
              </Button>
              <Button variant="hero" size="xl" asChild>
                <a href="#como-funciona">Como Funciona</a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {badges.map((badge, index) => {
                const BadgeContent = (
                  <>
                    <badge.icon className="w-4 h-4 text-green-700" />
                    <span className="text-xs md:text-sm font-medium text-green-800">
                      {badge.text}
                    </span>
                  </>
                );
                
                return badge.link ? (
                  <a
                    key={index}
                    href={badge.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 border border-green-600/30 shadow-md hover:bg-white transition-colors"
                  >
                    {BadgeContent}
                  </a>
                ) : (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 border border-green-600/30 shadow-md"
                  >
                    {BadgeContent}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;