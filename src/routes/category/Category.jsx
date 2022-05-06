import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Category.styles.jsx";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { CategoryContainer, CategoryTitle } from "./Category.styles.jsx";
import { selectCategoriesMap } from "../../store/category/category.selector.js";

const Category = () => {
	const categoriesMap = useSelector(selectCategoriesMap)
	const { category } = useParams();
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
