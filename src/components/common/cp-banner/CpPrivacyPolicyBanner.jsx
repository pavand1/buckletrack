import styles from './cpBanner.module.scss';
import { privacyPolicyData } from './CpBanner_data';

const CpPrivacyPolicyBanner = () => {
  return (
    <section className={`${styles.section} ${styles.sectionBanner} ${styles.aboutBanner}`}>
        <div className={styles.left}>
          <h1 className={styles.heading}>{privacyPolicyData.heading}</h1>
          <h2 className={styles.subHeading}>{privacyPolicyData.subHeading}</h2>
          <button className={styles.button}>{privacyPolicyData.buttonText}</button>
        </div>
        <div className={styles.right}>
        </div>
    </section>
  );
};

export default CpPrivacyPolicyBanner