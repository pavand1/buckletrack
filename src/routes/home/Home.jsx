import Styles from "./Home.module.scss"
import CpTestimonials from "../../components/cp-testimonials/CpTestimonials";
import HomeComponent from "../../components/home";
import Services from "../../components/home/Services";
// import CpOurClients from "../../components/cp-our-clients/CpOurClients";
// import CpGetInTouch from "../../components/cp-getin-touch/CpGetInTouch";
import CpAboutBuckle from "../../components/cp-about-buckle/CpAboutBuckle";
import CpWhyBuckle from "../../components/cp-why-buckle/CpWhyBuckle";
import CpCounter from "../../components/cp-counter/CpCounter";

const Home = () => {
    return <div className={Styles.container}>
        <HomeComponent />
        <CpWhyBuckle />
        <Services />
        <CpCounter />
        <CpAboutBuckle />
        {/* <CpGetInTouch />
        <CpOurClients /> */}
        <CpTestimonials />
        <div className={Styles.doodle}>
            <img src="../../images/Home/whybucklet/testimonialbg.png" alt="" />
        </div>
    </div>
}

export default Home;