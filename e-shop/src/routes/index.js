import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Authenticated from "../middleware/Authenticated";
import Guest from "../middleware/Guest";

function index() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="login"
					element={
						<Guest>
							<Login />
						</Guest>
					}
				/>
				<Route
					path="register"
					element={
						<Guest>
							<Register />
						</Guest>
					}
				/>
				<Route path="product" element={<ProductDetail />} />
				<Route
					path="cart"
					element={
						<Authenticated>
							<Cart />
						</Authenticated>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default index;
