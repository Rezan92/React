import React from "react";

const SearchForm = ({ cityName, handleSubmit, setCityName }) => {
  return (
    <div className="form-control">
      <input
        className="city-input"
        type="text"
        placeholder="Search City"
        onChange={(e) => setCityName(e.target.value)}
      />
      <button
        className="submit-btn"
        onClick={handleSubmit}
        disabled={cityName.trim() === "" ? true : false}
        style={{ cursor: cityName.trim() === ""? "not-allowed": "pointer"}}
      >
        Search
      </button>
    </div>
  );
};

export default SearchForm;
