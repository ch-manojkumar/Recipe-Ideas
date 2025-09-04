import React from "react";
import "../App.css";

export default function MealCard({ meal, onSelectMeal }) {
  return (
    <div className="meal-card">
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h3>{meal.strMeal}</h3>
      <button onClick={() => onSelectMeal(meal.idMeal)}>View Recipe</button>
    </div>
  );
}
