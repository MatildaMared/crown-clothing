import React from "react";
import "./DirectoryItem.styles.scss";

function DirectoryItem({ category }) {
	const { imageUrl, title } = category;

	return (
		<li className="directory-container">
			<div
				className="background-image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className="directory-item-body">
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</li>
	);
}

export default DirectoryItem;
