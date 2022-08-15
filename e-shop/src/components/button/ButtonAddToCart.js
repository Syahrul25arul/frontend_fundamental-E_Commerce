import React from "react";
import { ButtonAddToCart } from "./Button.styles";

function FunctionButtonAddToCart({ children, className }) {
	return (
		<ButtonAddToCart type="button" className={`color-yellow-bg ${className}`}>
			{children}
		</ButtonAddToCart>
	);
}

export default FunctionButtonAddToCart;
