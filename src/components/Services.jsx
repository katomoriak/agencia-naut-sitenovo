import styles from "./Services.module.css";

export default function Services() {
  const servicesList = [
    {
      icon: "🎯",
      title: "Tráfego Pago de Performance",
      desc: "Gestão inteligente de mídia paga com foco exclusivo em escala e ROI. Anunciamos onde seus melhores clientes estão procurando ou navegando.",
      tags: ["Google Ads", "Meta Ads", "TikTok Ads", "LinkedIn Ads"]
    },
    {
      icon: "🔍",
      title: "SEO estratégico",
      desc: "Domine as primeiras posições das buscas orgânicas. Otimizamos sua presença para atrair leads qualificados diariamente, reduzindo a dependência de anúncios.",
      tags: ["Auditoria Técnica", "Busca Local", "Link Building", "Conteúdo"]
    },
    {
      icon: "✨",
      title: "Design de Alta Conversão",
      desc: "Criamos identidades visuais modernas e Landing Pages pensadas cientificamente em termos de UX/UI para direcionar a atenção do usuário ao clique.",
      tags: ["Branding", "Landing Pages", "Sites Premium", "UX/UI Design"]
    },
    {
      icon: "💻",
      title: "Desenvolvimento Web & Tech",
      desc: "Desenvolvemos sites ultrarrápidos e seguros em Next.js e React. Experiência fluida para o cliente, nota máxima no Google PageSpeed e facilidade de manutenção.",
      tags: ["Next.js", "React", "E-commerces", "Integrações de API"]
    },
    {
      icon: "📊",
      title: "Analytics & Inteligência de Dados",
      desc: "Implementamos infraestruturas de rastreamento avançadas (GA4, GTM, Conversions API) para monitorar toda a jornada do usuário e embasar suas decisões.",
      tags: ["Google Analytics 4", "GTM", "Dashboarding", "Testes A/B"]
    },
    {
      icon: "⚡",
      title: "Inbound Marketing & Funis",
      desc: "Desenvolvemos réguas de relacionamento, fluxos automatizados de e-mail e CRM para qualificar leads e convertê-los de forma automatizada em clientes.",
      tags: ["Automação de E-mail", "ActiveCampaign", "CRM", "Copywriting"]
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
