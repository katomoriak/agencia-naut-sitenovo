"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""} glass-panel`}>
      <div className={styles.container}>
        <a href="#home" className={styles.logoContainer} onClick={closeMenu}>
          <Image 
            src="/Logotipo Branco_vetor.svg" 
            alt="Logo Agência Naut Marketing Digital" 
            width={150} 
            height={62} 
            priority
            className={styles.logoImage}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <a href="#services" className={styles.navLink}>Serviços</a>
          <a href="#methodology" className={styles.navLink}>O Jeito Naut</a>
          <a href="#cases" className={styles.navLink}>Cases</a>
          <a href="#contact" className={styles.navLink}>Contato</a>
          <a href="#contact" className="btn btn-primary btn-sm">Solicitar Proposta</a>
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
          <a href="#services" className={styles.mobileNavLink} onClick={closeMenu}>Serviços</a>
          <a href="#methodology" className={styles.mobileNavLink} onClick={closeMenu}>O Jeito Naut</a>
          <a href="#cases" className={styles.mobileNavLink} onClick={closeMenu}>Cases</a>
          <a href="#contact" className={styles.mobileNavLink} onClick={closeMenu}>Contato</a>
          <a href="#contact" className="btn btn-primary" onClick={closeMenu}>Solicitar Proposta</a>
        </nav>
      </div>
    </header>
  );
}
