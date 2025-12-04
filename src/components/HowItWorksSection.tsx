import { Car, FileText, Clock, PenTool } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Car,
      step: "01",
      title: "Escolha o Carro",
      description: "Navegue pelo nosso estoque selecionado de veículos seminovos e escolha o que mais combina com você.",
    },
    {
      icon: FileText,
      step: "02",
      title: "Envie os Documentos",
      description: "Envie seus documentos pelo WhatsApp ou App. Validação rápida e segura.",
    },
    {
      icon: Clock,
      step: "03",
      title: "Análise em 20 min",
      description: "Sem consulta bancária tradicional. Aprovação rápida baseada na sua capacidade de pagamento.",
    },
    {
      icon: PenTool,
      step: "04",
      title: "Assinatura Digital",
      description: "Assine a nota promissória digitalmente com validade jurídica. Tudo pelo celular.",
    },
  ];

  return (
    <section id="como-funciona" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Processo Simplificado
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Como <span className="text-accent">Funciona</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Em apenas 4 passos você sai dirigindo o seu carro novo. Sem burocracia, sem filas de banco.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-border" />
              )}

              <div className="relative bg-card rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-accent/30 group-hover:-translate-y-1">
                {/* Step Number */}
                <span className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-accent text-accent-foreground rounded-lg sm:rounded-xl flex items-center justify-center text-xs sm:text-sm font-bold shadow-lg">
                  {step.step}
                </span>

                {/* Icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 md:mb-6 group-hover:bg-accent/10 transition-colors">
                  <step.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary group-hover:text-accent transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-sm sm:text-base md:text-xl font-bold text-foreground mb-1 sm:mb-2 md:mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
