import React from "react";
import { Nav, NavbarContainer, NavbarPage } from "./Navigation.styles";

function index() {
	return (
		<Nav>
			<NavbarContainer className="font-roboto">
				<a href="#" className="navbar-brand">
					E - Shop
				</a>
				<NavbarPage>
					<a href="#">Category</a>
					<a href="#">Product</a>
					<a href="#">Cart</a>
				</NavbarPage>
			</NavbarContainer>
		</Nav>
	);
}

export default index;
