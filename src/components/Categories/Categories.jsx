import "./categories.styles.scss";
import React from "react";
import CategoryItem from "../CategoryItem/CategoryItem";

function Categories({ categories }) {
	return (
		<ul className="categories-container">
			{categories.map((category) => (
				<CategoryItem category={category} key={category.id} />
			))}
		</ul>
	);
}

export default Categories;
