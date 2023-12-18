"use client";

import { useState } from "react";
import { questionList } from "@/app/utils/utilityData";
import FaqBox from "./FaqBox";
import styles from "./faqContainer.module.scss";

function FaqContainer() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <ul className={styles.list}>
      {questionList.map((q, i) => (
        <FaqBox
          isActive={active === i}
          setActive={() => setActive(i)}
          unSetActive={() => setActive(null)}
          key={i}
          q={q}
        />
      ))}
    </ul>
  );
}

export default FaqContainer;
