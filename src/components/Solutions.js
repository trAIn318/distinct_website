import TrainWord from "./TrainWord";
import styles from "./Solutions.module.css";

export default function Solutions() {
  return (
    <section className={styles.section} aria-labelledby="solutions-heading">
      <div className="container">
        <h2 id="solutions-heading" className={styles.sectionHeadline}>
          Distinct Solutions by industry
        </h2>

        <div className={styles.grid}>
          {/* Card 1 */}
          <article className={styles.card}>
            <div className={styles.cardImageWrapper}>
              <img src="/img/card_culinary.png" alt="Lively upscale high-end restaurant scene" className={styles.cardImage} loading="lazy" />
            </div>
            <div className={styles.cardContent}>
              <div className={styles.eyebrow}><TrainWord /> + GUESTSIGHT</div>
              <h3 className={styles.cardTitle}>Hotels Bars and Restaurants</h3>
              <p className={styles.tagline}>measurable performance, real revenue results</p>
              <div className={styles.ctaWrapper}>
                <a href="tel:+13055481826" className="btn-ghost">
                  Book a discovery call
                </a>
              </div>
            </div>
          </article>

          {/* Card 2 */}
          <article className={styles.card}>
            <div className={styles.cardImageWrapper}>
              <img src="/img/card_estate.png" alt="Luxury concierge or bespoke private event setting" className={styles.cardImage} loading="lazy" />
            </div>
            <div className={styles.cardContent}>
              <div className={styles.eyebrow}>BESPOKE / CONCIERGE</div>
              <h3 className={styles.cardTitle}>Private Clients</h3>
              <p className={styles.tagline}>Bespoke workforce solutions for discerning operations</p>
              <div className={styles.ctaWrapper}>
                <a href="mailto:team@distincthospitalitysolutions.com" className="btn-ghost">
                  submit an inquiry
                </a>
              </div>
            </div>
          </article>

          {/* Card 3 */}
          <article className={styles.card}>
            <div className={styles.cardImageWrapper}>
              <img src="/img/card_resident.png" alt="Luxury high-rise condominium lobby" className={styles.cardImage} loading="lazy" />
            </div>
            <div className={styles.cardContent}>
              <div className={styles.eyebrow} aria-hidden="true"></div>
              <h3 className={styles.cardTitle}>Residential</h3>
              <p className={styles.tagline}>Compliance, alignment, and scalable culture across every floor</p>
              <div className={styles.ctaWrapper}>
                <a href="mailto:info@traindistinct.com" className="btn-ghost">
                  join the waitlist
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
