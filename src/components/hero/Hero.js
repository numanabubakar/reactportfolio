import { StandardButton } from "../Button/StandardButton";
import { Reveal } from "../utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            Hey, I&apos;m Numan<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            I&apos;m a <span>MERN Stack Developer</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            I&apos;ve spent the last 2 years building web applications and mobile apps. I have expertise in using ReactJS and React Native, two powerful frameworks for creating dynamic and interactive user interfaces😉
            Let&apos;s connect!
          </p>
        </Reveal>
        <Reveal>
          <StandardButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            Contact me
          </StandardButton>
        </Reveal>
      </div>
      <DotGrid />
    </section>
  );
};
