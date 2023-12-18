import { ReactNode } from "react";
import styles from "./sectionHeading.module.scss";

interface SectionHeaderProps {
  children: ReactNode;
}

function SectionHeading({ children }: SectionHeaderProps) {
  return <h2 className={styles.heading}>{children}</h2>;
}

export default SectionHeading;
