import React from "react";
import { DetailButton, ProductDetail, ProductImage } from "./ProductDetail.styles";
import { products } from "../../Images";
import { ButtonAddToCartDetail, ButtonProcedToBuyDetail } from "../button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCart } from "../../container/cartSlice";

function Index({ image, loading, handleAddServiceToCart }) {
	return loading ? (
		""
	) : (
		<ProductDetail>
			<ProductImage src={products[image]} />
			<DetailButton>
				<ButtonProcedToBuyDetail className={`button`}>Proceed to Buy</ButtonProcedToBuyDetail>
				<ButtonAddToCartDetail handleAddServiceToCart={handleAddServiceToCart} className={`button`}>
					Add to Cart
				</ButtonAddToCartDetail>
			</DetailButton>
		</ProductDetail>
	);
}

export default Index;
