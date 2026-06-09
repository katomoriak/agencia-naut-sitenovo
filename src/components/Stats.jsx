import styles from "./Stats.module.css";

export default function Stats() {
  const statItems = [
    {
      value: "R$ 15M+",
      label: "Faturamento Gerado",
      desc: "Vendas diretas geradas para nossos parceiros."
    },
    {
      value: "340%",
      label: "ROI Médio",
      desc: "Retorno médio em investimentos de tráfego pago."
    },
    {
      value: "98%",
      label: "Retenção de Clientes",
      desc: "Empresas que continuam e crescem com a Naut."
    },
    {
      value: "zero",
      label: "Achismo",
      desc: "100% das decisões baseadas em dados e analytics."
    }
  ];

  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={`${styles.statsContainer} glass-panel`}>
          {statItems.map((item, index) => (
            <div key={index} className={styles.statItem}>
              <div className={styles.valueWrapper}>
                <span className={`${styles.value} ${item.value === "zero" ? styles.zeroText : "text-gradient"}`}>
                  {item.value}
                </span>
              </div>
              <h3 className={styles.label}>{item.label}</h3>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
