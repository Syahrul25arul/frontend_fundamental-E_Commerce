import React from "react";
import { Button, ImageProduct, ItemInfo, ItemPrice } from "./ProductCart.styles";
import { products } from "../../Images";
import ItemRating from "../items_rating";
import { useNavigate } from "react-router-dom";

function Index({ product_name, price, image, rating, id }) {
	const navigate = useNavigate();
	const toProductDetail = () => {
		navigate(`/products/${id}`);
	};

	return (
		<div onClick={toProductDetail}>
			<Button>
				<ImageProduct src={products[image]} alt={product_name} />
			</Button>
			<ItemInfo>
				<h6>{product_name}</h6>
				<ItemRating className="item-rating" rating={rating} />
				<ItemPrice className="item-price">
					<span>Rp. {price}</span>
				</ItemPrice>
			</ItemInfo>
		</div>
	);
}

export default Index;
