import styled from "styled-components";

export const CategoryContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 1rem;
	row-gap: 2rem;
`;

export const CategoryTitle = styled.h2`
	font-size: 2rem;
	text-align: center;
	margin-bottom: 1rem;
	grid-column: 1 / -1;
`;
