import { Shield, FileCheck, UserCheck, FileSignature, Eye, Server } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SecuritySection = () => {
  const securityItems = [
    {
      icon: Shield,
      title: "Compromisso com Segurança",
      description: "Seus dados são protegidos por criptografia de ponta a ponta, seguindo padrões bancários de segurança. Utilizamos as mesmas tecnologias das maiores instituições financeiras do país.",
    },
    {
      icon: FileCheck,
      title: "Documentação Verificada",
      description: "Realizamos verificação rigorosa de documentos para evitar fraudes e validar cada nota promissória. Todo documento passa por análise de autenticidade.",
    },
    {
      icon: UserCheck,
      title: "Análise de Identidade",
      description: "Validação de identidade e capacidade de pagamento de forma rápida e segura. Sem consulta a bancos tradicionais, mas com toda a segurança necessária.",
    },
    {
      icon: FileSignature,
      title: "Notas Promissórias Digitais",
      description: "Validade jurídica garantida, registro digital seguro e assinatura eletrônica reconhecida. Tudo em conformidade com a legislação brasileira.",
    },
    {
      icon: Eye,
      title: "Transparência Total",
      description: "Sem taxas ocultas, sem surpresas. Você sabe exatamente quanto vai pagar. Sem análise de crédito bancário tradicional, focamos na sua capacidade real de pagamento.",
    },
    {
      icon: Server,
      title: "Infraestrutura Certificada",
      description: "Utilizamos infraestrutura segura integrada ao CDT, gov.br e e-Notariado para validação de documentos e assinaturas digitais.",
    },
  ];

  return (
    <section id="seguranca" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Sua Segurança é Prioridade
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-2">
            Política de <span className="text-primary">Segurança</span> e <span className="text-accent">Confiança</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Entenda como protegemos seus dados e garantimos a segurança de todas as transações.
          </p>
        </div>

        {/* Security Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityItems.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-accent/30 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                <item.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Security Accordion - Mobile */}
        <div className="md:hidden">
          <Accordion type="single" collapsible className="space-y-3">
            {securityItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-4 data-[state=open]:border-accent/30"
              >
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-left font-semibold text-foreground">
                      {item.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 pl-13">
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
