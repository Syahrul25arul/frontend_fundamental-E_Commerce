import React from "react";
import { ButtonAddToCartDetail } from "./Button.styles";

function FunctionButtonAddToCartDetail({ children, className, handleAddServiceToCart }) {
	return (
		<ButtonAddToCartDetail onClick={handleAddServiceToCart} className={className}>
			{children}
		</ButtonAddToCartDetail>
	);
}

export default FunctionButtonAddToCartDetail;
