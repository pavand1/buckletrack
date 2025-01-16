import React from 'react'
import styles from './cpReturnCancellation.module.scss';
import { mockData } from './CpReturnCancellation_data';

const CpReturnCancellation = () => {
  return (
    <>
        <section className={styles.section}>
            <h2 className={styles.mainHeading}>Return & Cancellation Policy</h2>
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

export default CpReturnCancellation