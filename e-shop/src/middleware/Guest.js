import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../container/userSlice";

function Guest({ children }) {
	const userStore = useSelector(selectUser);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		setIsLoggedIn(true);
		if (userStore.loggedIn) navigate("/");
	}, [userStore.loggedIn, navigate]);

	if (!isLoggedIn)
		return (
			<div>
				<h5>loadin...</h5>
			</div>
		);
	return children;
}

export default Guest;
