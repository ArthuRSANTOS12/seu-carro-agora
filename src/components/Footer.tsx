import { Car, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { href: "#estoque", label: "Estoque" },
    { href: "#como-funciona", label: "Como Funciona" },
    { href: "#seguranca", label: "Segurança" },
    { href: "#contato", label: "Contato" },
  ];

  const legalLinks = [
    { href: "#", label: "Política de Privacidade" },
    { href: "#", label: "Termos de Uso" },
    { href: "#", label: "LGPD" },
  ];

  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <Car className="w-6 h-6 text-accent" />
              </div>
              <span className="text-xl font-bold">
                Garagem <span className="text-accent">Dan Car</span>
              </span>
            </a>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Sua revenda de veículos com financiamento próprio. Sem banco, sem burocracia, com toda segurança.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/70">(00) 00000-0000</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/70">contato@garagedancar.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">
                  Av. Principal, 1000<br />
                  Centro - Cidade/UF
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Garagem Dan Car. Todos os direitos reservados.
          </p>
          <p className="text-primary-foreground/40 text-xs">
            Desenvolvido com segurança e transparência
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
