"use client";

import Link from "next/link";
import { ReactNode } from "react";
import styles from "./filledButton.module.scss";

interface FilledButtonProps {
  destination?: string;
  children: ReactNode;
  handleClick?: Function;
  theme: "blue" | "gray" | "red";
}

function FilledButton({
  destination,
  children,
  handleClick,
  theme,
}: FilledButtonProps) {
  if (destination)
    return (
      <Link
        className={`${styles.button} ${styles[`button__${theme}`]}`}
        href={destination}
      >
        {children}
      </Link>
    );
  return (
    <button
      onClick={(e) => handleClick?.(e)}
      className={`${styles.button} ${styles[`button__${theme}`]}`}
    >
      {children}
    </button>
  );
}

export default FilledButton;
