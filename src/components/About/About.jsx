import React from "react";
import classes from "./About.module.scss";
import img from "../../images/myself.jpg";

// Logos
import jsLogo from "../../images/logo/js.svg";
import typescriptLogo from "../../images/logo/typescript.svg";
import sassLogo from "../../images/logo/sass.svg";
import reactLogo from "../../images/logo/react.svg";
import nodejsLogo from "../../images/logo/nodejs.svg";
import mongodbLogo from "../../images/logo/mongodb.svg";
import expressLogo from "../../images/logo/express.svg";
import jestLogo from "../../images/logo/jest.svg";
import d3Logo from "../../images/logo/d3.svg";

const About = () => {
	return (
		<div className={classes.container}>
			<img className={classes.photo} src={img} alt="myself" />
			<div className={classes.about}>
				<h2>Becoming a self-taught developer</h2>
				<p>
					My name is Jonathan and I am a self-taught developer. I have been
					learning to code since beginning of 2019. Since then, I would spend
					every day learning and building web applications. I had always an
					interest in programming, and creating websites but not until last
					year, after realising that I had this passion within, I took it more
					seriously.
				</p>
				<p>
					From a very young age, I was already excited about web development. I
					started to code after I saw a profile on a social networking site
					(Friendster) that was completely different from everyone else. It was
					abstract, an overlay of code that replaces the default body. I was
					amazed and I wanted habe the same thing too. I began learning through
					view sourcing of web pages and searching answers through the web. I
					got involved in the community, made websites and my own{" "}
					<a href="https://92321.activeboard.com/">forum</a> (it's amazing to
					see one still running) .
				</p>
				<p>
					Having moved here to Australia, I lost my passion. Maybe because we
					didn’t have internet for very long, or maybe there was too much change
					around me, I got distracted. I was lead to the traditional way of
					studying maths and science to get an engineering degree. However,
					programming is completely different. I haven’t found anything that
					keeps me up at night and wakes me up early. Excited to learn and try
					something new. It’s that simple.
				</p>
				<div className={classes.skills}>
					<img src={jsLogo} alt="js logo" />
					<img src={typescriptLogo} alt="typescript logo" />
					<img src={sassLogo} alt="sass logo" />
					<img src={reactLogo} alt="react logo" />
					<img src={nodejsLogo} alt="nodejs logo" />
					<img src={mongodbLogo} alt="mongodb logo" />
					<img src={expressLogo} alt="express logo" />
					<img src={jestLogo} alt="jest logo" />
					<img src={d3Logo} alt="d3 logo" />
				</div>
			</div>
		</div>
	);
};

export default About;
