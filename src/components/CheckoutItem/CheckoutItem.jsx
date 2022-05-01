import React, { useContext } from "react";
import "./CheckoutItem.styles.scss";
import { CartContext } from "../../contexts/CartContext";

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
		<article className="checkout-item-container">
			<div className="image-container">
				<img src={imageUrl} alt={name} />
			</div>
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
			<button className="remove-button" onClick={clearItemHandler}>
				&#10005;
			</button>
		</article>
	);
};

export default CheckoutItem;
