import "./feateuresSec.css"

function FeatureSec() {
    return (
        <section className="feature-section">
            <div className="feature-content">  
                <h2 className="feature-title">Features</h2>
                <p className="feature-description">Discover the powerful features of our platform.</p>
            </div>
            <div className="featuresGrid">
                <div className="row1">
                    <div id="feat1" className="col feat">feat 1</div>
                    <div id="feat2" className="col feat">feat 2</div>
                    <div id="feat3" className="col feat">feat 3</div>
                </div>
                <div className="row2">
                    <div  className="col1">
                        <div className="subRow1 feat">feat4</div>
                        <div className="subRow2 feat">feat 5</div>
                    </div>
                    <div  className="col2">
                        <div className="subRow1">
                            <div className="subRow1-innerCol1 feat">feat 6</div>
                            <div className="subRow1-innerCol2 feat">feat 7</div>
                        </div>
                        <div className="subRow2">
                            <div className="subRow1-innerCol1 feat">feat 8</div>
                            <div className="subRow1-innerCol2 feat">feat 9</div>
                            <div className="subRow1-innerCol3 feat">feat 10</div>
                        </div>
                    </div>
                </div>
                <div className="row2"></div>
            </div>
        </section>
    );
}

export default FeatureSec;