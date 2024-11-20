import React, { useState } from "react";
import "./Filter2.scss";

const Filter = () => {
  const [budget, setBudget] = useState({ min: "", max: "" });
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [mode, setMode] = useState("online");

  // Example category and subcategory data
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
    <div className="filter-container">
      <div className="filter-icon">
        <span>
          <img src="./public/images/SkillBhartiye.jpeg" alt="" />
        </span>
      </div>
      <div className="filters">
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
          <button onClick={() => setCategory("")}>Category</button>
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setSubCategory(""); // Reset subcategory when category changes
            }}
          >
            <option value="" disabled>
              Select Category
            </option>
            {Object.keys(categories).map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <button>Subcategory</button>
          <select
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            disabled={!category}
          >
            <option value="" disabled>
              Select Subcategory
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
          <h3>Mode:</h3>
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

        <button className="apply-btn" onClick={handleApplyFilters}>
          Apply
        </button>
      </div>
    </div>
  );
};

export default Filter;
