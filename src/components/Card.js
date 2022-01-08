import React, { useState } from "react";

function Card({ hog }) {
  const [isHidden, setIsHidden] = useState(true)
  
  function handleOnClick() {
    setIsHidden(!isHidden)
  }
  
  const stringKey = "highest medal achieved";
  const something = hog[stringKey];
  
  return (
    <div className="ui eight wide column" onClick={handleOnClick}>
      <img src={hog.image} alt={hog.name}></img>
      {/* <iframe
    width="600"
    height="600"
    src={hog.image}
    frameBorder="0"
    title={hog.name}
    /> */}
    <h4>{hog.name}</h4>
    <p hidden={isHidden}>Specialty: {hog.specialty}</p>
    <p hidden={isHidden}>Weight: {hog.weight}</p>
    <p hidden={isHidden}>{hog.greased}</p>
    <p hidden={isHidden}>Highest Medal Achieved: {something}</p>
    </div>
  )
}

export default Card;