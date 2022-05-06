import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropdown from "../../components/CartDropdown/CartDropdown";
import { CartContext } from "../../contexts/CartContext";
import {
	LogoContainer,
	NavigationContainer,
	NavLink,
	NavLinks,
} from "./Navigation.styles";

const Navigation = () => {
	const { cartIsOpen } = useContext(CartContext);
	const currentUser = useSelector(selectCurrentUser);

	return (
		<>
			<NavigationContainer>
				<LogoContainer to="/">
					<Logo className="logo" />
				</LogoContainer>
				<NavLinks>
					<NavLink to="/shop">Shop</NavLink>
					{currentUser ? (
						<NavLink as="span" onClick={signOutUser}>
							Log Out
						</NavLink>
					) : (
						<NavLink to="/auth">Log in</NavLink>
					)}
					<CartIcon />
				</NavLinks>
			</NavigationContainer>
			{cartIsOpen && <CartDropdown />}
			<Outlet />
		</>
	);
};

export default Navigation;
