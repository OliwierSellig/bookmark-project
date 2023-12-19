"use client";

import { useState } from "react";
import { IconError } from "@/svgs";
import FilledButton from "../global/FilledButton";
import styles from "./mailForm.module.scss";

function MailForm() {
  const [query, setQuery] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  function submitEmail(e: any) {
    e.preventDefault();
    if (!query.length || !query.includes("@")) setError(true);
    else setQuery("");
  }

  return (
    <form className={styles.form}>
      <label className={styles.label} htmlFor="email">
        Stay up-to-date with what we&apos;re doing
      </label>
      <div className={styles.row}>
        <div className={styles.container}>
          <div className={styles.box}>
            <input
              value={query}
              onChange={(e) => {
                if (error) setError(false);
                setQuery(e.target.value);
              }}
              type="text"
              id="email"
              placeholder="Enter your email addres"
              className={`${styles.input} ${error ? styles.input__error : ""}`}
            />
            <IconError
              className={`${styles.icon} ${error ? styles.icon__active : ""}`}
            />
          </div>
          <p className={`${styles.error} ${error ? styles.error__active : ""}`}>
            <span className={styles.innerContent}>
              Whoops, make sure it&apos; an email
            </span>
          </p>
        </div>

        <FilledButton handleClick={(e: any) => submitEmail(e)} theme="red">
          Contact us
        </FilledButton>
      </div>
    </form>
  );
}

export default MailForm;
