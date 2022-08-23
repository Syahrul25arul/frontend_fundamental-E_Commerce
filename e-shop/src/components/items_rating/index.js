import React from "react";
import { ItemRating } from "./ItemRating.styles";

function index({ className, rating }) {
	const mapItemRating = (rating) => {
		let ratingItem = [];
		for (let i = 1; i <= 5; i++) {
			i <= rating
				? ratingItem.push(
						<span key={i}>
							<i className="fas fa-star"></i>
						</span>
				  )
				: ratingItem.push(
						<span key={i}>
							<i className="far fa-star"></i>
						</span>
				  );
		}
		return ratingItem;
	};
	return <ItemRating className={`color-yellow ${className}`}>{mapItemRating(rating)}</ItemRating>;
}

export default index;
