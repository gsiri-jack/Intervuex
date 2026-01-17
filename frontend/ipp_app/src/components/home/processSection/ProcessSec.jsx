import "./ProcessSec.css"
import ProcessLine from "../../../assets/ProcessLine.svg"
import Gif1 from "../../../assets/heroGifs/step1.webm"
import Gif2 from "../../../assets/heroGifs/step2.webm"
import Gif3 from "../../../assets/heroGifs/step3.webm"
import Gif4 from "../../../assets/heroGifs/step4.webm"


function ProcessSec () {
    return (
        <section className="processSection">
        <div className="header">
            <h4>Process</h4>
            <h2>How it works</h2>
            
        </div>
        <div className="contentGrid">
            <div className="row1">
                        <div className="col1"><p><b>Pick an interview : </b>
        Choose from 50+ real world mock interviews and select your role.</p></div>
                <div className="col2">
                    <video autoPlay loop muted>
                        <source src={Gif2} type="video/webm" />
                            Your browser does not support the video tag.
                    </video>
                </div>
                <div className="col3"><p><b>Submit answers :</b>
submit your recorded session for instant processing.</p></div>
                <div className="col4">
                    <video autoPlay loop muted>
                        <source src={Gif4} type="video/webm" />
                            Your browser does not support the video tag.
                    </video></div>
            </div>
            <div className="row2">
                <img src={ProcessLine} alt="" srcset="" />
            </div>
            <div className="row3">
                <div className="col1">
                    <video autoPlay loop muted>
                        <source src={Gif1} type="video/webm" />
                            Your browser does not support the video tag.
                    </video>
                </div>
                <div className="col2"><p><b>Start the session :</b>
Take a realistic interview with timed questions and a recording setup.</p></div>
                <div className="col3">
                    <video autoPlay loop muted>
                        <source src={Gif3} type="video/webm" />
                            Your browser does not support the video tag.
                    </video>
                </div>
                <div className="col4"><p><b>Receive your evaluation: </b>
We analyze your interview in the background and deliver your detailed report shortly.</p></div>
            </div>
        </div>
        </section>
    );
}
export default ProcessSec;