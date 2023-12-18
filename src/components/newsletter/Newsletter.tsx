import Container from "../global/Container";
import SectionHeading from "../global/SectionHeading";
import MailForm from "./MailForm";
import NumbersCounter from "./NumbersCounter";
import styles from "./newsletter.module.scss";

function Newsletter() {
  return (
    <section className={styles.container}>
      <Container>
        <div className={styles.column}>
          <NumbersCounter />
          <MailForm />
        </div>
      </Container>
    </section>
  );
}

export default Newsletter;
