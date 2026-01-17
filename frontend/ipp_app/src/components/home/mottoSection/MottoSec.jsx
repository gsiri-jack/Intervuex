import "./MottoSec.css";
import MottoAnimation from "../../../assets/MottoAni.svg"

function MottoSec() {
  return (
    <section className="motto-section">
      <div className="Motto-Animation">
        {/* Added a placeholder or you can import your image file */}
        <img src={MottoAnimation} alt="Animation" />
      </div>
      <div className="Motto-content">
        <h1>We are Here to..</h1>
        <div className="text"><p>
          Interviews have always been about people — how you think, speak, and present yourself under pressure.</p>
          <p>Thoughtful technology now helps surface what's easy to miss
          confidence, clarity, and delivery — not just correctness. </p>
          <p>We're building IntervueX to support human interview skills with meaningful
          insights, so practice feels more intentional, measurable, and real.</p></div>
        
      </div>
      <div className="rightAbstract">
        
      </div>
    </section>
  );
}

export default MottoSec;
