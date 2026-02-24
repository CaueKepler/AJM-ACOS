import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

const CtaBanner = () => {
  return (
    <section className="py-20 bg-spark-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-industrial-dark rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-industrial-dark rounded-full translate-x-1/3 translate-y-1/3" />
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-accent-foreground mb-4">
            Precisa de Corte, Dobra ou Caldeiraria?
          </h2>
          <p className="text-accent-foreground/80 text-lg max-w-xl mx-auto mb-8 font-medium">
            Envie seu desenho técnico e receba um orçamento detalhado em até 24h úteis.
          </p>
          <a
            href="https://wa.me/554791080045?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20técnico%20para%20a%20AJM%20Aços."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-industrial-dark text-primary-foreground font-bold text-base px-8 py-4 rounded shadow-industrial hover:bg-industrial-charcoal transition-all duration-200"
          >
            <Phone className="w-5 h-5" />
            Falar com Especialista
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;
