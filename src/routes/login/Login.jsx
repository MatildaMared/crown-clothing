import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

function Login() {
	const loginGoogleUser = async () => {
		const response = await signInWithGooglePopup();
		console.log(response);
	};

	return (
		<div>
			<h1>Login</h1>
			<button onClick={loginGoogleUser}>Log in with Google Popup</button>
		</div>
	);
}

export default Login;
