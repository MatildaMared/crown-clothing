import React from "react";
import { FormInputLabel, Group, Input } from "./FormInput.styles";

function FormInput({ label, ...otherProps }) {
	return (
		<Group>
			<Input {...otherProps} required />
			{label && (
				<FormInputLabel
					shrink={otherProps.value.length}
					htmlFor="display-name"
				>
					{label}
				</FormInputLabel>
			)}
		</Group>
	);
}

export default FormInput;
