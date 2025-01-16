import styles from './cpBanner.module.scss';
import { termsConditionData } from './CpBanner_data';

const CpTermsConditonBanner = () => {
  return (
    <section className={`${styles.section} ${styles.sectionBanner} ${styles.aboutBanner}`}>
        <div className={styles.left}>
          <h1 className={styles.heading}>{termsConditionData.heading}</h1>
          <h2 className={styles.subHeading}>{termsConditionData.subHeading}</h2>
          <button className={styles.button}>{termsConditionData.buttonText}</button>
        </div>
        <div className={styles.right}>
        </div>
    </section>
  );
};

export default CpTermsConditonBanner