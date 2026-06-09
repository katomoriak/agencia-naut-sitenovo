import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>

      <div className={`container ${styles.gridContainer}`}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            Agência Boutique de Performance & Tech
          </div>
          <h1 className={styles.title}>
            Navegamos o digital. <br />
            <span className="text-gradient">Aceleramos</span> o seu negócio.
          </h1>
          <p className={styles.description}>
            Deixe para trás o amadorismo. A Naut combina tecnologia, tráfego pago inteligente e design de alto padrão para colocar sua marca em rota de crescimento exponencial.
          </p>
          <div className={styles.ctaGroup}>
            <a href="#contact" className="btn btn-primary">
              Quero Crescer Minha Empresa
              <svg className={styles.arrowIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16669 10H15.8334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.8334 5L15.8334 10L10.8334 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#services" className="btn btn-secondary">Conhecer Serviços</a>
          </div>
          
          <div className={styles.trustInfo}>
            <div className={styles.trustAvatars}>
              <span className={styles.avatar}>✓</span>
              <span className={styles.avatar}>✓</span>
              <span className={styles.avatar}>✓</span>
            </div>
            <p className={styles.trustText}>
              Parceiros oficiais <strong>Meta Partner</strong> & <strong>Google Partner</strong>.
            </p>
          </div>
        </div>

        {/* Dashboard Mockup - Premium CSS illustration */}
        <div className={styles.visualContainer}>
          <div className={`${styles.dashboardMockup} glass-panel`}>
            <div className={styles.dashHeader}>
              <div className={styles.dashDots}>
                <span className={styles.dotRed}></span>
                <span className={styles.dotYellow}></span>
                <span className={styles.dotGreen}></span>
              </div>
              <div className={styles.dashBar}>naut-analytics/performance_dashboard</div>
            </div>
            
            <div className={styles.dashContent}>
              <div className={styles.mainMetrics}>
                <div className={styles.metricCard}>
                  <span className={styles.metricLabel}>Retorno sobre Investimento (ROI)</span>
                  <div className={styles.metricValueContainer}>
                    <span className={styles.metricVal}>4.8x</span>
                    <span className={styles.metricChange}>+124%</span>
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: "82%" }}></div>
                  </div>
                </div>

                <div className={styles.metricCard}>
                  <span className={styles.metricLabel}>Custo por Aquisição (CPA)</span>
                  <div className={styles.metricValueContainer}>
                    <span className={styles.metricVal}>R$ 14,20</span>
                    <span className={`${styles.metricChange} ${styles.negative}`}>-32%</span>
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: "35%", background: "var(--accent-orange)" }}></div>
                  </div>
                </div>
              </div>

              {/* Chart Mockup */}
              <div className={styles.chartContainer}>
                <div className={styles.chartTitle}>Faturamento Gerado (Meta & Google Ads)</div>
                <div className={styles.chartVisual}>
                  <div className={styles.chartLine}>
                    <svg viewBox="0 0 300 100" className={styles.svgChart}>
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--accent-orange)" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="var(--accent-red)" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      {/* Area */}
                      <path d="M 0 90 Q 50 60 100 70 T 200 30 T 300 10 L 300 100 L 0 100 Z" fill="url(#chartGrad)" />
                      {/* Line */}
                      <path d="M 0 90 Q 50 60 100 70 T 200 30 T 300 10" fill="none" stroke="url(#accentGrad)" strokeWidth="3" id="mainLine" />
                      <linearGradient id="accentGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="var(--accent-orange)" />
                        <stop offset="100%" stopColor="var(--accent-red)" />
                      </linearGradient>
                    </svg>
                    {/* Glowing dot on the peak */}
                    <div className={styles.pulseDot}></div>
                  </div>
                  <div className={styles.chartXLabels}>
                    <span>Jan</span>
                    <span>Mar</span>
                    <span>Mai</span>
                    <span>Jul</span>
                  </div>
                </div>
              </div>

              <div className={styles.activeCampaigns}>
                <div className={styles.campaignHeader}>
                  <span>Canais Ativos</span>
                  <span className={styles.statusLive}>Online</span>
                </div>
                <div className={styles.channels}>
                  <div className={styles.channelBadge}>Google Ads</div>
                  <div className={styles.channelBadge}>Meta (Instagram/FB)</div>
                  <div className={styles.channelBadge}>TikTok Ads</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative floating components */}
          <div className={`${styles.floatingBadge} ${styles.fb1} glass-panel`}>
            <div className={styles.fbIcon}>⚡</div>
            <div>
              <div className={styles.fbTitle}>+340% Conversão</div>
              <div className={styles.fbDesc}>Média em LPs desenvolvidas</div>
            </div>
          </div>

          <div className={`${styles.floatingBadge} ${styles.fb2} glass-panel`}>
            <div className={styles.fbIcon}>📈</div>
            <div>
              <div className={styles.fbTitle}>R$ 15 Milhões</div>
              <div className={styles.fbDesc}>Faturados para clientes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
