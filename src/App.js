import React from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

function App() {
	return (
		<div className="App">
			<header>
				<Hero />
				<About />
				<Projects />
			</header>
		</div>
	);
}

export default App;
