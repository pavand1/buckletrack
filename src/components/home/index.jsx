import { useState } from "react";
import RateOrderForm from "../common/rate-order-form";
import Styles from "./Home.module.scss";
import { FacebookIcon, TwitterIcon, LinkedinIcon } from "react-share";
import { useLocation } from "react-router-dom";

const HomeComponent = () => {
  const { pathname } = useLocation();
  const [showSocial, setShowSocial] = useState(false);
  return (
    <>
      <div className={Styles.doodle}>
        {pathname === "/" ? (
          <img src="../../images/Home/Doodle Background.png" alt="" />
        ) : (
          <img src="../../images/Our-service-bg.svg" alt="" />
        )}
        <div className={Styles.subContainer}>
          <div className={Styles.mojo}>
            <div>
              {/* <img src="../../images/Home/Buckle Track Option.svg" alt="" /> */}
            </div>
            <div className={Styles.theme}>
              {"Surface Transport  |  Express Delivery  |  Project Transport"}
            </div>
          </div>
          <div className={Styles.calculator}>
            <RateOrderForm />
          </div>
        </div>
        <div
          className={Styles.share}
          onClick={() => setShowSocial((prev) => !prev)}
        >
          <img src="../../images/Home/share.svg" alt="" />
        </div>
        <div
          className={Styles.shareItems}
          style={{ display: showSocial ? "flex" : "none" }}
        >
          <div
            style={{ height: "48px", width: "48px" }}
            onClick={(e) => {
              window.location.href = `tel:hi`;
              e.preventDefault();
            }}
          >
            <img src="../../images/share/call.svg" alt="" />
          </div>
          <div
            style={{ height: "48px", width: "48px" }}
            onClick={(e) => {
              window.location.href = `mailto:hi`;
              e.preventDefault();
            }}
          >
            <img src="../../images/share/email.svg" alt="" />
          </div>
          <div
            style={{ height: "48px", width: "48px" }}
            onClick={(e) => {
              window.location.href = `whatsapp://send?text=Hi`;
              e.preventDefault();
            }}
          >
            <img src="../../images/share/whatsapp.svg" alt="" />
          </div>
        </div>
      </div>
      {/* <div className={Styles.trackInfo}>
        <div className={Styles.info}>
          <img src="../../images/Home/info.svg" alt="" />
        </div>
      </div> */}
    </>
  );
};

export default HomeComponent;
