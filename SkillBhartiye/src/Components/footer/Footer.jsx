import React from "react";
import "./Footer.scss";

const SkillBhartiyeBanner = ({ logo, title, description, socialLinks, aboutText }) => {
  return (
    <div className="skill-bhartiye-banner">
      <div className="content">
        <div className="left-section">
          <img src="./public/images/SkillBhartiyenext.jpeg" alt="SkillBhartiye Logo" className="logo" />
          <h1 className="title">{title}</h1>
        </div>
        <div className="right-section">
          <p className="description">{description}</p>
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a href={link.url} key={index} target="_blank" rel="noopener noreferrer">
                <img src={link.icon} alt={link.name} />
              </a>
            ))}
            <button className="about-btn">{aboutText}</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

// Mock Data for Testing (Replace with Backend Data)
const mockData = {
  logo: "./public/images/SkillBhartiye.jpeg", // Replace with the logo's URL
  title: "SkillBhartiya",
  description:
    "Welcome to SkillBhartiye, the ultimate platform for freelancers and employers! Whether you're a talented freelancer looking for your next gig or a business seeking skilled professionals, we connect you seamlessly. Post jobs, find opportunities, and collaborate with ease. Join us today and take your freelancing career or hiring process to the next level!",
  socialLinks: [
    {url: "https://x.com", icon: "./public/images/X.jpeg" },
    {url: "https://youtube.com", icon: "./public/images/Youtube.jpeg" },
    {url: "https://instagram.com", icon: "./public/images/Instagram.jpeg" },
    {url: "https://linkedin.com", icon: "./public/images/LinkedIn.png" },
  ],
  aboutText: "About us",
};

const SkillBhartiye = () => {
  return <SkillBhartiyeBanner {...mockData} />;
};

export default SkillBhartiye;
