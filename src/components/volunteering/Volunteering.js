import { SectionHeader } from "../utils/SectionHeader";
import { Reveal } from "../utils/Reveal";
import styles from "./volunteering.module.scss";

export const Volunteering = () => {
  return (
    <section className="section-wrapper" id="volunteering">
      <SectionHeader title="Volunteering" dir="r" />
      <div className={styles.volunteeringContent}>
        <Reveal>
          <p className={styles.description}>
            Organized and led fundraising campaigns for two of Pakistan's most
            impactful charitable organizations —{" "}
            <strong>Edhi Foundation</strong> and <strong>Akhuwat Foundation</strong>.
            Together with my team, we raised a total of{" "}
            <strong>PKR 148,913</strong> to support communities in need.
          </p>
        </Reveal>

        <div className={styles.fundsGrid}>
          <Reveal>
            <div className={styles.fundCard}>
              <h4 className={styles.orgName}>Edhi Foundation</h4>
              <span className={styles.amount}>PKR 98,218</span>
              <p className={styles.fundDescription}>
                Supporting healthcare, emergency services, and social welfare
                programs across Pakistan.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.fundCard}>
              <h4 className={styles.orgName}>Akhuwat Foundation</h4>
              <span className={styles.amount}>PKR 50,695</span>
              <p className={styles.fundDescription}>
                Empowering communities through interest-free microfinance and
                poverty alleviation initiatives.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className={styles.totalBar}>
            <span>Total Funds Raised</span>
            <strong>PKR 148,913</strong>
          </div>
        </Reveal>

        <Reveal>
          <a
            href="https://docs.google.com/spreadsheets/d/1JuXkCgFKdNM4HLJUw0KQqZibSZ6Y0g7QygCf8V1aIss/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.sheetLink}
          >
            View Detailed Fundraising Report →
          </a>
        </Reveal>
      </div>
    </section>
  );
};
