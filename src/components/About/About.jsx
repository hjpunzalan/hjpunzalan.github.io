import React from "react";
import classes from "./About.module.scss";
import img from "../../images/myself.jpg";

const About = () => {
	return (
		<div className={classes.container}>
			<img className={classes.photo} src={img} alt="myself" />
			<div className={classes.about}>
				<h2>
					Jonathan Punzalan is a full-stack developer. One who is continuously
					driven by passion to build problem-solving applications.
				</h2>
				<p>I am a self-taught developer.</p>
			</div>
		</div>
	);
};

export default About;
