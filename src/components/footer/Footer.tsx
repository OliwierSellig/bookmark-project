import Container from "../global/Container";
import FooterNavigation from "./FooterNavigation";
import FooterSocials from "./FooterSocials";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <footer className={styles.container}>
      <Container>
        <div className={styles.row}>
          <FooterNavigation />
          <FooterSocials />
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
