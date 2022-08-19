import React from "react";

export default function RegisterForm(props) {
	// let {setUsername, setEmail, setPassword, setPasswordCheck, handlerSubmit} = props.registerDispatch
	// let {username, email, passwordCheck, password} = props.registerData

	return (
		<div className="col-sm-7 bg-color align-self-center">
			<div className="form-section">
				<div className="title">
					<h3>Create a new account</h3>
				</div>
				<div className="login-inner-form">
					<form method="POST">
						<div className="form-group form-box">
							<input type="text" name="username" id="username" className="input-text" placeholder="Username" />
							<i className="icon user"></i>
						</div>
						<div className="form-group form-box">
							<input type="text" name="email" id="email" className="input-text" placeholder="Email" />
							<i className="icon email"></i>
						</div>
						<div className="form-group form-box">
							<input type="password" name="password" id="password" className="input-text" placeholder="Password" />
							<i className="icon lock"></i>
						</div>
						<div className="form-group form-box">
							<input type="password" name="password_check" id="password_check" className="input-text" placeholder="Verify password" />
							<i className="icon lock"></i>
						</div>

						<div className="form-group">
							<button className="btn primary-btn">Register</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
