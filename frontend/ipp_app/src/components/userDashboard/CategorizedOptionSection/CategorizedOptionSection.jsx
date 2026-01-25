import "./categorizedOptionSection.css"

function CategorizedOptionSection(){
    return (
        <section className="categorizedOption-section">
           <div className="categorizedOption-box">
             <div className="option behavioural">
                <div className="optionCard">
                    <div className="context">
                    <h4>Behavioural Interviews</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos?</p>
                </div>
                <div className="abstract"></div>
                </div>
            </div>

                         <div className="option behavioural">
                <div className="optionCard">
                    <div className="context">
                    <h4>Coding Interviews</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos?</p>
                </div>
                <div className="abstract"></div>
                </div>
            </div>

                         <div className="option behavioural">
                <div className="optionCard">
                    <div className="context">
                    <h4>Technical Interviews</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos?</p>
                </div>
                <div className="abstract"></div>
                </div>
            </div>

            
           </div>
           
        </section>
    )
}

export default CategorizedOptionSection; 