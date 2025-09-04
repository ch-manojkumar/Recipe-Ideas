import React, { useState } from "react";

import "../App.css";

export default function Filters({ meals, setMeals }) {
  const [cookingTime, setCookingTime] = useState("all");
  const [diet, setDiet] = useState("all");

  // Filter recipes based on time & preferences
  const applyFilters = () => {
    let filtered = [...meals];

    // Filter by cooking time
    if (cookingTime !== "all") {
      filtered = filtered.filter((meal) => {
        const name = meal.strMeal.toLowerCase();
        if (cookingTime === "fast") return name.includes("salad") || name.includes("egg");
        if (cookingTime === "medium") return !name.includes("roast");
        if (cookingTime === "long") return name.includes("roast") || name.includes("biryani");
        return true;
      });
    }

    // Filter by diet preference
    if (diet === "vegetarian") {
      filtered = filtered.filter((meal) => meal.strMeal.toLowerCase().includes("veg"));
    } else if (diet === "vegan") {
      filtered = filtered.filter((meal) => meal.strMeal.toLowerCase().includes("vegan"));
    }

    setMeals(filtered);
  };

  return (
    <div className="filters-wrapper">
      <div className="filters-container">
        <select
          value={cookingTime}
          onChange={(e) => setCookingTime(e.target.value)}
        >
          <option value="all">All Cooking Times</option>
          <option value="fast">Quick (&lt;30 mins)</option>
          <option value="medium">Medium (30-60 mins)</option>
          <option value="long">Slow Cook (&gt;60 mins)</option>
        </select>

        <select value={diet} onChange={(e) => setDiet(e.target.value)}>
          <option value="all">All Diets</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
        </select>

        <button onClick={applyFilters}>Apply Filters</button>
      </div>
    </div>
  );
}
