import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../Button/OutlineButton";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <MyLinks />
      <OutlineButton onClick={() => window.open('/assets/Numan_Abubakar_Resume.pdf', '_blank')}>
        My resume
      </OutlineButton>
    </header>
  );
};
