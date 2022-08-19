import React from "react";
import BaseAuth from "../components/auth/baseAuth";
import RegisterForm from "../components/auth/RegisterForm";
import useFirebaseHooks from "../config/firebase/useFirebaseHooks";

function Register() {
	const { register } = useFirebaseHooks();
	return (
		<BaseAuth>
			<RegisterForm register={register} />
		</BaseAuth>
	);
}

export default Register;
