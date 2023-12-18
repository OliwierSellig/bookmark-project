import { IconFacebook, IconTwitter } from "@/svgs";
import styles from "./footerSocials.module.scss";
import Link from "next/link";

function FooterSocials() {
  return (
    <nav className={styles.container}>
      <Link href="/" className={styles.link}>
        <IconFacebook />
      </Link>
      <Link href="/" className={styles.link}>
        <IconTwitter />
      </Link>
    </nav>
  );
}

export default FooterSocials;
