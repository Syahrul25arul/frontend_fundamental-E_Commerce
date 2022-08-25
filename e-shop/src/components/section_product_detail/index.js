import React from "react";
import { Section } from "./ProductDetail.styles";
import ProductDetail from "../product_detail";
import ProductInfo from "../product_info";

function index({ product, loading, handleAddServiceToCart, handleIncementQuantity, handleDecrementQuantity, quantity, alert, removeAlert }) {
	return (
		<Section>
			<ProductDetail image={product.image} loading={loading} handleAddServiceToCart={handleAddServiceToCart} alert={alert} removeAlert={removeAlert} />
			<ProductInfo loading={loading} {...product} handleIncementQuantity={handleIncementQuantity} handleDecrementQuantity={handleDecrementQuantity} quantity={quantity} />
		</Section>
	);
}

export default index;
