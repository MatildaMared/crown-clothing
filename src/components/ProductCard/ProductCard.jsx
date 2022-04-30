import React, { useContext } from "react";
import "./ProductCard.styles.scss";
import Button from "../Button/Button";
import { CartContext } from "../../contexts/CartContext";

const ProductCard = ({ product }) => {
	const { addItemToCart } = useContext(CartContext);
	const { name, price, imageUrl } = product;
	const addToCartHandler = () => {
		addItemToCart(product);
	};
	return (
		<article className="product-card-container">
			<img src={imageUrl} alt={name} />
			<div className="footer">
				<span className="name">{name}</span>
				<span className="price">{`$${price}`}</span>
			</div>
			<Button buttonType="inverted" onClick={addToCartHandler}>
				Add to cart
			</Button>
		</article>
	);
};

export default ProductCard;
