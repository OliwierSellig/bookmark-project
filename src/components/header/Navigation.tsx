import FilledButton from "../global/FilledButton";
import NavLink from "./NavLink";
import styles from "./navigation.module.scss";

function Navigation() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/">Features</NavLink>
      <NavLink to="/">Pricing</NavLink>
      <NavLink to="/">Contact</NavLink>
      <FilledButton theme="red">LOGIN</FilledButton>
    </nav>
  );
}

export default Navigation;
