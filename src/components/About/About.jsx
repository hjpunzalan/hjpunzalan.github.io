import React from "react";
import classes from "./About.module.scss";
import img from "../../images/myself.jpg";

const About = () => {
	return (
		<div className={classes.container}>
			<img className={classes.photo} src={img} alt="myself" />
			<div className={classes.about}>
				<h2>I love programming and I love sharing it to others.</h2>
				<p>
					My name is Jonathan and I am a self-taught developer. I have been
					learning to code since beginning of 2019. Since then, I would spend
					everyday learning and building web applications. I had always an
					interest in programming, building games, private servers and websites
					but not until last year, I took this passion seriously.
				</p>
				<p>
					From as young as 10, I was already excited about web development. I
					started coding after seeing someone’s profile in a social networking
					site (Friendster) having a different layout and design than everyone
					else. It was completely abstract. I was amazed and I wanted to do the
					same thing too. I began learning through a bunch of view sourcing of
					web pages and searching answers through the web. Eventually, I got
					involved in the community and became a help moderator for multiple
					friendster forums. Unfortunately, searching my work, I could only find
					some websites and{" "}
					<a href="https://92321.activeboard.com/">forums I built.</a> More than
					that, I remembered why I liked it, why I would wake up early in the
					morning to spend some time in the family computer and code.
				</p>
				<p>
					Having moved here to Australia, I lost my passion. Maybe because we
					didn’t have internet for very long, or maybe there was too much change
					around me, I got distracted. I was lead to the traditional way of
					studying maths and science to get that standard engineering degree,
					which I did. You might be asking, don’t you want to become an
					engineer? No. Not anymore. Programming is completely different. I
					haven’t found anything that keeps me up at night and wakes me up
					early, just to code. This is my passion and I love talking to people
					about it. It’s that simple.
				</p>
			</div>
		</div>
	);
};

export default About;
