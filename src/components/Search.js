import React from "react";

function Search({ greasedCheck, handleToggle, handleNameSort, nameSort }) {
  return (
    <div>
      <label>Greased? </label>
      <input
            type="checkbox"
            onChange={handleToggle}
            checked={greasedCheck}
          />
      <br></br>
      <label>Sort by Name? </label>
      <input
            type="checkbox"
            onChange={handleNameSort}
            checked={nameSort}
          />
    </div>
  )
}

export default Search;