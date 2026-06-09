"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    site: "",
    faturamento: "",
    objetivo: "",
    mensagem: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulating API submit
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      {/* Background blur orb for aesthetic depth */}
      <div className="bg-glow-container">
        <div className="glow-orb orb-3"></div>
      </div>

      <div className={`container ${styles.gridContainer}`}>
        <div className={styles.infoCol}>
          <span className={styles.subtitle}>Fale Conosco</span>
          <h2 className={styles.title}>
            Pronto para colocar sua empresa na <span className="text-gradient">rota certa</span>?
          </h2>
          <p className={styles.lead}>
            Preencha o formulário para solicitar um diagnóstico gratuito das suas campanhas atuais e site. Nossa equipe responderá em até 24 horas úteis.
          </p>
          
          <div className={styles.benefits}>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>✓</div>
              <div>
                <h4 className={styles.benefitTitle}>Diagnóstico Sem Compromisso</h4>
                <p className={styles.benefitDesc}>Análise real das suas contas de anúncio atuais por especialistas.</p>
              </div>
            </div>

            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>✓</div>
              <div>
                <h4 className={styles.benefitTitle}>Estratégia Sob Medida</h4>
                <p className={styles.benefitDesc}>Sem pacotes engessados. Criamos o plano exato que o seu momento exige.</p>
              </div>
            </div>

            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>✓</div>
              <div>
                <h4 className={styles.benefitTitle}>Parceria de Longo Prazo</h4>
                <p className={styles.benefitDesc}>Nosso foco é LTV. Crescemos à medida que geramos lucro para você.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.formCol}>
          {!success ? (
            <form onSubmit={handleSubmit} className={`${styles.form} glass-panel`}>
              <h3 className={styles.formTitle}>Solicitar Análise de Negócio</h3>
              
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label htmlFor="nome" className={styles.label}>Nome Completo *</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Seu nome"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>E-mail Corporativo *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="voce@suaempresa.com.br"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="telefone" className={styles.label}>WhatsApp / Celular *</label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    required
                    value={formData.telefone}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="(00) 99999-9999"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="empresa" className={styles.label}>Nome da Empresa *</label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    required
                    value={formData.empresa}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Sua Empresa Ltda"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="faturamento" className={styles.label}>Faturamento Mensal *</label>
                  <select
                    id="faturamento"
                    name="faturamento"
                    required
                    value={formData.faturamento}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option value="" disabled>Selecione uma faixa</option>
                    <option value="Até R$ 20k">Até R$ 20.000 / mês</option>
                    <option value="R$ 20k a R$ 50k">R$ 20.000 a R$ 50.000 / mês</option>
                    <option value="R$ 50k a R$ 100k">R$ 50.000 a R$ 100.000 / mês</option>
                    <option value="Acima de R$ 100k">Acima de R$ 100.000 / mês</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="objetivo" className={styles.label}>Objetivo Principal *</label>
                  <select
                    id="objetivo"
                    name="objetivo"
                    required
                    value={formData.objetivo}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option value="" disabled>Selecione o objetivo</option>
                    <option value="Aumentar Vendas / Leads (Ads)">Aumentar Vendas / Leads (Tráfego Pago)</option>
                    <option value="Melhorar Google Orgânico (SEO)">Melhorar Google Orgânico (SEO)</option>
                    <option value="Criar Novo Site / Landing Page">Criar Novo Site / Landing Page</option>
                    <option value="Consultoria / Estratégia Geral">Consultoria / Estratégia Geral</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroupFull}>
                <label htmlFor="mensagem" className={styles.label}>Detalhes Adicionais (Opcional)</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows="4"
                  value={formData.mensagem}
                  onChange={handleChange}
                  className={styles.textarea}
                  placeholder="Conte um pouco sobre seus desafios de vendas ou objetivos atuais..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`btn btn-primary ${styles.submitBtn}`}
              >
                {loading ? (
                  <span className={styles.spinner}></span>
                ) : (
                  "Solicitar Diagnóstico Gratuito"
                )}
              </button>
            </form>
          ) : (
            <div className={`${styles.successCard} glass-panel`}>
              <div className={styles.successIcon}>✓</div>
              <h3 className={styles.successTitle}>Proposta Recebida com Sucesso!</h3>
              <p className={styles.successText}>
                Obrigado pelo contato, <strong>{formData.nome}</strong>. Nossos analistas de performance já estão notificando a equipe de estratégia da <strong>Naut</strong>.
              </p>
              <p className={styles.successSub}>
                Em menos de 24 horas úteis enviaremos uma mensagem no WhatsApp <strong>{formData.telefone}</strong> ou e-mail corporativo para agendar nosso bate-papo de diagnóstico.
              </p>
              <button 
                onClick={() => setSuccess(false)} 
                className="btn btn-secondary"
                style={{ marginTop: "1rem", width: "100%" }}
              >
                Enviar Outro Formulário
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
