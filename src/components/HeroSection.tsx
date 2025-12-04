import { Shield, FileSignature, BadgeCheck, ChevronDown, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-christmas-bg.jpg";
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
  return <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Christmas Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBg})`
    }} />
      
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
      
      {/* Festive Sparkles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: "1s"
      }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse" style={{
        animationDelay: "0.5s"
      }} />
      </div>

      <div className="container-custom relative z-10 pt-20 md:pt-0">
        <div className="max-w-4xl mx-auto text-center">
          {/* Christmas Promo Badge */}
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-full mb-6 opacity-0 animate-fade-in-up shadow-lg" style={{
          animationDelay: "0s"
        }}>
            <Gift className="w-5 h-5" />
            <span className="font-semibold">🎄 Promoção de Natal - Ganhe uma TV!</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 opacity-0 animate-fade-in-up" style={{
          animationDelay: "0.1s"
        }}>
            Compre Seu Carro e{" "}
            <span className="text-yellow-400">Ganhe uma TV!</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-4 max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{
          animationDelay: "0.3s"
        }}>
            Parcelamos sua entrada em até <strong className="text-yellow-400">12x no A!</strong>
          </p>
          <p className="text-base md:text-lg text-primary-foreground/70 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{
          animationDelay: "0.35s"
        }}>
            Entrada + Parcelas em Notas Promissórias Digitais. <strong className="text-accent">Análise em 20 minutos.</strong>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 opacity-0 animate-fade-in-up" style={{
          animationDelay: "0.5s"
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
          animationDelay: "0.7s"
        }}>
            {badges.map((badge, index) => <div key={index} className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 border border-primary-foreground/20">
                <badge.icon className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-primary-foreground">
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