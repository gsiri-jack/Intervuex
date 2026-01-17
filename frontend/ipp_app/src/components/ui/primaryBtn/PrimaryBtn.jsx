import "./PrimaryBtn.css"

function PrimaryBtn({ children, onClick }) {
    return (
        <button className="primary-btn" onClick={onClick}>
            {children}
        </button>
    );
}

export default PrimaryBtn;
