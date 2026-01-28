import "./categorizedOptionSection.css";

function CategorizedOptionSection() {
  return (
    <section className="categorizedOption-section">
      <div className="categorizedOption-container">
            <div className="categorizedOption-header">
                <h4>Domain Based Practice</h4>
            </div>

        <div className="categorizedOption-box">
        <div className="option behavioural">
          <div className="optionCard">
            <div className="context">
              <h4>Behavioural Interviews</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos?
              </p>
            </div>
            <div className="abstract abs1"></div>
          </div>
        </div>

        <div className="option behavioural">
          <div className="optionCard">
            <div className="context">
              <h4>Coding Interviews</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos?
              </p>
            </div>
            <div className="abstract abs2"></div>
          </div>
        </div>

        <div className="option behavioural">
          <div className="optionCard">
            <div className="context">
              <h4>Technical Interviews</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos?
              </p>
            </div>
            <div className="abstract abs3"></div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default CategorizedOptionSection;
