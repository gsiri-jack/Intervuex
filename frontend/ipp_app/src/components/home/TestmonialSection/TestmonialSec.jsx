import "./testmonialSec.css"

function TestmonialSec(){
    return (
        <section className="testmonial-section">
            <div className="testmonial-header">
                <h2>What users says</h2>
                <h4>Testmonials</h4>
            </div>
            <div className="testmonial-container">
                <div className="testmonial-card">
                    <div className="testmonial-text"><img src="/path" alt="sdf" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minima exercitationem iure molestias culpa. Eos.</p></div>
                    <div className="testmonial-userDetails">
                        <img src="" alt="profile" className="userAvatar"/>
                        <div className="userDetails-name">
                            <p className="username">Jack</p>
                        <p className="role">software developer</p>
                        </div>
                    </div>
                </div>
                <div className="testmonial-card">
                    <div className="testmonial-text"><img src="" alt="sdf" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minima exercitationem iure molestias culpa. Eos.</p></div>
                    <div className="testmonial-userDetails">
                        <img src="/path" alt="profile" className="userAvatar"/>
                        <div className="userDetails-name">
                            <p className="username">Nithin</p>
                        <p className="role">software developer</p>
                        </div>
                    </div>
                </div>
                <div className="testmonial-card">
                    <div className="testmonial-text"><img src="" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minima exercitationem iure molestias culpa. Eos. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa dicta iste illum numquam enim ratione dolore quidem libero porro maxime. Lorem ipsum do...</p></div>
                    <div className="testmonial-userDetails">
                        <img src="/path" alt="profile" className="userAvatar"/>
                        <div className="userDetails-name">
                            <p className="username">Amith</p>
                        <p className="role">software developer</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testmonial-scrollbar"></div>
        </section>
    );
}

export default TestmonialSec;