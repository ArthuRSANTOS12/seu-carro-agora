import { Check, Calendar, Fuel, Gauge, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import sienaImage from "@/assets/vehicle-siena-2016.jpeg";
import prismaImage from "@/assets/vehicle-prisma-2009.jpeg";
import stradaImage from "@/assets/vehicle-strada-2015.jpeg";
import milleImage from "@/assets/vehicle-mille-economy.jpeg";
import hb20Image from "@/assets/vehicle-hb20-2022.jpg";
import corollaImage from "@/assets/vehicle-corolla-2016.jpg";
import mobiImage from "@/assets/vehicle-mobi-2018.jpg";
import toroImage from "@/assets/vehicle-toro-2018.jpg";
import golImage from "@/assets/vehicle-gol-g5.jpg";

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
    name: "CHEVROLET PRISMA",
    model: "Joy 1.0 8V Flex",
    year: "2009",
    fuel: "Gasolina",
    km: "120.000 km",
    price: "R$ 16.500",
    image: prismaImage,
    badge: "Oportunidade",
    tags: ["4 Portas", "Direção Hidráulica"],
  },
  {
    id: 2,
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
    id: 3,
    name: "FIAT MILLE",
    model: "Economy 1.0 Flex",
    year: "2012",
    fuel: "Gasolina",
    km: "110.000 km",
    price: "R$ 19.000",
    image: milleImage,
    badge: "Econômico",
    tags: ["2 Portas", "Baixo Consumo"],
  },
  {
    id: 4,
    name: "FIAT MOBI",
    model: "Drive 1.0",
    year: "2018",
    fuel: "Gasolina",
    km: "80.000 km",
    price: "R$ 36.000",
    image: mobiImage,
    badge: "Completo",
    tags: ["Multimídia", "Câmera de Ré"],
  },
  {
    id: 5,
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
    id: 6,
    name: "HYUNDAI HB20",
    model: "Comfort 1.0 (Flex)",
    year: "2022",
    fuel: "Flex",
    km: "45.000 km",
    price: "R$ 60.000",
    image: hb20Image,
    badge: "Destaque",
    tags: ["Completo", "Baixa KM"],
  },
  {
    id: 7,
    name: "TOYOTA COROLLA",
    model: "GLi 1.8 Aut.",
    year: "2016",
    fuel: "Flex",
    km: "85.000 km",
    price: "R$ 70.000",
    image: corollaImage,
    badge: "Premium",
    tags: ["Automático", "Completo"],
  },
  {
    id: 8,
    name: "FIAT TORO",
    model: "Freedom 1.8 Flex Aut.",
    year: "2018/2019",
    fuel: "Flex",
    km: "83.000 km",
    price: "R$ 90.000",
    image: toroImage,
    badge: "Destaque",
    tags: ["Automático", "Cabine Dupla"],
  },
  {
    id: 9,
    name: "GOL G5",
    model: "G5 1.0 Trend",
    year: "2020",
    fuel: "Flex",
    km: "90.000 km",
    price: "R$ 35.000",
    image: golImage,
    badge: "Popular",
    tags: ["4 Portas", "Econômico"],
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
    <div className="bg-card rounded-xl sm:rounded-2xl shadow-card-hover overflow-hidden border border-border transition-transform hover:scale-[1.02] duration-300">
      {/* Image Section */}
      <div className="relative h-36 sm:h-44 md:h-48">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover"
          style={vehicle.name === "FIAT MILLE" ? { objectPosition: "center 70%" } : undefined}
        />
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-accent text-accent-foreground px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold">
          {vehicle.badge}
        </div>
      </div>

      {/* Info Section */}
      <div className="p-3 sm:p-4 md:p-5">
        <h3 className="text-sm sm:text-base md:text-xl font-bold text-foreground mb-0.5 sm:mb-1 line-clamp-1">{vehicle.name}</h3>
        <p className="text-muted-foreground text-xs sm:text-sm mb-2 sm:mb-4 line-clamp-1">{vehicle.model}</p>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5 sm:gap-3 mb-2 sm:mb-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-1 sm:gap-1.5 text-foreground/80">
              <feature.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent" />
              <span className="text-[10px] sm:text-xs">{feature.label}</span>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2 sm:mb-4">
          {vehicle.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-0.5 sm:gap-1 bg-accent/10 text-accent px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium"
            >
              <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              {tag}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="mb-2 sm:mb-4">
          <p className="text-[10px] sm:text-xs text-muted-foreground mb-0.5">A partir de</p>
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary">{vehicle.price}</p>
        </div>

        {/* CTA */}
        <Button variant="accent" size="sm" className="w-full text-[10px] sm:text-xs md:text-sm py-1.5 sm:py-2" asChild>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">Dar Entrada + Promissória</span>
            <span className="xs:hidden">Tenho Interesse</span>
          </a>
        </Button>
      </div>
    </div>
  );
};

const VehicleHighlight = () => {
  return (
    <section id="veiculos" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-muted/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Nosso Estoque
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Veículos <span className="text-accent">Disponíveis</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Confira nossa seleção de veículos seminovos com as melhores condições.
          </p>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleHighlight;
