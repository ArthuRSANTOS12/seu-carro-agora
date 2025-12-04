import { Check, Calendar, Fuel, Gauge, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import vehicleImage from "@/assets/vehicle-saveiro.jpeg";

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
    name: "TOYOTA COROLLA",
    model: "XEi 2.0 Flex Automático",
    year: "2019",
    fuel: "Flex",
    km: "58.000 km",
    price: "R$ 89.900",
    image: vehicleImage,
    badge: "Destaque",
    tags: ["Único Dono", "Revisado"],
  },
  {
    id: 2,
    name: "CHEVROLET ONIX",
    model: "Premier 1.0 Turbo",
    year: "2021",
    fuel: "Flex",
    km: "32.000 km",
    price: "R$ 72.900",
    image: vehicleImage,
    badge: "Premium",
    tags: ["IPVA Pago", "Garantia"],
  },
  {
    id: 3,
    name: "FORD KA",
    model: "SE Plus 1.5 Flex",
    year: "2020",
    fuel: "Flex",
    km: "45.000 km",
    price: "R$ 52.500",
    image: vehicleImage,
    badge: "Oportunidade",
    tags: ["Parcelas Flexíveis", "Entrada 30%"],
  },
  {
    id: 4,
    name: "VOLKSWAGEN POLO",
    model: "Highline 200 TSI",
    year: "2022",
    fuel: "Flex",
    km: "25.000 km",
    price: "R$ 98.900",
    image: vehicleImage,
    badge: "Novidade",
    tags: ["Manual e Chave Reserva", "Revisado"],
  },
  {
    id: 5,
    name: "HONDA CIVIC",
    model: "EXL 2.0 Flex CVT",
    year: "2018",
    fuel: "Flex",
    km: "72.000 km",
    price: "R$ 105.000",
    image: vehicleImage,
    badge: "Top de Linha",
    tags: ["Completo", "Couro"],
  },
  {
    id: 6,
    name: "HYUNDAI HB20",
    model: "Comfort Plus 1.0",
    year: "2021",
    fuel: "Flex",
    km: "28.000 km",
    price: "R$ 64.900",
    image: vehicleImage,
    badge: "Econômico",
    tags: ["Baixo Km", "IPVA Pago"],
  },
  {
    id: 7,
    name: "FIAT ARGO",
    model: "Drive 1.3 Firefly",
    year: "2020",
    fuel: "Flex",
    km: "42.000 km",
    price: "R$ 58.900",
    image: vehicleImage,
    badge: "Popular",
    tags: ["Multimídia", "Câmera de Ré"],
  },
  {
    id: 8,
    name: "RENAULT KWID",
    model: "Intense 1.0",
    year: "2022",
    fuel: "Flex",
    km: "18.000 km",
    price: "R$ 49.900",
    image: vehicleImage,
    badge: "Seminovo",
    tags: ["Baixo Km", "Econômico"],
  },
  {
    id: 9,
    name: "NISSAN KICKS",
    model: "SV 1.6 CVT",
    year: "2019",
    fuel: "Flex",
    km: "55.000 km",
    price: "R$ 92.500",
    image: vehicleImage,
    badge: "SUV",
    tags: ["Espaçoso", "Revisado"],
  },
  {
    id: 10,
    name: "JEEP RENEGADE",
    model: "Sport 1.8 Flex AT",
    year: "2020",
    fuel: "Flex",
    km: "48.000 km",
    price: "R$ 98.000",
    image: vehicleImage,
    badge: "4x2",
    tags: ["Completo", "Único Dono"],
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
