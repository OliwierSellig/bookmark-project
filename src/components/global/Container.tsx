import { ReactNode } from "react";
import styles from "./container.module.scss";

interface ContainerProps {
  children: ReactNode;
  maxWidth?: number;
}

function Container({ children, maxWidth = 1280 }: ContainerProps) {
  return (
    <div style={{ maxWidth: `${maxWidth}px` }} className={styles.container}>
      {children}
    </div>
  );
}

export default Container;
