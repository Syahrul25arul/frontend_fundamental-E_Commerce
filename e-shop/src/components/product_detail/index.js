import React from "react";
import { DetailButton, ProductDetail, ProductImage } from "./ProductDetail.styles";
import { products } from "../../Images";
import { ButtonAddToCartDetail, ButtonProcedToBuyDetail } from "../button";
import Spinner from "../spinner";

function index({ image, loading }) {
	return loading ? (
		""
	) : (
		<ProductDetail>
			<ProductImage src={products[image]} />
			<DetailButton>
				<ButtonProcedToBuyDetail className={`btn`}>Proceed to Buy</ButtonProcedToBuyDetail>
				<ButtonAddToCartDetail className={`btn`}>Add to Cart</ButtonAddToCartDetail>
			</DetailButton>
		</ProductDetail>
	);
}

export default index;
