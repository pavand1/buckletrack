import styles from './cpBanner.module.scss';
import { returnCancellationData } from './CpBanner_data';

const CpReturnCancellationBanner = () => {
  return (
    <section className={`${styles.section} ${styles.sectionBanner} ${styles.aboutBanner}`}>
        <div className={styles.left}>
          <h1 className={styles.heading}>{returnCancellationData.heading}</h1>
          <h2 className={styles.subHeading}>{returnCancellationData.subHeading}</h2>
          <button className={styles.button}>{returnCancellationData.buttonText}</button>
        </div>
        <div className={styles.right}>
        </div>
    </section>
  );
};

export default CpReturnCancellationBanner