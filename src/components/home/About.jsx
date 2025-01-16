import Styles from "./Home.module.scss";

const About = () => {
  return (
    <>
      <div className={Styles.doodle}>
        <img src="../../images/Home/Doodle Background-1.svg" alt="" />
        <div
          className={Styles.subContainer}
          style={{
            flexDirection: "column",
            gap: "36px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>About Buckle Track</h1>
          <div className={Styles.about}>
            <div className={Styles.info}>
              <div className={Styles.text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum hasLorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum hasLorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum hasLorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has Lorem Ipsum is simply
                dummy text of the printing and typesetting industry. Lorem Ipsum
                hasLorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum hasLorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum
                hasLorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has
              </div>
              <div className={Styles.button}>Read More</div>
            </div>
            <div className={Styles.icon}>
              <img src="../../images/Home/about/about.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
