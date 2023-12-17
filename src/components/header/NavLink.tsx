import Link from "next/link";
import { ReactNode } from "react";
import styles from "./navLink.module.scss";

interface NavLinkProps {
  to: string;
  children: ReactNode;
}

function NavLink({ to, children }: NavLinkProps) {
  return (
    <Link className={styles.link} href={to}>
      {children}
    </Link>
  );
}

export default NavLink;
