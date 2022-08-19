import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Nav, NavbarContainer, NavbarPage } from "./Navigation.styles";
import { Link } from "react-scroll";

function Index({ user, logout }) {
	const navigate = useNavigate();
	const handleLogout = async (e) => {
		e.preventDefault();
		await logout();
		navigate("/login");
	};
	return (
		<Nav>
			<NavbarContainer className="font-roboto">
				<NavLink to="/" className="navbar-brand">
					E - Shop
				</NavLink>
				<NavbarPage>
					<Link to="products" spy={true} smooth={true} offset={-20} duration={500} className={`navlink`}>
						Products
					</Link>

					{!user && (
						<NavLink to="/login" className={`navlink`}>
							Login
						</NavLink>
					)}
					{user && (
						<a onClick={handleLogout} className={`navlink`}>
							Logout
						</a>
					)}

					{user && (
						<NavLink to="/cart" className={`navlink`}>
							<span class="font-size-16 px-2 text-white">
								<i class="fas fa-shopping-cart"></i>
							</span>
							<span class="px-3 py-2 rounded-pill text-dark bg-light">0</span>
						</NavLink>
					)}
				</NavbarPage>
			</NavbarContainer>
		</Nav>
	);
}

export default Index;
