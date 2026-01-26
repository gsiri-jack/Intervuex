import "./recentInterviewCard.css"
import { BsCalendar2, BsClipboardData, BsClockFill, BsStarFill } from "react-icons/bs";

function RecentInterviewCard(props){
    
    return (
        <section className="recentInterviewCard-section">
            <div className="interviewCard-container">
                <div className="card-grid">
                    <div className="row1"> 
                        <div className="r1-col1">
                            <h4>{props.title}</h4>
                        </div>
                        <div className="r1-col2">
                            <img src={props.imgPath} alt="logo" srcset="" />
                        </div>    
                    </div>
                    <div className="row2">
                        <div className="r2-col1">
                            <BsCalendar2 className="icon"/> 
                           {props.activity}
                        </div>
                        <div className="r2-col2">
                            {props.rating}
                            <BsStarFill className="icon"/>

                        </div>    
                    </div>
                    <div className="row3"> 
                        <div className="r3-col1">
                            <BsClipboardData className="icon" />
                            <p>Score: {props.score}</p>
                        </div>
                        <div className="r3-col2"></div>    
                    </div>
                    <div className="row4"> 
                        <div className="r4-col1">
                            <BsClockFill className="icon" />
                           {props.time} Min
                        </div>
                        <div className="r4-col2">
                            --
                        </div>    
                    </div>
                </div>
            </div>
        </section>
    );
}
 export default RecentInterviewCard;