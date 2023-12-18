import SectionHeading from "../global/SectionHeading";
import SectionParagraph from "../global/SectionParagraph";
import styles from "./faqHeader.module.scss";

function FaqHeader() {
  return (
    <header className={styles.header}>
      <SectionHeading>Frequently Asked Qustions</SectionHeading>
      <SectionParagraph>
        Here are some of our FAQs. If you have any other questions you&apos;d
        like answered please feel free to email us.
      </SectionParagraph>
    </header>
  );
}

export default FaqHeader;
