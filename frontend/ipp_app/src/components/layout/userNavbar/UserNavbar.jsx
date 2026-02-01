import logo from "../../../assets/logo/logo.svg"
import PrimaryBtn from "../../ui/primaryBtn/PrimaryBtn.jsx"
import "./Navbar.css"
function Navbar() {
    return (
        <nav>
           {/** Logo here */}
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="nav-links">
                <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/pricing">Pricing</a></li>
            </ul>
           
            </div>
             <div className="auth-buttons">
                <PrimaryBtn onClick={() => console.log("Signup clicked")}>Signup</PrimaryBtn>
                <PrimaryBtn onClick={() => console.log("Login clicked")}>Login</PrimaryBtn>
            </div>
        
        </nav>
    );
}

export default Navbar;
