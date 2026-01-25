import "./UserDashboardHeroSection.css"
import UserStatsOne from "../../ui/UserStatsOne/UserStatsOne"
import { BsFire, BsArrowRightShort } from "react-icons/bs";

function UserDashboardHeroSection() {
    return (
        <section className="userDashboardHero-section">
           <div className="userDashboardHero-container">
                <div className="userDashboardHero-content">
                    <div className="context">
                        <h1>Hello Jack Welcome back</h1>
                    </div>
                </div>
                <div className="userDashboardHero-stats">
                    <div className="stats-grid">
                        <div className="row1">
                            <UserStatsOne stat="18" statContent="interview completed" ></UserStatsOne>
                            <UserStatsOne stat="81%" statContent="Average Score" ></UserStatsOne>
                            <UserStatsOne stat="18h" statContent="Avg. Speaking time" ></UserStatsOne>
                        </div>
                        <div className="row2">
                            
                                <div className="r2-col1">
                                    <div className="streakBox">
                                        <BsFire className="streakIcon"></BsFire>
                                        <p className="streakText"> 27 day of practice streak 
                                        </p>
                                    </div>
                                </div>
                                <div className="r2-col2">
                                    <div className="actionBox">
                                        <p className="actionText"> view performance reports</p>
                                        <BsArrowRightShort className="actionIcon"></BsArrowRightShort>
                                    </div>
                                </div>
                            
                        </div>
                    </div>
                </div>
           </div>
        </section>
    );
}

export default UserDashboardHeroSection;