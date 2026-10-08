import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import styles from "./ServicosHub.module.css";
import {
  SERVICES_PILLARS,
  getServicesByPillar,
  COMPANY_INFO,
} from "@/data/servicesData";

// Metadados rigorosamente calibrados
export const metadata = {
  // 55 caracteres
  title: "Serviços de Criação de Sites, SEO e Mídia | Agência Naut",
  // 132 caracteres
  description: "Conheça as soluções da Agência Naut: criação de sites profissionais, consultoria de SEO estratégico e gestão de anúncios de alta performance.",
  keywords:
    "serviços marketing digital, criação de sites profissionais, consultoria seo são paulo, gestão de tráfego pago empresas, agência naut",
  alternates: {
    canonical: `${COMPANY_INFO.domain}/servicos`,
  },
  openGraph: {
    title: "Serviços de Criação de Sites, SEO e Mídia | Agência Naut",
    description:
      "Conheça as soluções da Agência Naut: criação de sites profissionais, consultoria de SEO estratégico e gestão de anúncios de alta performance.",
    url: `${COMPANY_INFO.domain}/servicos`,
    siteName: COMPANY_INFO.name,
    locale: "pt_BR",
    type: "website",
  },
};

export default function ServicosHub() {
  const breadcrumbs = [
    { name: "Home", url: `${COMPANY_INFO.domain}/` },
    { name: "Serviços", url: `${COMPANY_INFO.domain}/servicos` },
  ];

  return (
    <>
      <JsonLd breadcrumbs={breadcrumbs} />
      <Header />
      <main className={styles.hubWrapper}>
        {/* Background glow orbs */}
        <div className="bg-glow-container">
          <div className="glow-orb orb-1"></div>
          <div className="glow-orb orb-2"></div>
        </div>

        {/* Hero Hub */}
        <section className={styles.hubHero}>
          <div className="container">
            <span className={styles.heroTag}>Ecossistema Completo de Vendas</span>
            <h1 className={styles.heroTitle}>
              Soluções Especializadas para <span className="text-gradient">Escalar Empresas</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Navegue pelos nossos 3 pilares estratégicos e conheça as 15 soluções completas para transformar visitantes em reuniões comerciais e vendas previsíveis.
            </p>

            <div className={styles.pillarsNav}>
              {SERVICES_PILLARS.map((pillar) => (
                <a
                  key={pillar.id}
                  href={`#${pillar.id}`}
                  className={styles.pillarNavLink}
                >
                  {pillar.icon} {pillar.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Pilares com suas 5 páginas dedicadas */}
        {SERVICES_PILLARS.map((pillar) => {
          const servicesInPillar = getServicesByPillar(pillar.id);
          return (
            <section
              key={pillar.id}
              id={pillar.id}
              className={`${styles.pillarSection} glass-panel`}
            >
              <div className="container">
                <div className={styles.pillarHeader}>
                  <div className={styles.pillarIconBox}>{pillar.icon}</div>
                  <div className={styles.pillarTitleGroup}>
                    <h2>{pillar.title}</h2>
                    <p>{pillar.desc}</p>
                  </div>
                </div>

                <div className={styles.servicesGrid}>
                  {servicesInPillar.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/servicos/${service.slug}`}
                      className={styles.serviceCard}
                    >
                      <div className={styles.cardGlowBar}></div>
                      <div className={styles.cardTop}>
                        <span className={styles.cardBadge}>{service.badge}</span>
                        <h3 className={styles.cardTitle}>{service.h1}</h3>
                        <p className={styles.cardDesc}>{service.subtitle}</p>
                      </div>

                      <div className={styles.cardFooter}>
                        <span className={styles.cardKeyword}>
                          {service.keyword}
                        </span>
                        <span className={styles.cardCta}>
                          Ver Detalhes →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Formulário de Diagnóstico */}
        <div id="contact">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
