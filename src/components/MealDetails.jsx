import React from "react";
import "../App.css";

export default function MealDetails({ meal, onClose }) {
  // Collect ingredients dynamically
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>{meal.strMeal}</h2>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <h3>Ingredients:</h3>
        <ul>
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h3>Instructions:</h3>
        <p>{meal.strInstructions}</p>
      </div>
    </div>
  );
}
