"use client";

import { BaseSyntheticEvent, useRef } from "react";
import { FeaturesTabIlustration3, IconClose } from "@/svgs";
import FilledButton from "../global/FilledButton";
import SectionHeading from "../global/SectionHeading";
import SectionParagraph from "../global/SectionParagraph";
import styles from "./modalWindow.module.scss";

interface ModalWindowProps {
  close: () => void;
}

function ModalWindow({ close }: ModalWindowProps) {
  const backgroundRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={backgroundRef}
      onClick={(e: BaseSyntheticEvent) => {
        if (e.target === backgroundRef.current) close();
      }}
      className={styles.background}
    >
      <div className={styles.container}>
        <nav className={styles.nav}>
          <button
            onClick={close}
            aria-label="Close popup"
            className={styles.btn}
          >
            <IconClose />
          </button>
        </nav>
        <div className={styles.box}>
          <div className={styles.image}>
            <FeaturesTabIlustration3 />
          </div>
          <div className={styles.content}>
            <SectionHeading>Share your bookmarks</SectionHeading>
            <SectionParagraph>
              Easily share your bookmarks and collections with others. Create a
              shareable link that you can send at the click of a button.
            </SectionParagraph>
          </div>
          <FilledButton handleClick={close} theme="blue">
            More info
          </FilledButton>
        </div>
      </div>
    </div>
  );
}

export default ModalWindow;
