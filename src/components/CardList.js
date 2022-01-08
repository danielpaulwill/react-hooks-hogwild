import React from "react";
import Card from "./Card";

function CardList({ hogs, greasedFilter }) {

  const hogsList = hogs.map((hog) => (
  <Card key={hog.name} hog={hog} />))
  
  // const hogsListFiltered = hogs.filter((hog) => {
  //     if (greasedFilter === 'Both') {
  //       return <Card key={hog.name} hog={hog} />
  //     } else if (hog.greased === greasedFilter) {
  //       return <Card key={hog.name} hog={hog} />
  //     }})

  // function hogFilter(hog) {
  //   return greasedFilter === 'Both' ? <div><Card key={hog.name} hog={hog} /></div>
  //         : hog.greased === greasedFilter ? <div><Card key={hog.name} hog={hog} /></div>
  //         : null;
  //   }

  //   const hogsListFiltered = hogs.filter((hog) => hogFilter(hog))

  const hogsListFiltered = hogs.filter((hog) => (greasedFilter === 'Both') ? (<Card key={hog.name} hog={hog} />) : (hog.greased === greasedFilter) ? (<Card key={hog.name} hog={hog} />) : null)

  console.log("hogsList: ", hogsList)
  console.log("hogsListFiltered: ", hogsListFiltered)

  return (
    <div className="ui grid container">
      {hogsList}
    </div>
  )
}

export default CardList;