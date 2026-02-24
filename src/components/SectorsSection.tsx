import { motion } from "framer-motion";
import { Anchor, Factory, Building2, Truck, Cog, HardHat, Component, Flame, Hammer, Ship } from "lucide-react";

const sectors = [
  { icon: Ship, name: "Indústria e Naval", desc: "Estruturas e componentes para estaleiros e operações portuárias" },
  { icon: Component, name: "Estruturas Metálicas", desc: "Peças técnicas e componentes de precisão para OEMs" },
  { icon: Building2, name: "Construção Civil", desc: "Estruturas metálicas, escadas, guarda-corpos e coberturas" },
  { icon: Factory, name: "Máquinas e Equipamentos", desc: "Componentes estruturais para carretas e implementos" },
  { icon: Anchor, name: "Setor Portuário", desc: "Peças de reposição sob demanda com agilidade" },
  { icon: Hammer, name: "Metalurgia em Geral", desc: "Componentes de alta resistência para ambientes severos" },
];

const SectorsSection = () => {
  return (
    <section id="setores" className="py-24 bg-industrial-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-spark text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
            AJM Aços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary-foreground mb-4">
            Sobre Nós
          </h2>
          <p className="text-industrial-light/60 text-lg max-w-2xl mx-auto">
           A AJM Aços é uma empresa especializada em transformação de chapas metálicas, com foco em precisão, produtividade e confiabilidade industrial.
           Nosso diferencial está na integração entre tecnologia, experiência técnica e compromisso com prazo.
          Atendemos desde pequenas peças técnicas até grandes estruturas metálicas, oferecendo soluções sob medida para:

          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-4 bg-industrial-charcoal/50 border border-industrial-steel/15 rounded-lg p-5 hover:border-spark/25 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded bg-spark/10 flex items-center justify-center shrink-0 mt-0.5">
                <sector.icon className="w-5 h-5 text-spark" />
              </div>
              <div>
                <h3 className="font-bold text-primary-foreground text-base mb-1">{sector.name}</h3>
                <p className="text-industrial-light/50 text-sm leading-relaxed">{sector.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
