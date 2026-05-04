import TrainWord from "./TrainWord";
import styles from "./HowItWorks.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} aria-labelledby="how-it-works-heading">
      <div className="container">
        <header className={styles.header}>
          <span className={styles.eyebrow}>HOW IT WORKS</span>
          <h2 id="how-it-works-heading" className={styles.headline}>
            <TrainWord />{" "}→ Track → Analyze → Increase Revenue
          </h2>
        </header>

        <div className={styles.grid}>
          {/* Step 1 */}
          <article className={styles.stepCard}>
            <div className={styles.imageWrapper}>
              <img src="/img/step_train.png" alt="Bartender training on a tablet" className={styles.image} loading="lazy" />
            </div>
            <span className={styles.stepNumber}>Step 1</span>
            <h3 className={styles.stepTitle}>Train</h3>
            <p className={styles.stepBody}>
              AI-powered, role-specific training for servers, hosts, bartenders, and managers
            </p>
          </article>

          {/* Step 2 */}
          <article className={styles.stepCard}>
            <div className={styles.imageWrapper}>
              <img src="/img/step_track.png" alt="Sleek modern POS system showing analytics" className={styles.image} loading="lazy" />
            </div>
            <span className={styles.stepNumber}>Step 2</span>
            <h3 className={styles.stepTitle}>Track</h3>
            <div className={styles.stepBody}>
              Capture real-world behaviors:
              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>Greeting time</li>
                <li className={styles.bulletItem}>Upselling activity</li>
                <li className={styles.bulletItem}>Guest recovery actions</li>
              </ul>
            </div>
          </article>

          {/* Step 3 */}
          <article className={styles.stepCard}>
            <div className={styles.imageWrapper}>
              <img src="/img/step_analyze.png" alt="Luxury hotel guest smiling warmly" className={styles.image} loading="lazy" />
            </div>
            <span className={styles.stepNumber}>Step 3</span>
            <h3 className={styles.stepTitle}>Analyze</h3>
            <div className={styles.stepBody}>
              <p>Connect behavior to GUESTSIGHT, which:</p>
              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>Surfaces guest sentiment in real time</li>
                <li className={styles.bulletItem}>Check averages</li>
                <li className={styles.bulletItem}>Guest satisfaction</li>
              </ul>
            </div>
          </article>

          {/* Step 4 */}
          <article className={styles.stepCard}>
            <div className={styles.imageWrapper}>
              <img src="/img/step_optimize.png" alt="Restaurant manager coaching staff" className={styles.image} loading="lazy" />
            </div>
            <span className={styles.stepNumber}>Step 4</span>
            <h3 className={styles.stepTitle}>Optimize</h3>
            <div className={styles.stepBody}>
              <p>
                Deliver real-time feedback and continuously improve performance through our AI-powered coaching engine.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
