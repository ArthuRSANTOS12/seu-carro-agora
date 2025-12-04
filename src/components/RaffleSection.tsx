import { useState } from "react";
import { Gift, Star, Sparkles, Trophy, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const RaffleSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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
        variant: "destructive",
      });
      return;
    }

    const phoneNumbers = phone.replace(/\D/g, "");
    if (phoneNumbers.length < 10 || phoneNumbers.length > 11) {
      toast({
        title: "Telefone inválido",
        description: "Por favor, insira um número válido com DDD.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Criar mensagem para WhatsApp
    const message = encodeURIComponent(
      `🎁 *QUERO PARTICIPAR DO SORTEIO!*\n\n` +
      `Nome: ${name.trim()}\n` +
      `Telefone: ${phone}\n\n` +
      `Vim pelo site e quero concorrer ao sorteio especial! 🚗✨`
    );

    const whatsappUrl = `https://wa.me/553891307991?text=${message}`;

    // Abrir WhatsApp
    window.open(whatsappUrl, "_blank");

    toast({
      title: "🎉 Boa sorte!",
      description: "Você será direcionado ao WhatsApp para confirmar sua participação!",
    });

    setIsSubmitting(false);
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background com gradiente festivo */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-orange-500 to-red-600" />
      
      {/* Overlay com padrão */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Partículas animadas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <Sparkles className="w-4 h-4 text-yellow-200/60" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-bounce-slow">
              <Trophy className="w-5 h-5 text-yellow-200" />
              <span className="text-white font-semibold text-sm uppercase tracking-wider">
                Sorteio Especial
              </span>
              <Trophy className="w-5 h-5 text-yellow-200" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 drop-shadow-lg">
              🎁 CONCORRA A
              <span className="block text-yellow-200 mt-2">
                PRÊMIOS INCRÍVEIS!
              </span>
            </h2>
            
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
              Cadastre-se agora e participe do nosso sorteio exclusivo. 
              Quanto mais amigos você indicar, mais chances de ganhar!
            </p>
          </div>

          {/* Card do formulário */}
          <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-10 relative overflow-hidden">
            {/* Decoração do card */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-red-400/20 to-pink-500/20 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              {/* Prêmios */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {[
                  { icon: "🚗", text: "Desconto Especial" },
                  { icon: "🎫", text: "Brindes Exclusivos" },
                  { icon: "⭐", text: "Condições VIP" },
                ].map((prize, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 px-4 py-2 rounded-full border border-amber-200"
                  >
                    <span className="text-2xl">{prize.icon}</span>
                    <span className="font-semibold text-amber-800 text-sm">
                      {prize.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Formulário */}
              <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Seu nome completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-14 pl-5 pr-4 text-lg rounded-xl border-2 border-amber-200 focus:border-amber-500 bg-white"
                    maxLength={100}
                  />
                </div>
                
                <div className="relative">
                  <Input
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={phone}
                    onChange={handlePhoneChange}
                    className="h-14 pl-5 pr-4 text-lg rounded-xl border-2 border-amber-200 focus:border-amber-500 bg-white"
                    maxLength={15}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-16 text-xl font-bold rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group"
                >
                  <Gift className="w-6 h-6 mr-2 group-hover:animate-wiggle" />
                  QUERO PARTICIPAR!
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>

              {/* Informações adicionais */}
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                  <Star className="w-4 h-4 text-amber-500" />
                  Participação 100% gratuita
                  <Star className="w-4 h-4 text-amber-500" />
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Ao participar, você concorda em receber novidades via WhatsApp
                </p>
              </div>
            </div>
          </div>

          {/* Contador de participantes (social proof) */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-300 to-orange-400 border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                  >
                    {["J", "M", "A", "C"][i]}
                  </div>
                ))}
              </div>
              <span className="text-white font-semibold">
                +247 pessoas já participando!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RaffleSection;
