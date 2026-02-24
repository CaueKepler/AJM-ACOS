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
      <HeroSection />
      
      {/* Adicionando os IDs para o menu encontrar as seções */}
      <section id="servicos">
        <ServicesSection />
      </section>

      <section id="setores">
        <SectorsSection />
      </section>

      <section id="diferenciais">
        <DifferentialsSection />
      </section>

      <section id="contato">
        <CtaBanner />
      </section>

      <Footer />
    </main>
  );
};

export default Index;