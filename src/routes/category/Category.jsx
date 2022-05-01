import React, { useContext, useState, useEffect } from "react";
import "./Category.styles.jsx";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import { CategoryContainer, CategoryTitle } from "./Category.styles.jsx";

const Category = () => {
	const { category } = useParams();
	const { categoriesMap } = useContext(CategoriesContext);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<CategoryContainer>
			<CategoryTitle>{category.toUpperCase()}</CategoryTitle>
			{products &&
				products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
		</CategoryContainer>
	);
};

export default Category;
