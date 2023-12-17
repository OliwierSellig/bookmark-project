import Logo from "../global/Logo";
import LinkNav from "./LinkNav";
import styles from "./header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <Logo />
        <LinkNav />
      </nav>
    </header>
  );
}

export default Header;
