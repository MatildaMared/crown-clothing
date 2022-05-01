import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import {
	CartIconContainer,
	ItemCount,
	ShoppingIcon,
} from "./CartIcon.styles.jsx";

const CartIcon = ({ isOpen, setIsOpen }) => {
	const { setCartIsOpen, cartIsOpen, cartCount } = useContext(CartContext);

	const toggleCartVisibility = () => {
		setCartIsOpen(!cartIsOpen);
	};

	return (
		<CartIconContainer onClick={toggleCartVisibility}>
			<ShoppingIcon className="shopping-icon" />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
