import React from "react";
import "./CategoryItem.styles.scss";

function CategoryItem({ category }) {
	const { imageUrl, title } = category;

	return (
		<li className="category-container">
			<div
				className="background-image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className="category-body-container">
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</li>
	);
}

export default CategoryItem;
