import React from "react";
import styles from "./cpTermsCondition.module.scss";
import { mockData } from "./CpTermsCondition_data";

const CpTermsCondition = () => {
  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.mainHeading}>Terams & Condition</h2>
        <div className={styles.description}>
          <h1>Scope</h1>
          <p>{mockData.description}</p>
          <h1>Eligiblity</h1>
          <p>{mockData.description1}</p>
          <h1>BuckleTrack Licenses</h1>
          <p>{mockData.description2}</p>
          <h1>Modification of terms</h1>
          <p>{mockData.description3}</p>
          <h1>Disclaimer of warranties</h1>
          <p>{mockData.description4}</p>
          <h1>Limitation of Liability</h1>
          <p>{mockData.description5}</p>
          <h1>Governing Law and Jurisdiction</h1>
          <p>{mockData.description6}</p>
        </div>
      </section>
    </>
  );
};

export default CpTermsCondition;
