import { IconFacebook, IconTwitter } from "@/svgs";
import Link from "next/link";
import styles from "./footerSocials.module.scss";

function FooterSocials() {
  return (
    <nav className={styles.container}>
      <Link aria-label="Check your facebook" href="/" className={styles.link}>
        <IconFacebook />
      </Link>
      <Link aria-label="Check your twitter" href="/" className={styles.link}>
        <IconTwitter />
      </Link>
    </nav>
  );
}

export default FooterSocials;
