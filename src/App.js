import React from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

function App() {
	return (
		<div className="App">
			<header>
				<Hero />
				<About />
			</header>
		</div>
	);
}

export default App;
