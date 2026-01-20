import "./signInPage.css"
import UserInput from "../ui/userInput/UserInput";
import PrimaryBtn from "../ui/primaryBtn/PrimaryBtn";
import { FcGoogle } from "react-icons/fc";
import {Link} from "react-router-dom";
import { BsPerson, BsEnvelopeAt, BsEyeSlash, BsLock} from "react-icons/bs";


function SignInPage(){
    return (
    <section className="signIn-section">

        <div className="signIn-container">
            <div className="signIn-box">
               
                <div className="signIn-content">
                    <div className="welcomeBanner">
                        <h1>Hey, welcome back</h1>
                        <p>let's continue sharpening your skills</p>
                    </div>
                    <form action="">
                        <div className="signIn-formData">
                        <UserInput type="text" inText="your name" icon={BsPerson} className="sigin-UserName" />
                        <UserInput type="email" inText="you@example.com" icon={BsEnvelopeAt} className="sigin-mail" />
                        <UserInput type="password" inText="password" icon={BsEyeSlash} className="sigin-password" />
                        <UserInput type="password" inText="•••••••" icon={BsLock} className="sigin-confirmPassword" />
                    </div>
                    <div className="signIn-actions">
                        <PrimaryBtn children="Login" className="signIn-btns"/>
                        <div className="seprator">
                        <hr />
                        or
                        <hr />
                        </div>

                        <div className="gAuth">
                        <PrimaryBtn className="signIn-btns">Continue with Google < FcGoogle className="g-logo" /></PrimaryBtn>
                        
                        </div>
                        <Link to="/" className="signUp-cta ">Already a member? Login</Link>
                    </div>
                    </form>
                    
                </div>
                <div className="signIn-abstract">

                    </div>
            </div>
        </div>

    </section>
);
}

export default SignInPage;