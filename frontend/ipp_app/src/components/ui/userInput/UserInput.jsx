

function UserInput(props){
    return (
        <div className="userInput-component">
            <input type="text" name="" id="" placeholder={props.inText} />
            <div className="userInput-icon">
                {props.icon && <props.icon className="icon" />}
            </div>
        </div>
    );
}

export default UserInput;