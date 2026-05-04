import styles from "./TrainWord.module.css";

export default function TrainWord({ className = "" }) {
  return (
    <span className={`${styles.trainWord} ${className}`}>
      TR<span className={styles.ai}>Ai</span>N
    </span>
  );
}
