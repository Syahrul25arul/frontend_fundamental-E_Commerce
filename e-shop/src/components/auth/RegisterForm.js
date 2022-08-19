import React, { useState } from "react";

export default function RegisterForm({ register }) {
	// let {setUsername, setEmail, setPassword, setPasswordCheck, handlerSubmit} = props.registerDispatch
	// let {username, email, passwordCheck, password} = props.registerData
	const [registerData, setRegisterData] = useState({
		username: "",
		email: "",
		password: "",
		passwordConfirm: ""
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await register(registerData);
			clearForm();
		} catch (error) {
			console.log(error.message);
			clearForm();
		}
	};

	const clearForm = () => {
		setRegisterData({
			username: "",
			email: "",
			password: "",
			passwordConfirm: ""
		});
	};

	return (
		<div className="col-sm-7 bg-color align-self-center">
			<div className="form-section">
				<div className="title">
					<h3>Create a new account</h3>
				</div>
				<div className="login-inner-form">
					<form method="POST" onSubmit={handleSubmit}>
						<div className="form-group form-box">
							<input type="text" name="username" id="username" className="input-text" placeholder="Username" value={registerData.username} onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })} />
							<i className="icon user"></i>
						</div>
						<div className="form-group form-box">
							<input type="text" name="email" id="email" className="input-text" placeholder="Email" value={registerData.email} onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })} />
							<i className="icon email"></i>
						</div>
						<div className="form-group form-box">
							<input type="password" name="password" id="password" className="input-text" placeholder="Password" value={registerData.password} onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })} />
							<i className="icon lock"></i>
						</div>
						<div className="form-group form-box">
							<input type="password" name="password_check" id="password_check" className="input-text" placeholder="Verify password" value={registerData.passwordConfirm} onChange={(e) => setRegisterData({ ...registerData, passwordConfirm: e.target.value })} />
							<i className="icon lock"></i>
						</div>

						<div className="form-group">
							<button type="submit" className="btn primary-btn">
								Register
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
