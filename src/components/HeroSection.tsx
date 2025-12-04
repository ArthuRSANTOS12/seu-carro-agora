import { Shield, FileSignature, BadgeCheck, Building2, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
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
      <button 
        onClick={() => setIsOpen(true)}
        className="absolute top-4 right-4 md:top-8 md:right-8 z-10 bg-white/10 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 md:p-3 border border-white/20 shadow-lg transition-all duration-300 hover:scale-110 group opacity-40 hover:opacity-100"
        title="Surpresa!"
      >
        <Gift className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:text-yellow-300 transition-colors" />
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] md:text-[10px] text-white/60 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          PARTICIPAR
        </span>
      </button>
      
      {/* Video Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 bg-black border-none overflow-hidden">
          <video 
            controls 
            autoPlay 
            className="w-full h-auto max-h-[80vh] object-contain"
            src="/videos/sorteio-surpresa.mp4"
          >
            Seu navegador não suporta vídeos.
          </video>
        </DialogContent>
      </Dialog>

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