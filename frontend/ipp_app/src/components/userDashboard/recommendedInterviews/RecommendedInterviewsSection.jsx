import "./recentInterviewsSection.css"
import { Link } from "react-router-dom";
import Card from "../../ui/recentInterviewCard/RecentInterviewCard"


function RecommendedInterviewSection(props) {
    return (
        <section className="recentInterview-section">
            <div className="recentInterview-box">
                <div className="header">
                    <div className="heading">
                        <h4>Recommended Interviews</h4>
                    </div>
                    <div className="headerCta">
                        <Link>view All</Link>
                    </div>
                </div>
                <div className="interviewCards-container">
                    <div className="box">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default RecommendedInterviewSection;