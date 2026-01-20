import "./userInput.css";

function UserInput(props){
    const Icon = props.icon;
    return (
        
       <div className={`${props.className} userInput-component`}>
            <input type={props.type} name="" id="" placeholder={props.inText} />
            <div className="userInput-icon">
                {Icon && <Icon className="icon" />}
            </div>
        </div>
    );
}

export default UserInput;