import React, { useContext, useState, useEffect } from "react";
import "./Category.styles.scss";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import ProductCard from "../../components/ProductCard/ProductCard";

const Category = () => {
	const { category } = useParams();
	const { categoriesMap } = useContext(CategoriesContext);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<main className="category-container">
			<h2 className="title">{category.toUpperCase()}</h2>
			{products &&
				products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
		</main>
	);
};

export default Category;
