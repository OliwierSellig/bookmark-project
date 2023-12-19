import { IconFacebook, IconTwitter } from "@/svgs";
import Link from "next/link";
import styles from "./mobileNav.module.scss";

function MobileNav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link href="/asd" className={styles.links__link}>
            Features
          </Link>
          <Link href="/" className={styles.links__link}>
            Pricing
          </Link>
          <Link href="/" className={styles.links__link}>
            Contact
          </Link>
          <Link href="/" className={styles.links__login}>
            Login
          </Link>
        </div>
      </div>
      <div className={styles.socials}>
        <Link href="/" className={styles.socials__link}>
          <IconFacebook />
        </Link>
        <Link href="/" className={styles.socials__link}>
          <IconTwitter />
        </Link>
      </div>
    </nav>
  );
}

export default MobileNav;
