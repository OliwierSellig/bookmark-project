import { Dispatch, SetStateAction } from "react";
import FeaturesButton from "./FeaturesButton";
import styles from "./featuresNav.module.scss";

interface FeaturesNavProps {
  active: number;
  setActive: Dispatch<SetStateAction<0 | 1 | 2>>;
}

function FeaturesNav({ active, setActive }: FeaturesNavProps) {
  return (
    <nav className={styles.container}>
      <FeaturesButton isActive={active === 0} setActive={() => setActive(0)}>
        Simple Bookmarking
      </FeaturesButton>
      <FeaturesButton isActive={active === 1} setActive={() => setActive(1)}>
        Speedy Searching
      </FeaturesButton>
      <FeaturesButton isActive={active === 2} setActive={() => setActive(2)}>
        Easy Sharing
      </FeaturesButton>
      <div
        className={`${styles.activeLine} ${styles[`activeLine__${active}`]} `}
      />
    </nav>
  );
}

export default FeaturesNav;
