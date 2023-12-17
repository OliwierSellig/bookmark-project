import { LogoBookmark } from "@/svgs";
import Navigation from "./Navigation";
import styles from "./header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <LogoBookmark />
        <Navigation />
      </nav>
    </header>
  );
}

export default Header;
