// Section.js
import React from 'react';
import styles from './cpOurSolution.module.scss';
import { listItems } from './CpOurSolution_data'; // Import the mock data

const CpOurSolution = () => {
  return (
    <div className={styles.container}>
      {/* First Column with Image */}
      <div
        className={`${styles.column} ${styles.firstColumn}`}
        style={{ backgroundImage: 'url(.../../images/Home/whybucklet/global-business.png)' }} // Update path
      ></div>

      {/* Center Column with List */}
      <div className={`${styles.column} ${styles.centerColumn}`}>
        <ul className={styles.list}>
        <h2 className={styles.mainHeading}>Our Solution</h2>
          {listItems.map((item, index) => (
            <li key={index} className={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Last Column with Image */}
      <div
        className={`${styles.column} ${styles.lastColumn}`}
        style={{ backgroundImage: 'url(.../../images/Home/whybucklet/global-businessImg.png)' }} // Update path
      ></div>
    </div>
  );
};

export default CpOurSolution