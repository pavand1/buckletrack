import styles from './cpBanner.module.scss';
import { faqData } from './CpBanner_data';

const CpFaqsBanner = () => {
  return (
    <section className={`${styles.section} ${styles.sectionBanner} ${styles.aboutBanner}`}>
        <div className={styles.left}>
          <h1 className={styles.heading}>{faqData.heading}</h1>
          <h2 className={styles.subHeading}>{faqData.subHeading}</h2>
          <button className={styles.button}>{faqData.buttonText}</button>
        </div>
        <div className={styles.right}>
        </div>
    </section>
  );
};

export default CpFaqsBanner