"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";

const LOGO_URL = "/img/logo_cropped.png";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
  ];

  return (
    <header className={styles.nav}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logoArea}>
          <Link href="/">
            <img
              src={LOGO_URL}
              alt="Distinct Hospitality Solutions"
              className={styles.logo}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.navLinks} aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="mailto:DEMO@distincthospitalitysolutions.com"
            className="btn-primary"
          >
            Book a Demo
          </a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className={`${styles.menuButton} ${isMobileMenuOpen ? styles.menuButtonOpen : ""}`}
          onClick={toggleMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className={styles.menuButtonLine}></span>
          <span className={styles.menuButtonLine}></span>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""}`} aria-hidden={!isMobileMenuOpen}>
        <nav className={styles.mobileMenuLinks} aria-label="Mobile Navigation" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-6)' }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="mailto:DEMO@distincthospitalitysolutions.com"
            className="btn-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book a Demo
          </a>
        </nav>
      </div>
    </header>
  );
}
