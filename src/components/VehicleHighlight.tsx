import { Check, Calendar, Fuel, Gauge, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import vehicleImage from "@/assets/vehicle-saveiro.jpeg";

const VehicleHighlight = () => {
  const features = [
    { icon: Calendar, label: "Ano 2010" },
    { icon: Fuel, label: "Flex" },
    { icon: Gauge, label: "98.000 km" },
  ];

  const tags = [
    "Entrada a partir de 30%",
    "Parcelas Flexíveis",
    "IPVA Pago",
  ];

  const whatsappLink = "https://wa.me/553891307991?text=Ol%C3%A1!%20Tenho%20interesse%20no%20Fiat%20Palio%202010.%20Gostaria%20de%20simular%20a%20compra.";

  return (
    <section id="veiculos" className="py-20 md:py-28 bg-muted/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Destaque da Semana
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Veículo em <span className="text-accent">Destaque</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conheça nosso veículo mais procurado da semana.
          </p>
        </div>

        {/* Vehicle Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl shadow-card-hover overflow-hidden border border-border">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-64 md:h-full min-h-[300px]">
                <img 
                  src={vehicleImage} 
                  alt="Volkswagen Saveiro branca" 
                  className="w-full h-full object-cover"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Oportunidade
                </div>
              </div>

              {/* Info Section */}
              <div className="p-6 md:p-8 flex flex-col justify-between">
                <div>
                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Fiat Palio
                  </h3>
                  <p className="text-muted-foreground mb-6">Fire Economy 1.0 Flex</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-foreground/80">
                        <feature.icon className="w-4 h-4 text-accent" />
                        <span className="text-sm">{feature.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1 bg-accent/10 text-accent px-3 py-1.5 rounded-full text-sm font-medium"
                      >
                        <Check className="w-3.5 h-3.5" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-1">A partir de</p>
                    <p className="text-3xl font-bold text-primary">
                      R$ 19.900
                    </p>
                    <p className="text-sm text-muted-foreground">
                      ou entrada + parcelas em nota promissória
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="accent" size="lg" className="flex-1" asChild>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5" />
                      Simular Compra
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="#contato">Mais Detalhes</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleHighlight;
