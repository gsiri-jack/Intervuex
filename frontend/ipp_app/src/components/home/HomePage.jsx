import Navbar from "../layout/navbar/Navbar";
import HeroSection from "./heroSection/HeroSection";            
import MottoSec from "./mottoSection/MottoSec";
import ProcessSec from "./processSection/ProcessSec"
import FeatureSec from "./featuresSection/FeaturesSec";
import TestmonialSec from "./TestmonialSection/TestmonialSec";
import "./homePage.css";
import FooterSec from "./footerSection/FooterSec";
function HomePage() {
    return (
        <div>
            <Navbar />
            <hr />
            <HeroSection />
            <MottoSec />
            <ProcessSec />
            <FeatureSec />
            <TestmonialSec />
            <FooterSec />
        </div>
    );
}
export default HomePage;

