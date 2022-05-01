import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.header`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	margin-block-end: 1rem;
`;

export const LogoContainer = styled(Link)`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const NavLinks = styled.nav`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const NavLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;
	font-size: 0.7rem;
	text-transform: uppercase;
`;
