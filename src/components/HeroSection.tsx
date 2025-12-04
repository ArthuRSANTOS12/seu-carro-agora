import { Shield, FileSignature, BadgeCheck, ChevronDown } from "lucide-react";
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
  return <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#1a5a2a' }}>
      {/* Christmas Background Image */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat'
      }} />

      <div className="container-custom relative z-10 pt-20 md:pt-0">
        <div className="max-w-4xl mx-auto text-center">
          {/* Spacer to push content down */}
          <div className="h-32 md:h-48" />

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 opacity-0 animate-fade-in-up" style={{
          animationDelay: "0.3s"
        }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#estoque">Ver Estoque Disponível</a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="#como-funciona">Como Funciona</a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-0 animate-fade-in-up" style={{
          animationDelay: "0.5s"
        }}>
            {badges.map((badge, index) => <div key={index} className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 border border-green-600/30 shadow-md">
                <badge.icon className="w-5 h-5 text-green-700" />
                <span className="text-sm font-medium text-green-800">
                  {badge.text}
                </span>
              </div>)}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <a href="#como-funciona" className="flex flex-col items-center text-primary-foreground/60 hover:text-primary-foreground transition-colors">
            <span className="text-xs mb-2">Saiba mais</span>
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>;
};
export default HeroSection;