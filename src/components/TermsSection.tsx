import { AlertTriangle, ShieldAlert } from "lucide-react";

const TermsSection = () => {
  return (
    <section className="py-8 sm:py-10 md:py-12 bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {/* Fraud Warning */}
          <div className="bg-destructive/5 border border-destructive/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6 text-destructive" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-destructive mb-1 sm:mb-2">
                  Uso Indevido e Prevenção a Fraudes
                </h3>
                <p className="text-foreground/80 text-xs sm:text-sm leading-relaxed">
                  Qualquer tentativa de uso indevido de documentos, informações falsas ou fraudulentas resultará no <strong>bloqueio imediato da conta</strong> e na comunicação às autoridades competentes. Mantemos sistemas de detecção de inconsistências para proteger nossos clientes e nosso negócio.
                </p>
              </div>
            </div>
          </div>

          {/* Terms Agreement */}
          <div className="bg-muted/50 border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-1 sm:mb-2">
                  Aceite e Termos de Uso
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  Ao enviar seus documentos e dar continuidade ao processo de compra, você declara estar ciente e de acordo com nossa <strong className="text-foreground">Política de Segurança</strong>, <strong className="text-foreground">Termos de Uso</strong> e <strong className="text-foreground">Política de Privacidade</strong>. Você também autoriza a análise de seus dados para fins de avaliação de crédito e formalização de contrato.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsSection;
