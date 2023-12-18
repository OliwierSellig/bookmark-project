import FilledButton from "../global/FilledButton";
import SectionParagraph from "../global/SectionParagraph";
import styles from "./heroContent.module.scss";

function HeroContent() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>A Simple Bookmark Manager</h1>
      <SectionParagraph>
        A clean and simple interface to organize your favourite websites. Open a
        new browser tab and see your sites load instantly. Try it for free.
      </SectionParagraph>
      <div className={styles.row}>
        <FilledButton theme="blue">Get it on Chrome</FilledButton>
        <FilledButton theme="gray">Get it on Firefox</FilledButton>
      </div>
    </div>
  );
}

export default HeroContent;
