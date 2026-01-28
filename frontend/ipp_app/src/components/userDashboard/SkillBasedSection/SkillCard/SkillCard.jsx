import "./skillCard.css";

function SkillCard({ data }) {
  return (
    <section className="skillCard-section">
      <div className="box">
        <img src={data.skillLogo} alt={data.title} />
        <h4>{data.title}</h4>
      </div>
    </section>
  );
}

export default SkillCard;