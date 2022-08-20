import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./index";
import { useNavigate } from "react-router-dom";
import { useAlertHooks } from "../../hooks/useAlertHooks";
function useFirebaseHooks() {
	const { showAlertFailed, showAlert, alert } = useAlertHooks();
	const navigate = useNavigate();
	const login = async ({ email, password }) => {
		try {
			await signInWithEmailAndPassword(auth, email, password);
		} catch (err) {
			showAlertFailed(`failed login : invalid credential`);
			console.error(err);
		}
	};

	const register = async ({ username, email, password, passwordConfirm }) => {
		try {
			// cek password sama dengan password verify
			if (password !== passwordConfirm) throw new Error("password tidak sama dengan password confirm");
			await createUserWithEmailAndPassword(auth, email, password);
		} catch (error) {
			console.log(error.message);
			showAlertFailed(`register failed : ${error.message}`);
			// alert(error.message);
		}
	};
	const logout = () => {
		signOut(auth);
		navigate("/login");
	};
	return { login, logout, register, alert, showAlert };
}

export default useFirebaseHooks;
