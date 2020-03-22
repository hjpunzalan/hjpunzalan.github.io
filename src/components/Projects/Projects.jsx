import React, { Component } from "react";
import classes from "./Projects.module.scss";
import budgetymp4 from "../../images/projects/budgety.mp4";
import budgetypng from "../../images/projects/budgety.png";
import toastmastermp4 from "../../images/projects/toastmaster.mp4";
import toastmasterpng from "../../images/projects/toastmaster.png";

export class Projects extends Component {
	constructor() {
		super();

		this.state = {
			budgetyPausedByUser: false,
			budgetyBG: false
		};
		this.section = React.createRef();
		this.budgetyVideo = React.createRef();
		this.toastmastersVideo = React.createRef();
	}

	componentDidMount() {
		window.addEventListener("scroll", () => {
			// Define the top of the video and set top offset
			const top =
				this.budgetyVideo.current.offsetTop +
				this.section.current.offsetTop -
				window.innerHeight;
			// NEED TO CHANGE BOTTOM TO THE PROJECT's bottom
			const bottom =
				this.toastmastersVideo.current.offsetTop +
				this.section.current.offsetTop -
				window.innerHeight;
			// Will need to be greater than because it skips pixels
			if (window.pageYOffset >= top && window.pageYOffset <= bottom) {
				if (!this.state.budgetyPausedByUser) this.budgetyVideo.current.play();
				this.setState({ budgetyBG: true });
			} else {
				this.budgetyVideo.current.pause();
				this.setState({ budgetyBG: false });
			}
		});
	}

	render() {
		return (
			<div className={classes.container} ref={this.section}>
				<div className={this.state.budgetyBG ? classes.budgetyBG : null} />
				<h1 ref={this.projectsTitle}>Projects</h1>

				{/*/////////////////// BUDGETY////////////////// */}
				<div className={classes.project}>
					<h2>Budgety App</h2>
					<p>
						A budgeting app inspired by my role as treasurer of a local public
						speaking club. The idea was based from the process how budget was
						handled and communicated within the club. On top of applying new
						skills including Typescript and D3.js, this application has also
						broadened my experience and skills of using MongoDB's querying and
						aggregation pipeline.
					</p>
					<video
						ref={this.budgetyVideo}
						controls={true}
						preload="true"
						loop
						muted
						onClick={() => this.setState({ budgetyPausedByUser: true })}>
						<source src={budgetymp4} type="video/mp4" />
						<source src={budgetypng} type="image/png" />
					</video>
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
				{/* ////////////////////////Toastmaster ///////////////////////// */}
				<div className={classes.project}>
					<h2>Toastmasters discussion board</h2>
					<p>
						A budgeting app inspired by my role as treasurer of a local public
						speaking club. The idea was based from the process how budget was
						handled and communicated within the club. On top of applying new
						skills including Typescript and D3.js, this application has also
						broadened my experience and skills of using MongoDB's querying and
						aggregation pipeline.
					</p>
					<video
						ref={this.toastmastersVideo}
						controls={true}
						preload="true"
						loop
						muted
						onClick={() => this.setState({ budgetyPausedByUser: true })}>
						<source src={toastmastermp4} type="video/mp4" />
						<source src={toastmasterpng} type="image/png" />
					</video>
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
		);
	}
}

export default Projects;
