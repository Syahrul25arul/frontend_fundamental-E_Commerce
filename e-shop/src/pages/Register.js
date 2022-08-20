import React from "react";
import BaseAuth from "../components/auth/baseAuth";
import RegisterForm from "../components/auth/RegisterForm";
import useFirebaseHooks from "../config/firebase/useFirebaseHooks";

function Register() {
	const { register, alert, showAlert } = useFirebaseHooks();
	return (
		<BaseAuth>
			<RegisterForm register={register} alert={alert} showAlert={showAlert} />
		</BaseAuth>
	);
}

export default Register;
