import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../container/userSlice";

function Authenticated({ children }) {
	const userStore = useSelector(selectUser);
	// const [user] = useAuthState(auth);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		setIsLoggedIn(true);
		if (!userStore.loggedIn) navigate("/login");
	}, [userStore.loggedIn, navigate]);

	if (!isLoggedIn)
		return (
			<div>
				<h5>loading...</h5>
			</div>
		);
	return children;
}

export default Authenticated;
