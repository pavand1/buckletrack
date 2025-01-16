import CpAboutBuckleTrack from "../../components/cp-about-buckle-track/CpAboutBuckleTrack";
import CpStory from "../../components/cp-story/CpStory";
import CpTeam from "../../components/cp-team/CpTeam";
import CpVisionMission from "../../components/cp-vision-mission/CpVisionMission";
import HomeComponent from "../../components/home";

const About = () => {
    return <>
        <HomeComponent />
        <CpAboutBuckleTrack />
        <CpVisionMission />
        <CpStory />
        <CpTeam />
    </>
}

export default About;