import { useState } from "react";
import { Gift, Star, Trophy, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
const RaffleSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }
    return value;
  };
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || name.length < 2) {
      toast({
        title: "Nome inválido",
        description: "Por favor, insira seu nome completo.",
        variant: "destructive"
      });
      return;
    }
    const phoneNumbers = phone.replace(/\D/g, "");
    if (phoneNumbers.length < 10 || phoneNumbers.length > 11) {
      toast({
        title: "Telefone inválido",
        description: "Por favor, insira um número válido com DDD.",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);

    // Criar mensagem para WhatsApp
    const message = encodeURIComponent(`🎁 *QUERO PARTICIPAR DO SORTEIO!*\n\n` + `Nome: ${name.trim()}\n` + `Telefone: ${phone}\n\n` + `Vim pelo site e quero concorrer ao sorteio especial! 🚗✨`);
    const whatsappUrl = `https://wa.me/553891307991?text=${message}`;

    // Abrir WhatsApp
    window.open(whatsappUrl, "_blank");
    toast({
      title: "🎉 Boa sorte!",
      description: "Você será direcionado ao WhatsApp para confirmar sua participação!"
    });
    setIsSubmitting(false);
  };
  return <section className="relative py-10 overflow-hidden">
      {/* Background com gradiente festivo */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-red-600" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Card compacto */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              {/* Texto */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-amber-100 px-3 py-1 rounded-full mb-3">
                  <Trophy className="w-4 h-4 text-amber-600" />
                  <span className="text-amber-700 font-semibold text-xs uppercase tracking-wider">
                    Sorteio Especial
                  </span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
                  🎁 Concorra a Prêmios!
                </h2>
                
                <p className="text-gray-600 text-sm">Cadastre-se e participe do nosso sorteio no app DANCAR</p>
              </div>

              {/* Formulário */}
              <form onSubmit={handleSubmit} className="flex-1 space-y-3">
                <Input type="text" placeholder="Seu nome" value={name} onChange={e => setName(e.target.value)} className="h-11 rounded-lg border-amber-200 focus:border-amber-500 bg-white" maxLength={100} />
                
                <Input type="tel" placeholder="(00) 00000-0000" value={phone} onChange={handlePhoneChange} className="h-11 rounded-lg border-amber-200 focus:border-amber-500 bg-white" maxLength={15} />

                <Button type="submit" disabled={isSubmitting} className="w-full h-12 text-base font-bold rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-md hover:shadow-lg transition-all duration-300 group">
                  <Gift className="w-5 h-5 mr-2" />
                  PARTICIPAR DO SORTEIO
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>

            {/* Info */}
            <p className="text-xs text-center text-muted-foreground mt-4">
              <Star className="w-3 h-3 inline text-amber-500 mr-1" />
              Participação 100% gratuita • +247 pessoas já participando!
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default RaffleSection;