import NavLink from "./NavLink";
import styles from "./linkNav.module.scss";

function LinkNav() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/">Features</NavLink>
      <NavLink to="/">Pricing</NavLink>
      <NavLink to="/">Contact</NavLink>
    </nav>
  );
}

export default LinkNav;
