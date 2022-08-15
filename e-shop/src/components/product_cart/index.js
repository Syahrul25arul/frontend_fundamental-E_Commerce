import React from "react";
import { ImageProduct, ItemInfo, ItemPrice } from "./ProductCart.styles";
import { products } from "../../Images";
import ItemRating from "../items_rating";
import { ButtonAddToCart } from "../button";

function index() {
	return (
		<div>
			<a href="#">
				<ImageProduct src={products["1.png"]} alt="image product" />
			</a>
			<ItemInfo>
				<h6>Samsung Galaxy 10</h6>
				<ItemRating className="item-rating" />
				<ItemPrice className="item-price">
					<span>Rp. 3,200,000</span>
				</ItemPrice>

				<ButtonAddToCart className={`btn-add-to-cart`}>Add to cart</ButtonAddToCart>
			</ItemInfo>
		</div>
	);
}

export default index;
