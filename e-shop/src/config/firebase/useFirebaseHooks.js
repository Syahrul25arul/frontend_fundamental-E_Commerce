import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./index";
import { useNavigate } from "react-router-dom";
function useFirebaseHooks() {
	const navigate = useNavigate();
	const login = async ({ email, password }) => {
		try {
			await signInWithEmailAndPassword(auth, email, password);
		} catch (err) {
			console.error(err);
			alert(err.message);
		}
	};

	const register = async ({ username, email, password, passwordConfirm }) => {
		try {
			// cek password sama dengan password verify
			if (password !== passwordConfirm) throw new Error("password tidak sama dengan password confirm");
			await createUserWithEmailAndPassword(auth, email, password);
			// console.log("register hooks", res);
		} catch (error) {
			console.log(error.message);
			alert(error.message);
		}
	};
	const logout = () => {
		signOut(auth);
		navigate("/login");
	};
	return { login, logout, register };
}

export default useFirebaseHooks;
