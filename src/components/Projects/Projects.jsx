import React, { Component } from "react";
import classes from "./Projects.module.scss";
import budgetymp4 from "../../images/projects/budgety.mp4";
import budgetypng from "../../images/projects/budgety.png";
import toastmastermp4 from "../../images/projects/toastmaster.mp4";
import toastmasterpng from "../../images/projects/toastmaster.png";
import pmonitormp4 from "../../images/projects/pmonitor.mp4";
import pmonitorpng from "../../images/projects/pmonitor.png";

// Logos
import jsLogo from "../../images/logo/js.svg";
import typescriptLogo from "../../images/logo/typescript.svg";
import sassLogo from "../../images/logo/sass.svg";
import reactLogo from "../../images/logo/react.svg";
import reduxLogo from "../../images/logo/redux.svg";
import mongodbLogo from "../../images/logo/mongodb.svg";
import expressLogo from "../../images/logo/express.svg";
import d3Logo from "../../images/logo/d3.svg";
import draftJSLogo from "../../images/logo/draftjs.png";
import s3Logo from "../../images/logo/s3.svg";

// Github and webii
import webLogo from "../../images/logo/web.svg";
import repo from "../../images/logo/repo.svg";

export class Projects extends Component {
	constructor() {
		super();

		this.state = {
			animateTitle: false,
			budgetyPausedByUser: false,
			toastmasterPausedByUser: false,
			pmonitorPausedByUser: false,
			background: null,
		};
		this.section = React.createRef();
		this.title = React.createRef();
		this.budgetyVideo = React.createRef();
		this.toastmastersVideo = React.createRef();
		this.pmonitorVideo = React.createRef();
	}

	componentDidMount() {
		window.addEventListener("scroll", () => {
			// Define the top of the video and set top offset
			// Need to add section offset because container has relative positioning, thus offsetTop must be added to it to get the actual offset
			// Window inner height is needed so instead of scrolling till top window reaches top of video, bottom window instead is sought for.

			//Animate title on scroll
			const titleTop =
				this.title.current.offsetTop +
				this.section.current.offsetTop -
				window.innerHeight;
			if (
				window.pageYOffset >= titleTop &&
				window.pageYOffset <=
					titleTop + window.innerHeight + this.title.current.clientHeight
			) {
				this.setState({ animateTitle: true });
			} else this.setState({ animateTitle: false });

			const budgetyTop =
				this.budgetyVideo.current.offsetTop +
				this.section.current.offsetTop -
				window.innerHeight;
			// Budgety bottom / toastmaster top
			const toastmasterTop =
				this.toastmastersVideo.current.offsetTop +
				this.section.current.offsetTop -
				window.innerHeight;

			//  Toastmaster bottom / performance montior top
			const pmonitorTop =
				this.pmonitorVideo.current.offsetTop +
				this.section.current.offsetTop -
				window.innerHeight;
			// Will need to be greater than because it skips pixels
			if (
				window.pageYOffset >= budgetyTop &&
				window.pageYOffset < toastmasterTop
			) {
				// If top of window is within budgety video's top
				if (!this.state.budgetyPausedByUser) this.budgetyVideo.current.play();
				this.setState({
					background: `${classes.budgetyBG}`,
				});
			} else if (window.pageYOffset < budgetyTop) {
				// If beyond any project (rest to the top)
				this.setState({
					background: null,
				});
			} else {
				// If top of window  is within toastmaster video's top
				this.budgetyVideo.current.pause();
				if (
					window.pageYOffset >= toastmasterTop &&
					window.pageYOffset < pmonitorTop
				) {
					this.setState({
						background: `${classes.toastmasterBG}`,
					});
					if (!this.state.toastmasterPausedByUser)
						this.toastmastersVideo.current.play();
				} else {
					this.toastmastersVideo.current.pause();
					// When the window is scrolled and pmonitor video can no longer be seen is the bottom
					const pmonitorBtm =
						this.pmonitorVideo.current.clientHeight +
						this.pmonitorVideo.current.offsetTop +
						window.innerHeight;
					this.setState({
						background: `${classes.pmonitorBG}`,
					});
					if (window.pageYOffset <= pmonitorBtm) {
						if (!this.state.pmonitorPausedByUser)
							this.pmonitorVideo.current.play();
					} else {
						this.pmonitorVideo.current.pause();
					}
				}
			}
		});
	}

	render() {
		return (
			<div className={classes.container} ref={this.section}>
				<div className={this.state.background} />
				<h1
					ref={this.title}
					className={this.state.animateTitle ? classes.animateTitle : null}>
					Projects
				</h1>

				{/*/////////////////// BUDGETY////////////////// */}
				<div className={classes.project}>
					<div className={classes.techLogos}>
						<img src={typescriptLogo} alt="typescript" />
						<img src={reactLogo} alt="react" />
						<img src={reduxLogo} alt="redux" />
						<img src={sassLogo} alt="sass" />
						<img id="smallLogo" src={mongodbLogo} alt="mongodb" />
						<img id="smallLogo" src={expressLogo} alt="express" />
						<img src={d3Logo} alt="d3js" />
					</div>
					<div className={classes.header}>
						<h2 className={classes.projectTitle}>Budgety App</h2>
						<div className={classes.links}>
							<img src={webLogo} alt="Budgety Web" />
							<img src={repo} alt="repo" />
						</div>
					</div>

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
						onClick={() =>
							this.setState({
								budgetyPausedByUser: !this.state.budgetyPausedByUser,
							})
						}>
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
						<li>
							MongoDB aggregation pipeline for reading and modifying data sorted
							by date
						</li>
					</ul>
				</div>
				{/* //////////////////////// Toastmaster ///////////////////////// */}
				<div className={classes.project}>
					<div className={classes.header}>
						<h2 className={classes.projectTitle}>Toastmasters Club</h2>
						<div className={classes.techLogos}>
							<img src={jsLogo} alt="js" />
							<img src={reactLogo} alt="react" />
							<img src={reduxLogo} alt="redux" />
							<img src={sassLogo} alt="sass" />
							<img src={expressLogo} alt="express" />
							<img src={draftJSLogo} alt="draftjs" />
							<img src={s3Logo} alt="aws s3" />
						</div>
					</div>
					<p>
						A platform for members of a toastmaster club. I wanted to create a
						way for members to share their speeches or simply post their
						thoughts using a rich text editor. I took it further by
						incorporating user level access to admin settings.
					</p>
					<video
						ref={this.toastmastersVideo}
						controls={true}
						preload="true"
						loop
						muted
						onClick={() =>
							this.setState({
								toastmasterPausedByUser: !this.state.toastmasterPausedByUser,
							})
						}>
						<source src={toastmastermp4} type="video/mp4" />
						<source src={toastmasterpng} type="image/png" />
					</video>
					<h3>Features:</h3>
					<ul>
						<li>User Authentication with JWT and Sendgrid</li>
						<li>Complete Responsive design</li>
						<li>
							Committee/Moderators access only to edit or delete post, activate
							or deactivate users and register new members
						</li>
						<li>Admin access only to promote/demote users</li>
						<li>Rich text editor using Draft.js.</li>
						<li>Client and server based pagination</li>
					</ul>
				</div>
				{/* //////////////////////// Performance Monitor ///////////////////////// */}
				<div className={classes.project}>
					<h2>Performance monitor</h2>
					<p>
						A performance montior which uses socket.io and node.js to track the
						performance of the Heroku dyno its hosted on.
					</p>
					<video
						ref={this.pmonitorVideo}
						controls={true}
						preload="true"
						loop
						muted
						onClick={() =>
							this.setState({
								pmonitorPausedByUser: !this.state.pmonitorPausedByUser,
							})
						}>
						<source src={pmonitormp4} type="video/mp4" />
						<source src={pmonitorpng} type="image/png" />
					</video>
					<h3>Features:</h3>
					<ul>
						<li>User Authentication with JWT and Sendgrid</li>
						<li>Complete Responsive design</li>
						<li>
							Committee/Moderators access only to edit or delete post, activate
							or deactivate users and register new members
						</li>
						<li>Admin access only to promote/demote users</li>
						<li>Rich text editor using Draft.js.</li>
						<li>Client and server based pagination</li>
					</ul>
					<h3>
						Tech:
						<span className={classes.tech}>
							React, MongoDB, Express, Draft.js, AWS S3
						</span>
					</h3>
				</div>
			</div>
		);
	}
}

export default Projects;
