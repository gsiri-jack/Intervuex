import "./userStatsOne.css"

function UserStatOne(props){
    return (
        <section className="userStatsOne-section">
            <div className="statsContainer">
                <div className="keyStats">
                    <h1>{props.stat}<span className="keyStat-symbol"></span></h1>
                </div>
                <div>
                    <p className="stat-content">
                        {props.statContent}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default UserStatOne;