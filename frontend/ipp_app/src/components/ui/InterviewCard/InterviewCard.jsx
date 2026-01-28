import "./interviewCard.css";
import { BsStopwatch, BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

function InterviewCard(props) {
  // 1. You successfully extracted these here...

    const renderStars = (rating) => {
    const stars = [];

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    // Full stars
    for (let i = 0; i < fullStars; i++) {
        stars.push(<BsStarFill key={`full-${i}`} className="rating-star"/>);
    }

    // Half star
    if (hasHalfStar) {
        stars.push(<BsStarHalf key="half" className="rating-star"/>);
    }

    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<BsStar key={`empty-${i}`} className="rating-star"/>);
    }

    return stars;
    };

  const { company, role, tags, rating, difficulty, description, duration } = props.data;

  return (
    <div className="card-container">
      <div className="card-header">
        {/* 2. REMOVE 'props.' from these calls. Use the variables above! */}
        <img src="" alt={company} className="company-logo" />
        <h2 className="role-title">{company} {role}</h2>
      </div>

      <div className="tag-container">
        {/* Use 'tags' directly */}
        {tags.slice(0, 2).map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="stats-row">
        {/* Use 'rating' and 'difficulty' directly */}
       <div className="rating-box">
        {renderStars(rating)}
         <span className="rating-number">{rating}</span>
       </div>
       
        <span className={`difficulty-badge ${difficulty.toLowerCase()}`}>
          {difficulty}
        </span>
      </div>

      <p className="description">{description}</p>

      <hr className="divider" />

      <div className="card-footer">
        <div className="duration">
          {/* Using your imported icon is better than the emoji! */}
          <BsStopwatch className="clock-icon" /> {duration} mins
        </div>
        <button className="start-btn">
          <span className="play-icon">▶</span> Start Interview
        </button>
      </div>
    </div>
  );
}

export default InterviewCard;