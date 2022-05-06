import React from "react";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/category/category.selector";

const CategoriesPreview = () => {
	const categoriesMap = useSelector(selectCategoriesMap);
	return (
		<>
			{categoriesMap &&
				Object.keys(categoriesMap).map((title) => {
					const products = categoriesMap[title];
					return (
						<CategoryPreview
							key={title}
							title={title}
							products={products}
						/>
					);
				})}
		</>
	);
};

export default CategoriesPreview;
