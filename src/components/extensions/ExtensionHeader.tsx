import SectionHeading from "../global/SectionHeading";
import SectionParagraph from "../global/SectionParagraph";
import styles from "./extensionHeader.module.scss";

function ExtensionHeader() {
  return (
    <header className={styles.header}>
      <SectionHeading>Download the extension</SectionHeading>
      <SectionParagraph>
        We&apos;ve got more browser in the pipeline. Please do let us know if
        you&apos;ve got a favourite you&apos;d like us to prioritize
      </SectionParagraph>
    </header>
  );
}

export default ExtensionHeader;
