import React, { useState } from "react";
import "../App.css";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState("name");

  const handleSearch = () => {
    if (!query.trim()) {
      alert("Please enter something!");
      return;
    }
    onSearch(query, searchType);
  };

  return (
    <div className="search-wrapper">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search recipes by name or ingredient..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
          <option value="name"> Food Name</option>
          <option value="ingredient">Ingredients</option>
        </select>

        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}
