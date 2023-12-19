import { LogoBookmark } from "@/svgs";
import NavigationLink from "../global/NavigationLink";
import styles from "./footerNavigation.module.scss";

function FooterNavigation() {
  return (
    <div className={styles.container}>
      <LogoBookmark className={styles.logo} />
      <nav className={styles.links}>
        <NavigationLink to="/" theme="light">
          Features
        </NavigationLink>
        <NavigationLink to="/" theme="light">
          Pricing
        </NavigationLink>
        <NavigationLink to="/" theme="light">
          Contact
        </NavigationLink>
      </nav>
    </div>
  );
}

export default FooterNavigation;
