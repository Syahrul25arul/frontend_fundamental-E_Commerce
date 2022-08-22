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
import { useSelector } from "react-redux";
import { selectUser } from "../../container/userSlice";

function Layouts({ title, children }) {
	// const [user] = useAuthState(auth);
	const userStore = useSelector(selectUser);
	const { logout } = useFirebaseHooks();
	document.title = title;
	return (
		<div>
			<Header />
			<Navigation user={userStore.user} logout={logout} />
			{/* <NavbarHamburger /> */}
			<Main>{children}</Main>
			<Footer />
			<CopyRight />
			<GlobalStyle />
		</div>
	);
}

export default Layouts;
