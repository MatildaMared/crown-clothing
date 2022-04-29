import React from "react";
import "./ProductCard.styles.scss";
import Button from "../Button/Button";

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	return (
		<article className="product-card-container">
			<img src={imageUrl} alt={name} />
			<div className="footer">
				<span className="name">{name}</span>
				<span className="price">{`$${price}`}</span>
			</div>
			<Button buttonType="inverted">Add to cart</Button>
		</article>
	);
};

export default ProductCard;
