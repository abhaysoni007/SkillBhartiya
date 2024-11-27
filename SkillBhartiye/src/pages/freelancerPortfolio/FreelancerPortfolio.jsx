import React, { useState, useEffect } from "react";
import "./FreelancerPortfolio.scss";
import PropTypes from "prop-types";
import "./FreelancerPortfolio.scss";
import Slide from "../../Components/slide/Slide.jsx";
import Carousel from "../../Components/corousel/Carousel.jsx";
import ReviewCard from "../../Components/reviewCard/ReviewCard.jsx";

const FreelancerPortfolio = ({ freelancer }) => {
  const [activeSection, setActiveSection] = useState("");
  // console.log(freelancer.projectPhoto);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("div[id]");
      const scrollPos = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        if (
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const rating = freelancer.rating; // Assuming freelancer object contains rating from the backend

  // Create an array of stars based on the rating
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={`star ${index < Math.floor(rating) ? "filled" : ""}`}
      style={
        index < rating && index + 1 > Math.floor(rating)
          ? {
              clipPath: `inset(0 ${
                100 - (rating - Math.floor(rating)) * 100
              }% 0 0)`,
            }
          : {}
      }
    >
      &#9733;
    </span>
  ));
  return (
    <div className="freelancerPortfolio">
      <div className="freelancerNavbar">
        <ul>
          <li>
            <a href="/" className="link">
              ←
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`link ${activeSection === "about" ? "active" : ""}`}
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#work"
              className={`link ${activeSection === "work" ? "active" : ""}`}
            >
              WORK
            </a>
          </li>
          <li>
            <a
              href="#reviews"
              className={`link ${activeSection === "reviews" ? "active" : ""}`}
            >
              REVIEWS
            </a>
          </li>
          <li>
            <a
              href="#pastProjects"
              className={`link ${
                activeSection === "pastProjects" ? "active" : ""
              }`}
            >
              PAST PROJECTS
            </a>
          </li>
          <li>
            <a
              href="#otherDetails"
              className={`link ${
                activeSection === "otherDetails" ? "active" : ""
              }`}
            >
              OTHER DETAILS
            </a>
          </li>
        </ul>
      </div>
      <div id="about">
        <div className="left">
          <div className="image">
            <img src={freelancer.img} alt="" />
          </div>
          <div className="contactDetail">
            <div className="detail">
              <h1>{freelancer.name}</h1>
              <h2>{freelancer.email}</h2>
              <div className="stars">{stars}</div>
            </div>
            <div className="contact">
              <img src="./images/chat.svg" alt="message" />
            </div>
          </div>
          <div className="education">
            <h2>Education</h2>
            <p>{freelancer.education}</p>
            <span>{freelancer.passingYear}</span>
          </div>
          <div className="experience">
            <h2>Experience</h2>
            <p>{freelancer.experience}</p>
            <span>{freelancer.experienceYear}</span>
          </div>
          <div className="workmode">
            <h2>Work Mode</h2>
            <p>{freelancer.workMode}</p>
          </div>
          <div className="topSkills">
            <h2>Top Skills</h2>
            {freelancer.topSkills.map((skill, index) => (
              <p key={index}>{skill}</p>
            ))}
          </div>
        </div>
        <div className="right">
          <h1>{freelancer.title}</h1>
          <div className="description">
            <p>{freelancer.description}</p>
            {freelancer.skills.map((skill, index) => (
              <p key={index}>✅ {skill}</p>
            ))}
            <p>{freelancer.greetings}</p>
            <p className="bestwishes">BestWishes</p>
            <span>{freelancer.name}</span>
          </div>
        </div>
      </div>
      <div id="work">
        <h2>WORK:</h2>
        <div className="video">
          <h3>VIDEO</h3>
          <div className="workVideo">
            <video src={freelancer.video} autoPlay loop muted></video>
          </div>
        </div>
        <div className="photos">
          <h3>PHOTOS</h3>
          <Carousel
            slidesToShow={4}
            slidesToScroll={2}
            autoPlay={false}
            interval={2000}
          >
            {freelancer.projectPhoto.map((img, index) => (
              <div key={index} className="photo">
                <img src={img} alt={`Slide ${index + 1}` } width="200" height="200" />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div id="reviews">
        <h2>REVIEWS:</h2>
        <Carousel slidesToShow={3} slidesToScroll={2} autoPlay={false} interval={2000}>
          {freelancer.reviewCards.map((card) => (
            <ReviewCard key={card.id} />
          ))}
        </Carousel>
      </div>
      <div id="pastProjects"></div>
      <div id="otherDetails">
        <h2>OTHER DETAILS:</h2>
        <div className="specificOtherDetails">
          <div className="left">
            <div className="from">
              <h3>From:</h3>
              <p>{freelancer.from}</p>
            </div>
            <div className="member">
              <h3>Member since:</h3>
              <p>{freelancer.memberSince}</p>
            </div>
            <div className="verification">
              <h3>Verification:</h3>
              <p>{freelancer.verification}</p>
            </div>
          </div>
          <div className="right">
            <img src="./images/SkillBhartiyenext.jpeg" alt="" />
          </div>
        </div>
      </div>
      <div id="contact">
        <div className="message">
          <p>message</p>
          <h2>{freelancer.name}</h2>
        </div>
        <div className="chat">
          <img src="./images/chat.svg" alt="" />
        </div>
      </div>
      <Slide/>
    </div>
  );
};

FreelancerPortfolio.propTypes = {
  freelancer: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired, // Expecting a number for rating
  }).isRequired,
};

export default FreelancerPortfolio;
