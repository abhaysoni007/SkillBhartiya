import React from "react";
import "./TestimonialCard.scss";
import { Link } from "react-router-dom";

const TestimonialCard = ({ testimonial }) => {
  // Fallback in case testimonial is undefined or null
  if (!testimonial) {
    return <p></p>;
  }

  const { rating, title, content, author, date, authorImage } = testimonial;

  return (
    <div className="testimonial-card">
      <div className="testimonial-rating">
        {"★".repeat(rating)}
      </div>
      <h3 className="testimonial-title">{title}</h3>
      <p className="testimonial-content">{content}</p>
    <Link to="/">
      <div className="testimonial-footer">
        <img src={authorImage} alt={`${author}'s avatar`} className="author-image" />
        <div>
          <p className="author-name">{author}</p>
          <p className="testimonial-date">{date}</p>
        </div>
      </div>
    </Link>
    </div>
  );
};

export default TestimonialCard;
