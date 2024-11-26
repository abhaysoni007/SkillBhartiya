import React, { useEffect, useState } from "react";
import "./JobDescription.scss";
import Carousel from "../../Components/corousel/Carousel";
import BidComponent from "../../Components/bidComponent/BidComponent";
import ProposalCard from "../../Components/proposalCard/ProposalCard";

const JobDescription = (jobdesc) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("div[id]");
      const scrollPos = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Trigger scroll check on mount to set initial active state
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="jobDescription">
      <div className="jobNavbar">
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
              href="#proposal"
              className={`link ${activeSection === "proposal" ? "active" : ""}`}
            >
              PROPOSALS
            </a>
          </li>
          <li>
            <a
              href="#bid"
              className={`link ${activeSection === "bid" ? "active" : ""}`}
            >
              BID NOW
            </a>
          </li>
        </ul>
      </div>
      <div id="about">
        <div className="left">
          <div className="basicinfo">
            <div className="companyname">
              <h1>{jobdesc.companyName}</h1>
              <h3>{jobdesc.companyEmail}</h3>
            </div>
            <div className="skillsRequired">
              <h3>Skills required:</h3>
              {jobdesc.skillsRequired.map((skill, index) => (
                <p key={index}>{skill}</p>
              ))}
            </div>
            <div className="workmode">
              <h3>Work Mode:</h3>
              <p>{jobdesc.workMode}</p>
            </div>
            <div className="timelimit">
              <h3>Time Limit:</h3>
              <p>{jobdesc.timeLimit}</p>
            </div>
          </div>
          <div className="bidoption">
            <h2>{jobdesc.price}</h2>
            <a href="#bid" className="link"><button>BID NOW</button></a>
          </div>
        </div>
        <div className="right">
          <h2>{jobdesc.jobTitle}</h2>
          <div className="description">
            {jobdesc.description.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </div>
      </div>
      <div id="proposal">
        <h2>PROPOSAL:</h2>
        <div className="proposalCards">
          <Carousel
            slidesToShow={3}
            slidesToScroll={2}
            autoPlay={false}
            interval={2000}
          >
            {jobdesc.proposals.map((proposal, index) => (
              <ProposalCard key={index} proposal={proposal} />
            ))}
          </Carousel>
        </div>
      </div>
      <div id="bid">
        <BidComponent />
      </div>
    </div>
  );
};

export default JobDescription;
