import React from "react";
import SignupForm from "../../components/SignupForm/SignupForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { AuthenticationContainer } from "./Authentication.styles";

function Authentication() {
	return (
		<AuthenticationContainer>
			<LoginForm />
			<SignupForm />
		</AuthenticationContainer>
	);
}

export default Authentication;
