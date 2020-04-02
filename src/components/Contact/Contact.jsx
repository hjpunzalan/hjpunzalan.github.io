// Customize this 'myform.js' script and add it to your JS bundle.

import React from "react";
import classes from "./Contact.module.scss";

export default class MyForm extends React.Component {
	constructor(props) {
		super(props);
		this.submitForm = this.submitForm.bind(this);
		this.state = {
			status: ""
		};
	}

	render() {
		const { status } = this.state;
		return (
			<div className={classes.form}>
				<h1>Send me a message</h1>
				<form
					onSubmit={this.submitForm}
					action="https://formspree.io/xbjkvkgb"
					method="POST">
					<label htmlFor="name">
						Name:
						<input id="name" type="name" name="name" required />
					</label>
					<label htmlFor="email">
						Email:
						<input id="email" type="email" name="email" required />
					</label>
					<label htmlFor="message">
						Message:
						<textarea id="message" name="message" required />
					</label>
					{status === "SUCCESS" ? <p>Thanks!</p> : null}
					{status === "ERROR" && <p>Ooops! There was an error.</p>}
					<button>Submit</button>
				</form>
			</div>
		);
	}

	submitForm(ev) {
		ev.preventDefault();
		const form = ev.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				this.setState({ status: "SUCCESS" });
			} else {
				this.setState({ status: "ERROR" });
			}
		};
		xhr.send(data);
	}
}
