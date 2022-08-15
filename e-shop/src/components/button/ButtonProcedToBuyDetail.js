import React from "react";
import { ButtonProcedToBuyDetail } from "./Button.styles";

function FunctionButtonProcedToBuy({ children, className }) {
	return <ButtonProcedToBuyDetail className={className}>{children}</ButtonProcedToBuyDetail>;
}

export default FunctionButtonProcedToBuy;
