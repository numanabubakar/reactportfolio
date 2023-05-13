import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../Button/OutlineButton";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <MyLinks />
      <OutlineButton onClick={() =>document.getElementById("contact")?.scrollIntoView()}>
        My resume
      </OutlineButton>
    </header>
  );
};
