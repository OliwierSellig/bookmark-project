"use client";

import { useState } from "react";
import FaqBox from "./FaqBox";
import styles from "./faqContainer.module.scss";

type questionItemProp = { question: string; answer: string };

const questionList: questionItemProp[] = [
  {
    question: "What is Bookmark?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquetconvallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    question: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquetconvallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquetconvallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    question: "What about the Chromium browsers?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquetconvallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
];

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
