"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import { SERVICES_PILLARS, getServicesByPillar } from "@/data/servicesData";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileAccordionOpen, setMobileAccordionOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeAll = () => {
    setIsOpen(false);
    setDropdownOpen(false);
    setMobileAccordionOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""} glass-panel`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoContainer} onClick={closeAll}>
          <Image 
            src="/Logotipo Branco_vetor.svg" 
            alt="Logo Agência Naut Marketing Digital" 
            width={150} 
            height={62} 
            priority
            className={styles.logoImage}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {/* Mega Menu Dropdown */}
          <div 
            className={styles.navItemDropdown}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link 
              href="/servicos" 
              className={`${styles.navLink} ${styles.hasDropdown}`}
              onClick={closeAll}
            >
              Serviços
              <span className={`${styles.chevron} ${dropdownOpen ? styles.chevronOpen : ""}`}>▼</span>
            </Link>

            {dropdownOpen && (
              <div className={styles.megaMenu}>
                <div className={styles.megaMenuGrid}>
                  {SERVICES_PILLARS.map((pillar) => {
                    const services = getServicesByPillar(pillar.id);
                    return (
                      <div key={pillar.id} className={styles.pillarCol}>
                        <div className={styles.pillarColHeader}>
                          <span className={styles.pillarIcon}>{pillar.icon}</span>
                          <span>{pillar.title.split("&")[0].trim()}</span>
                        </div>
                        <ul className={styles.pillarColLinks}>
                          {services.map((service) => (
                            <li key={service.slug}>
                              <Link 
                                href={`/servicos/${service.slug}`} 
                                className={styles.megaMenuItem}
                                onClick={closeAll}
                              >
                                <span className={styles.megaMenuItemTitle}>{service.badge}</span>
                                <span className={styles.megaMenuItemDesc}>{service.keyword}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>

                <div className={styles.megaMenuFooter}>
                  <span className={styles.megaMenuFooterText}>
                    15 soluções completas para escala de vendas e autoridade no Google
                  </span>
                  <Link 
                    href="/servicos" 
                    className={styles.megaMenuFooterLink}
                    onClick={closeAll}
                  >
                    Ver Hub Completo de Serviços →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <a href="/#methodology" className={styles.navLink} onClick={closeAll}>O Jeito Naut</a>
          <a href="/#cases" className={styles.navLink} onClick={closeAll}>Cases</a>
          <a href="#contact" className={styles.navLink} onClick={closeAll}>Contato</a>
          <a href="#contact" className="btn btn-primary btn-sm" onClick={closeAll}>Solicitar Proposta</a>
        </nav>

        {/* Hamburger Menu Toggle */}
        <button 
          className={`${styles.hamburger} ${isOpen ? styles.hamburgerActive : ""}`} 
          onClick={toggleMenu}
          aria-label="Abrir Menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        {/* Mobile Navigation */}
        <nav className={`${styles.mobileNav} ${isOpen ? styles.mobileNavActive : ""}`}>
          <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
            <button 
              className={styles.mobileNavLink}
              onClick={() => setMobileAccordionOpen(!mobileAccordionOpen)}
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              Serviços <span className={`${styles.chevron} ${mobileAccordionOpen ? styles.chevronOpen : ""}`}>▼</span>
            </button>

            {mobileAccordionOpen && (
              <div className={styles.mobileServicesAccordion}>
                {SERVICES_PILLARS.map((pillar) => {
                  const services = getServicesByPillar(pillar.id);
                  return (
                    <div key={pillar.id} className={styles.mobilePillarGroup}>
                      <span className={styles.mobilePillarTitle}>{pillar.icon} {pillar.title}</span>
                      {services.map((s) => (
                        <Link 
                          key={s.slug} 
                          href={`/servicos/${s.slug}`} 
                          className={styles.mobileSubLink}
                          onClick={closeAll}
                        >
                          • {s.badge}
                        </Link>
                      ))}
                    </div>
                  );
                })}
                <Link 
                  href="/servicos" 
                  className={styles.mobileSubLink} 
                  style={{ fontWeight: 700, color: "var(--accent-orange)" }}
                  onClick={closeAll}
                >
                  → Ver todas as 15 soluções
                </Link>
              </div>
            )}
          </div>

          <a href="/#methodology" className={styles.mobileNavLink} onClick={closeAll}>O Jeito Naut</a>
          <a href="/#cases" className={styles.mobileNavLink} onClick={closeAll}>Cases</a>
          <a href="#contact" className={styles.mobileNavLink} onClick={closeAll}>Contato</a>
          <a href="#contact" className="btn btn-primary" onClick={closeAll}>Solicitar Proposta</a>
        </nav>
      </div>
    </header>
  );
}
