import React from "react";
import { ImageProduct, ItemInfo, Product } from "./ProductCart.styles";
import ImageProductSrc from "../../assets/products/1.png";
import ItemRating from "../items_rating";

function index() {
	return (
		<Product>
			<a href="#">
				<ImageProduct src={ImageProductSrc} />
			</a>
			<ItemInfo>
				<h6>Samsung Galaxy 10</h6>
				<ItemRating />
			</ItemInfo>
		</Product>
	);
}

export default index;
