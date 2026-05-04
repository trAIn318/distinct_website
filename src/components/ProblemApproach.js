import styles from "./ProblemApproach.module.css";

export default function ProblemApproach() {
  return (
    <section className={styles.section} aria-labelledby="problem-approach-heading">
      <div className="container">
        <h2 id="problem-approach-heading" className={styles.sectionHeadline}>
          Training Doesn&apos;t Fail. Measurement Does
        </h2>
        
        <div className={styles.grid}>
          {/* Problem Block (~61.8%) */}
          <div className={styles.problemColumn}>
            <h3 className={styles.blockHeadline}>
              Most hospitality businesses invest in training, but can&apos;t answer:
            </h3>
            <ul className={styles.problemList}>
              <li className={styles.problemItem}>
                Did it increase sales in the distinct hospitality sector?
              </li>
              <li className={styles.problemItem}>
                Which behaviors in front of house operations actually drive revenue?
              </li>
              <li className={styles.problemItem}>
                Who are your top performers, and why?
              </li>
              <li className={styles.problemItem}>
                Without data, training in hospitality experts can become a cost center.
              </li>
            </ul>
          </div>

          {/* Approach Block (~38.2%) */}
          <div className={styles.approachColumn}>
            <h3 className={styles.blockHeadline}>
              Our Approach — A Performance System. Not Just Training
            </h3>
            <p className={styles.approachBody}>
              Distinct connects training directly to real-world results. We track what your team does, measure what matters, and show you exactly how performance impacts revenue.
            </p>
            <div>
              <a
                href="mailto:INFO@DISTINCTHOSPITALITYSOLUTIONS.COM"
                className="btn-primary"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
