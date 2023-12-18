import { ReactNode } from "react";
import styles from "./featuresButton.module.scss";

interface FeaturesButtonProps {
  isActive: boolean;
  setActive: () => void;
  children: ReactNode;
}

function FeaturesButton({
  isActive,
  setActive,
  children,
}: FeaturesButtonProps) {
  return (
    <button
      onClick={setActive}
      className={`${styles.button} ${isActive ? styles.active : ""}  `}
    >
      {children}
    </button>
  );
}

export default FeaturesButton;
