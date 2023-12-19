"use client";

import { ReactNode } from "react";
import Link from "next/link";
import styles from "./filledButton.module.scss";

interface FilledButtonProps {
  destination?: string;
  children: ReactNode;
  handleClick?: Function;
  theme: "blue" | "gray" | "red";
  size?: "tall" | "wide";
}

function FilledButton({
  destination,
  children,
  handleClick,
  theme,
  size = "tall",
}: FilledButtonProps) {
  const buttonClass = `${styles.button} ${styles[`button__${theme}`]} ${
    styles[`button__${size}`]
  }`;

  if (destination)
    return (
      <Link className={buttonClass} href={destination}>
        {children}
      </Link>
    );
  return (
    <button onClick={(e) => handleClick?.(e)} className={buttonClass}>
      {children}
    </button>
  );
}

export default FilledButton;
