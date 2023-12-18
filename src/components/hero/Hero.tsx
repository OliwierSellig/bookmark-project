import Container from "../global/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import styles from "./hero.module.scss";

function Hero() {
  return (
    <section className={styles.container}>
      <Container>
        <div className={styles.content}>
          <HeroContent />
          <HeroImage />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
