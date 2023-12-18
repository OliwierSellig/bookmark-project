import SectionHeading from "../global/SectionHeading";
import SectionParagraph from "../global/SectionParagraph";
import styles from "./featuresHeader.module.scss";

function FeaturesHeader() {
  return (
    <header className={styles.container}>
      <SectionHeading>Features</SectionHeading>
      <SectionParagraph>
        Our aim is to make it quick and easy for you to acces your favourite
        websites. Your bookmark sync between your devices so you can acces them
        on the go.
      </SectionParagraph>
    </header>
  );
}

export default FeaturesHeader;
