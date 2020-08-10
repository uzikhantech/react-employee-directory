import React from "react";

function SearchFilter(props) {
  return (
    <form>
      <div className="form-group">
 
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Filter by Name..."
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchFilter;
