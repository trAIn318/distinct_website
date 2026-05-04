import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      {/* Dark base — no full-bleed bg image anymore */}

      {/* Two-column split */}
      <div className={`container ${styles.heroInner}`}>

        {/* LEFT — Copy */}
        <div className={styles.heroLeft}>
          <p className={styles.eyebrow}>
            &quot;Distinct&quot; describes something clearly separate, different, or unmistakably noticeable
          </p>

          <h2 className={styles.subHeadline}>
            Deliver Five Star Experiences <span className="emphasized">Consistently</span>
          </h2>

          {/* SR-only H1 for accessibility */}
          <h1 id="hero-heading" className="sr-only">
            The AI Platform Built for Hospitality
          </h1>

          <p className={styles.bodyCopy}>
            Distinct Hospitality trains your team, tracks what matters in front of house operations, and grows your revenue with the help of hospitality experts.
          </p>

          <div className={styles.ctaGroup}>
            <a
              href="mailto:DEMO@distincthospitalitysolutions.com"
              className="btn-primary"
            >
              Book a Demo
            </a>
            <a
              href="mailto:WAITLIST@distincthospitalitysolutions.com"
              className="btn-ghost"
            >
              Join the Waitlist
            </a>
          </div>
        </div>

        {/* RIGHT — Hero Image */}
        <div className={styles.heroRight}>
          <div className={styles.heroImageWrapper}>
            <Image
              src="/img/hero.png"
              alt="Hospitality excellence"
              fill
              className={styles.heroImage}
              priority
            />
            {/* Subtle edge fade on left so image blends into bg */}
            <div className={styles.heroImageFade} aria-hidden="true" />
          </div>
        </div>

      </div>

      {/* Full-width ticker — spans below both columns */}
      <div className={styles.tickerContainer} aria-hidden="true">
        <div className={styles.ticker}>
          <span className={styles.tickerText}>The AI Platform Built for Hospitality</span>
          <span className={styles.tickerText}>The AI Platform Built for Hospitality</span>
          <span className={styles.tickerText}>The AI Platform Built for Hospitality</span>
        </div>
      </div>
    </section>
  );
}
