import React, { useState } from "react";
import Nav from "./Nav";
import Search from "./Search";
import CardList from "./CardList";

import hogs from "../porkers_data";

function App() {
	const [hogsList, setHogsList] = useState(hogs)
	const [isGreasedSearch, setIsGreasedSearch] = useState('Both')
	
	function handleOnGreasedChange(e) {
		setIsGreasedSearch(e.target.value)
	}

	return (
		<div className="App">
			<Nav />
			<Search onGreasedChange={handleOnGreasedChange} />
			<br></br>
			<CardList hogs={hogsList} greasedFilter={isGreasedSearch} />
		</div>
	);
}

export default App;
