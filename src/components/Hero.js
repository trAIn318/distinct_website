import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      {/* Two-column split */}
      <div className={`container ${styles.heroInner}`}>

        {/* LEFT — Copy */}
        <div className={styles.heroLeft}>
          <h1 id="hero-heading" className={styles.subHeadline}>
            The AI Platform Built for the People Who Run <span className="emphasized gold">Hospitality</span>.
          </h1>

          <p className={styles.bodyCopy}>
            Distinct trains your team, tracks what matters, and turns staff performance into measurable revenue — across every shift, every property, every market.
          </p>

          <div className={styles.ctaGroup}>
            <a
              href="mailto:info@distincthospitalitysolutions.com"
              className="btn-primary"
            >
              Book a Demo
            </a>
            <a
              href="https://aria-distinct.onrender.com"
              className="btn-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Meet ARIA
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
    </section>
  );
}
