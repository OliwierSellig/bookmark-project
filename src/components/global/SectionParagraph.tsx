import { ReactNode } from "react";
import styles from "./sectionParagraph.module.scss";

interface SectionParagraphsProps {
  children: ReactNode;
}

function SectionParagraph({ children }: SectionParagraphsProps) {
  return <p className={styles.paragraph}>{children}</p>;
}

export default SectionParagraph;
