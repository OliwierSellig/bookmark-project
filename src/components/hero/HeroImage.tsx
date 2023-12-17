import { HeroIlustration } from "@/svgs";
import styles from "./heroImage.module.scss";

function HeroImage() {
  return (
    <div className={styles.container}>
      <HeroIlustration className={styles.image} />
      <div className={styles.background} />
    </div>
  );
}

export default HeroImage;
