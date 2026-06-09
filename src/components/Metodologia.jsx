import styles from "./Metodologia.module.css";

export default function Metodologia() {
  const steps = [
    {
      num: "01",
      title: "Diagnóstico & Analytics",
      desc: "Analisamos suas campanhas atuais, histórico de dados e funil de vendas para encontrar vazamentos de orçamento e oportunidades imediatas de crescimento."
    },
    {
      num: "02",
      title: "Desenho da Estratégia",
      desc: "Planejamos os canais ideais, a verba de teste/escala, a estrutura de criativos e o fluxo ideal de landing pages focado no seu público comprador."
    },
    {
      num: "03",
      title: "Execução & Tração",
      desc: "Desenvolvemos as páginas, configuramos os rastreamentos de conversão avançados de ponta a ponta e colocamos as campanhas no ar com copys refinadas."
    },
    {
      num: "04",
      title: "Otimização & Escala",
      desc: "Análise diária das métricas e otimização contínua de criativos e testes A/B. Aumentamos o investimento de forma inteligente e sustentável conforme o ROI."
    }
  ];

  return (
    <section id="methodology" className={styles.methodologySection}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.subtitle}>Como trabalhamos</span>
          <h2 className={styles.title}>
            Uma metodologia voltada à <span className="text-gradient">consistência</span>
          </h2>
          <p className={styles.desc}>
            Não acreditamos em fórmulas mágicas. Nosso processo é cirúrgico e focado em engenharia de conversão.
          </p>
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineLine}></div>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <div className={styles.stepNumberContainer}>
                  <div className={styles.stepNumberGlow}></div>
                  <span className={styles.stepNumber}>{step.num}</span>
                </div>
                <div className={styles.mobileTitleWrapper}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                </div>
              </div>
              <div className={styles.stepContent}>
                <h3 className={`${styles.stepTitle} ${styles.desktopOnly}`}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
