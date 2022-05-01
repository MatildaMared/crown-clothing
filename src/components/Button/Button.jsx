import React from "react";
import {
	BaseButton,
	GoogleSignInButton,
	InvertedButton,
} from "./Button.styles";

export const BUTTON_TYPE_CLASSES = {
	base: "base",
	google: "google",
	inverted: "inverted",
};

const getButton = (type) => {
	switch (type) {
		case "google":
			return GoogleSignInButton;
		case "inverted":
			return InvertedButton;
		default:
			return BaseButton;
	}
};

function Button({ children, buttonType, ...otherProps }) {
	const CustomButton = getButton(buttonType);
	return (
		<CustomButton
			className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
			{...otherProps}
		>
			{children}
		</CustomButton>
	);
}

export default Button;
