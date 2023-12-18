import Container from "../global/Container";
import FilledButton from "../global/FilledButton";
import FaqContainer from "./FaqContainer";
import FaqHeader from "./FaqHeader";
import styles from "./faq.module.scss";

function Faq() {
  return (
    <section className={styles.container}>
      <Container>
        <div className={styles.box}>
          <FaqHeader />
          <FaqContainer />{" "}
          <FilledButton destination="/" theme="blue">
            More Info
          </FilledButton>
        </div>
      </Container>
    </section>
  );
}

export default Faq;
