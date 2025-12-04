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
    <section id="como-funciona" className="py-20 md:py-28 bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            Processo Simplificado
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Como <span className="text-accent">Funciona</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Em apenas 4 passos você sai dirigindo o seu carro novo. Sem burocracia, sem filas de banco.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-border" />
              )}

              <div className="relative bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-accent/30 group-hover:-translate-y-1">
                {/* Step Number */}
                <span className="absolute -top-3 -right-3 w-10 h-10 bg-accent text-accent-foreground rounded-xl flex items-center justify-center text-sm font-bold shadow-lg">
                  {step.step}
                </span>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                  <step.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
