import React, { useState } from "react";
import "./Filter.scss";

const Filter = () => {
  const [budget, setBudget] = useState({ min: "", max: "" });
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [mode, setMode] = useState("online");

  const categories = {
    Electronics: ["Mobile", "Laptop", "TV"],
    Furniture: ["Table", "Chair", "Sofa"],
    Clothing: ["Men", "Women", "Kids"],
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
