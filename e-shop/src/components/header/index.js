import React from "react";
import { NavLink } from "react-router-dom";
import { Header, HeaderContainer, HeaderLoginWhistlist } from "./Header.styles.js";

function index({ user, logout }) {
	const handleLogout = (e) => {
		e.preventDefault();
		logout();
	};
	return (
		<Header>
			<HeaderContainer>
				<p class="font-rale">Lorem ipsum dolor sit 08xx</p>
				<HeaderLoginWhistlist>
					{user && (
						<a onClick={handleLogout} className={`header-login`}>
							Logout
						</a>
					)}

					{!user && (
						<NavLink to="/login" className={`header-login`}>
							Login
						</NavLink>
					)}
					<a href="#">Whistlist (0)</a>
				</HeaderLoginWhistlist>
			</HeaderContainer>
		</Header>
	);
}

export default index;
