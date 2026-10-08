import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Metodologia from "@/components/Metodologia";
import Cases from "@/components/Cases";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { COMPANY_INFO } from "@/data/servicesData";

export default function Home() {
  const breadcrumbs = [
    { name: "Home", url: `${COMPANY_INFO.domain}/` },
  ];

  return (
    <>
      <JsonLd breadcrumbs={breadcrumbs} />
      <Header />
      <main>
        <div style={{ position: "relative", overflow: "hidden" }}>
          {/* Background Orbs shared between Hero and Stats */}
          <div className="bg-glow-container">
            <div className="glow-orb orb-1"></div>
            <div className="glow-orb orb-2"></div>
          </div>
          <Hero />
          <Stats />
        </div>
        <Services />
        <Metodologia />
        <Cases />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
