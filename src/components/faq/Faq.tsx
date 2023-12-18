import Container from "../global/Container";
import FilledButton from "../global/FilledButton";
import SectionHeader from "../global/SectionHeader";
import FaqContainer from "./FaqContainer";

import styles from "./faq.module.scss";

function Faq() {
  return (
    <section className={styles.container}>
      <Container>
        <div className={styles.box}>
          <SectionHeader>
            <SectionHeader.Heading>
              Frequently Asked Qustions
            </SectionHeader.Heading>
            <SectionHeader.Content>
              Here are some of our FAQs. If you have any other questions
              you&apos;d like answered please feel free to email us.
            </SectionHeader.Content>
          </SectionHeader>
          <FaqContainer />
          <FilledButton destination="/" theme="blue">
            More Info
          </FilledButton>
        </div>
      </Container>
    </section>
  );
}

export default Faq;
