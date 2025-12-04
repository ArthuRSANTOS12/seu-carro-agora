import { Shield, FileSignature, BadgeCheck, Building2, X } from "lucide-react";
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
      {/* YouTube-style play button on TV screen */}
      <button 
        onClick={() => setIsOpen(true)}
        className="absolute z-10 cursor-pointer group"
        style={{
          top: '55%',
          left: '59%',
          transform: 'translate(-50%, -50%)',
        }}
        title="Clique para assistir!"
      >
        {/* YouTube play button */}
        <div className="bg-red-600 hover:bg-red-700 rounded-xl px-6 py-4 md:px-8 md:py-5 flex items-center justify-center transition-all duration-200 group-hover:scale-110 shadow-lg">
          <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1 md:border-t-[14px] md:border-l-[22px] md:border-b-[14px]" />
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