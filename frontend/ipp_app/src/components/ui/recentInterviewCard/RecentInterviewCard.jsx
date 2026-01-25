import "./recentInterviewCard.css"

function RecentInterviewCard(props){
    return (
        <section className="recentInterviewCard-section">
            <div className="interviewCard-container">
                <div className="card-grid">
                    <div className="row1"> 
                        <div className="r1-col1">
                            <h4>Interivew Name</h4>
                        </div>
                        <div className="r1-col2">
                            <img src="" alt="logo" srcset="" />
                        </div>    
                    </div>
                    <div className="row2"> 
                        <div className="r2-col1">
                            <div className="tag">Activity</div>
                        </div>
                        <div className="r2-col2">
                            4.2
                        </div>    
                    </div>
                    <div className="row3"> 
                        <div className="r3-col1">
                            <p>Score In progress</p>
                        </div>
                        <div className="r3-col2"></div>    
                    </div>
                    <div className="row4"> 
                        <div className="r4-col1">
                            minutes
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