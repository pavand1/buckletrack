import { useEffect } from "react";
import Styles from "./Home.module.scss";
import Aos from "aos";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className={Styles.doodle}>
        <img src="../../images/Home/Doodle Background-1.svg" alt="" />
        <div
          className={Styles.subContainer}
          style={{
            flexDirection: "column",
            gap: "3rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2 className={Styles.serviceMobHeading}>   
            Our Services
          </h2>
          <p
            style={{
              fontFamily: "Poppins-Regular",
              color: "#000000",
            }}
          >
            At BuckleTrack (BT), we offer services that leverage the latest
            technological advancements to deliver the best transport solutions.
            We manage supply chain complexity, integrate partners network and
            create seamless physical and document flow while maintaining
            simplicity
          </p>
          <div className={Styles.services}>
            <div className={Styles.card} data-aos="fade-up">
              <div className={Styles.image}>
                <img src="../../images/services/Surface Transport.png" alt="" />
                <div className={Styles.tag}>
                  <p>Surface Transport</p>
                </div>
              </div>
              <div
                className={Styles.text}
                style={{
                  fontSize: "1.6rem",
                  lineHeight: "2.2rem",
                  fontFamily: "Poppins-Regular",
                  color: "#000000",
                }}
              >
                At BuckleTrack, our surface transport solutions are crafted to
                offer streamlined connectivity and reliability for businesses of
                all sizes...
              </div>
              <div
                className={Styles.button}
                onClick={() => navigate("/services")}
              >
                Read More
              </div>
            </div>
            <div className={Styles.card} data-aos="fade-up">
              <div className={Styles.image}>
                <img src="../../images/services/Express Delivery.png" alt="" />
                <div className={Styles.tag}>
                  <p>Express Delivery</p>
                </div>
              </div>
              <div
                className={Styles.text}
                style={{
                  fontSize: "1.6rem",
                  lineHeight: "2.2rem",
                  fontFamily: "Poppins-Regular",
                  color: "#000000",
                }}
              >
                BuckleTrack’s Express Delivery Service is custom-made for
                time-sensitive shipments based on speed and precision.
                Leveraging a vast network...
              </div>
              <div
                className={Styles.button}
                onClick={() => navigate("/services")}
              >
                Read More
              </div>
            </div>
            <div className={Styles.card} data-aos="fade-up">
              <div className={Styles.image}>
                <img src="../../images/services/Project Transport.png" alt="" />
                <div className={Styles.tag}>
                  <p>Project Transport</p>
                </div>
              </div>
              <div
                className={Styles.text}
                style={{
                  fontSize: "1.6rem",
                  lineHeight: "2.2rem",
                  fontFamily: "Poppins-Regular",
                  color: "#000000",
                }}
              >
                BuckleTrack’s Project Transportation Services are tailor-made to
                handle complex, large-scale logistical tasks with precision and
                proficiency...
              </div>
              <div
                className={Styles.button}
                onClick={() => navigate("/services")}
              >
                Read More
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
