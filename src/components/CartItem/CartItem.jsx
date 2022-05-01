import React from "react";
import { CartItemContainer, ItemDetails, Name } from "./CartItem.styles.jsx";

const CartItem = ({ cartItem }) => {
	const { name, price, quantity, imageUrl } = cartItem;
	return (
		<CartItemContainer>
			<img src={imageUrl} alt={name} />
			<ItemDetails>
				<Name>{name}</Name>
				<span className="price">
					{quantity} x ${price}
				</span>
			</ItemDetails>
		</CartItemContainer>
	);
};

export default CartItem;
