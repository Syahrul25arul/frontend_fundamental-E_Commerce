import React from "react";
import BaseAuth from "../components/auth/baseAuth";
import LoginForm from "../components/auth/loginForm";

function Login() {
	return (
		<BaseAuth>
			<LoginForm />
		</BaseAuth>
	);
}

export default Login;
