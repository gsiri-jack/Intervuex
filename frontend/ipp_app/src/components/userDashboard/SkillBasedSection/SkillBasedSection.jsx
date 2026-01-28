import "./skillBasedSection.css";
import SkillCard from "./SkillCard/SkillCard";
import skillsList from "../../../TestingData/skillBasedInterviews";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArrowLogo from "../../../assets/icons/arrow-right-short.svg"
function SkillBasedSection() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillsList);
  }, []);

  return (
    <section className="skillBased-section">
      <div className="container">
        <div className="header">
          <div className="heading">
            <h4>Skill Based</h4>
          </div>
          <div className="headerCta">
            <Link to="/skills">View All</Link>
          </div>
        </div>

        <div className="skill-grid">
          {skills.map((skill) => (
            <SkillCard key={skill.id} data={skill} />
          ))}

          {/* Extra CTA Card */}
          <div className="knowMore">
            <SkillCard
            data={{
              id: "cta",
              title: "Get more ..",
              skillLogo: ArrowLogo
            }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillBasedSection;