import React from "react";
import { Header, HeaderContainer, HeaderLoginWhistlist } from "./Header.styles.js";

function index() {
	return (
		<Header>
			<HeaderContainer>
				<p className="font-rale">Jln. Kenanga terusan, 0822-xxxx-xxxx</p>
				<HeaderLoginWhistlist></HeaderLoginWhistlist>
			</HeaderContainer>
		</Header>
	);
}

export default index;
