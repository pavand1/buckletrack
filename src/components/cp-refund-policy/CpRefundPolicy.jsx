import React from 'react'
import styles from './cpRefundPolicy.module.scss';
import { mockData } from './CpRefundPolicy_data';

const CpRefundPolicy = () => {
  return (
    <>
        <section className={styles.section}>
            <h2 className={styles.mainHeading}>Refund Policy</h2>
            <div className={styles.description}>
                <p>{mockData.description}</p>
                <p>{mockData.description1}</p>
                <p>{mockData.description2}</p>
                <p>{mockData.description3}</p>
            </div>
        </section>
    </>
  )
}

export default CpRefundPolicy