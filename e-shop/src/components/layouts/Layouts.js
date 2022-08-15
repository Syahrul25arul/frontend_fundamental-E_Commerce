import React from "react";
import Header from "../header";
import Navigation from "../navigations";
import Main from "../main";
import Footer from "../footer";
import CopyRight from "../copy_right";
import { GlobalStyle } from "../../GlobalStyle";

function Layouts({ title, children }) {
	document.title = title;
	return (
		<div>
			<Header />
			<Navigation />
			<Main>{children}</Main>
			<Footer />
			<CopyRight />
			<GlobalStyle />
		</div>
	);
}

export default Layouts;
