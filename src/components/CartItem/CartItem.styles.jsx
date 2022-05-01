import styled from "styled-components";

export const CartItemContainer = styled.article`
	width: 100%;
	display: flex;
	height: 80px;
	margin-bottom: 15px;
	font-size: 0.75rem;

	img {
		width: 30%;
	}
`;

export const ItemDetails = styled.div`
	.item-details {
		width: 70%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		padding: 10px 20px;
`;

export const Name = styled.h2`
	font-size: 0.8rem;
	line-height: 1.1;
	text-transform: uppercase;
	font-weight: 500;
`;
