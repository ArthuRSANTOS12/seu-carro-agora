import { MessageCircle } from "lucide-react";
const WhatsAppButton = () => {
  const whatsappLink = "https://wa.me/553891307991";
  return <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse-glow" aria-label="Contato via WhatsApp">
      <MessageCircle className="w-6 h-6 text-white sm:w-[35px] sm:h-[35px]" />
    </a>;
};
export default WhatsAppButton;