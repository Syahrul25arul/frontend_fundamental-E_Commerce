import React from "react";
import { Section } from "./ProductDetail.styles";
import ProductDetail from "../product_detail";
import ProductInfo from "../product_info";

function index() {
	return (
		<Section>
			<ProductDetail />
			<ProductInfo />
		</Section>
	);
}

export default index;
