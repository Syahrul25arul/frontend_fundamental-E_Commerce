import React from "react";
// import Error from "../Error";

export default function LoginForm() {
	// let {setEmail, setPassword, handlerSubmit, setErrorMessage} = props.loginDispatch
	// let {email, password, errorMessage} = props.loginData

	return (
		<div className="col-sm-7 bg-color align-self-center">
			<div className="form-section">
				<div className="title">
					<h3>Sign into your account</h3>
				</div>
				<div className="login-inner-form">
					<form method="POST">
						<div className="form-group form-box">
							<input type="text" name="email" id="email" className="input-text" placeholder="Email addres" />
							<i className="icon email"></i>
						</div>
						<div className="form-group form-box">
							<input type="password" name="password" id="password" className="input-text" placeholder="Password" />
							<i className="icon lock"></i>
						</div>

						{/* {errorMessage && <Error clearError={() => setErrorMessage(undefined)} errorMessage={errorMessage} />} */}

						<div className="form-group">
							<button className="btn primary-btn">Login</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
