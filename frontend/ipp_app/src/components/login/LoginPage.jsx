import "./loginpage.css"

import UserInput from "../ui/userInput/UserInput";

import Logo from "../../assets/logo/logo.svg"
import { BsPersonCircle, BsEyeFill  } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import {Link} from "react-router-dom";
import PrimaryBtn from "../ui/primaryBtn/PrimaryBtn"
function LoginPage(){
    return (
        <section className="login-section">

            <div className="login-container">
                <div className="login-abstract"></div>
                <div className="login-content">
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="welcomeBanner">
                        <h1>Hey, welcome back</h1>
                        <p>let's continue sharpening your skills</p>
                    </div>
                    <UserInput inText="you@example.com" icon={BsPersonCircle} className="loginInput-userName"/>
                     <UserInput inText="password" icon={BsEyeFill} className="loginInput-password"/>
                     <Link to="/" className="forgotPassword">forgot password?</Link>
                    <PrimaryBtn children="SignIn"/>
                    <div className="seprator">
                        <hr />
                        or
                        <hr />
                    </div>

                    <div className="gAuth">
                        <PrimaryBtn>Continue with Google < FcGoogle className="g-logo" /></PrimaryBtn>
                        
                    </div>
                    <Link to="/" className="signUp-cta">new here? Create an account</Link>

                </div>
            </div>
        
        </section>
    );
}
export default LoginPage;                                                 