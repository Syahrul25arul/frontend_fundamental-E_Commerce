import React from "react";
import Header from "../header";
import Navigation from "../navigations";
import Main from "../main";
import Footer from "../footer";
import CopyRight from "../copy_right";
import { GlobalStyle } from "../../GlobalStyle";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import useFirebaseHooks from "../../config/firebase/useFirebaseHooks";
import NavbarHamburger from "../navbarHamburger";

function Layouts({ title, children }) {
	const [user] = useAuthState(auth);
	const { logout } = useFirebaseHooks();
	document.title = title;
	return (
		<div>
			<Header />
			<Navigation user={user} logout={logout} />
			{/* <NavbarHamburger /> */}
			<Main>{children}</Main>
			<Footer />
			<CopyRight />
			<GlobalStyle />
		</div>
	);
}

export default Layouts;
