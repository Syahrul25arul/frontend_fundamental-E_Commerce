import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./index";
import { useAlertHooks } from "../../hooks/useAlertHooks";
import { useDispatch } from "react-redux";
import { loginDispatch, logoutDispatch } from "../../container/userSlice";
function useFirebaseHooks() {
	const { showAlertFailed, showAlert, alert, showAlertSuccess } = useAlertHooks();
	const dispatch = useDispatch();
	const login = async ({ email, password }) => {
		try {
			const res = await signInWithEmailAndPassword(auth, email, password);
			console.log(res);
			dispatch(
				loginDispatch({
					uid: res.user.uid,
					displayName: res.user.displayName,
					email: res.user.email,
					photo: res.user.photo
				})
			);
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
			showAlertSuccess(`sukses registrasi, silahkan login terlebih dahulu`);
		} catch (error) {
			console.log(error.message);
			showAlertFailed(`register failed : ${error.message}`);
			// alert(error.message);
		}
	};
	const logout = () => {
		signOut(auth);
		dispatch(logoutDispatch());
	};
	return { login, logout, register, alert, showAlert };
}

export default useFirebaseHooks;
