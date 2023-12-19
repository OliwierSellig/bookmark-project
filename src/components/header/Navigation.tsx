import { IconClose, IconHamburger } from "@/svgs";
import FilledButton from "../global/FilledButton";
import NavigationLink from "../global/NavigationLink";
import styles from "./navigation.module.scss";
import { Dispatch, SetStateAction } from "react";

interface NavigationProps {
  openNav: () => void;
  closeNav: () => void;
  isOpen: boolean;
}

function Navigation({ openNav, closeNav, isOpen }: NavigationProps) {
  return (
    <>
      <nav className={styles.nav}>
        <NavigationLink to="/">Featrues</NavigationLink>
        <NavigationLink to="/">Pricing</NavigationLink>
        <NavigationLink to="/">Contact</NavigationLink>
        <FilledButton size="wide" theme="red">
          LOGIN
        </FilledButton>
      </nav>
      {!isOpen ? (
        <button
          onClick={openNav}
          aria-label="Open mobile navigation"
          className={styles.mobile__open}
        >
          <IconHamburger />
        </button>
      ) : (
        <button
          onClick={closeNav}
          aria-label="Close mobile navigation"
          className={styles.mobile__close}
        >
          <IconClose />
        </button>
      )}
    </>
  );
}

export default Navigation;
