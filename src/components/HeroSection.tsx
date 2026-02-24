import { motion } from "framer-motion";
import { Phone, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-laser.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Corte a laser CNC em chapa de aço com faíscas"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-industrial-gradient opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-dark via-transparent to-transparent" />
      </div>

      
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20 pb-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 bg-spark/10 border border-spark/30 rounded-full px-4 py-1.5 mb-6">
            <div className="w-2 h-2 rounded-full bg-spark animate-pulse" />
            <span className="text-spark text-xs font-semibold uppercase tracking-widest">
              Jaraguá do Sul — SC
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight mb-6">
            <span className="text-primary-foreground">Precisão, Robustez e Tecnologia</span>
            <br />
            <span className="text-gradient-spark">em Transformação do Aço</span>
          </h1>

          <p className="text-lg sm:text-xl text-industrial-light/70 max-w-3xl mb-10 leading-relaxed font-medium text-justify">
            Empresa especializada em corte industrial e conformação de chapas metálicas, atendendo 
            <strong className="text-primary-foreground"> indústrias, construtoras, metalúrgicas.</strong> Alta capacidade produtiva,
            <strong className="text-primary-foreground"> equipamentos modernos e controle dimensional rigoroso</strong> garantem qualidade, prazo e competitividade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/554791080045?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20técnico."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-spark-gradient text-accent-foreground font-bold text-base px-8 py-4 rounded shadow-spark hover:brightness-110 transition-all duration-200"
            >
              <Phone className="w-5 h-5" />
              Solicitar Orçamento Técnico
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 border border-industrial-light/20 text-primary-foreground font-semibold text-base px-8 py-4 rounded hover:bg-primary-foreground/5 transition-all duration-200"
            >
              Conheça Nossos Serviços
            </a>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap gap-8 sm:gap-12 mt-16 pt-8 border-t border-industrial-light/10"
          >
            {[
              { value: "200mm", label: "Espessura máx. Oxicorte" },
              { value: "6", label: "Processos integrados" },
              { value: "CNC", label: "Precisão e repetibilidade" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-black text-spark">{stat.value}</div>
                <div className="text-xs text-industrial-light/50 uppercase tracking-wider mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-industrial-light/30" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
