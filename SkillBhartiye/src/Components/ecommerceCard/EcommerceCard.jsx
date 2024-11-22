import React from "react";
import PropTypes from "prop-types";
import "./EcommerceCard.scss";

const EcommerceCard = ({ title, description, priceRange, skills, status }) => {
  return (
    <div className="ecommerce-card">
      {/* Header Section */}
      <div className="ecommerce-card-header">
        <h2>{title}</h2>
        <span className={`status ${status.toLowerCase()}`}>{status}</span>
      </div>

      {/* Description Section */}
      <p className="ecommerce-card-description">{description}</p>

      {/* Footer Section */}
      <div className="ecommerce-card-footer">
        <span className="price-range">{priceRange}</span>
        <button className="view-btn">VIEW</button>
      </div>

      {/* Skills Section */}
      <div className="skills">{skills}</div>
    </div>
  );
};

// Prop Types for Validation
EcommerceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  priceRange: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default EcommerceCard;
