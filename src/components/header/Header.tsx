"use client";

import { LogoBookmark } from "@/svgs";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";
import styles from "./header.module.scss";
import MobileNav from "./MobileNav";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (prevScrollPos > currentScrollPos && currentScrollPos) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    if (isNavOpen) document.documentElement.classList.add("locked");
    else document.documentElement.classList.remove("locked");
  }, [isNavOpen]);

  useEffect(() => {
    function checkNavOpen() {
      if (window.innerWidth > 720 && isNavOpen) {
        setIsNavOpen(false);
      }
    }

    window.addEventListener("resize", checkNavOpen);
  }, [isNavOpen]);

  return (
    <header
      className={`${styles.header} ${isSticky ? styles.sticky : ""} ${
        isNavOpen ? styles.open : ""
      }`}
    >
      <nav
        className={`${styles.container} ${
          isNavOpen ? styles.container__open : ""
        } `}
      >
        <LogoBookmark />
        <Navigation
          openNav={() => setIsNavOpen(true)}
          closeNav={() => setIsNavOpen(false)}
          isOpen={isNavOpen}
        />
      </nav>
      {isNavOpen && <MobileNav />}
    </header>
  );
}

export default Header;
