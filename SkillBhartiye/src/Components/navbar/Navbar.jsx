import React, { useState } from "react";
import { Link } from "react-router-dom"; // React Router for navigation
import "./Navbar.scss"

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar-logo link">
        SkillBhartiya
      </Link>

      {/* Navigation Links */}
      <div className="navbar-links">
        <Link to="/freelancers" className="navbar-item link">
          FREELANCERS
          <hr />
        </Link>
        <Link to="/projects" className="navbar-item link">
          PROJECTS
          <hr />
        </Link>
        <Link to="/others" className="navbar-item link">
          OTHERS
          <hr />
        </Link>
      </div>

      {/* Search Bar */}
      <div className="navbar-search">
        <input
          type="text"
          placeholder="search here"
          className="search-input"
        />
        <button className="search-button"><img src="./public/images/search.png" alt="" /></button>
      </div>

      {/* Right Section */}
      <div className="navbar-buttons">
        {!isAuthenticated ? (
          <>
            <button
              className="button signin-button"
              onClick={() => console.log("Sign In clicked")}
            >
              Sign In
            </button>
            <button
              className="button register-button"
              onClick={() => console.log("Register clicked")}
            >
              Register <span className="arrow"><b>&gt;&gt;</b></span>
            </button>
          </>
        ) : (
          <>
            <Link to="/cart" className="navbar-icon link">
              <img src="./public/images/chat.svg" alt="" />
            </Link>
            <Link to="/messages" className="navbar-icon link link">
              <img src="./public/images/cart.svg" alt="" />
            </Link>
            <Link to="/profile" className="button profile-button link">
              Profile <span className="arrow"><b>&gt;&gt;</b></span>
            </Link>
            <button
              className="button logout-button"
              onClick={() => {
                setIsAuthenticated(false);
                console.log("Logged Out");
              }}
            >
              Logout 
              <img src="./public/images/logout.svg" alt="" />
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
