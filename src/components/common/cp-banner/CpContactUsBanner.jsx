import styles from './cpBanner.module.scss';
import { contactusData } from './CpBanner_data';

const CpContactUsBanner = () => {
  return (
    <section className={`${styles.section} ${styles.sectionBanner} ${styles.aboutBanner}`}>
        <div className={styles.left}>
          <h1 className={styles.heading}>{contactusData.heading}</h1>
          <h2 className={styles.subHeading}>{contactusData.subHeading}</h2>
          <button className={styles.button}>{contactusData.buttonText}</button>
        </div>
        <div className={styles.right}>
        </div>
    </section>
  );
};

export default CpContactUsBanner