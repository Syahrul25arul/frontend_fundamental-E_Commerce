import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
// import Error from "../Error";

export default function LoginForm({ login }) {
	// let {setEmail, setPassword, handlerSubmit, setErrorMessage} = props.loginDispatch
	// let {email, password, errorMessage} = props.loginData
	const [loginData, setLoginData] = useState({
		email: "",
		password: ""
	});

	const [user, loading, errorAuth] = useAuthState(auth);

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			login(loginData);
			clearForm();
		} catch (error) {
			console.log(error.message);
			clearForm();
		}
	};

	const clearForm = () => {
		setLoginData({
			email: "",
			password: ""
		});
	};

	return (
		<div className="col-sm-7 bg-color align-self-center">
			<div className="form-section">
				<div className="title">
					<h3>Sign into your account</h3>
				</div>
				<div className="login-inner-form">
					<form method="POST" onSubmit={handleSubmit}>
						<div className="form-group form-box">
							<input type="text" name="email" id="email" className="input-text" placeholder="Email addres" value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
							<i className="icon email"></i>
						</div>
						<div className="form-group form-box">
							<input
								type="password"
								name="password"
								id="password"
								className="input-text"
								placeholder="Password"
								value={loginData.password}
								onChange={(e) =>
									setLoginData({
										...loginData,
										password: e.target.value
									})
								}
							/>
							<i className="icon lock"></i>
						</div>

						{/* {errorMessage && <Error clearError={() => setErrorMessage(undefined)} errorMessage={errorMessage} />} */}

						<div className="form-group">
							<button type="submit" className="btn primary-btn">
								Login
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
