import { useEffect } from "react";
import Aos from "aos";
import styles from "./cpAboutBuckleTrack.module.scss";
import { mockData } from "./CpAboutBuckleTrack_data";

const CpAboutBuckleTrack = () => {
  useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.mainHeading}>About Buckle Track</h2>
        <div className={styles.about}>
          <div className={styles.column} data-aos="fade-right">
            <div className={styles.description}>
              <p>{mockData.description}</p>
            </div>
          </div>
          <div className={styles.column} data-aos="fade-right">
            <img
              src={mockData.imageSrc}
              alt={mockData.imageAlt}
              className={styles.image}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CpAboutBuckleTrack;
