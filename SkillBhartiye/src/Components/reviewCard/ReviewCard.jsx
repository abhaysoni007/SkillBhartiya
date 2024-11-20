import React from "react";
import "./ReviewCard.scss"; // Link to your SCSS file

const TestimonialCard = () => {
  return (
    <div className="testimonial-card">
      {/* Star Rating */}
      <div className="stars">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className="star-icon"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.49 7.545l6.568-.955L10 1l2.942 5.59 6.568.955-4.755 4.36 1.123 6.545z" />
          </svg>
        ))}
      </div>

      {/* Title */}
      <h2 className="testimonial-title">
        Exceptional WordPress and SEO Services
      </h2>

      {/* Content */}
      <p className="testimonial-content">
        Sangita's expertise in WordPress development is unparalleled. She
        redesigned our company's website, making it not only aesthetically
        pleasing but also highly functional and responsive across all devices.
        Her deep understanding of SEO and digital marketing strategies
        significantly boosted our online presence, increasing our traffic by
        30% in just a few months. What stands out is her dedication to
        understanding our business needs and tailoring solutions that fit
        perfectly. Her transparent communication and timely delivery made the
        whole process smooth and stress-free. Highly recommended!
      </p>

      {/* Footer */}
      <div className="testimonial-footer">
        {/* Profile Picture */}
        <a href="/userprofile" className="profile-link">
          <img
            src="/path/to/profile-picture.jpg" // Replace with actual image URL
            alt="Meena Pandey"
            className="profile-picture"
          />
        </a>

        {/* Name and Date */}
        <div className="profile-info">
          <a href="/userprofile" className="profile-name">
            Meena Pandey
          </a>
          <p className="profile-date">24/12/2019</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
