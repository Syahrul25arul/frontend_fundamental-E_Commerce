import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";

function Guest({ children }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const navigate = useNavigate();
	const [user] = useAuthState(auth);

	useEffect(() => {
		setIsLoggedIn(true);
		if (user) navigate("/");
	}, [user, navigate]);

	if (!isLoggedIn)
		return (
			<div>
				<h5>loadin...</h5>
			</div>
		);
	return children;
}

export default Guest;
