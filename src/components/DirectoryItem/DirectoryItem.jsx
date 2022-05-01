import { useNavigate } from "react-router-dom";
import React from "react";
import {
	DirectoryContainer,
	DirectoryItemBody,
	BackgroundImage,
} from "./DirectoryItem.styles";

function DirectoryItem({ category }) {
	const { imageUrl, title, route } = category;
	const navigate = useNavigate();

	const onNavigateHandler = () => navigate(route);

	return (
		<DirectoryContainer onClick={onNavigateHandler}>
			<BackgroundImage imageUrl={imageUrl} />
			<DirectoryItemBody>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</DirectoryItemBody>
		</DirectoryContainer>
	);
}

export default DirectoryItem;
