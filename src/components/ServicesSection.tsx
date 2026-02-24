import { motion } from "framer-motion";
import { Zap, Flame, CircleDot, CornerDownRight, Wrench, CircleDashed } from "lucide-react";
import imgLaser from "@/assets/services/CorteLaser.png";
import imgCortePlasma from "@/assets/services/CortePlasma.png";
import imgOxicorte from "@/assets/services/Oxicorte.png";
import imgDobraCNC from "@/assets/services/DobraCNC.png";
import imgCaldeiraria from "@/assets/services/Caldeiraria.png";
import imgRoscaCNC from "@/assets/services/RoscaCNC.png";

const services = [
  {
    icon: Zap,
    title: "Corte a Laser",
    image: imgLaser,
    subtitle: "Alta Precisão & Acabamento",
    description:
    "Processo de corte de alta precisão, ideal para chapas de aço carbono, inox e alumínio.Proporciona excelente acabamento, mínima zona afetada pelo calor e tolerâncias rigorosas, garantindo peças prontas para montagem ou soldagem com alto padrão dimensional",
    specs: ["Peças Técnicas", "Flanges", "Suportes", "Estruturas Metálicas", "Componentes Industriais"],
  },
  {
    icon: Flame,
    title: "Corte Plasma",
    image: imgCortePlasma,
    subtitle: "Alta Produtividade & Custo-Benefício",
    description:
      "Sistema de corte rápido e eficiente para chapas médias e espessas, com excelente custo-benefício.Ideal para produção seriada e peças estruturais, mantendo boa qualidade de borda e produtividade elevada.",
    specs: ["Bases Estruturais", "Chapas de Reforço", "Peças Industriais", "Fabricação Metálica em Geral"],
  },
  {
    icon: CircleDot,
    title: "Oxicorte",
    image: imgOxicorte,
    subtitle: "Grandes Espessuras até 200mm",
    description:
      "Processo robusto para cortes de grandes espessuras em aço carbono.Permite o corte de chapas grossas com alta capacidade estrutural, sendo ideal para aplicações pesadas e industriais",
    specs: ["Bases de Máquinas", "Contrapesos", "Chapas Estruturais Pesadas", "Componentes de Grande Parte"],
  },
  {
    icon: CornerDownRight,
    title: "Dobra CNC",
    image: imgDobraCNC,
    subtitle: "Repetibilidade & Ângulo Perfeito",
    description:
      "Serviço de dobra em prensa CNC com controle de ângulo e repetibilidade dimensional.Garantimos precisão, alinhamento e acabamento técnico conforme projeto.",
    specs: ["Perfis Dobrados", "Suporte Estruturais", "Caixas Metálicas", "Painéis", "Componentes Sob Medidas"],
  },
  {
    icon: Wrench,
    title: "Caldeiraria",
    image: imgCaldeiraria,
    subtitle: "Montagem & Solda Estrutural",
    description:
      "Execução de serviços de montagem industrial e soldagem de estruturas metálicas conforme projeto técnico.Garantimos alinhamento, resistência estrutural e acabamento adequado para aplicações industriais e construção civil",
    specs: ["Estruturas Metálicas", "Bases de Equipamentos", "Plataformas", "Suportes", "Reforços Industriais", "Conjuntos Soldados"],
  },
  {
    icon: CircleDashed,
    title: "Roscas CNC",
    image: imgRoscaCNC,
    subtitle: "Diferencial de Acabamento",
    description:
      "Execução de roscas internas em chapas de aço carbono, com precisão dimensional e controle de profundidade conforme especificação técnica. Processo ideal para substituição de porcas soldadas, garantindo melhor acabamento, resistência e padronização",
    specs: ["Bases Estruturais", "Chapas Técnicas", "Suporte Metálicos", "Conexões Industriais", "Conjuntos Sob Medidas"],
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-spark text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
            Capacidade Técnica
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4">
            6 Processos.<br className="sm:hidden" /> Uma Solução Completa.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Do corte à montagem final, sua peça é transformada em um único fornecedor qualificado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const onImage = !!service.image;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg border border-border hover:border-spark/30 hover:shadow-spark transition-all duration-300"
              >
                {/* IMAGEM (opacidade só nela) */}
                {service.image && (
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-90"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                )}

                {/* OVERLAY geral leve (segura brilho pra leitura sem “matar” a imagem) */}
                {service.image && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-black/10" />
                )}


                {/* CONTEÚDO */}
                <div className="relative z-10 p-6">
                  {/* topo (sem placa grande) */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded flex items-center justify-center transition-all duration-300
                      ${onImage ? "bg-white/15" : "bg-spark/10"}
                      group-hover:bg-spark-gradient`}
                    >
                      <service.icon
                        className={`w-5 h-5 transition-colors
                        ${onImage ? "text-white" : "text-spark"}
                        group-hover:text-accent-foreground`}
                      />
                    </div>

                    <div>
                      <h3 className={`font-bold text-lg ${onImage ? "text-white" : "text-foreground"}`}>
                        {service.title}
                      </h3>

                      <p
                        className={`text-xs font-semibold uppercase tracking-wider
                        ${onImage ? "text-white/85" : "text-spark"}`}
                      >
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* placa somente no texto + specs */}
                  <div className={`${onImage ? "rounded-lg bg-black/50 p-4" : ""}`}>

                    <p
                      className={`text-sm leading-relaxed mb-4 ${onImage ? "text-white/90 [text-shadow:0_1px_10px_rgba(0,0,0,0.65)]" : "text-muted-foreground"
                        }`}
                    >

                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {service.specs.map((spec) => (
                        <span
                          key={spec}
                          className={`text-xs font-medium px-2.5 py-1 rounded
                          ${onImage ? "bg-white/15 text-white" : "bg-secondary/90 text-secondary-foreground"}`}
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
