import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import "./CategoryPreview.styles.scss";

const CategoryPreview = ({ title, products }) => {
	return (
		<section className="category-preview-container">
			<h2 className="category-title-container">
				<Link to={`/shop/${title}`} className="category-preview-title">
					<span className="title">{title.toUpperCase()}</span>
				</Link>
			</h2>
			<div className="preview">
				{products
					.filter((_, index) => index < 4)
					.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</div>
		</section>
	);
};

export default CategoryPreview;
