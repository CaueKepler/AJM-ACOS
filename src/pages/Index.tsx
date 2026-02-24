import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import SectorsSection from "@/components/SectorsSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* A seção Hero geralmente não precisa de ID, pois é o topo */}
      <HeroSection />
      
      {/* Adicionamos 'scroll-mt-20' (scroll-margin-top).
          Isso serve para que, ao clicar no menu, a seção não fique 
          colada no topo ou escondida atrás do Header fixo.
      */}
      <section id="servicos" className="scroll-mt-20">
        <ServicesSection />
      </section>

      <section id="setores" className="scroll-mt-20">
        <SectorsSection />
      </section>

      <section id="diferenciais" className="scroll-mt-20">
        <DifferentialsSection />
      </section>

      <section id="contato" className="scroll-mt-20">
        <CtaBanner />
      </section>

      <Footer />
    </main>
  );
};

export default Index;