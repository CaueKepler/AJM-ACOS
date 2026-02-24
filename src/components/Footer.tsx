import { MapPin, Phone, Mail } from "lucide-react";
import logoAjm from "@/assets/logo-ajm.png";

const Footer = () => {
  return (
    <footer id="contato" className="bg-industrial-dark border-t border-industrial-steel/15 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logoAjm} alt="AJM Aços" className="h-10 w-auto brightness-0 invert" />
            </div>
            <p className="text-industrial-light/50 text-sm leading-relaxed">
              Transformação de chapas com precisão CNC. Corte Laser, Plasma, Oxicorte, Dobra, Caldeiraria e Roscas em Jaraguá do Sul/SC.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary-foreground font-bold text-sm uppercase tracking-wider mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-industrial-light/60 text-sm">
                <MapPin className="w-4 h-4 text-spark shrink-0 mt-0.5" />
                <span>Rua Ivo Lenz, 4850, Rio Cerro 2, Jaraguá do Sul - SC</span>
              </li>
              <li className="flex items-start gap-3 text-industrial-light/60 text-sm">
                <Phone className="w-4 h-4 text-spark shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1"> {/* Criamos uma coluna aqui */}
                  <a href="tel:+554735112776" className="hover:text-spark transition-colors">(47) 3511-2776</a>
                  <a href="tel:+554791080045" className="hover:text-spark transition-colors">(47) 9108-0045</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-industrial-light/60 text-sm">
                <Mail className="w-4 h-4 text-spark shrink-0" />
                <a href="comercial@ajmacos.com.br" className="hover:text-spark transition-colors">comercial@ajmacos.com.br  financeiro@ajmacos.com.br</a>
              </li>
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h4 className="text-primary-foreground font-bold text-sm uppercase tracking-wider mb-4">Dados Cadastrais</h4>
            <ul className="space-y-2 text-industrial-light/50 text-sm">
              <li><strong className="text-industrial-light/70">Razão Social:</strong> AJM Aços Ltda.</li>
              <li><strong className="text-industrial-light/70">CNPJ:</strong> 57.682.667/0001-39</li>
              <li><strong className="text-industrial-light/70">IE:</strong> 26.321.066-9</li>
              <li><strong className="text-industrial-light/70">Cidade:</strong> Jaraguá do Sul — SC</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-industrial-steel/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-industrial-light/30 text-xs">
            © {new Date().getFullYear()} AJM Aços. Todos os direitos reservados.
          </p>
          <p className="text-industrial-light/30 text-xs">
            Jaraguá do Sul — Santa Catarina — Brasil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
