import { ReactElement } from "react";
import styles from "./extensionCard.module.scss";
import FilledButton from "../global/FilledButton";
import { BgDots } from "@/svgs";

interface ExtensionCardProps {
  browserImage: ReactElement;
  browserName: string;
  minVersion: number;
  destination: string;
}

function ExtensionCard({
  browserImage,
  browserName,
  minVersion,
  destination,
}: ExtensionCardProps) {
  return (
    <li className={styles.card}>
      <div className={styles.content}>
        <div className={styles.image}>{browserImage}</div>
        <p className={styles.name}>Add to {browserName}</p>
        <p className={styles.version}>Minimum version {minVersion}</p>
      </div>
      <div className={styles.dots}>
        <BgDots />
      </div>
      <div className={styles.action}>
        <FilledButton destination={destination} theme="blue">
          Add & Install Extension
        </FilledButton>
      </div>
    </li>
  );
}

export default ExtensionCard;
