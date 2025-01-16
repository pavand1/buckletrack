import { useEffect } from 'react';
import styles from './cpWhyBuckle.module.scss';
import mockData from './CpWhyBuckle_data';
import Aos from "aos";
const CpWhyBuckle = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className={styles.section}>
      <div className={styles.backlet}  data-aos="fade-up">
        <div className={styles.column1}>
          <div className={styles.headingContainer}>
            {mockData.headings.map((heading, index) => (
              <div key={index} className={styles.headingItem}>
                <h3 className={styles.heading}>{heading}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default CpWhyBuckle