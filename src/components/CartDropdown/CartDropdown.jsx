import React, { useContext } from "react";
import "./CartDropdown.styles.scss";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
	const navigate = useNavigate();
	const { cartItems } = useContext(CartContext);

	const goToCheckoutHandler = () => {
		navigate("/checkout");
	};
	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.map((cartItem) => (
					<CartItem key={cartItem.id} cartItem={cartItem} />
				))}
			</div>
			<Button onClick={goToCheckoutHandler}>Go to checkout</Button>
		</div>
	);
};

export default CartDropdown;
