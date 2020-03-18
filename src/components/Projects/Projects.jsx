import React, { Component } from "react";
import classes from "./Projects.module.scss";
import budgetymp4 from "../../images/projects/budgety.mp4";
import budgetypng from "../../images/projects/budgety.png";

export class Projects extends Component {
	render() {
		return (
			<div className={classes.container}>
				<h1>Projects</h1>
				<div className={classes.project}>
					<video controls={true} preload="true" autoPlay loop muted>
						<source src={budgetymp4} type="video/mp4" />
						<source src={budgetypng} type="image/png" />
					</video>
					<div className={classes.desc}>
						<h2>Budgety App</h2>
						<p>
							A budgeting app inspired by my role as treasurer of a local public
							speaking club. The idea was based from the process how budget was
							handled and communicated within the club. On top of applying new
							skills including Typescript and D3.js, this application has also
							broadened my experience and skills of using MongoDB's querying and
							aggregation pipeline.
						</p>
						<h3>Features:</h3>
						<ul>
							<li>User Authentication with JWT and Sendgrid</li>
							<li>Complete Responsive design</li>
							<li>Creating and editing budgets with custom categories</li>
							<li>Adding and editing transactions</li>
							<li>
								Transactions listed in tabulated format based on date with
								accumulating balance
							</li>
							<li>
								Interactive graphs using D3.js for analysis of annual or monthly
								data
							</li>
						</ul>
						<h3>
							Tech:
							<span className={classes.tech}>
								Typescript, React, MongoDB, Express, D3.js
							</span>
						</h3>
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
