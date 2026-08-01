import { Reveal } from "../utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import {Link} from "react-router-dom";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            Shoot me an email if you want to connect! You can also find me on{" "}
            <Link
              to="https://www.linkedin.com/in/numan-a-8506b8246/"
              target="_blank"
              rel="nofollow"
            >
              Linkedin
            </Link>{" "}
            or{" "}
            <Link to="https://www.twitter.com" target="_blank" rel="nofollow">
              Twitter
            </Link>{" "}
            if that&apos;s more your speed.
          </p>
        </Reveal>
        <Reveal width="100%">
          <Link to="mailto:numanabubakar99@gmail.com">
            <div className={styles.contactEmail}>
              <AiFillMail size="2.4rem" />
              <span>numanabubakar99@gmail.com</span>
            </div>
          </Link>
        </Reveal>
        <Reveal width="100%">
          <Link to="tel:+923026669399">
            <div className={styles.contactEmail}>
              <AiFillPhone size="2.4rem" />
              <span>+92 302 6669399</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
