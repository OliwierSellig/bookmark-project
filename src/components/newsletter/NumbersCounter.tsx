"use client";

import CountUp from "react-countup";
import styles from "./numberCounter.module.scss";

function NumbersCounter() {
  return (
    <p className={styles.counter}>
      <CountUp start={0} end={35000} duration={20} />
      <span>+ Alredy joined</span>
    </p>
  );
}

export default NumbersCounter;
