import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";

function Authenticated({ children }) {
	const [user] = useAuthState(auth);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		setIsLoggedIn(true);
		if (!user) navigate("/login");
	}, [user, navigate]);

	console.log("auth", user);

	if (!isLoggedIn)
		return (
			<div>
				<h5>loading...</h5>
			</div>
		);
	return children;
}

export default Authenticated;
