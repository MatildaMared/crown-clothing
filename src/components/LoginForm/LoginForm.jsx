import React, { useState } from "react";
import {
	signInWithGooglePopup,
	loginAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../FormInput/FormInput";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";
import "./LoginForm.styles.jsx";
import { ButtonsContainer, LoginContainer } from "./LoginForm.styles.jsx";

function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const resetFormFields = () => {
		setEmail("");
		setPassword("");
	};

	const handleLogin = async (e) => {
		setErrorMessage("");
		e.preventDefault();

		try {
			await loginAuthUserWithEmailAndPassword(email, password);
			resetFormFields();
		} catch (err) {
			console.log(err.code);
			switch (err.code) {
				case "auth/wrong-password":
					setErrorMessage("Wrong password");
					break;
				case "auth/user-not-found":
					setErrorMessage("No user associated with this email");
					break;
				default:
					console.log(err);
			}
		}
	};

	const handleLoginWithGooglePopup = async () => {
		await signInWithGooglePopup();
	};

	return (
		<LoginContainer>
			<h2>Already have an account?</h2>
			<span>Log in with your email and password</span>
			<form onSubmit={handleLogin}>
				<FormInput
					label="Email"
					id="email"
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					type="email"
					name="email"
					value={email}
					required
				/>

				<FormInput
					label="Password"
					type="password"
					onChange={(e) => {
						setPassword(e.target.value);
					}}
					value={password}
					id="password"
					name="password"
					required
				/>

				{errorMessage && <p>{errorMessage}</p>}
				<ButtonsContainer>
					<Button type="submit">Log In</Button>
					<Button
						type="button"
						buttonType={BUTTON_TYPE_CLASSES.google}
						onClick={handleLoginWithGooglePopup}
					>
						LoginWithGoogle
					</Button>
				</ButtonsContainer>
			</form>
		</LoginContainer>
	);
}

export default LoginForm;
