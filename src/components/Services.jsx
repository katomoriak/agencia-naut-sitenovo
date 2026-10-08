import Link from "next/link";
import styles from "./Services.module.css";

export default function Services() {
  const servicesList = [
    {
      icon: "🎯",
      title: "Tráfego Pago de Performance",
      desc: "Gestão inteligente de mídia paga com foco exclusivo em escala e ROI. Anunciamos onde seus melhores clientes estão procurando ou navegando.",
      tags: ["Google Ads", "Meta Ads", "TikTok Ads", "LinkedIn Ads"],
      slug: "gestao-de-trafego-pago-performance"
    },
    {
      icon: "🔍",
      title: "SEO estratégico",
      desc: "Domine as primeiras posições das buscas orgânicas. Otimizamos sua presença para atrair leads qualificados diariamente, reduzindo a dependência de anúncios.",
      tags: ["Auditoria Técnica", "Busca Local", "Link Building", "Conteúdo"],
      slug: "consultoria-seo-estrategico"
    },
    {
      icon: "✨",
      title: "Design de Alta Conversão",
      desc: "Criamos identidades visuais modernas e Landing Pages pensadas cientificamente em termos de UX/UI para direcionar a atenção do usuário ao clique.",
      tags: ["Branding", "Landing Pages", "Sites Premium", "UX/UI Design"],
      slug: "criacao-de-landing-pages-alta-conversao"
    },
    {
      icon: "💻",
      title: "Desenvolvimento Web & Tech",
      desc: "Desenvolvemos sites ultrarrápidos e seguros em Next.js e React. Experiência fluida para o cliente, nota máxima no Google PageSpeed e facilidade de manutenção.",
      tags: ["Next.js", "React", "E-commerces", "Integrações de API"],
      slug: "criacao-de-sites-profissionais"
    },
    {
      icon: "📊",
      title: "Auditoria & Inteligência Técnica",
      desc: "Auditoria técnica profunda de SEO e infraestrutura de dados para identificar gargalos de indexação e acelerar o crescimento orgânico.",
      tags: ["SEO Técnico", "Core Web Vitals", "GTM", "Analytics 4"],
      slug: "auditoria-tecnica-de-seo"
    },
    {
      icon: "⚡",
      title: "Automação & Funis de CRM",
      desc: "Desenvolvemos réguas de relacionamento, fluxos automatizados de e-mail e integração de CRM para acelerar o fechamento de vendas.",
      tags: ["Automação de E-mail", "ActiveCampaign", "CRM", "Nutrição"],
      slug: "automacao-de-marketing-e-funis-crm"
    }
  ];

  return (
    <section id="services" className={styles.servicesSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.subtitle}>O que fazemos de melhor</span>
          <h2 className={styles.title}>
            Soluções completas para <span className="text-gradient">escalar</span> sua operação digital
          </h2>
          <p className={styles.lead}>
            Combinamos inteligência de dados, marketing estratégico e tecnologia de ponta para criar máquinas de vendas previsíveis.
          </p>
        </div>

        <div className={styles.grid}>
          {servicesList.map((service, index) => (
            <div key={index} className={`${styles.card} glass-panel`}>
              <div className={styles.cardGlow}></div>
              <Link href={`/servicos/${service.slug}`} className={styles.cardLink}>
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>{service.icon}</span>
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>
                <div className={styles.tagsContainer}>
                  {service.tags.map((tag, tIndex) => (
                    <span key={tIndex} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <span className={styles.cardAction}>
                  Conhecer Solução Dedicada →
                </span>
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.hubCtaWrapper}>
          <Link href="/servicos" className="btn btn-primary">
            Ver Todos os 15 Serviços Especializados da Naut →
          </Link>
        </div>
      </div>
    </section>
  );
}
