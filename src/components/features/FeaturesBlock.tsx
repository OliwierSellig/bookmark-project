import { ReactElement, ReactNode } from "react";
import SectionHeading from "../global/SectionHeading";
import SectionParagraph from "../global/SectionParagraph";
import FilledButton from "../global/FilledButton";
import styles from "./featuresBlock.module.scss";

interface FeaturesBlockProps {
  image: ReactElement;
  heading: string;
  children: ReactNode;
  destination: string;
}

function FeaturesBlock({
  image,
  heading,
  destination,
  children,
}: FeaturesBlockProps) {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        {image}
        <div className={styles.background} />
      </div>
      <div className={styles.content}>
        <div className={styles.textCol}>
          <SectionHeading>{heading}</SectionHeading>
          <SectionParagraph>{children}</SectionParagraph>
        </div>
        <FilledButton destination={destination} theme="blue">
          More Info
        </FilledButton>
      </div>
    </div>
  );
}

export default FeaturesBlock;
