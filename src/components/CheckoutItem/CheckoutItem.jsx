import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import {
	CheckoutItemContainer,
	ImageContainer,
	RemoveButton,
} from "./CheckoutItem.styles";

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	const { removeItemFromCart, addItemToCart, clearCartItem } =
		useContext(CartContext);

	const removeItemHandler = () => {
		removeItemFromCart(cartItem);
	};

	const addItemHandler = () => {
		addItemToCart(cartItem);
	};

	const clearItemHandler = () => {
		clearCartItem(cartItem);
	};

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt={name} />
			</ImageContainer>
			<span className="name">{name}</span>
			<span className="quantity">
				<button className="arrow" onClick={removeItemHandler}>
					&#10094;
				</button>
				{quantity}
				<button className="arrow" onClick={addItemHandler}>
					&#10095;
				</button>
			</span>
			<span className="price">$ {price}</span>
			<RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;
