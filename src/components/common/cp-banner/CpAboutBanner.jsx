import styles from './cpBanner.module.scss';
import {aboutData} from './CpBanner_data';

const CpAboutBanner = () => {
  return (
    <section className={`${styles.section} ${styles.sectionBanner} ${styles.aboutBanner}`}>
        <div className={styles.left}>
          <h1 className={styles.heading}>{aboutData.heading}</h1>
          <h2 className={styles.subHeading}>{aboutData.subHeading}</h2>
          <button className={styles.button}>{aboutData.buttonText}</button>
        </div>
        <div className={styles.right}>
        </div>
    </section>
  );
};

export default CpAboutBanner