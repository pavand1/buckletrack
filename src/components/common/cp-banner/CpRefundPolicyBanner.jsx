import styles from './cpBanner.module.scss';
import { refundPolicy } from './CpBanner_data';

const CpRefundPolicyBanner = () => {
  return (
    <section className={`${styles.section} ${styles.sectionBanner} ${styles.aboutBanner}`}>
        <div className={styles.left}>
          <h1 className={styles.heading}>{refundPolicy.heading}</h1>
          <h2 className={styles.subHeading}>{refundPolicy.subHeading}</h2>
          <button className={styles.button}>{refundPolicy.buttonText}</button>
        </div>
        <div className={styles.right}>
        </div>
    </section>
  );
};

export default CpRefundPolicyBanner