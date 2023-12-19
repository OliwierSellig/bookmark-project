"use client";

import { useEffect, useState } from "react";
import { LogoBookmark } from "@/svgs";
import Navigation from "./Navigation";
import MobileNav from "./MobileNav";
import ModalWindow from "./ModalWindow";
import styles from "./header.module.scss";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  // Most of the sites logic (Could've make a context out of it, but it's still to small chunk of a code in my opinion)!

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
    if (isNavOpen && isModalOpen)
      document.documentElement.classList.add("locked");
    else document.documentElement.classList.remove("locked");
  }, [isNavOpen, isModalOpen]);

  useEffect(() => {
    function checkNavOpen() {
      if (window.innerWidth > 720 && isNavOpen) {
        setIsNavOpen(false);
      }
    }

    window.addEventListener("resize", checkNavOpen);
  }, [isNavOpen]);

  useEffect(() => {
    setTimeout(() => {
      setIsModalOpen(true);
    }, 30000);
  }, []);

  // ------

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
        <button
          className={styles.modalBtn}
          onClick={() => setIsModalOpen(true)}
        >
          <LogoBookmark />
        </button>
        <Navigation
          openNav={() => setIsNavOpen(true)}
          closeNav={() => setIsNavOpen(false)}
          isOpen={isNavOpen}
        />
      </nav>
      {isNavOpen && <MobileNav />}
      {isModalOpen && <ModalWindow close={() => setIsModalOpen(false)} />}
    </header>
  );
}

export default Header;
