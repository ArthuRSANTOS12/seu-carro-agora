import { Shield, FileSignature, BadgeCheck, Building2, Gift, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
  return <section className="relative">
      {/* Christmas Background Image */}
      <img alt="Promoção de Natal Dancar" className="w-full h-auto block" src="/lovable-uploads/47d19932-a945-4fc9-a503-0d300b0facb0.jpg" />
      
      {/* Hidden Easter Egg Button */}
      {/* Hidden Easter Egg Button - positioned on TV */}
      <button 
        onClick={() => setIsOpen(true)}
        className="absolute z-10 hover:scale-105 transition-all duration-300 group"
        style={{
          top: '42%',
          left: '54%',
          transform: 'perspective(500px) rotateY(-8deg) rotateX(2deg)',
        }}
        title="Surpresa!"
      >
        <div className="bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-3 border border-white/20 shadow-xl flex flex-col items-center gap-1">
          <Gift className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
          <span className="text-[8px] md:text-[10px] text-white font-bold tracking-wide">
            PARTICIPAR
          </span>
        </div>
      </button>
      
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
      <div className="absolute bottom-4 md:bottom-8 left-0 right-0">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
              <Button variant="hero" size="xl" asChild>
                <a href="#veiculos">Ver Estoque Disponível</a>
              </Button>
              <Button variant="hero" size="xl" asChild>
                <a href="#como-funciona">Como Funciona</a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {badges.map((badge, index) => {
              const BadgeContent = <>
                    <badge.icon className="w-4 h-4 text-green-700" />
                    <span className="text-xs md:text-sm font-medium text-green-800">
                      {badge.text}
                    </span>
                  </>;
              return badge.link ? <a key={index} href={badge.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 border border-green-600/30 shadow-md hover:bg-white transition-colors">
                    {BadgeContent}
                  </a> : <div key={index} className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 border border-green-600/30 shadow-md">
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