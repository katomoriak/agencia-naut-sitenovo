"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./ServicePageTemplate.module.css";
import ContactForm from "./ContactForm";
import { getServiceBySlug, COMPANY_INFO } from "@/data/servicesData";

export default function ServicePageTemplate({ service }) {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  // Obter os serviços relacionados
  const relatedServices = (service.relatedSlugs || [])
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean);

  const whatsappMessage = encodeURIComponent(
    `Olá! Gostaria de entender mais sobre o serviço de ${service.pillarName}: ${service.h1}. Poderiam me apresentar uma proposta?`
  );
  const whatsappUrl = `https://wa.me/5511997458464?text=${whatsappMessage}`;

  return (
    <div className={styles.pageWrapper}>
      {/* Background Orbs */}
      <div className="bg-glow-container">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
      </div>

      {/* 1. Breadcrumbs */}
      <section className={styles.breadcrumbsSection}>
        <div className="container">
          <nav aria-label="Trilha de navegação">
            <ol className={styles.breadcrumbsList}>
              <li>
                <Link href="/" className={styles.breadcrumbLink}>
                  Home
                </Link>
              </li>
              <li className={styles.breadcrumbSeparator}>/</li>
              <li>
                <Link href="/servicos" className={styles.breadcrumbLink}>
                  Serviços
                </Link>
              </li>
              <li className={styles.breadcrumbSeparator}>/</li>
              <li>
                <span className={styles.breadcrumbCurrent}>{service.pillarName}</span>
              </li>
              <li className={styles.breadcrumbSeparator}>/</li>
              <li>
                <span className={styles.breadcrumbCurrent}>{service.badge}</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* 2. Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.badgeWrapper}>
              <span className={styles.badgeDot}></span>
              <span className={styles.badgeText}>{service.badge}</span>
            </div>

            <h1 className={styles.heroTitle}>{service.h1}</h1>
            <p className={styles.heroSubtitle}>{service.subtitle}</p>

            <div className={styles.heroActions}>
              <a href="#contact" className="btn btn-primary">
                Solicitar Diagnóstico Gratuito
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnWhatsapp}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className={styles.whatsappIcon}
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                Conversar no WhatsApp
              </a>
            </div>

            {/* Highlights Grid */}
            <div className={styles.highlightsGrid}>
              {service.highlights.map((item, index) => (
                <div key={index} className={styles.highlightCard}>
                  <span className={styles.highlightNumber}>{item.number}</span>
                  <span className={styles.highlightLabel}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Seção "Para Quem É Este Serviço" */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionSubtitle}>Público & Desafios</span>
            <h2 className={styles.sectionTitle}>
              Este serviço é indicado para a sua empresa?
            </h2>
            <p className={styles.sectionLead}>
              Desenvolvemos soluções para negócios que já faturam ou buscam tração consistente e não aceitam mais perder espaço no mercado.
            </p>
          </div>

          <div className={styles.audienceGrid}>
            {service.targetAudience.map((audienceText, index) => (
              <div key={index} className={styles.audienceCard}>
                <div className={styles.checkIconWrapper}>✓</div>
                <p className={styles.audienceText}>{audienceText}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Escopo Técnico da Entrega */}
      <section className={`${styles.section} glass-panel`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionSubtitle}>Entregáveis Claros</span>
            <h2 className={styles.sectionTitle}>
              O que está incluso na entrega técnica
            </h2>
            <p className={styles.sectionLead}>
              Transparência absoluta do primeiro ao último dia. Veja o que sua empresa recebe com a contratação da Naut.
            </p>
          </div>

          <div className={styles.scopeGrid}>
            {service.scope.map((item, index) => (
              <div key={index} className={styles.scopeCard}>
                <div className={styles.scopeCardGlow}></div>
                <div className={styles.scopeIndex}>0{index + 1}</div>
                <h3 className={styles.scopeTitle}>{item.title}</h3>
                <p className={styles.scopeDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Metodologia Passo a Passo */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionSubtitle}>O Jeito Naut</span>
            <h2 className={styles.sectionTitle}>
              Como funciona o processo de execução
            </h2>
            <p className={styles.sectionLead}>
              Um método estruturado em 4 etapas para garantir agilidade, previsibilidade e resultados expressivos.
            </p>
          </div>

          <div className={styles.processGrid}>
            {service.process.map((step, index) => (
              <div key={index} className={styles.processCard}>
                <div className={styles.processStep}>{step.step}</div>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Comparativo Naut vs Agências Tradicionais */}
      <section className={`${styles.section} glass-panel`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionSubtitle}>Diferenciais Competitivos</span>
            <h2 className={styles.sectionTitle}>
              Por que a Naut vs. Agências Tradicionais
            </h2>
            <p className={styles.sectionLead}>
              Veja na prática a diferença entre trabalhar com quem entende de código, dados e conversão versus agências generalistas.
            </p>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th>Critério de Avaliação</th>
                  <th className={styles.nautColHeader}>Agência Naut</th>
                  <th>Agências Comuns</th>
                </tr>
              </thead>
              <tbody>
                {service.comparison.map((comp, index) => (
                  <tr key={index}>
                    <td className={styles.criterionCell}>{comp.criterion}</td>
                    <td className={styles.nautCell}>✓ {comp.naut}</td>
                    <td className={styles.othersCell}>✗ {comp.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. FAQ Accordion */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionSubtitle}>Tire Suas Dúvidas</span>
            <h2 className={styles.sectionTitle}>
              Perguntas frequentes sobre o serviço
            </h2>
            <p className={styles.sectionLead}>
              Respostas diretas e transparentes sobre prazos, investimento, garantias e suporte.
            </p>
          </div>

          <div className={styles.faqContainer}>
            {service.faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <button
                  className={styles.faqQuestion}
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                >
                  <span>{faq.q}</span>
                  <span
                    className={`${styles.faqIcon} ${
                      openFaq === index ? styles.faqIconActive : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {openFaq === index && (
                  <div className={styles.faqAnswer}>
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Serviços Relacionados (Interlinking Silo) */}
      {relatedServices.length > 0 && (
        <section className={`${styles.section} glass-panel`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionSubtitle}>Ecossistema Integrado</span>
              <h2 className={styles.sectionTitle}>
                Serviços complementares para acelerar seus resultados
              </h2>
              <p className={styles.sectionLead}>
                Conheça outras soluções da Naut para potencializar sua presença digital e vendas.
              </p>
            </div>

            <div className={styles.relatedGrid}>
              {relatedServices.map((rel, index) => (
                <Link
                  key={index}
                  href={`/servicos/${rel.slug}`}
                  className={styles.relatedCard}
                >
                  <div>
                    <span className={styles.relatedBadge}>{rel.pillarName}</span>
                    <h3 className={styles.relatedTitle}>{rel.badge}</h3>
                    <p className={styles.relatedDesc}>{rel.subtitle}</p>
                  </div>
                  <span className={styles.relatedLink}>
                    Conhecer Solução →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. Formulário de Contato / Diagnóstico */}
      <div id="contact">
        <ContactForm />
      </div>
    </div>
  );
}
