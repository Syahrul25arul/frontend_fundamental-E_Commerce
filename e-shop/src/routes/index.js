import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";

function index() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="product" element={<ProductDetail />} />
				<Route path="cart" element={<Cart />} />
			</Routes>
		</BrowserRouter>
	);
}

export default index;
