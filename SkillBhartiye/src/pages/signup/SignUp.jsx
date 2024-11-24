import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.scss";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signed up with:", formData);
    navigate("/login"); // Navigate to login after signup
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <button className="close-btn" onClick={() => navigate("/login")}>
          ✕
        </button>
        <h2>Sign up</h2>
        <p>
          Already have an account?{" "}
          <span className="link" onClick={() => navigate("/login")}>
            Log in
          </span>
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          
          
          <button type="submit">Create an account</button>
        </form>
        <p>
          By creating an account, you agree to the{" "}
          <span className="link">Terms of Use</span> and{" "}
          <span className="link">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default Signup;
