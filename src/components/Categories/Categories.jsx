import "./Categories.styles.scss";
import React from "react";
import DirectoryItem from "../DirectoryItem/DirectoryItem";

function Categories({ categories }) {
	return (
		<ul className="categories-container">
			{categories.map((category) => (
				<DirectoryItem category={category} key={category.id} />
			))}
		</ul>
	);
}

export default Categories;
