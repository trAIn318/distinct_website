import TrainWord from "../../components/TrainWord";
import styles from "./page.module.css";

export const metadata = {
  title: "About | Distinct Hospitality Solutions",
  description: "Built for Hospitality. Designed for Scale.",
};

export default function About() {
  return (
    <div className={styles.page}>
      {/* 4.1 Hero */}
      <section className={styles.hero} aria-labelledby="about-hero">
        <div className="container">
          <span className={styles.heroTag}>One Platform</span>
          <h1 id="about-hero" className={styles.heroH1}>
            Built for Hospitality. Designed for <span className="emphasized gold">Scale</span>.
          </h1>
          <p className={styles.heroSubLabel}>Solutions for Your Business</p>
        </div>
      </section>

      {/* Content Grid (About Us, History, Why) */}
      <section className={styles.contentSection}>
        <div className={`container ${styles.grid}`}>
          
          <div className={styles.leftColumn}>
            {/* 4.2 About Us Block */}
            <article className={styles.block}>
              <h2 className={styles.blockHeadline}>Performance infrastructure for hospitality teams</h2>
              <div className={styles.blockBody}>
                <p>
                  Our commitment to excellence began with a simple desire. To provide every person we touched with the best possible experience through service.
                </p>
                <p>That cannot be automated.</p>
                <p>
                  We strive for a real one on one valued moment, we wanted to replicate the best experiences and multiply them at scale without losing the essence of a client&apos;s message, culture and identity.
                </p>
                <p>How could we deliver this commitment?</p>
                <p><strong>Our Team, Your Resource. Our Platform your Tool</strong></p>
                <p>That is why we created DISTINCT.</p>
              </div>
              {/* Image omitted: Not scraped in PRD */}
            </article>
          </div>

          <div className={styles.rightColumn}>
            {/* 4.3 Our History */}
            <article className={styles.block}>
              <h2 className={styles.blockHeadline}>Our history</h2>
              <div className={styles.blockBody}>
                <p>
                  Distinct is a unique tool geared towards the service industries. We provide systems for training and development. DISTINCT is an immersive and gamefied platform to drive your team&apos;s success.
                </p>
              </div>
              {/* Image omitted: Not scraped in PRD */}
            </article>

            {/* 4.4 Why Distinct */}
            <article className={styles.block}>
              <h2 className={styles.blockHeadline}>WHY DISTINCT</h2>
              <div className={styles.blockBody}>
                <p>
                  To bring you the most innovative and data driven solutions across all industry levels and department.
                </p>
              </div>
              {/* Image omitted: Not scraped in PRD */}
            </article>
          </div>

        </div>
      </section>

      {/* 4.5 Product Platform Block */}
      <section className={styles.platformSection} aria-labelledby="platform-heading">
        <div className="container">
          <h2 id="platform-heading" className={styles.platformHeadline}>
            <span className={styles.platformHeadlineMain}>OUR PRODUCT PLATFORM</span>
            <span className={styles.platformHeadlineSub}>One Platform. Total Operational Visibility.</span>
          </h2>
          <p className={styles.platformSubLabel}>
            AI-driven training and coaching engine:
          </p>
          
          <ul className={styles.platformList}>
            <li className={styles.platformItem}><TrainWord /></li>
            <li className={styles.platformItem}>GuestSight</li>
            <li className={styles.platformItem}>StaffLink</li>
            <li className={styles.platformItem}>Multi language</li>
            <li className={styles.platformItem}>Customized Distinct Intelligence Layer</li>
          </ul>

          <p className={styles.platformBody}>
            AI agents analyze, optimize, and improve performance across locations.
          </p>

          {/* Screenshot omitted: Not scraped in PRD */}

          <h3 className={styles.neuroNerd}>Distinct NeuroNerd</h3>
        </div>
      </section>
    </div>
  );
}
