import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignupForm from "../../components/SignupForm/SignupForm";

function Login() {
	const loginGooglePopup = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	return (
		<div>
			<h1>Login</h1>
			<button onClick={loginGooglePopup}>Log in with Google Popup</button>
			<SignupForm />
		</div>
	);
}

export default Login;
