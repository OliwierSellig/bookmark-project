import { ReactNode } from "react";
import styles from "./sectionHeading.module.scss";

interface SectionHeaderProps {
  children: ReactNode;
  theme?: "light" | "dark";
}

function SectionHeading({ children, theme = "dark" }: SectionHeaderProps) {
  return (
    <h2 className={`${styles.heading} ${styles[`heading__${theme}`]}`}>
      {children}
    </h2>
  );
}

export default SectionHeading;
