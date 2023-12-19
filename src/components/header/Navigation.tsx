import FilledButton from "../global/FilledButton";
import NavigationLink from "../global/NavigationLink";
import styles from "./navigation.module.scss";

function Navigation() {
  return (
    <nav className={styles.nav}>
      <NavigationLink to="/">Featrues</NavigationLink>
      <NavigationLink to="/">Pricing</NavigationLink>
      <NavigationLink to="/">Contact</NavigationLink>
      <FilledButton size="wide" theme="red">
        LOGIN
      </FilledButton>
    </nav>
  );
}

export default Navigation;
