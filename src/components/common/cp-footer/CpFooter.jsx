import styles from "./cpFooter.module.scss";
import {
  socialLinks,
  linksColumn2,
  linksColumn3,
  contactInfo,
} from "./CpFooter_data";
import { Link, useNavigate } from "react-router-dom";

const CpFooter = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <section className={styles.sectionbg}>
                <div className={styles.bgImg}>
                    <div className={`${styles.imageWrap}`}>
                        <img src=".../../images/Home/whybucklet/testimonialbg.png" className={styles.imageBg}/>
                    </div>
                </div>
            </section> */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={`${styles.column} ${styles.socialColumn}`}>
            <img
              src="../../images/footer/flogo.svg"
              alt="Logo"
              className={styles.logo}
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            />
            <h4 className={styles.socialHeading}>Follow Us On</h4>
            <div className={styles.socialIcons}>
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={link.src} alt={link.alt} />
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.column}>
            <h4 className={styles.footerHeading}>Quick Links</h4>
            <ul>
              {linksColumn2.map((item, index) => (
                <li key={index}>
                  <Link to={item.route} key={index} className={styles.item}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.column}>
            <h4 className={styles.footerHeading}>Other Links</h4>
            <ul>
              {linksColumn3.map((item, index) => (
                <li key={index}>
                  <Link to={item.route} key={index} className={styles.item}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.column}>
            <h4 className={styles.footerHeading}>Get In Touch with US</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <img src={contactInfo.address.icon} alt="Location" />
                <span>{contactInfo.address.text}</span>
              </div>
              <div
                className={styles.contactItem}
                onClick={(e) => {
                  window.location.href = `tel:${contactInfo.phone.text}`;
                  e.preventDefault();
                }}
              >
                <img src={contactInfo.phone.icon} alt="Phone" />
                <span>{contactInfo.phone.text}</span>
              </div>
              <div
                className={styles.contactItem}
                onClick={(e) => {
                  window.location.href = `whatsapp://send?text=${contactInfo.whatsapp.text}`;
                  e.preventDefault();
                }}
              >
                <img src={contactInfo.whatsapp.icon} alt="whatsapp" />
                <span>{contactInfo.whatsapp.text}</span>
              </div>
              <div
                className={styles.contactItem}
                onClick={(e) => {
                  window.location.href = `mailto:${contactInfo.email.text}`;
                  e.preventDefault();
                }}
              >
                <img src={contactInfo.email.icon} alt="Email" />
                <span>{contactInfo.email.text}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.container}>
        <div className={styles.copyRight}>
          <p className={styles.text}>@ All Right Reserved</p>
        </div>
      </div>
    </>
  );
};

export default CpFooter;
