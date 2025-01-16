import React, { useState } from 'react';
import styles from './cpFaq.module.scss';
import faqData from './CpFaq_data';

const CpFaq = () => {
    const [activeIndex, setActiveIndex] = useState(0); // First accordion is open by default
  
    const toggleAccordion = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle the accordion
    };
  
    return (
      <section className={styles.section}> 
        <h2 className={styles.mainHeading}>FAQs</h2>
        <div className={styles.faqContainer}>
          {faqData.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <div
                className={`${styles.faqQuestionBox} ${
                  activeIndex === index ? styles.active : ''
                }`}
                onClick={() => toggleAccordion(index)} // Handles clicks for each box
              >
                <div className={styles.faqQuestion}>
                  {item.question}
                  <span
                    className={`${styles.arrow} ${
                      activeIndex === index ? styles.open : ''
                    }`}
                  >
                    &#9654;
                  </span>
                </div>
              </div>
              <div
                className={`${styles.faqAnswer} ${
                  activeIndex === index ? styles.active : ''
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

export default CpFaq;
