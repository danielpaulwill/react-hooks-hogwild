import React from "react";
import Card from "./Card";

function CardList({ hogsList, greasedCheck }) {


  const hogCards = hogsList.map((hog) => (
  <Card key={hog.name} hog={hog} />))

  
  return (
    <div className="ui grid container">
      {hogCards}
    </div>
  )
}

export default CardList;