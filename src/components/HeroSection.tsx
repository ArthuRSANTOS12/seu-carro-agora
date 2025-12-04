import { Shield, FileSignature, BadgeCheck, Building2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import heroBanner from "@/assets/hero-banner-4k.jpg";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
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
  return <section className="relative pt-16 md:pt-20">
    {/* Christmas Background Image */}
      <img 
        alt="Promoção de Natal Dancar" 
        className="w-full h-auto" 
        src={heroBanner} 
      />
      
      
      {/* Custom Video Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="relative max-w-4xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <video 
              controls 
              autoPlay 
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              src="/videos/sorteio-surpresa.mp4"
            >
              Seu navegador não suporta vídeos.
            </video>
          </div>
        </div>
      )}

      {/* Content overlay - positioned at bottom of image */}
      <div className="absolute bottom-4 xs:bottom-6 sm:bottom-8 md:bottom-12 left-0 right-0 px-2 sm:px-4">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            {/* CTA Buttons */}
            <div className="flex flex-row gap-2 sm:gap-3 justify-center mb-2 sm:mb-4">
              <Button variant="hero" size="default" className="text-[10px] sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 whitespace-nowrap" asChild>
                <a href="#veiculos">Ver Estoque Disponível</a>
              </Button>
              <Button variant="hero" size="default" className="text-[10px] sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 whitespace-nowrap" asChild>
                <a href="#como-funciona">Como Funciona</a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-nowrap justify-center gap-1.5 sm:gap-2 md:gap-4 overflow-x-auto">
              {badges.map((badge, index) => {
              const BadgeContent = <>
                    <badge.icon className="w-3 h-3 sm:w-4 sm:h-4 text-green-700 flex-shrink-0" />
                    <span className="text-[9px] sm:text-xs md:text-sm font-medium text-green-800 whitespace-nowrap">
                      {badge.text}
                    </span>
                  </>;
              return badge.link ? <a key={index} href={badge.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 sm:gap-2 bg-white/90 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 sm:py-1.5 border border-green-600/30 shadow-md hover:bg-white transition-colors flex-shrink-0">
                    {BadgeContent}
                  </a> : <div key={index} className="flex items-center gap-1 sm:gap-2 bg-white/90 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 sm:py-1.5 border border-green-600/30 shadow-md flex-shrink-0">
                    {BadgeContent}
                  </div>;
            })}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;