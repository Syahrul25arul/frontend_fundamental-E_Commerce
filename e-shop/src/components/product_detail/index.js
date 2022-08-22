import React from "react";
import { DetailButton, ProductDetail, ProductImage } from "./ProductDetail.styles";
import { products } from "../../Images";
import { ButtonAddToCartDetail, ButtonProcedToBuyDetail } from "../button";

function index() {
	return (
		<ProductDetail>
			<ProductImage src={products["1.png"]} />
			<DetailButton>
				<ButtonProcedToBuyDetail className={`btn`}>Proceed to Buy</ButtonProcedToBuyDetail>
				<ButtonAddToCartDetail className={`btn`}>Add to Cart</ButtonAddToCartDetail>
			</DetailButton>
		</ProductDetail>
	);
}

export default index;
