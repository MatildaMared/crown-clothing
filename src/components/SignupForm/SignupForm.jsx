import React, { useState } from "react";
import {
	createUserDocumentFromAuth,
	createAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

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
			console.log(user);

			await createUserDocumentFromAuth(user, { displayName });
			resetFormFields();
		} catch (err) {
			console.log(err);
			if (err.code === "auth/email-already-in-use") {
				setErrorMessage("Email already in use");
			}
		}
	};

	return (
		<section>
			<h1>Sign up with your email and password</h1>
			<form onSubmit={handleSubmit}>
				<p>
					<label htmlFor="display-name">Display Name</label>
					<input
						onChange={handleChange}
						id="display-name"
						name="displayName"
						value={displayName}
						required
					/>
				</p>
				<p>
					<label htmlFor="email">Email</label>
					<input
						id="email"
						onChange={handleChange}
						type="email"
						name="email"
						value={email}
						required
					/>
				</p>
				<p>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						onChange={handleChange}
						value={password}
						id="password"
						name="password"
						required
					/>
				</p>
				<p>
					<label htmlFor="password-confirm">Confirm Password</label>
					<input
						type="password"
						onChange={handleChange}
						value={passwordConfirm}
						id="password-confirm"
						name="passwordConfirm"
						required
					/>
				</p>
				{errorMessage && <p>{errorMessage}</p>}
				<button type="submit">Sign up</button>
			</form>
		</section>
	);
}

export default SignupForm;
