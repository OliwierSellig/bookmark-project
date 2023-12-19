import { IconArrow } from "@/svgs";
import styles from "./faqBox.module.scss";

interface FaqBoxProps {
  q: { question: string; answer: string };
  isActive: boolean;
  setActive: () => void;
  unSetActive: () => void;
}

function FaqBox({ q, isActive, setActive, unSetActive }: FaqBoxProps) {
  return (
    <li className={styles.item}>
      <button
        onClick={() => {
          if (!isActive) setActive();
          else unSetActive();
        }}
        className={styles.header}
      >
        <h3 className={styles.question}>{q.question}</h3>

        <IconArrow
          className={`${styles.icon} ${isActive ? styles.icon__open : ""}`}
        />
      </button>
      <div className={`${styles.answer} ${isActive ? styles.open : ""}`}>
        <p>{q.answer}</p>
      </div>
    </li>
  );
}

export default FaqBox;
