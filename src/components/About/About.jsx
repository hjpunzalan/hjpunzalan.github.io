import React from "react";
import classes from "./About.module.scss";
import img from "../../images/myself.jpg";

const About = () => {
	return (
		<div className={classes.container}>
			<img className={classes.photo} src={img} alt="myself" />
			<div className={classes.about}>
				<h2>My story</h2>
				<p>
					I felt like I was stuck in a place I needed to be freed from. Stuck
					doing the same things and wasting my potential. I needed a change. A
					career that will drive me to keep learning, to keep improving and to
					become an asset I can be proud of. Having being stuck, doing the same
					things everyday, with no sense of a future or learning, I knew I
					needed a change.
				</p>
				<p>
					I did some self-reflections and asked professionals. I couldn’t really
					find an answer. Until I looked back to whom I was before, perhaps
					always. I found my passion.{" "}
					<a href="https://92321.activeboard.com/">
						From as young as 10, I was really into web development and
						programming. I found websites and forums I started.
					</a>{" "}
					More than that, I remembered why I liked it, why I would wake up early
					in the morning to spend some time in the family computer and code. I
					started coding after seeing someone’s profile in a social networking
					site (Friendster) having a different layout and design than everyone
					else. It was completely abstract. I was amazed and I wanted to do the
					same thing too. I got involved in the community and became a
					moderator.
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
