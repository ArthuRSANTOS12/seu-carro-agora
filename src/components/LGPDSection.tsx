import { Database, Trash2 } from "lucide-react";

const LGPDSection = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container-custom">
        <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border">
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Database className="w-7 h-7 text-primary" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-3">
                LGPD e Proteção de Dados
              </h3>
              <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Em conformidade com a Lei Geral de Proteção de Dados (LGPD), informamos que seus dados pessoais são armazenados em servidores certificados com os mais altos padrões de segurança.
                </p>
                <p>
                  Utilizamos seus dados exclusivamente para a análise de crédito e formalização de contratos de compra e venda de veículos através de notas promissórias digitais.
                </p>
                <div className="flex items-start gap-2 pt-2">
                  <Trash2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-foreground">Direito à Exclusão:</strong> Você pode solicitar a exclusão completa dos seus dados a qualquer momento, entrando em contato através do nosso WhatsApp ou e-mail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LGPDSection;
