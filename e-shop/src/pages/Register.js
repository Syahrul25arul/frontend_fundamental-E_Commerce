import React from "react";
import BaseAuth from "../components/auth/baseAuth";
import RegisterForm from "../components/auth/RegisterForm";

function Register() {
	return (
		<BaseAuth>
			<RegisterForm />
		</BaseAuth>
	);
}

export default Register;
