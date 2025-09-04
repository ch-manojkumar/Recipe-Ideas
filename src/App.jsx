import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import MealList from "./components/MealList";
import MealDetails from "./components/MealDetails";
import logo from "./assets/logo.png";
import "./App.css";

export default function App() {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  // Fetch meals by food name & ingredient
  const fetchMeals = async (query, searchType = "name") => {
    try {
      let url = "";

      if (searchType === "name") {
        url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
      } else if (searchType === "ingredient") {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`;
      }

      const res = await axios.get(url);

      if (res.data.meals) {
        setMeals(res.data.meals);
      } else {
        setMeals([]);
        alert("No recipes found! Try something else.");
      }
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  };

  // Fetch detailed recipe
  const fetchMealDetails = async (idMeal) => {
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      setSelectedMeal(res.data.meals[0]);
    } catch (error) {
      console.error("Error fetching meal details:", error);
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">
        <img src={logo} alt="Recipe" className="title-logo" />
        Smart Recipes
      </h1>
      <p>to Cook Quickly & Shortly...!</p>

      {/* Search & Filter Section */}
      <SearchBar onSearch={fetchMeals} />
      <Filters meals={meals} setMeals={setMeals} />

      {/* Meals List */}
      {meals.length > 0 && <h2 className="smart-recipes-title">See Recipes for your search</h2>}
      <MealList meals={meals} onSelectMeal={fetchMealDetails} />

      {/* Recipe Details */}
      {selectedMeal && (
        <MealDetails meal={selectedMeal} onClose={() => setSelectedMeal(null)} />
      )}
    </div>
  );
}
