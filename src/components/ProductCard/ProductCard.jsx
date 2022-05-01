import React, { useContext } from "react";
import {
	ProductCardContainer,
	ProductCardFooter,
} from "./ProductCard.styles.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";
import { CartContext } from "../../contexts/CartContext";

const ProductCard = ({ product }) => {
	const { addItemToCart } = useContext(CartContext);
	const { name, price, imageUrl } = product;
	const addToCartHandler = () => {
		addItemToCart(product);
	};
	return (
		<ProductCardContainer>
			<img src={imageUrl} alt={name} />
			<ProductCardFooter>
				<span className="name">{name}</span>
				<span className="price">{`$${price}`}</span>
			</ProductCardFooter>
			<Button
				buttonType={BUTTON_TYPE_CLASSES.inverted}
				onClick={addToCartHandler}
			>
				Add to cart
			</Button>
		</ProductCardContainer>
	);
};

export default ProductCard;
