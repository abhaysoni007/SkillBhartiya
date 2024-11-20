import React from "react";
import "./FreelancerCard.scss";

const FreelancerCard = () => {
  // Raw data used directly for now
  const freelancerData = {
    profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh7s-ikEFdk4yow2pzV0F_c38QDKMXDgrxwA&s", // Replace with an actual image URL
    username: "swayam_mrudal",
    skills: "SEO-PPC Advertising - Social Media Marketing",
    price: 600,
    title: "Digital Marketing Strategist TOP RATED FREELANCER",
    description:
      "A results-driven digital marketing strategist with a track record of developing successful online campaigns. Expertise in SEO, PPC, and social media marketing. Committed to driving brand awareness and increasing ROI.",
    rating: 3,
    distance: "500m",
  };

  return (
    <div className="freelancer-card">
      {/* Profile Picture */}
      <div className="profile-section">
        <img
          src={freelancerData.profilePicture}
          alt="Freelancer"
          className="profile-picture"
        />
        <div className="rating-distance">
          <div className="rating">
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index}>
                {index < freelancerData.rating ? "★" : "☆"}
              </span>
            ))}
          </div>
          <div className="distance">{freelancerData.distance} away</div>
        </div>
      </div>

      {/* Freelancer Info */}
      <div className="info-section">
        <h2 className="username">@{freelancerData.username}</h2>
        <p className="skills">{freelancerData.skills}</p>
        <p className="price">₹{freelancerData.price} onwards</p>
        <h3 className="title">{freelancerData.title}</h3>
        <hr className="separator" />
        <p className="description">{freelancerData.description}</p>
      </div>

      {/* View Button */}
      <div className="view-section">
        <button className="view-button">VIEW</button>
      </div>
    </div>
  );
};

export default FreelancerCard;
