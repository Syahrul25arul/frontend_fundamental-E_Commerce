import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavbarContainer, NavbarPage } from "./Navigation.styles";

function index({ user }) {
	return (
		<Nav>
			<NavbarContainer className="font-roboto">
				<NavLink to="/" className="navbar-brand">
					E - Shop
				</NavLink>
				<NavbarPage>
					<a to="#category" className="navlink">
						Category
					</a>
					<NavLink to="/product" className={`navlink`}>
						Product
					</NavLink>
					{user && (
						<NavLink to="/cart" className={`navlink`}>
							Cart
						</NavLink>
					)}
				</NavbarPage>
			</NavbarContainer>
		</Nav>
	);
}

export default index;
