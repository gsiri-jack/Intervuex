import "./UserDashboardHeroSection.css"
import UserStatsOne from "../../ui/UserStatsOne/UserStatsOne"
import { BsFire, BsArrowRightShort } from "react-icons/bs";
import PrimaryBtn from "../../ui/primaryBtn/PrimaryBtn"

function UserDashboardHeroSection() {
     const username = "jack";
    const formattedName = username[0].toUpperCase() + username.slice(1);
    return (
        <section className="userDashboardHero-section">
           <div className="userDashboardHero-container">
                <div className="userDashboardHero-content">
                    <div className="context">
                        <h4>Hello <span>{formattedName}</span>, Welcome back</h4>
                        <p>Sharpen your answers, improve clarity, and build confidence with every mock interview.</p>
                        <PrimaryBtn children={"Explore Interviews"}/>
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