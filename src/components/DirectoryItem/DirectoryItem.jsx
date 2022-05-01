import React from "react";
import {
	DirectoryContainer,
	DirectoryItemBody,
	BackgroundImage,
} from "./DirectoryItem.styles";

function DirectoryItem({ category }) {
	const { imageUrl, title } = category;

	return (
		<DirectoryContainer>
			<BackgroundImage imageUrl={imageUrl} />
			<DirectoryItemBody>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</DirectoryItemBody>
		</DirectoryContainer>
	);
}

export default DirectoryItem;
