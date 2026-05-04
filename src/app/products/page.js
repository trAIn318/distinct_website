import Link from "next/link";
import styles from "./page.module.css";
import TrainWord from "../../components/TrainWord";
import VideoSection from "../../components/VideoSection";

export const metadata = {
  title: "Products | Distinct Hospitality Solutions",
  description: "TWO PRODUCTS. ONE COMPETITIVE EDGE.",
};

export default function Products() {
  return (
    <div className={styles.page}>
      {/* 5.1 Hero */}
      <section className={styles.hero} aria-labelledby="products-hero">
        <div className="container">
          <span className={styles.heroTag}>One Platform</span>
          <h1 id="products-hero" className={styles.heroH1}>
            Two Products. One <span className="emphasized gold">Competitive Edge</span>.
          </h1>
          <p className={styles.heroSubLabel}>Solutions for Your Business</p>
        </div>
      </section>

      {/* 5.2 TR Ai N Product Block */}
      <section id="products-content" className={styles.productBlock} aria-labelledby="train-heading">
        <div className={`container ${styles.productGrid}`}>
          <div className={styles.textContent}>
            <span className={styles.subLabel}>Hello</span>
            <h2 id="train-heading" className={styles.sectionHeadline}>
              AI Microlearning for Hospitality Teams
            </h2>
            <p className={styles.bodyCopy}>
              <TrainWord />{" "}Delivers role-specific training your staff completes on any device, in any language.
            </p>
            <ul className={styles.bulletList}>
              <li className={styles.bulletItem}>Reduce onboarding time</li>
              <li className={styles.bulletItem}>Boost service scores</li>
              <li className={styles.bulletItem}>Build a culture of continuous excellence</li>
            </ul>
            <div style={{ marginTop: 'var(--space-2)' }}>
              <a href="mailto:DEMO@distincthospitalitysolutions.com" className="btn-primary">
                learn more about{"\u00A0"}<TrainWord />
              </a>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <img src="/img/product_train.png" alt="Sleek mobile phone displaying premium hospitality training app" className={styles.image} loading="lazy" />
          </div>
        </div>
      </section>

      {/* 5.3 TR Ai N Video */}
      <VideoSection label="TRAiN APP" background="obsidian" className={styles.videoSectionDark} />

      {/* 5.4 GuestSight Product Block */}
      <section className={styles.productBlock} aria-labelledby="guestsight-heading">
        <div className={`container ${styles.productGrid} ${styles.reverse}`}>
          <div className={styles.textContent}>
            <span className={styles.subLabel}>LIVE GUEST SENTIMENT INTELLIGENCE</span>
            <h2 id="guestsight-heading" className={styles.sectionHeadline}>
              GUESTSIGHT
            </h2>
            <p className={styles.bodyCopy}>
              Captures and analyzes guest feedback in real time. Before it becomes a bad review. Know what your guests feel, act before they leave, and turn every stay into a loyalty opportunity.
            </p>
            <div style={{ marginTop: 'var(--space-2)' }}>
              <a href="mailto:guestsight@distincthospitalitysolutions.com" className="btn-primary">
                learn more about GuestSight
              </a>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <img src="/img/product_guestsight.png" alt="Modern dashboard on tablet showing positive guest sentiment charts" className={styles.image} loading="lazy" />
          </div>
        </div>
      </section>

      {/* 5.5 Training Modules — Hotels / Bars / Restaurants */}
      <section className={styles.modulesSection} aria-labelledby="hotels-modules-heading">
        <div className="container">
          <span className={styles.subLabel}>HOTELS BARS RESTAURANTS</span>
          <h2 id="hotels-modules-heading" className="sr-only">Hotels, Bars, and Restaurants Training Modules</h2>
          
          <div className={styles.modulesGrid}>
            <article className={styles.moduleCard}>
              <div className={styles.cardImageWrapper}>
                <img src="/img/card_front_desk.png" alt="Luxurious hotel front desk with professional staff" className={styles.cardImage} loading="lazy" />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.moduleLabel}>FRONT DESK</span>
                <h3 className={styles.moduleTitle}>FRONT DESK TRAINING</h3>
                <a href="https://distinct-app.onrender.com/#course-details-section" className={styles.moduleLink} target="_blank" rel="noopener noreferrer">View Module</a>
              </div>
            </article>

            <article className={styles.moduleCard}>
              <div className={styles.cardImageWrapper}>
                <img src="/img/card_culinary.png" alt="High-end restaurant kitchen with professional chef" className={styles.cardImage} loading="lazy" />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.moduleLabel}>CULINARY</span>
                <h3 className={styles.moduleTitle}>CULINARY TRAINING</h3>
                <a href="https://distinct-app.onrender.com/" className={styles.moduleLink} target="_blank" rel="noopener noreferrer">View Module</a>
              </div>
            </article>

            <article className={styles.moduleCard}>
              <div className={styles.cardImageWrapper}>
                <img src="/img/card_foh.png" alt="Sophisticated server in a luxury restaurant carrying a tray" className={styles.cardImage} loading="lazy" />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.moduleLabel}>FRONT OF HOUSE</span>
                <h3 className={styles.moduleTitle}>FOH TRAINING</h3>
                <a href="https://distinct-app.onrender.com/" className={styles.moduleLink} target="_blank" rel="noopener noreferrer">View Module</a>
              </div>
            </article>

            <article className={styles.moduleCard}>
              <div className={styles.cardImageWrapper}>
                <img src="/img/card_bars.png" alt="Skilled bartender making a cocktail in a premium dark moody bar" className={styles.cardImage} loading="lazy" />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.moduleLabel}>BARS</span>
                <h3 className={styles.moduleTitle}>BAR PROGRAM TRAINING</h3>
                <a href="https://distinct-app.onrender.com/#course-details-section" className={styles.moduleLink} target="_blank" rel="noopener noreferrer">View Module</a>
              </div>
            </article>

            <article className={styles.moduleCard}>
              <div className={styles.cardImageWrapper}>
                <img src="/img/card_housekeeping.png" alt="Professional housekeeper preparing a luxury hotel suite" className={styles.cardImage} loading="lazy" />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.moduleLabel}>HOUSEKEEPING</span>
                <h3 className={styles.moduleTitle}>HOUSEKEEPING TRAINING</h3>
                <a href="https://distinct-app.onrender.com/" className={styles.moduleLink} target="_blank" rel="noopener noreferrer">View Module</a>
              </div>
            </article>

            <article className={styles.moduleCard}>
              <div className={styles.cardImageWrapper}>
                <img src="/img/card_pool.png" alt="High-end resort pool at dusk with luxury cabanas" className={styles.cardImage} loading="lazy" />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.moduleLabel}>POOL AND BEACH</span>
                <h3 className={styles.moduleTitle}>POOL AND BEACH</h3>
                <a href="https://distinct-app.onrender.com/" className={styles.moduleLink} target="_blank" rel="noopener noreferrer">View Module</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 5.6 Training Modules — Residences */}
      <section className={`${styles.modulesSection} ${styles.productBlock}`} aria-labelledby="residences-modules-heading">
        <div className="container">
          <span className={styles.subLabel}>RESIDENCES: STAFF TRAINING | RESIDENT ONBOARDING | COMPLIANCE</span>
          <h2 id="residences-modules-heading" className="sr-only">Residences Training Modules</h2>
          
          <div className={styles.modulesGrid}>
            <article className={styles.moduleCard}>
              <div className={styles.cardImageWrapper}>
                <img src="/img/card_estate.png" alt="Formal butler in a luxury private estate" className={styles.cardImage} loading="lazy" />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.moduleLabel}>ESTATE STAFF & SOP&apos;S</span>
                <h3 className={styles.moduleTitle}>EXECUTIVE AND DOMESTIC ESTATE STAFF TRAINING</h3>
                <a href="#" className={styles.moduleLink}>View Module</a>
              </div>
            </article>

            <article className={styles.moduleCard}>
              <div className={styles.cardImageWrapper}>
                <img src="/img/card_resident.png" alt="Luxury condominium lobby with high-end design" className={styles.cardImage} loading="lazy" />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.moduleLabel}>RESIDENTIAL ONBOARDING</span>
                <h3 className={styles.moduleTitle}>CONDO OWNERS, HOUSE GUESTS</h3>
                <a href="https://distinct-app.onrender.com/" className={styles.moduleLink} target="_blank" rel="noopener noreferrer">View Module</a>
              </div>
            </article>

            <article className={styles.moduleCard}>
              <div className={styles.cardImageWrapper}>
                <img src="/img/card_compliance.png" alt="Professional hospitality manager in a luxury office setting" className={styles.cardImage} loading="lazy" />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.moduleLabel}>COMPLIANCE</span>
                <h3 className={styles.moduleTitle}>COMPLIANCE & SAFETY TRAINING</h3>
                <a href="https://distinct-app.onrender.com/#course-details-section" className={styles.moduleLink} target="_blank" rel="noopener noreferrer">View Module</a>
              </div>
            </article>
          </div>
        </div>
      </section>

    </div>
  );
}
