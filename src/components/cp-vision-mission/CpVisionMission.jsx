import { useEffect } from "react";
import Aos from "aos";
import styles from "./cpVisionMission.module.scss";
import { mockData } from "./CpVisionMission_data";

const CpVisionMission = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.mainHeading}>Vision & Mission</h2>
        <div className={styles.about}>
          <div className={styles.column} data-aos="fade-right">
            <div className={styles.description}>
              <h3 className={styles.heading}>{mockData.vision.heading}</h3>
              <p>{mockData.vision.description}</p>
            </div>
            <img
              src={mockData.vision.imageSrc}
              alt={mockData.vision.imageAlt}
              className={styles.image}
            />
          </div>
          <div className={styles.column} data-aos="fade-left">
            <div className={styles.description}>
              <h3 className={styles.heading}>{mockData.mission.heading}</h3>
              <p>{mockData.mission.description}</p>
            </div>
            <img
              src={mockData.mission.imageSrc}
              alt={mockData.mission.imageAlt}
              className={styles.image}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CpVisionMission;
