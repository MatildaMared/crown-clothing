import React from "react";
import "./CartItem.styles.scss";

const CartItem = ({ cartItem }) => {
	const { name, price, quantity, imageUrl } = cartItem;
	return (
		<article className="cart-item-container">
			<img src={imageUrl} alt={name} />
			<div className="item-details">
				<h2 className="name">{name}</h2>
				<span className="price">
					{quantity} x ${price}
				</span>
			</div>
		</article>
	);
};

export default CartItem;
