import React from "react";

const SearchBar = ({ placeholder, handleChange }) => {
  return (
    <div
      className="searchBar"
      style={{ padding: "10px", margin: "10px", backgroundColor: "white" }}
      class="input-field"
    >
      <input
        id="search"
        type="search"
        required
        className="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
