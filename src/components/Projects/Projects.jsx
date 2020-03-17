import React, { Component } from "react";
import classes from "./Projects.module.scss";
import budgety1 from "../../images/projects/budgety-1.png";

export class Projects extends Component {
	render() {
		return (
			<div className={classes.container}>
				<h1>Projects</h1>
				<div className={classes.project}>
					<img src={budgety1} alt="budgety-1" />
					<div className={classes.desc}>
						<h2>Budgety App</h2>
						<p>This is the budgety app</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
