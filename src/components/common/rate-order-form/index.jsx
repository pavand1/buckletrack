import React, { useEffect, useRef, useState } from "react";
import Styles from "./Styles.module.scss";

const trackOrderURL = import.meta.env.VITE_TRACK_ORDER_URL;

const RateOrderForm = () => {
  const [orderType, setOrderType] = useState("ftl");
  const [orderDetail, setOrderDetail] = useState("order");
  const [activeTab, setActiveTab] = useState("calc");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpValid, setIsOtpValid] = useState(false);
  const ref = useRef();

  const handleRadioChange = (e) => {
    if (e?.target?.name === "orderDetail") setOrderDetail(e.target.id);
    else setOrderType(e?.target?.id);
  };

  const handleSendOtp = () => {
    //call API to send user OTP
  };

  const handleFormSumbit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (ref.current) ref.current.focus();
  }, []);
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.heading}>
          <div
            className={`${Styles.order} ${
              activeTab === "order" ? Styles.activeOrder : ""
            }`}
            onClick={(e) => {
              window.open(trackOrderURL, "_blank");
              e.preventDefault();
            }}
          >
            Track Your Order
          </div>
          <div
            className={`${Styles.calculator} ${
              activeTab === "calc" ? Styles.activeCalculator : ""
            }`}
            onClick={() => setActiveTab("calc")}
          >
            Get Your Freight
          </div>
        </div>
        {activeTab === "calc" ? (
          <form onSubmit={(e) => handleFormSumbit(e)}>
            <div className={Styles.radio}>
              <div style={{ flex: "33%" }}>
                <input
                  type="radio"
                  id="ftl"
                  name="orderType"
                  onChange={handleRadioChange}
                  checked={orderType === "ftl"}
                />
                <label htmlFor="ftl">FTL</label>
              </div>
              <div style={{ flex: "33%" }}>
                <input
                  type="radio"
                  id="ptl"
                  name="orderType"
                  onChange={handleRadioChange}
                  checked={orderType === "ptl"}
                />
                <label htmlFor="ptl">PTL</label>
              </div>
              <div style={{ flex: "33%" }}>
                <input
                  type="radio"
                  id="express"
                  name="orderType"
                  checked={orderType === "express"}
                  onChange={handleRadioChange}
                />
                <label htmlFor="express">EXPRESS</label>
              </div>
            </div>
            <div className={Styles.mobile}>
              <input
                type="text"
                className={Styles.textBox}
                ref={ref}
                placeholder="Enter your mobile number"
              />
              <div className={Styles.button} onClick={handleSendOtp}>
                Get OTP
              </div>
            </div>
            {isOtpSent && (
              <div className={Styles.row}>
                <input
                  type="text"
                  className={Styles.orderNoText}
                  placeholder="Enter Valid OTP"
                />
              </div>
            )}
            {isOtpValid && (
              <>
                <div className={Styles.row}>
                  <input
                    type="text"
                    className={Styles.textBox}
                    placeholder="Start Pincode"
                  />
                  <input
                    type="text"
                    className={Styles.textBox}
                    placeholder="Destination Pincode"
                  />
                </div>
                <div className={Styles.row}>
                  <input
                    type="text"
                    className={Styles.textBox}
                    placeholder="Weight"
                  />
                  <input
                    type="text"
                    className={Styles.textBox}
                    placeholder="Size (Length/Width/Height)"
                  />
                </div>
                <div className={Styles.row}>
                  <input
                    type="text"
                    className={Styles.textBox}
                    placeholder="Item/Package Count"
                  />
                  <input
                    type="text"
                    className={Styles.textBox}
                    placeholder="Declared Value"
                  />
                </div>
                <div className={Styles.row}>
                  <input
                    type="text"
                    className={Styles.textBox}
                    placeholder="Item/Package Count"
                  />
                  <button
                    type="text"
                    className={Styles.textBox}
                    placeholder="Declared Value"
                  >
                    Get A Quote
                  </button>
                </div>
              </>
            )}
          </form>
        ) : (
          <form onSubmit={(e) => handleFormSumbit(e)}>
            <div className={Styles.radio}>
              <div style={{ flex: "33%" }}>
                <input
                  type="radio"
                  id="order"
                  name="orderDetail"
                  onChange={handleRadioChange}
                  checked={orderDetail === "order"}
                />
                <label htmlFor="order">Order No.</label>
              </div>
              <div style={{ flex: "33%" }}>
                <input
                  type="radio"
                  id="lrn"
                  name="orderDetail"
                  onChange={handleRadioChange}
                  checked={orderDetail === "lrn"}
                />
                <label htmlFor="lrn">LRN No.</label>
              </div>
              <div style={{ flex: "33%" }}>
                <input
                  type="radio"
                  id="trip"
                  name="orderDetail"
                  checked={orderDetail === "trip"}
                  onChange={handleRadioChange}
                />
                <label htmlFor="trip">Trip No.</label>
              </div>
            </div>
            <div className={Styles.row}>
              <input
                type="text"
                className={Styles.orderNoText}
                placeholder="Enter Your Order No."
              />
            </div>
            <div className={Styles.row}>
              <button
                type="submit"
                className={Styles.orderNoButton}
                name="track order"
              >
                Track Your Order
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default RateOrderForm;
