import { useEffect } from "react";
import Aos from "aos";
import styles from "./cpStory.module.scss";
import { mockData } from "./CpStory_data";

const CpStory = () => {
  useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.mainHeading}>Our Story</h2>
        <div className={styles.about}>
          <div className={styles.column} data-aos="fade-right">
            <div className={styles.description}>
              <p>{mockData.description}</p>
              <p>
                <b>{"Case Study 1:"}</b>
              </p>
              <p>
                {
                  "A major retailer sought to enhance its supply chain efficiency through advanced technology. BuckleTrack implemented an integrated TMS, resulting in improved logistics management, reduced lead times, and higher customer satisfaction."
                }
              </p>
              <p>
                <b>{"Case Study 2:"}</b>
              </p>
              <p>
                {
                  "A giant logistics provider needed a solution for tailored packaging solutions designed to protect the products and streamline handling. Our experience-rich team ensures that packaging is optimized for both efficiency and sustainability, reducing waste and improving cost-effectiveness."
                }
              </p>
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
    </>
  );
};

export default CpStory;
