import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false); // To manage button state
  const navigate = useNavigate(); // For routing

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit handler (backend-ready)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Placeholder for backend integration
    setTimeout(() => {
      console.log("Logged in with:", formData);
      setLoading(false);
      navigate("/homepage"); // Navigate to homepage on success
    }, 1500);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo-wrapper">
          <div>
            <img className="image-resize" src="./images/SkillBhartiyenext.jpeg "/>
          </div>
        </div>
        <h2>Log in or sign in</h2>
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
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Continue"}
          </button>
        </form>
        <div className="separator">OR</div>
        <button className="google-login">
          <img src="./images/Register.png" alt="Register" />
          Register
        </button>
        <button className="phone-login">
          <i className="phone-icon">📱</i>
          Continue with phone
        </button>
      </div>
    </div>
  );
};

export default Login;
