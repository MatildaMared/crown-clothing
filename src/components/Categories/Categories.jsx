import React from "react";
import DirectoryItem from "../DirectoryItem/DirectoryItem";
import { CategoriesContainer } from "./Categories.styles";

function Categories({ categories }) {
	return (
		<CategoriesContainer>
			{categories.map((category) => (
				<DirectoryItem category={category} key={category.id} />
			))}
		</CategoriesContainer>
	);
}

export default Categories;
