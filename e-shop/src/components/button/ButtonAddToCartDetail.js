import React from "react";
import { ButtonAddToCartDetail } from "./Button.styles";

function FunctionButtonAddToCartDetail({ children, className }) {
	return <ButtonAddToCartDetail className={className}>{children}</ButtonAddToCartDetail>;
}

export default FunctionButtonAddToCartDetail;
