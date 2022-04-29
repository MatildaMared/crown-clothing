import React, { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Shop.styles.scss";

const Shop = () => {
	const { products } = useContext(ProductsContext);
	return (
		<section className="products-container">
			{products.map((product) => (
				<ProductCard product={product} key={product.id} />
			))}
		</section>
	);
};

export default Shop;
