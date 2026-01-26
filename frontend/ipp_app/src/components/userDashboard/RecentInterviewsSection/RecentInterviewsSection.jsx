import "./recentInterviewsSection.css"
import { Link } from "react-router-dom";
import Card from "../../ui/recentInterviewCard/RecentInterviewCard"
import { useState, useEffect } from "react";

// todo: Testing purpose
import recentInterviewData from "../../../TestingData/recentInterview" 

function RecentInterviewSection(props) {

    const [interviews, setInterviews] = useState([]);
    useEffect (() => {
        const ApiData = recentInterviewData;

        setInterviews(ApiData);
    })

    return (
        <section className="recentInterview-section">
            <div className="recentInterview-box">
                <div className="header">
                    <div className="heading">
                        <h4>Recenet Interviews</h4>
                    </div>
                    <div className="headerCta">
                        <Link>view All</Link>
                    </div>
                </div>
                <div className="interviewCards-container">
                    <div className="box">

                        {
                            interviews.map((interview) => (
                                <Card
                                    title={interview.title}
                                    activity={interview.takenOn}
                                    time = {interview.time}
                                    score = {interview.score}
                                    rating = {interview.rating}
                                    imgPath = {interview.logo}
                                />
                            )
                        )
                        }

                    </div>
                </div>
            </div>
        </section>
    );
}
export default RecentInterviewSection;