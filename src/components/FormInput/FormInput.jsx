import React from "react";
import "./FormInput.styles.scss";

function FormInput({ label, ...otherProps }) {
	return (
		<div className="group">
			<input className="form-input" {...otherProps} required />
			{label && (
				<label
					className={`${
						otherProps.value.length > 0 ? "shrink" : ""
					} form-input-label`}
					htmlFor="display-name"
				>
					{label}
				</label>
			)}
		</div>
	);
}

export default FormInput;
