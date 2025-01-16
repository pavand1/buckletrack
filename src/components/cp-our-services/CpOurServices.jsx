// src/components/GridComponent/GridComponent.js
import React, { useEffect, useRef, useState } from "react";
import styles from "./cpOurServices.module.scss";
import { mockData } from "./CpOurServices_data";
import Aos from "aos";

const CpOurServices = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className={styles.section}>
      <h2 className={styles.mainHeading}>Our Services</h2>
      <div className={styles.gridContainer}>
        <div className={`${styles.column} ${styles.fullHeightColumn}`}>
          <div className={styles.fullHeightCard}>
            <h3>{mockData[0].heading}</h3>
            <img
              src={mockData[0].image}
              alt={mockData[0].heading}
              className={styles.imageSection}
            />
            <div className={styles.arrowIcon}>
              <img src={mockData[0].icon} alt="Icon" className={styles.icon} />
            </div>
          </div>
        </div>

        <div className={`${styles.column} ${styles.column2}`}>
          {mockData.slice(1, 3).map((item) => (
            <div className={styles.card} key={item.id}>
              <h3>{item.heading}</h3>
              <img
                src={item.image}
                alt={item.heading}
                className={styles.imageSection}
              />
              <div className={styles.arrowIcon}>
                <img src={item.icon} alt="Icon" className={styles.icon} />
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.column} ${styles.column3}`}>
          {mockData.slice(3, 5).map((item) => (
            <div className={styles.card} key={item.id}>
              <h3>{item.heading}</h3>
              <img
                src={item.image}
                alt={item.heading}
                className={styles.imageSection}
              />
              <div className={styles.arrowIcon}>
                <img src={item.icon} alt="Icon" className={styles.icon} />
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.column} ${styles.column4}`}>
          {mockData.slice(5).map((item) => (
            <div className={styles.card} key={item.id}>
              <h3>{item.heading}</h3>
              <img
                src={item.image}
                alt={item.heading}
                className={styles.imageSection}
              />
              <div className={styles.arrowIcon}>
                <img src={item.icon} alt="Icon" className={styles.icon} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CpOurServices;
