import Container from "../global/Container";
import ExtensionContainer from "./ExtensionContainer";
import ExtensionHeader from "./ExtensionHeader";
import styles from "./extensions.module.scss";

function Extension() {
  return (
    <section className={styles.container}>
      <Container>
        <ExtensionHeader />
        <ExtensionContainer />
      </Container>
    </section>
  );
}

export default Extension;
