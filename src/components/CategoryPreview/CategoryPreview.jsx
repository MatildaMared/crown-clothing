import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import {
	CategoryPreviewContainer,
	CategoryPreviewTitle,
	CategoryTitleContainer,
	Preview,
} from "./CategoryPreview.styles";

const CategoryPreview = ({ title, products }) => {
	return (
		<CategoryPreviewContainer>
			<CategoryTitleContainer>
				<Link to={`/shop/${title}`} className="category-preview-title">
					<CategoryPreviewTitle>
						{title.toUpperCase()}
					</CategoryPreviewTitle>
				</Link>
			</CategoryTitleContainer>
			<Preview>
				{products
					.filter((_, index) => index < 4)
					.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</Preview>
		</CategoryPreviewContainer>
	);
};

export default CategoryPreview;
