import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navigation.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/UserContext";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
	const { currentUser, setCurrentUser } = useContext(UserContext);

	const logoutHandler = async () => {
		await signOutUser();
		setCurrentUser(null);
	};

	return (
		<>
			<header className="navigation">
				<Link to="/" className="logo-container">
					<Logo className="logo" />
				</Link>
				<nav className="nav-links-container">
					<Link to="/shop" className="nav-link">
						Shop
					</Link>
					{currentUser ? (
						<span className="nav-link" onClick={logoutHandler}>
							Log Out
						</span>
					) : (
						<Link to="/auth" className="nav-link">
							Log in
						</Link>
					)}
				</nav>
			</header>
			<Outlet />
		</>
	);
};

export default Navigation;
