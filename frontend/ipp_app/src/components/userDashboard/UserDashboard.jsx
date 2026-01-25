import "./UserDashboard.css"
import Navbar from "../layout/navbar/Navbar";
import UserDashboardHeroSection from "./userDashboardHeroSection/UserDashboardHeroSection"
import RecentInterviewSection from "./RecentInterviewsSection/RecentInterviewsSection";
import RecommendedInterviewSection from "./recommendedInterviews/RecommendedInterviewsSection";

import CategorizedOptionSection from "./CategorizedOptionSection/CategorizedOptionSection"

function UserDashboard() {
    return (
        <section className="userDashboard-section">
            <Navbar />
          <UserDashboardHeroSection />
            <RecentInterviewSection />
            <RecommendedInterviewSection />
            <CategorizedOptionSection />
            <h1>end</h1>
            <h1>page</h1>
        </section>
    );
}

export default UserDashboard;