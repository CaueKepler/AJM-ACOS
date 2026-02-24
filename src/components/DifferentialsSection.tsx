import { motion } from "framer-motion";
import { Cpu, Ruler, Clock } from "lucide-react";

const pillars = [
  {
    icon: Cpu,
    title: "Tecnologia de Ponta",
    description:
      "Equipamentos CNC de última geração garantem cortes com tolerância milesimal e repetibilidade em lotes. Investimos em tecnologia para entregar mais com menos desperdício.",
  },
  {
    icon: Ruler,
    title: "Controle Dimensional",
    description:
      "Cada peça passa por conferência dimensional rigorosa. Rastreabilidade do material ao produto final para atender as exigências de homologação dos nossos clientes.",
  },
  {
    icon: Clock,
    title: "Pontualidade Logística",
    description:
      "Planejamento de produção integrado ao prazo do cliente. Nosso compromisso é que sua linha de produção não pare por falta de componentes.",
  },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-spark text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
            Por que a AJM
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4">
            Pilares de Confiança
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Três compromissos inegociáveis que sustentam cada projeto que entregamos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-spark-gradient mx-auto flex items-center justify-center mb-6 shadow-spark">
                <pillar.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
