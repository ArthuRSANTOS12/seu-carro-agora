import { Play, Star } from "lucide-react";
const SocialProofSection = () => {
  return <section className="py-16 md:py-24 bg-muted">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Clientes <span className="text-accent">Realizados</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja a alegria de quem já realizou o sonho do carro próprio com a Dan Car
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Video Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-card bg-card">
            <div className="aspect-video bg-gradient-to-br from-primary to-navy-dark flex items-center justify-center relative">
              {/* Video Placeholder - Replace with actual video */}
              <div className="absolute inset-0 bg-black/20" />
              
              {/* Play Button */}
              <button className="relative z-10 w-20 h-20 md:w-24 md:h-24 bg-accent rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform group animate-pulse-glow">
                <Play className="w-8 h-8 md:w-10 md:h-10 text-accent-foreground ml-1" fill="currentColor" />
              </button>

              {/* Video Label */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6">
                <div className="bg-card/90 backdrop-blur-sm rounded-xl p-4 md:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-yellow-500" />)}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">Entrega do COROLLA 2025</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Cliente satisfeito! Processo rápido e sem burocracia.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="text-center p-4 bg-card rounded-xl shadow-soft">
              <div className="text-2xl md:text-3xl font-bold text-accent">500+</div>
              <div className="text-sm text-muted-foreground">Carros Vendidos</div>
            </div>
            <div className="text-center p-4 bg-card rounded-xl shadow-soft">
              <div className="text-2xl md:text-3xl font-bold text-accent">98%</div>
              <div className="text-sm text-muted-foreground">Satisfação</div>
            </div>
            <div className="text-center p-4 bg-card rounded-xl shadow-soft">
              <div className="text-2xl md:text-3xl font-bold text-accent">5★</div>
              <div className="text-sm text-muted-foreground">Avaliação</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SocialProofSection;