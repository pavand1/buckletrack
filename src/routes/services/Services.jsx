import Styles from "../home/Home.module.scss"
import HomeComponent from "../../components/home";
import CpWhyBuckle from "../../components/cp-why-buckle/CpWhyBuckle";
import CpServicesComp from "../../components/cp-services-comp/CpServicesComp";

const Services = () => {
    return <div className={Styles.container}>
        <HomeComponent />
        <CpWhyBuckle />
        <CpServicesComp />
    </div>
}

export default Services;