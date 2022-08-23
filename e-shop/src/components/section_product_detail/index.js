import React from "react";
import { Section } from "./ProductDetail.styles";
import ProductDetail from "../product_detail";
import ProductInfo from "../product_info";

function index({ product, loading }) {
	// console.log(product);
	return (
		<Section>
			<ProductDetail image={product.image} />
			<ProductInfo loading={loading} {...product} />
		</Section>
	);
}

export default index;
