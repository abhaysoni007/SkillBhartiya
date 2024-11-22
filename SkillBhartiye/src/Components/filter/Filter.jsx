import React, { useState } from "react";
import "./Filter.scss";

const Filter = () => {
  const [budget, setBudget] = useState({ min: "", max: "" });
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [mode, setMode] = useState("online");

  const categories = {
    Writing_and_Content: [
      "Blog Writing",
      "Copywriting",
      "Technical Writing",
      "Proofreading",
      "Scriptwriting",
      "Content Strategy",
    ],
    Design_Media_and_Architecture: [
      "Graphic Design",
      "Interior Design",
      "3D Modeling",
      "Animation",
      "Photography",
      "Video Production",
    ],
    Data_Entry: [
      "Excel Data Entry",
      "Database Management",
      "Online Form Filling",
      "Transcription",
      "Data Cleaning",
      "Web Research",
    ],
    Sales_and_Marketing: [
      "Digital Marketing",
      "SEO",
      "Social Media Management",
      "Market Research",
      "Email Marketing",
      "Lead Generation",
    ],
    Business_and_Accounting: [
      "Accounting",
      "Financial Analysis",
      "Bookkeeping",
      "Tax Consultancy",
      "Payroll Management",
      "Business Plan Writing",
    ],
    HR_and_Legal_Services: [
      "Recruitment",
      "HR Consulting",
      "Employment Contracts",
      "Legal Research",
      "Corporate Law",
      "Policy Writing",
    ],
    Product_Service_and_Manufacturing: [
      "Product Design",
      "Prototype Development",
      "Quality Assurance",
      "Product Testing",
      "Supply Chain Management",
      "Manufacturing Planning",
    ],
    Mobile_and_Computing: [
      "App Development",
      "Web Development",
      "Software Testing",
      "Cybersecurity",
      "IT Support",
      "Cloud Computing",
    ],
    Trades_and_Services: [
      "Plumbing",
      "Electrical Services",
      "Carpentry",
      "Housekeeping",
      "Landscaping",
      "Painting",
    ],
    Shipping_and_Transportation: [
      "Logistics Planning",
      "Freight Forwarding",
      "Courier Services",
      "Fleet Management",
      "Customs Clearance",
      "Warehouse Management",
    ],
    Education: [
      "Tutoring",
      "Curriculum Development",
      "Online Courses",
      "Educational Consulting",
      "Test Preparation",
      "Language Training",
    ],
    Artificial_Intelligence: [
      "AI Model Development",
      "Chatbot Development",
      "Computer Vision",
      "AI Automation",
      "Predictive Analytics",
      "AI Consultation",
    ],
    Machine_Learning: [
      "ML Algorithm Design",
      "Model Training",
      "Data Preprocessing",
      "Model Evaluation",
      "Deep Learning",
      "Reinforcement Learning",
    ],
    Graphics: [
      "Logo Design",
      "Illustration",
      "3D Graphics",
      "Icon Design",
      "Infographic Design",
      "Branding",
    ],
    Video_Editing: [
      "Post Production",
      "Video Animation",
      "Motion Graphics",
      "Subtitling",
      "Color Grading",
      "VFX",
    ],
    Audio_Editing: [
      "Podcast Editing",
      "Audio Mixing",
      "Sound Effects",
      "Noise Removal",
      "Voiceover Editing",
      "Music Production",
    ],
    eLearning_Development: [
      "LMS Development",
      "Interactive Courses",
      "SCORM Compliance",
      "Quizzes and Assessments",
      "Content Authoring",
      "Gamified Learning",
    ],
    Business_Card_Design: [
      "Corporate Cards",
      "Minimalist Design",
      "Creative Cards",
      "Logo Integration",
      "Custom Shapes",
      "Premium Material",
    ],
    UI_UX_Design: [
      "Wireframing",
      "Prototyping",
      "User Research",
      "Interaction Design",
      "Mobile App Design",
      "Web Interface Design",
    ],
    ML_Research_and_Experimentation: [
      "Dataset Creation",
      "Model Optimization",
      "Hyperparameter Tuning",
      "Experimental Design",
      "Research Papers",
      "ML Framework Testing",
    ],
    Natural_Language_Processing_NLP: [
      "Text Classification",
      "Sentiment Analysis",
      "Chatbot Design",
      "Speech Recognition",
      "Language Translation",
      "Named Entity Recognition",
    ],
  };

  const handleApplyFilters = () => {
    const filters = {
      budget,
      category,
      subCategory,
      mode,
    };
    console.log("Applied Filters:", filters);
    // You can add your filtering logic here!
  };
  return (
    <div className="filter">
      <div className="container">
        <div className="main-icon">
          <img src="./public/images/SkillBhartiye.jpeg" alt="" />
        </div>
        <div className="filter">
          <h3>Enter Budget:</h3>
          <div className="budget-filter">
            <input
              type="number"
              placeholder="From"
              value={budget.min}
              onChange={(e) => setBudget({ ...budget, min: e.target.value })}
            />
            <input
              type="number"
              placeholder="To"
              value={budget.max}
              onChange={(e) => setBudget({ ...budget, max: e.target.value })}
            />
          </div>
          <div className="category-filter">
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setSubCategory(""); // Reset subcategory when category changes
              }}
            >
              <option value="" disabled>
                Category
              </option>
              {Object.keys(categories).map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <select
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              disabled={!category}
            >
              <option value="" disabled>
                Subcategory
              </option>
              {category &&
                categories[category].map((subCat) => (
                  <option key={subCat} value={subCat}>
                    {subCat}
                  </option>
                ))}
            </select>
          </div>
          <div className="mode-filter">
            <div className="mode">
              <h3>Mode:</h3>
              <div className="input">
                <label>
                  <input
                    type="radio"
                    name="mode"
                    value="online"
                    checked={mode === "online"}
                    onChange={(e) => setMode(e.target.value)}
                  />
                  Online
                </label>
                <label>
                  <input
                    type="radio"
                    name="mode"
                    value="offline"
                    checked={mode === "offline"}
                    onChange={(e) => setMode(e.target.value)}
                  />
                  Offline
                </label>
              </div>
            </div>
            <button className="apply-btn" onClick={handleApplyFilters}>
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
