import "./footer.css"
import Logo from "../../../assets/logo/logo.svg"

function Footer(){
    return (
    <section className="footer">
        <div className="footer-container">
            <div className="footer-home">
                <div className="footer-logo"><img src={Logo} alt="" srcset="" /></div>
                <p className="footer-context">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum itaque reprehenderit, nam architecto fugit quos iure, accusantium repellendus nihil provident minus delectus, laboriosam dolore dicta.</p>
                <div className="footer-socialLinks">
                        <h1 className="footer-socialIcons">f</h1>
                        <h1 className="footer-socialIcons">t</h1>
                        <h1 className="footer-socialIcons">i</h1>
                </div>
            </div>
            <div className="footer-links">
                <div className="footer-links1">
                <ul>
                    <li>about</li>
                    <li>home</li>
                </ul>
            </div>
            <div className="footer-links2">
                 <ul>
                    <li>privacy</li>
                    <li>terms</li>
                </ul>
            </div>
            <div className="footer-links2">
                 <ul>
                    <li>privacy</li>
                    <li>terms</li>
                </ul>
            </div>
            </div>
        </div>
    </section>
    );
}
export default Footer