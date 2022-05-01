import React, { useContext } from "react";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Shop.styles.scss";

const Shop = () => {
	const { categoriesMap } = useContext(CategoriesContext);
	return (
		<>
			{Object.keys(categoriesMap).map((title) => (
				<div key={title}>
					<h2>{title}</h2>
					<section className="products-container">
						{categoriesMap[title].map((product) => (
							<ProductCard product={product} key={product.id} />
						))}
					</section>
				</div>
			))}
		</>
	);
};

export default Shop;
