import UserInput from "../ui/userInput/UserInput"
import { FaRegUserCircle } from "react-icons/fa";
function LoginPage(){
    return (
        <section className="login-section">

            <div className="login-container">
                <div className="login-abstract"></div>
                <div className="login-content">
                    LoginPage
                    <UserInput inText="Hello" icon={FaRegUserCircle}/>
                </div>
            </div>
        
        </section>
    );
}
export default LoginPage;                                                 