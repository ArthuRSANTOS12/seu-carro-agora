import { Check, Calendar, Fuel, Gauge, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import sienaImage from "@/assets/vehicle-siena-2016.jpeg";
import prismaImage from "@/assets/vehicle-prisma-2009.jpeg";
import stradaImage from "@/assets/vehicle-strada-2015.jpeg";
import milleImage from "@/assets/vehicle-mille-economy.jpeg";
import hb20Image from "@/assets/vehicle-hb20-2022.jpg";

interface Vehicle {
  id: number;
  name: string;
  model: string;
  year: string;
  fuel: string;
  km: string;
  price: string;
  image: string;
  badge: string;
  tags: string[];
}

const vehicles: Vehicle[] = [
  {
    id: 1,
    name: "FIAT SIENA",
    model: "EL 1.0 Flex",
    year: "2016",
    fuel: "Flex",
    km: "185.000 km",
    price: "R$ 18.900",
    image: sienaImage,
    badge: "Econômico",
    tags: ["Revisado", "Baixo Custo"],
  },
  {
    id: 2,
    name: "CHEVROLET PRISMA",
    model: "Joy 1.0 8V Flex",
    year: "2009",
    fuel: "Flex",
    km: "120.000 km",
    price: "R$ 16.500",
    image: prismaImage,
    badge: "Oportunidade",
    tags: ["4 Portas", "Direção Hidráulica"],
  },
  {
    id: 3,
    name: "FIAT STRADA",
    model: "Working 1.4 Flex",
    year: "2015",
    fuel: "Flex",
    km: "125.000 km",
    price: "R$ 42.000",
    image: stradaImage,
    badge: "Trabalho",
    tags: ["Cabine Simples", "Direção Hidráulica"],
  },
  {
    id: 4,
    name: "FIAT MILLE",
    model: "Economy 1.0 Flex",
    year: "2012",
    fuel: "Flex",
    km: "110.000 km",
    price: "R$ 19.000",
    image: milleImage,
    badge: "Econômico",
    tags: ["2 Portas", "Baixo Consumo"],
  },
  {
    id: 5,
    name: "HYUNDAI HB20",
    model: "1.0 Flex",
    year: "2022",
    fuel: "Flex",
    km: "45.000 km",
    price: "R$ 65.000",
    image: hb20Image,
    badge: "Destaque",
    tags: ["Completo", "Baixa KM"],
  },
];

const VehicleCard = ({ vehicle }: { vehicle: Vehicle }) => {
  const features = [
    { icon: Calendar, label: `Ano ${vehicle.year}` },
    { icon: Fuel, label: vehicle.fuel },
    { icon: Gauge, label: vehicle.km },
  ];

  const whatsappLink = `https://wa.me/553891307991?text=Ol%C3%A1!%20Tenho%20interesse%20no%20${encodeURIComponent(vehicle.name)}%20${vehicle.year}.`;

  return (
    <div className="bg-card rounded-2xl shadow-card-hover overflow-hidden border border-border transition-transform hover:scale-[1.02] duration-300">
      {/* Image Section */}
      <div className="relative h-48">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover"
          style={vehicle.name === "FIAT MILLE" ? { objectPosition: "center 70%" } : undefined}
        />
        <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-2.5 py-1 rounded-full text-xs font-semibold">
          {vehicle.badge}
        </div>
      </div>

      {/* Info Section */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-foreground mb-1">{vehicle.name}</h3>
        <p className="text-muted-foreground text-sm mb-4">{vehicle.model}</p>

        {/* Features */}
        <div className="flex flex-wrap gap-3 mb-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-1.5 text-foreground/80">
              <feature.icon className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs">{feature.label}</span>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {vehicle.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 bg-accent/10 text-accent px-2 py-1 rounded-full text-xs font-medium"
            >
              <Check className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="mb-4">
          <p className="text-xs text-muted-foreground mb-0.5">A partir de</p>
          <p className="text-2xl font-bold text-primary">{vehicle.price}</p>
        </div>

        {/* CTA */}
        <Button variant="accent" size="sm" className="w-full" asChild>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-4 h-4" />
            Tenho Interesse
          </a>
        </Button>
      </div>
    </div>
  );
};

const VehicleHighlight = () => {
  return (
    <section id="veiculos" className="py-20 md:py-28 bg-muted/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Nosso Estoque
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Veículos <span className="text-accent">Disponíveis</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Confira nossa seleção de veículos seminovos com as melhores condições.
          </p>
        </div>

        {/* Vehicles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleHighlight;
