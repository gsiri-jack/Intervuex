import "./HeroSection.css"
import ActionButton from "../../ui/primaryBtn/PrimaryBtn"
function HeroSection() {
    return (
        <section className="hero">
            <div className="hero-content">
              <div className="text">
                  <h1>Fuel your <span className="pacifco">interviews</span><br /> by practicing with us</h1>
                <p>where you use the updated tools to video based interview for the next Gen interview</p>
              </div>
              <ActionButton>Start now</ActionButton>
            </div>
            <div className="hero-right">
               
               <div className="row1">
                <div className="r1-col1"></div>
                <div className="r1-col2"></div>
                <div className="r1-col3"></div>
               </div>
               <div className="row2">
                <div className="r2-col1">
                    <div className="r2c1-srow1">
                        <div className="r2c1sr1-scol1"></div>
                        <div className="r2c1sr1-scol2">
                            
                        </div>
                    </div>
                    <div className="r2c1-srow2"></div>
                </div>
                <div className="r2-col2">
                    <div className="r2c2-srow1"></div>
                    <div className="r2c2-srow2">
                        <div className="r2c2sr2-scol1">
                           
                        </div>
                        <div className="r2c2sr2-scol2">
                             
                        </div>
                        <div className="r2c2sr2-scol3 "></div>
                    </div>
                </div>
               </div>
               

               

            </div>
        </section>
    );
}

export default HeroSection;
