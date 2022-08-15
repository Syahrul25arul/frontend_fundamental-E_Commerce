import React from "react";
import { ItemRating } from "./ItemRating.styles";

function index({ className }) {
	return (
		<ItemRating className={`color-yellow ${className}`}>
			<span>
				<i className="fas fa-star"></i>
			</span>
			<span>
				<i className="fas fa-star"></i>
			</span>
			<span>
				<i className="fas fa-star"></i>
			</span>
			<span>
				<i className="fas fa-star"></i>
			</span>
			<span>
				<i className="far fa-star"></i>
			</span>
		</ItemRating>
	);
}

export default index;
