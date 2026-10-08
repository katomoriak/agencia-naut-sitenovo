"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        {/* Brand Column */}
        <div className={styles.brandCol}>
          <Link href="/" className={styles.logoContainer}>
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
          </Link>
          <p className={styles.brandDesc}>
            Navegamos as águas complexas do marketing digital para direcionar sua marca ao faturamento previsível e escalável.
          </p>
          <div className={styles.socials}>
            <a href="https://www.instagram.com/agencianaut" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">Instagram</a>
            <a href="https://www.linkedin.com/company/agencianaut" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">LinkedIn</a>
          </div>
        </div>

        {/* Links Column */}
        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Soluções & SEO</h4>
          <ul className={styles.linksList}>
            <li><Link href="/servicos">Todos os Serviços</Link></li>
            <li><Link href="/servicos/criacao-de-sites-profissionais">Criação de Sites</Link></li>
            <li><Link href="/servicos/criacao-de-landing-pages-alta-conversao">Landing Pages</Link></li>
            <li><Link href="/servicos/consultoria-seo-estrategico">Consultoria de SEO</Link></li>
            <li><Link href="/servicos/seo-local-google-meu-negocio">SEO Local no Maps</Link></li>
            <li><Link href="/servicos/gestao-de-trafego-pago-performance">Tráfego Pago & ROI</Link></li>
            <li><Link href="/servicos/gestao-de-google-ads-para-empresas">Google Ads</Link></li>
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
