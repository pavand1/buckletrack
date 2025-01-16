import { useState, useEffect } from "react";
import styles from "./cpCounter.module.scss"; // Importing CSS Module styles
import mockData from "./CpCounter_data"; // Importing the mock data
import Aos from "aos";

const formatNumber = (value) => {
  // Function to format numbers (e.g., 750000 -> 7.5 Lakh Km+)
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)} Lakh Km+`;
  }
  return value.toLocaleString(); // Fallback for other values
};

const CpCounter = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [counters, setCounters] = useState(mockData); // Initialize with currentCount = 0

  const resetCounters = () => {
    if (counters[3].currentCount === mockData[3].count) setCounters(mockData);
  };

  useEffect(() => {
    const intervals = [];
    counters.forEach((item, index) => {
      if (
        item.id === mockData[index].id &&
        item.currentCount === mockData[index].count
      )
        return;
      const interval = setInterval(() => {
        setCounters((prevCounters) =>
          prevCounters.map((prevItem) =>
            prevItem.id === item.id && prevItem.currentCount < item.count
              ? {
                  ...prevItem,
                  currentCount: Math.min(
                    prevItem.currentCount + Math.ceil(item.count / 500), // Increment in smaller steps
                    item.count // Ensure it stops at target count
                  ),
                }
              : prevItem
          )
        );
      }); // Adjust speed of the counter
      intervals.push(interval);
    });
    return () => intervals.forEach((i) => clearInterval(i)); // Cleanup interval when unmounted
  }, [counters]);

  return (
    <section
      className={styles.section}
      data-aos="fade-up"
      onMouseEnter={resetCounters}
    >
      <h2 className={styles.mainHeading}>Why Buckle Track </h2>
      <div className={styles.imageTop}>
        <img src="../../images/Home/Why Buckle track-1.svg" alt="Image" />
      </div>
      <div className={styles.counterContainer}>
        {counters.map((item) => (
          <div className={styles.counterItem} key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              className={styles.counterImage}
            />
            <div className={styles.counterInfo}>
              <div className={styles.counter}>
                <span className={styles.count}>
                  {item.id === 4
                    ? formatNumber(item.currentCount) // Format only for the specific item
                    : `${item.currentCount}+`}
                </span>
              </div>
              <div className={styles.shortBorder}></div>
              <p className={styles.description}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CpCounter;
