import styles from "./Cases.module.css";

export default function Cases() {
  const casesList = [
    {
      tag: "Tráfego Pago & Performance",
      title: "Como escalamos um E-commerce de Moda de R$ 45k para R$ 280k mensais",
      desc: "Estruturamos um funil de tráfego pago integrado no Meta e Google Ads, alinhado com a otimização de conversão da página do produto (CRO). O resultado foi um aumento expressivo no volume de vendas mantendo a lucratividade.",
      results: [
        { val: "6.2x", label: "ROAS Geral" },
        { val: "+522%", label: "Faturamento" }
      ],
      client: "Marcella D. (CEO, BrandStore)"
    },
    {
      tag: "SEO & Tráfego Orgânico",
      title: "Crescimento orgânico de 320% e liderança de mercado para SaaS B2B",
      desc: "Implementamos uma estratégia robusta de SEO técnico combinada com marketing de conteúdo cirúrgico focado no público corporativo. Em 8 meses, o cliente superou os principais concorrentes na busca orgânica e zerou sua dependência de ads.",
      results: [
        { val: "3.2x", label: "Mais Leads" },
        { val: "-45%", label: "Custo de Aquisição (CAC)" }
      ],
      client: "Rodrigo F. (Diretor de Growth, Logix)"
    },
    {
      tag: "Tráfego Local & Landing Pages",
      title: "De R$ 18,50 para R$ 6,20 no lead para rede de franquias de estética",
      desc: "Redesenhamos a Landing Page principal para carregamento instantâneo no celular e otimizamos as campanhas de tráfego geolocalizado no Google e Instagram. Aumentamos a conversão de agendamentos diretos via WhatsApp.",
      results: [
        { val: "1.200+", label: "Leads/Mês" },
        { val: "-66%", label: "Custo por Lead" }
      ],
      client: "Camila R. (Marketing, EstheticGroup)"
    }
  ];

  return (
    <section id="cases" className={styles.casesSection}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.subtitle}>Cases de Sucesso</span>
          <h2 className={styles.title}>
            Resultados reais de quem confiou na <span className="text-gradient">Naut</span>
          </h2>
          <p className={styles.desc}>
            Não vendemos promessas. Vendemos números consolidados e crescimento previsível.
          </p>
        </div>

        <div className={styles.casesGrid}>
          {casesList.map((c, index) => (
            <div key={index} className={`${styles.caseCard} glass-panel`}>
              <div className={styles.caseGlow}></div>
              <div className={styles.cardHeader}>
                <span className={styles.caseTag}>{c.tag}</span>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.caseTitle}>{c.title}</h3>
                <p className={styles.caseDesc}>{c.desc}</p>
                
                <div className={styles.resultsGrid}>
                  {c.results.map((r, rIndex) => (
                    <div key={rIndex} className={styles.resultItem}>
                      <span className={styles.resultVal + " text-gradient"}>{r.val}</span>
                      <span className={styles.resultLabel}>{r.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.cardFooter}>
                <div className={styles.quoteIcon}>“</div>
                <p className={styles.quoteText}>
                  Os resultados superaram muito nossa expectativa. A Naut é nossa maior parceira estratégica.
                </p>
                <span className={styles.clientName}>{c.client}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
