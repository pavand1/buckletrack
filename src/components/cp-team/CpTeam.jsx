import { useEffect } from "react";
import Aos from "aos";
import styles from "./cpTeam.module.scss";
import { mockData } from "./CpTeam_data";
import { Link } from "react-router-dom";

const CpTeam = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.mainHeading}>Our Team</h2>
        <ul className={styles.team}>
          {mockData.map((data, index) => (
            <li className={styles.column} key={index} data-aos="fade-up">
              <img src={data.image} alt={data.alt} />
              <div className={styles.info}>
                <h4>{data.name}</h4>
                <p>{data.designation}</p>
              </div>
              <div className={styles.socialIcons}>
                {data.socialLink.map((item, index) => (
                  <div className={styles.icon} key={index}>
                    <Link
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        className={styles.iconImg}
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default CpTeam;
