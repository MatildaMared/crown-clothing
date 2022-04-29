import React, { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "./../../assets/shopping-bag.svg";
import "./CartIcon.styles.scss";
import { CartContext } from "../../contexts/CartContext";

const CartIcon = ({ isOpen, setIsOpen }) => {
	const { setCartIsOpen, cartIsOpen } = useContext(CartContext);

	const toggleCartVisibility = () => {
		setCartIsOpen(!cartIsOpen);
	};

	return (
		<div className="cart-icon-container" onClick={toggleCartVisibility}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">0</span>
		</div>
	);
};

export default CartIcon;
