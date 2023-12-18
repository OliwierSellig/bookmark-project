import Container from "../global/Container";
import SectionHeader from "../global/SectionHeader";
import ExtensionContainer from "./ExtensionContainer";
import styles from "./extensions.module.scss";

function Extension() {
  return (
    <section className={styles.container}>
      <Container>
        <SectionHeader>
          <SectionHeader.Heading>Download the extension</SectionHeader.Heading>
          <SectionHeader.Content>
            We&apos;ve got more browser in the pipeline. Please do let us know
            if you&apos;ve got a favourite you&apos;d like us to prioritize
          </SectionHeader.Content>
        </SectionHeader>
        <ExtensionContainer />
      </Container>
    </section>
  );
}

export default Extension;
