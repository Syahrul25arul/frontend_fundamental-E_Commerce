import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginDispatch, selectUser } from "../container/userSlice";
export const useUserHooks = () => {
	const userStore = useSelector(selectUser);
	const dispatch = useDispatch();
	const [mounted, setMounted] = useState(true);

	// chek authentikasi saat app pertamakali run
	useEffect(() => {
		const cekUserAuth = () => {
			if (userStore.user == null && !userStore.loggedIn) {
				const token = localStorage.getItem("cap-access-token");
				if (token) {
					dispatch(loginDispatch({ token }));
				}
			}
		};
		cekUserAuth();
		setMounted(false);
	}, []);

	return { mounted };
};
