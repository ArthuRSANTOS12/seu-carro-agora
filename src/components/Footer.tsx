import { Car, Mail, MapPin, Phone } from "lucide-react";
const Footer = () => {
  const quickLinks = [{
    href: "#estoque",
    label: "Estoque"
  }, {
    href: "#como-funciona",
    label: "Como Funciona"
  }, {
    href: "#seguranca",
    label: "Segurança"
  }, {
    href: "#contato",
    label: "Contato"
  }];
  const legalLinks = [{
    href: "#",
    label: "Política de Privacidade"
  }, {
    href: "#",
    label: "Termos de Uso"
  }, {
    href: "#",
    label: "LGPD"
  }];
  return <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="container-custom py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <Car className="w-4 h-4 sm:w-6 sm:h-6 text-accent" />
              </div>
              <span className="text-lg sm:text-xl font-bold">
                Garagem <span className="text-accent">Dan Car</span>
              </span>
            </a>
            <p className="text-primary-foreground/70 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
              Sua revenda de veículos com notas no app próprio. Sem banco, sem burocracia, com toda segurança.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm sm:text-lg mb-3 sm:mb-4">Links Rápidos</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {quickLinks.map(link => <li key={link.href}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors text-xs sm:text-sm">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm sm:text-lg mb-3 sm:mb-4">Legal</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {legalLinks.map(link => <li key={link.label}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors text-xs sm:text-sm">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold text-sm sm:text-lg mb-3 sm:mb-4">Contato</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                <span className="text-primary-foreground/70">+55 38 9130-7991</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                <span className="text-primary-foreground/70 break-all">contato@garagedancar.com</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">
                  Rua Joviniano Ramos, 233 - CEP 39400-347.<br />
                  Bairro São José, Montes Claros - MG 
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-primary-foreground/60 text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} Garagem Dan Car. Todos os direitos reservados.
          </p>
          <p className="text-primary-foreground/40 text-[10px] sm:text-xs">
            Desenvolvido com segurança e transparência
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;