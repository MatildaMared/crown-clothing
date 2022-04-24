import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navigation.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Navigation = () => {
	return (
		<>
			<header className="navigation">
				<Link to="/" className="logo-container">
					<Logo className="logo" />
				</Link>
				<nav className="nav-links-container">
					<Link to="/" className="nav-link">
						Home
					</Link>
					<Link to="/shop" className="nav-link">
						Shop
					</Link>
				</nav>
			</header>
			<Outlet />
		</>
	);
};

export default Navigation;
