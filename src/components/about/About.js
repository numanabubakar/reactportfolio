import { MyLinks } from "../nav/components/MyLinks";
import { Reveal } from "../utils/Reveal";
import { SectionHeader } from "../utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey! I&apos;m Numan, I&apos;m a MERN stack developer with a passion for building web applications and mobile apps. I have expertise in using ReactJS and React Native, two powerful frameworks for creating dynamic and interactive user interfaces.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              With ReactJS, I enjoy crafting responsive and scalable web applications. Leveraging the component-based architecture, I can create reusable UI components that enhance code maintainability and facilitate a smooth development process. ReactJS's virtual DOM and efficient rendering make it an ideal choice for building performant applications.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              In addition to web development, I am also skilled in React Native, allowing me to extend my expertise to mobile app development. React Native enables me to build cross-platform apps using a single codebase, saving time and effort. I appreciate the ability to leverage the power of ReactJS to create native-like mobile experiences for both iOS and Android platforms.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
  

I&apos;m excited to take on new projects and collaborate with teams to bring innovative ideas to life. If you have any questions or would like to discuss potential opportunities, please feel free to reach out. Let&apos;s build something amazing together!"
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
