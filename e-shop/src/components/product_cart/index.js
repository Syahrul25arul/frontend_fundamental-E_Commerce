import React from "react";
import { ImageProduct, ItemInfo, ItemPrice } from "./ProductCart.styles";
import { products } from "../../Images";
import ItemRating from "../items_rating";
import { ButtonAddToCart } from "../button";
import { useNavigate } from "react-router-dom";

function Index({ product_name, price, image, rating }) {
	const navigate = useNavigate();
	const toProductDetail = () => {
		navigate("/product");
	};
	return (
		<div onClick={toProductDetail}>
			<a href="#">
				<ImageProduct src={products[image]} alt={product_name} />
			</a>
			<ItemInfo>
				<h6>{product_name}</h6>
				<ItemRating className="item-rating" rating={rating} />
				<ItemPrice className="item-price">
					<span>Rp. {price}</span>
				</ItemPrice>

				<ButtonAddToCart className={`btn-add-to-cart`}>Add to cart</ButtonAddToCart>
			</ItemInfo>
		</div>
	);
}

export default Index;
