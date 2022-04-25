import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	passwordConfirm: "",
};

function SignupForm() {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, passwordConfirm } = formFields;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { user } = await createUserWithEmailAndPassword(email, password);
		console.log(user);
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
				<button type="submit">Sign up</button>
			</form>
		</section>
	);
}

export default SignupForm;
