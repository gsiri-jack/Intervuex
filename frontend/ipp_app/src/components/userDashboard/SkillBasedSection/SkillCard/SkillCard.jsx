import "./skillCard.css"

function SkillCard(props){
    return (
        <section className="skillCard-section">
            <div className="box">
                    <img src={props.imgPath} alt="" />
                <h4>{props.skillTitle}</h4>
            </div>
        </section>
    )
}

export default SkillCard;