import React from "react";

function Search({ onGreasedChange }) {
  return (
    <div>
      <h2>Search Connected</h2>

      <label htmlFor="greased">Sort by Greased: </label>
      <select name="greased" id="greased" onChange={onGreasedChange} >
        <option value="Both">Both</option>
        <option value="true">Greased</option>
        <option value="false">Not Greased</option>
      </select>
    </div>
  )
}

export default Search;