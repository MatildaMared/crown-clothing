import React from "react";
import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

function Login() {
	const loginGoogleUser = async () => {
		const response = await signInWithGooglePopup();
		console.log(response);
		createUserDocumentFromAuth(response.user);
	};

	return (
		<div>
			<h1>Login</h1>
			<button onClick={loginGoogleUser}>Log in with Google Popup</button>
		</div>
	);
}

export default Login;
