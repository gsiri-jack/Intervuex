import "./recommendedInterviewsSection.css";
import { Link } from "react-router-dom";
import InterviewCard from "../../ui/InterviewCard/InterviewCard";
import { useState, useEffect } from "react";
import recommendedInterviewsData from "../../../TestingData/recommendedInterivews";

function RecommendedInterviewSection() {
  const [recommendedInterviews, setRecommendedInterviews] = useState([]);

  useEffect(() => {
    setRecommendedInterviews(recommendedInterviewsData);
  }, []);

  return (
    <section className="recommendedInterview-section">
      <div className="recommendedInterview-box">
        <div className="header">
          <div className="heading">
            <h4>Recommended Interviews</h4>
          </div>
          <div className="headerCta">
            <Link to="/interviews">View All</Link>
          </div>
        </div>

        <div className="interviewCards-container">
          <div className="box">
            {recommendedInterviews.map((interview) => (
              <InterviewCard
                key={interview.id}
                data={interview}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecommendedInterviewSection;