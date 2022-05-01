import React, { useContext } from "react";
import "./CartDropdown.styles.jsx";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { CartDropdownContainer, CartItems, EmptyMessage } from "./CartDropdown.styles.jsx";

const CartDropdown = () => {
	const navigate = useNavigate();
	const { cartItems } = useContext(CartContext);

	const goToCheckoutHandler = () => {
		navigate("/checkout");
	};
	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} cartItem={cartItem} />
					))
				) : (
					<EmptyMessage>Your cart is empty</EmptyMessage>
				)}
			</CartItems>
			<Button onClick={goToCheckoutHandler}>Go to checkout</Button>
		</CartDropdownContainer>
	);
};

export default CartDropdown;
