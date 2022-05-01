import React, { useContext } from "react";
import "./Checkout.styles.scss";
import { CartContext } from "../../contexts/CartContext";
import CheckoutItem from "../CheckoutItem/CheckoutItem";

const Checkout = () => {
	const { cartItems, cartTotal } = useContext(CartContext);

	return (
		<main className="checkout-container">
			<section className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</section>
			{cartItems.map((cartItem) => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<span className="total">Total: $ {cartTotal}</span>
		</main>
	);
};

export default Checkout;
