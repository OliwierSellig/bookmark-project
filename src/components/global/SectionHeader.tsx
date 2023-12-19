import { ReactNode } from "react";
import SectionHeading from "./SectionHeading";
import SectionParagraph from "./SectionParagraph";
import styles from "./sectionHeader.module.scss";

interface SectionHeaderProps {
  children: ReactNode;
}

function SectionHeader({ children }: SectionHeaderProps) {
  return <header className={styles.header}>{children}</header>;
}

function SectionHeaderHeading({ children }: SectionHeaderProps) {
  return <SectionHeading>{children}</SectionHeading>;
}

function SectionHeaderContent({ children }: SectionHeaderProps) {
  return <SectionParagraph>{children}</SectionParagraph>;
}

SectionHeader.Heading = SectionHeaderHeading;
SectionHeader.Content = SectionHeaderContent;

export default SectionHeader;
