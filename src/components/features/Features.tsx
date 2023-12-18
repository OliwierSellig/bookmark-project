import Container from "../global/Container";
import SectionHeader from "../global/SectionHeader";
import FeaturesContainer from "./FeaturesContainer";
import styles from "./features.module.scss";

function Features() {
  return (
    <section className={styles.container}>
      <Container>
        <SectionHeader>
          <SectionHeader.Heading>Features</SectionHeader.Heading>
          <SectionHeader.Content>
            Our aim is to make it quick and easy for you to acces your favourite
            websites. Your bookmark sync between your devices so you can acces
            them on the go.
          </SectionHeader.Content>
        </SectionHeader>
        <FeaturesContainer />
      </Container>
    </section>
  );
}

export default Features;
