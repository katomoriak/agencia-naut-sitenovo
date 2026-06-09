"use client";

import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        {/* Brand Column */}
        <div className={styles.brandCol}>
          <a href="#home" className={styles.logoContainer}>
            <div className={styles.logoWrapper}>
              <Image 
                src="/images/logo-icon.png" 
                alt="Logo Agência Naut" 
                width={38} 
                height={38} 
                className={styles.logoIcon}
              />
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoBrand}>Naut</span>
              <span className={styles.logoSub}>Marketing Digital</span>
            </div>
          </a>
          <p className={styles.brandDesc}>
            Navegamos as águas complexas do marketing digital para direcionar sua marca ao faturamento previsível e escalável.
          </p>
          <div className={styles.socials}>
            <a href="#" className={styles.socialLink} aria-label="Instagram">Instagram</a>
            <a href="#" className={styles.socialLink} aria-label="LinkedIn">LinkedIn</a>
            <a href="#" className={styles.socialLink} aria-label="YouTube">YouTube</a>
          </div>
        </div>

        {/* Links Column */}
        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Navegação</h4>
          <ul className={styles.linksList}>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#methodology">O Jeito Naut</a></li>
            <li><a href="#cases">Cases</a></li>
            <li><a href="#contact">Fale Conosco</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Contato</h4>
          <ul className={styles.linksList}>
            <li>
              <span className={styles.contactLabel}>E-mail:</span>
              <a href="mailto:contato@agencianaut.com.br" className={styles.contactValue}>contato@agencianaut.com.br</a>
            </li>
            <li>
              <span className={styles.contactLabel}>WhatsApp:</span>
              <a href="https://wa.me/5511997458464" target="_blank" rel="noopener noreferrer" className={styles.contactValue}>11 9 9745-8464</a>
            </li>
            <li>
              <span className={styles.contactLabel}>Endereço:</span>
              <p className={styles.contactText}>Rua do bosque, 319 - Jd. Bela Vista<br />São Paulo - SP</p>
            </li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className={styles.newsletterCol}>
          <h4 className={styles.colTitle}>Inscreva-se na Newsletter</h4>
          <p className={styles.newsletterDesc}>
            Receba insights semanais de growth, tráfego pago, SEO e conversão direto na sua caixa de entrada. Sem spam.
          </p>
          <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              required 
              className={styles.newsletterInput} 
            />
            <button type="submit" className={styles.newsletterBtn} aria-label="Inscrever-se">
              →
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomContainer}`}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Agência Naut - Marketing Digital. Todos os direitos reservados.
          </p>
          <p className={styles.madeBy}>
            Feito com orgulho em Next.js.
          </p>
        </div>
      </div>
    </footer>
  );
}
