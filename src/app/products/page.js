import styles from "./page.module.css";
import TrainWord from "../../components/TrainWord";
import VideoSection from "../../components/VideoSection";

export const metadata = {
  title: "Products | Distinct Hospitality Solutions",
  description: "Five Products. One Operating System for Hospitality.",
};

export default function Products() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero} aria-labelledby="products-hero">
        <div className="container">
          <span className={styles.heroTag}>One Platform</span>
          <h1 id="products-hero" className={styles.heroH1}>
            Five Products. One <span className="emphasized gold">Operating System</span> for Hospitality.
          </h1>
          <p className={styles.heroSubLabel}>Each product solves a distinct problem. Together they create an intelligence layer your competitors can&apos;t replicate.</p>
        </div>
      </section>

      {/* Product 1 — trAIn */}
      <section id="products-content" className={styles.productBlock} aria-labelledby="train-heading">
        <div className={`container ${styles.productGrid}`}>
          <div className={styles.textContent}>
            <span className={styles.subLabel}>AI Microlearning</span>
            <h2 id="train-heading" className={styles.sectionHeadline}>
              <TrainWord /> — Your Standards. Every Employee. Every Shift.
            </h2>
            <p className={styles.bodyCopy}>
              <TrainWord />{" "}delivers role-specific hospitality training your staff completes on any device, in any language. Five minutes a day. Scenario-based. Measurable.
            </p>
            <p className={styles.bodyCopy}>
              Your training director&apos;s expertise finally scales — reaching every new hire, every shift, on day one. Consistently. Without pulling your managers off the floor.
            </p>
            <ul className={styles.bulletList}>
              <li className={styles.bulletItem}>Reduce onboarding time by up to 40%</li>
              <li className={styles.bulletItem}>Multilingual — English, Spanish, and more</li>
              <li className={styles.bulletItem}>Role-specific: Server, Bartender, Host, Housekeeping, Manager</li>
              <li className={styles.bulletItem}>Compliance reporting for managers</li>
              <li className={styles.bulletItem}>Powered by ARIA — your AI coaching agent</li>
            </ul>
            <div style={{ marginTop: 'var(--space-2)' }}>
              <a href="mailto:info@distincthospitalitysolutions.com" className="btn-primary">
                Book a Demo
              </a>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <img src="/img/product_train.png" alt="Sleek mobile phone displaying premium hospitality training app" className={styles.image} loading="lazy" />
          </div>
        </div>
      </section>

      {/* trAIn Video */}
      <VideoSection label="trAIn APP" background="obsidian" className={styles.videoSectionDark} />

      {/* Product 2 — ARIA */}
      <section className={styles.productBlock} aria-labelledby="aria-heading">
        <div className={`container ${styles.productGrid} ${styles.reverse}`}>
          <div className={styles.textContent}>
            <span className={styles.subLabel}>AI Coaching Agent</span>
            <h2 id="aria-heading" className={styles.sectionHeadline}>
              ARIA — The Mentor That Never Clocks Out.
            </h2>
            <p className={styles.bodyCopy}>
              ARIA is Distinct&apos;s AI coaching agent embedded inside <TrainWord />. She answers questions before a shift, guides decisions during one, and helps staff practice the moments that matter most.
            </p>
            <p className={styles.bodyCopy}>
              She adapts to how each person thinks, speaks any language, and builds a living performance profile of every employee over time. Managers see each team member&apos;s strengths, growth areas, learning style, and role fit — built from real conversations, not assessments.
            </p>
            <ul className={styles.bulletList}>
              <li className={styles.bulletItem}>Multilingual — responds in any language automatically</li>
              <li className={styles.bulletItem}>DISC-adaptive — adjusts to each person&apos;s communication style</li>
              <li className={styles.bulletItem}>Guest profiling — reads guest situations and advises accordingly</li>
              <li className={styles.bulletItem}>Scenario simulation — practice difficult moments before they happen</li>
              <li className={styles.bulletItem}>Employee work profiles — visible to managers and admins</li>
            </ul>
            <div style={{ marginTop: 'var(--space-2)' }}>
              <a href="https://aria-distinct.onrender.com" className="btn-primary" target="_blank" rel="noopener noreferrer">
                Talk to ARIA →
              </a>
            </div>
          </div>
          <div className={`${styles.imageWrapper} ${styles.ariaImageWrapper}`}>
            <img src="/img/aria_mentor_ui.png" alt="ARIA AI coaching agent interface" className={styles.image} loading="lazy" />
          </div>
        </div>
      </section>

      {/* Product 3 — GuestSight */}
      <section className={styles.productBlock} aria-labelledby="guestsight-heading">
        <div className={`container ${styles.productGrid}`}>
          <div className={styles.textContent}>
            <span className={styles.subLabel}>Live Guest Sentiment Intelligence</span>
            <h2 id="guestsight-heading" className={styles.sectionHeadline}>
              GuestSight — Know What Your Guests Feel Before They Post It.
            </h2>
            <p className={styles.bodyCopy}>
              GuestSight captures and analyzes guest feedback in real time — by shift, by department, by employee. Act while the guest is still in the building. Turn a complaint into a loyalty opportunity before it becomes a bad review.
            </p>
            <ul className={styles.bulletList}>
              <li className={styles.bulletItem}>Real-time sentiment alerts by department and shift</li>
              <li className={styles.bulletItem}>AI-powered complaint personas for staff practice</li>
              <li className={styles.bulletItem}>Sentiment-to-sales correlation dashboard</li>
              <li className={styles.bulletItem}>Feeds directly back into <TrainWord /> — closing the loop</li>
            </ul>
            <div style={{ marginTop: 'var(--space-2)' }}>
              <a href="mailto:info@distincthospitalitysolutions.com" className="btn-primary">
                Learn more about GuestSight
              </a>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <img src="/img/platform_overview.png" alt="Modern dashboard on tablet showing positive guest sentiment charts" className={styles.image} loading="lazy" />
          </div>
        </div>
      </section>

      {/* Product 4 — StaffLink */}
      <section className={styles.productBlock} aria-labelledby="stafflink-heading">
        <div className={`container ${styles.productGrid} ${styles.reverse}`}>
          <div className={styles.textContent}>
            <span className={styles.subLabel}>Internal Shift Communications</span>
            <h2 id="stafflink-heading" className={styles.sectionHeadline}>
              StaffLink — The Night Team&apos;s Knowledge Doesn&apos;t Disappear When They Clock Out.
            </h2>
            <p className={styles.bodyCopy}>
              Every shift change is a moment where guest information can get lost. StaffLink automates pre-shift briefings — pushing VIP notes, service flags, and guest context to every team member before they touch their first guest.
            </p>
            <ul className={styles.bulletList}>
              <li className={styles.bulletItem}>Automated pre-shift briefings by department</li>
              <li className={styles.bulletItem}>VIP arrival notes and guest preference sharing</li>
              <li className={styles.bulletItem}>Service issue flagging across shifts</li>
              <li className={styles.bulletItem}>No dropped balls. No &quot;I didn&apos;t know.&quot;</li>
            </ul>
            <div style={{ marginTop: 'var(--space-2)' }}>
              <a href="mailto:info@distincthospitalitysolutions.com" className="btn-primary">
                Learn more about StaffLink
              </a>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <img src="/img/step_track.png" alt="StaffLink shift communications interface" className={styles.image} loading="lazy" />
          </div>
        </div>
      </section>

      {/* Product 5 — Distinct Digital Solutions */}
      <section className={styles.productBlock} aria-labelledby="digital-heading">
        <div className={`container ${styles.productGrid}`}>
          <div className={styles.textContent}>
            <span className={styles.subLabel}>Digital Payroll &amp; Payments</span>
            <h2 id="digital-heading" className={styles.sectionHeadline}>
              Distinct Digital — Payroll and Payments Built for Hospitality.
            </h2>
            <p className={styles.bodyCopy}>
              Digital payroll and payment technology built for the complexity of hospitality operations — multiple shifts, tip structures, and cross-department teams.
            </p>
            <div style={{ marginTop: 'var(--space-2)' }}>
              <a href="mailto:info@distincthospitalitysolutions.com" className="btn-primary">
                Join the waitlist
              </a>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <img src="/img/step_optimize.png" alt="Distinct Digital payroll solution" className={styles.image} loading="lazy" />
          </div>
        </div>
      </section>

      {/* Training Modules — trAIn Course Library */}
      <section className={styles.modulesSection} aria-labelledby="hotels-modules-heading">
        <div className="container">
          <span className={styles.subLabel}>trAIn Course Library</span>
          <h2 id="hotels-modules-heading" className={styles.sectionHeadline} style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
            Role-Specific Training for Every Position on the Floor.
          </h2>
          
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

      {/* Training Modules — Residences */}
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
                <span className={styles.moduleLabel}>ESTATE STAFF &amp; SOP&apos;S</span>
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
                <h3 className={styles.moduleTitle}>COMPLIANCE &amp; SAFETY TRAINING</h3>
                <a href="https://distinct-app.onrender.com/#course-details-section" className={styles.moduleLink} target="_blank" rel="noopener noreferrer">View Module</a>
              </div>
            </article>
          </div>
        </div>
      </section>

    </div>
  );
}
