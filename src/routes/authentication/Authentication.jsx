import React from "react";
import SignupForm from "../../components/SignupForm/SignupForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./Authentication.styles.scss";

function Authentication() {
	return (
		<div className="authentication-container">
			<LoginForm />
			<SignupForm />
		</div>
	);
}

export default Authentication;
