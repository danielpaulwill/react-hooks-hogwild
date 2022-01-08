import React, { useState } from "react";
import Nav from "./Nav";
import Search from "./Search";
import CardList from "./CardList";

import hogs from "../porkers_data";

function App() {
	const [greasedCheck, setGreasedCheck] = useState(false)
	const [nameSort, setNameSort] = useState(false)
	
	const sortedHogs = hogs.filter((hog) => {
		if (greasedCheck === false) {
			return hog
		} else if (greasedCheck === hog.greased) {
			return hog
		}
	})
	const [hogsList, setHogsList] = useState(sortedHogs)

console.log(hogsList)
	function onGreasedChange() {
		setGreasedCheck(() => !greasedCheck)
		setHogsList(hogs.filter((hog) => {
			if (greasedCheck === true) {
				return hog
			} else if (greasedCheck === !hog.greased) {
				return hog
			}
		}))
	}

	function onNameSort() {
		setNameSort(() => !nameSort)
		// setHogsList(sortedHogs.name.sort())
	}

	// const hogListYo = hogs.filter((hog) => (greasedCheck === hog.greased) ? hog)

	return (
		<div className="App">
			<Nav />
			<Search 
				greasedCheck={greasedCheck} 
				handleToggle={onGreasedChange} 
				handleNameSort={onNameSort}
				nameSort={nameSort} />
			<br></br>
			<CardList hogsList={hogsList} greasedCheck={greasedCheck} />
		</div>
	);
}

export default App;
