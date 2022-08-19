import React from "react";
import BaseLogin from "./BaseLogin";
import { bannner } from "../../Images";
import { AuthContainer } from "./BaseAuth.styles";
function BaseAuth({ children }) {
	return (
		<AuthContainer bgImage={bannner["bg_img.jpg"]}>
			<div className="container">
				<div className="row login-box">
					<BaseLogin />
					{children}
				</div>
			</div>
		</AuthContainer>
	);
}

export default BaseAuth;
