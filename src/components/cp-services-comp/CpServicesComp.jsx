import { useEffect } from "react";
import Aos from "aos";
import styles from "./cpServicesComp.module.scss";
import { mockData, mockData1, mockData2 } from "./CpServicesComp_data";

const CpServicesComp = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className={styles.section}>
        {/* first services */}
        <div className={styles.borderMain}>
          <div className={styles.borderDiv}></div>
        </div>
        <div className={styles.about}>
          <div className={styles.column} data-aos="fade-right">
            <div className={styles.description}>
              <h3>{mockData.title}</h3>
              <p>{mockData.description}</p>
            </div>
          </div>
          <div className={styles.column} data-aos="fade-left">
            <img
              src={mockData.imageSrc}
              alt={mockData.imageAlt}
              className={styles.image}
            />
          </div>
        </div>
      </section>
      <section className={styles.section}>
        {/* Second services */}
        <div className={styles.borderMainRight}>
          <div className={styles.borderDiv}></div>
        </div>
        <div className={styles.about}>
          <div className={styles.columnSecond} data-aos="fade-right">
            <img
              src={mockData1.imageSrc}
              alt={mockData1.imageAlt}
              className={styles.image}
            />
          </div>
          <div className={styles.columnSecond} data-aos="fade-left">
            <div className={styles.description}>
              <h3>{mockData1.title}</h3>
              <p>{mockData1.description}</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        {/* Third services */}
        <div className={styles.borderMain}>
          <div className={styles.borderDiv}></div>
        </div>
        <div className={styles.about}>
          <div className={styles.column} data-aos="fade-right">
            <div className={styles.description}>
              <h3>{mockData2.title}</h3>
              <p>{mockData2.description}</p>
            </div>
          </div>
          <div className={styles.column} data-aos="fade-left">
            <img
              src={mockData2.imageSrc}
              alt={mockData2.imageAlt}
              className={styles.image}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CpServicesComp;
