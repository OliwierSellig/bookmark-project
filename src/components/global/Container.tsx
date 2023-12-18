import { ReactNode } from "react";
import styles from "./container.module.scss";

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return <div className={styles.container}>{children}</div>;
}

export default Container;