import "./footerSec.css";
import ActionButton from "../../ui/primaryBtn/PrimaryBtn";
import FooterBar from "../../layout/footer/Footer"
import FooterAbstract from "../../../assets/FooterAbstract.svg";
function FooterSec() {
  return (
    <section
      className="footer-section"
      style={{ backgroundImage: `url(${FooterAbstract})` }}>
      <div className="footer-contextContainer">
        <h2>
          Are you ready to take your first <span>interview</span>?
        </h2>
        <p>
          Join thousands of candidates practicing their skills and landing their
          dream jobs today.
        </p>
        <ActionButton onClick={() => console.log("Signup clicked")}>
          Signup Now
        </ActionButton>
      </div>
      <FooterBar />
    </section>
  );
}

export default FooterSec;
