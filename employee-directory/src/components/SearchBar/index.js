import React from "react";

function SearchBar({handleFormSubmit, search, handleInputChange}) {
  return (
    <form>
      <div className="form-group">
        
        <input 
          onChange={handleInputChange}
          value={search}
          name="search"
          type="text"
          className="form-control" 
          placeholder="Last Name"
          id="search"
        />
        <button onClick={handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;