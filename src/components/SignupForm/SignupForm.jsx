import React, { useState } from "react";
import {
	createUserDocumentFromAuth,
	createAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import { SignupContainer } from "./SignupForm.styles";

const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	passwordConfirm: "",
};

function SignupForm() {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const [errorMessage, setErrorMessage] = useState("");
	const { displayName, email, password, passwordConfirm } = formFields;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (e) => {
		setErrorMessage("");
		e.preventDefault();

		if (password !== passwordConfirm) {
			setErrorMessage("Passwords do not match");
			return;
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);

			await createUserDocumentFromAuth(user, { displayName });
			resetFormFields();
		} catch (err) {
			if (err.code === "auth/email-already-in-use") {
				setErrorMessage("Email already in use");
			}
		}
	};

	return (
		<SignupContainer>
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Display Name"
					onChange={handleChange}
					id="display-name"
					name="displayName"
					value={displayName}
					required
				/>

				<FormInput
					label="Email"
					id="email"
					onChange={handleChange}
					type="email"
					name="email"
					value={email}
					required
				/>

				<FormInput
					label="Password"
					type="password"
					onChange={handleChange}
					value={password}
					id="password"
					name="password"
					required
				/>
				<FormInput
					label="Confirm Password"
					type="password"
					onChange={handleChange}
					value={passwordConfirm}
					id="password-confirm"
					name="passwordConfirm"
					required
				/>

				{errorMessage && <p>{errorMessage}</p>}
				<Button type="submit">Sign up</Button>
			</form>
		</SignupContainer>
	);
}

export default SignupForm;
