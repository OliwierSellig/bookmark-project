import Container from "../global/Container";
import FeaturesContainer from "./FeaturesContainer";
import FeaturesHeader from "./FeaturesHeader";
import styles from "./features.module.scss";

function Features() {
  return (
    <section className={styles.container}>
      <Container>
        <FeaturesHeader />
        <FeaturesContainer />
      </Container>
    </section>
  );
}

export default Features;
