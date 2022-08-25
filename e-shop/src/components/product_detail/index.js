import React from "react";
import { DetailButton, ProductDetail, ProductImage } from "./ProductDetail.styles";
import { products } from "../../Images";
import { ButtonAddToCartDetail, ButtonProcedToBuyDetail } from "../button";
import Alert from "../alert";

function Index({ image, loading, handleAddServiceToCart, alert, removeAlert }) {
	return loading ? (
		""
	) : (
		<ProductDetail>
			{alert.show && <Alert {...alert} removeAlert={removeAlert} cls={`mt-20`} />}
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
