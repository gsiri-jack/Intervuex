import "./skillBasedSection.css"

import SkillCard from "./SkillCard/SkillCard"
import Logo from "../../../assets/skillLogo/python.svg"
import { Link }from "react-router-dom"

function SkillBasedSection(props){
    return (
        <section className="skillBased-section">
            <div className="container">
                <div className="header">
                    <div className="heading">
                        <h4>Recommended Interviews</h4>
                    </div>
                    <div className="headerCta">
                        <Link></Link>
                    </div>
                </div>
                <div className="skill-grid">
                   <SkillCard skillTitle="python" imgPath={Logo} />
                   <SkillCard skillTitle="python" imgPath={Logo} /> 
                   <SkillCard skillTitle="python" imgPath={Logo} /> 
                   <SkillCard skillTitle="python" imgPath={Logo} /> 

                   <SkillCard skillTitle="python" imgPath={Logo} /> 
                   <SkillCard skillTitle="python" imgPath={Logo} /> 
                   <SkillCard skillTitle="python" imgPath={Logo} /> 
                   <SkillCard skillTitle="python" imgPath={Logo} /> 
                
                   <SkillCard skillTitle="python" imgPath={Logo} /> 
                   <SkillCard skillTitle="know more" imgPath={Logo} /> 

                </div>
            </div>
        </section>
    );
}

export default SkillBasedSection;

 