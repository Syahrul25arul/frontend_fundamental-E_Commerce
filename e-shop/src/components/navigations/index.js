import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Nav, NavbarContainer, NavbarPage } from "./Navigation.styles";
import { Link, Element, animateScroll } from "react-scroll";
import { useLocation } from "react-router-dom";
// import * as ReactScroll from "react-scroll";

function Index({ user, logout }) {
	const navigate = useNavigate();
	const location = useLocation();
	const handleLogout = async (e) => {
		e.preventDefault();
		await logout();
		navigate("/login");
	};

	const scrollToProducts = () => {
		if (location.pathname !== "/") {
			navigate("/");
			animateScroll.scrollTo(1200);
		}
	};

	return (
		<Nav>
			<NavbarContainer className="font-roboto">
				<NavLink to="/" className="navbar-brand">
					E - Shop
				</NavLink>
				<NavbarPage>
					<Link to="products" spy={true} smooth={true} offset={-20} duration={500} className={`navlink`} onClick={scrollToProducts}>
						Products
					</Link>

					{!user && (
						<NavLink to="/login" className={`navlink`}>
							Login
						</NavLink>
					)}
					{user && (
						<button onClick={handleLogout} className={`navlink`}>
							Logout
						</button>
					)}

					{user && (
						<NavLink to="/cart" className={`navlink`}>
							<span className="font-size-16 px-2 text-white">
								<i className="fas fa-shopping-cart"></i>
							</span>
							<span className="px-3 py-2 rounded-pill text-dark bg-light">0</span>
						</NavLink>
					)}
				</NavbarPage>
			</NavbarContainer>
		</Nav>
	);
}

export default Index;
