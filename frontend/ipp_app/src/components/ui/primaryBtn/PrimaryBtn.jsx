import "./PrimaryBtn.css"

function PrimaryBtn({ children, onClick, className }) {
    return (
        <button className={`${className} primary-btn`} onClick={onClick}>
            {children}
        </button>
    );
}

export default PrimaryBtn;
