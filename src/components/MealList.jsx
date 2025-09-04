import React from "react";
import MealCard from "./MealCard";
import "../App.css";

export default function MealList({ meals, onSelectMeal }) {
  if (!meals || meals.length === 0) {
    return <h3 className="no-results">No recipes found. Try another ingredient!</h3>;
  }

  return (
    <div className="meal-list">
      {meals.map((meal) => (
        <MealCard key={meal.idMeal} meal={meal} onSelectMeal={onSelectMeal} />
      ))}
    </div>
  );
}
