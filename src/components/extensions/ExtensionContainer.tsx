import { LogoChrome, LogoFirefox, LogoOpera } from "@/svgs";
import ExtensionCard from "./ExtensionCard";
import styles from "./extensionContainer.module.scss";

function ExtensionContainer() {
  return (
    <ul className={styles.list}>
      <ExtensionCard
        browserName="Chrome"
        destination="/"
        minVersion={62}
        browserImage={<LogoChrome />}
      />
      <ExtensionCard
        browserName="Firefox"
        destination="/"
        minVersion={55}
        browserImage={<LogoFirefox />}
      />
      <ExtensionCard
        browserName="Opera"
        destination="/"
        minVersion={46}
        browserImage={<LogoOpera />}
      />
    </ul>
  );
}

export default ExtensionContainer;
