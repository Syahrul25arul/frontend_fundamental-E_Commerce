import React from "react";
import { Header, HeaderContainer, HeaderLoginWhistlist } from "./Header.styles.js";

function index() {
	return (
		<Header>
			<HeaderContainer>
				<p class="font-rale">Lorem ipsum dolor sit 08xx</p>
				<HeaderLoginWhistlist>
					<a href="#" class="header-login">
						Login
					</a>
					<a href="#">Whistlist (0)</a>
				</HeaderLoginWhistlist>
			</HeaderContainer>
		</Header>
	);
}

export default index;
