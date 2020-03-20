import React from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import classes from "./App.module.scss";

function App() {
	return (
		<div className={classes.App}>
			<header>
				<Hero />
				<About />
				<Projects />
			</header>
		</div>
	);
}

export default App;
