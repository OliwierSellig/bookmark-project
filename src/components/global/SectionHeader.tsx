import { ReactNode } from "react";
import SectionHeading from "./SectionHeading";
import styles from "./sectionHeader.module.scss";
import SectionParagraph from "./SectionParagraph";

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
