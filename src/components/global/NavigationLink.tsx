import { ReactNode } from "react";
import styles from "./navigationLink.module.scss";
import Link from "next/link";

interface NavigationLinkProps {
  to: string;
  theme?: "dark" | "light";
  children: ReactNode;
}

function NavigationLink({ to, theme = "dark", children }: NavigationLinkProps) {
  return (
    <Link className={`${styles.link} ${styles[`link__${theme}`]}`} href={to}>
      {children}
    </Link>
  );
}

export default NavigationLink;
