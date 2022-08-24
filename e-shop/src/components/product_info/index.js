import React, { useEffect } from "react";
import { Button, Color, ColorAndQuantity, ColorButton, ContainerItemRating, ContainerSizeButton, Hr, OrderDetail, PolicyIcon, PolicyInfo, PolicyInfoDetail, ProductInfo, Size, SizeButton, TableProduct } from "./ProductInfo.styles";
import ItemRating from "../items_rating";
import Qty from "../quantity";
import Spinner from "../spinner";

function Index({ loading, product_name, produsen, number_ratings, rating, answered_quetions, mrp, price, color, size, save, id, handleIncementQuantity, handleDecrementQuantity, quantity }) {
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	}, [id]);
	return loading ? (
		<div className="loading">
			<Spinner />
		</div>
	) : (
		<ProductInfo>
			<h5 className="font-baloo">{product_name}</h5>
			<small>by {produsen}</small>
			<ContainerItemRating>
				<ItemRating className={`item-rating`} rating={rating} />
				<a href="#" className="px-2 font-rale font-size-14">
					{number_ratings} ratings | {answered_quetions > 9999 ? "9999" : answered_quetions}+ answered questions
				</a>
			</ContainerItemRating>
			<Hr />
			<TableProduct>
				<thead>
					<tr className="font-rale">
						<td>M.R.P:</td>
						<td>
							<span> $ {mrp}</span>
						</td>
					</tr>
				</thead>
				<tbody>
					<tr className="font-rale">
						<td>Deal Price:&nbsp;</td>
						<td>
							$<span>{price}</span>
							<small>&nbsp;&nbsp;Sudah termasuk pajak</small>
						</td>
					</tr>
					<tr className="font-rale">
						<td>You Save:&nbsp;</td>
						<td>
							<span> $ {save}</span>
						</td>
					</tr>
				</tbody>
			</TableProduct>
			<PolicyInfo>
				<PolicyInfoDetail>
					<PolicyIcon className="color-second">
						<span className="fas fa-retweet"></span>
					</PolicyIcon>
					<a href="#" className="font-rale">
						10 Days <br />
						Replacement
					</a>
				</PolicyInfoDetail>
				<PolicyInfoDetail>
					<PolicyIcon className="color-second">
						<span className="fas fa-truck"></span>
					</PolicyIcon>
					<a href="#" className="font-rale">
						CAP <br />
						Deliverd
					</a>
				</PolicyInfoDetail>
				<PolicyInfoDetail>
					<PolicyIcon className="color-second">
						<span className="fas fa-check-double"></span>
					</PolicyIcon>
					<a href="#" className="font-rale">
						1 Year <br />
						Warranty
					</a>
				</PolicyInfoDetail>
			</PolicyInfo>
			<Hr />
			<OrderDetail className="font-rale">
				<small>Delivery by : Mar 29 - Apr 1</small>
				<small>
					Sold by <a href="#">CAP Shop </a>({rating} out of 5 | 18,198 ratings)
				</small>
				<small>
					<i className="fas fa-map-marker-alt color-primary"></i>&nbsp;&nbsp;Deliver to Customer - 424201
				</small>
			</OrderDetail>
			<ColorAndQuantity>
				<Color>
					<h6 className="font-baloo">Color:</h6>
					<ColorButton>
						{color?.map((c, i) => (
							<Button key={i} className={`color-${c}-bg`}></Button>
						))}
					</ColorButton>
				</Color>
				<Qty handleIncementQuantity={handleIncementQuantity} handleDecrementQuantity={handleDecrementQuantity} quantity={quantity} />
			</ColorAndQuantity>
			<Size>
				<h6 className="font-baloo">Size :</h6>
				<ContainerSizeButton className="font-rubik">
					{size?.map((s, i) => (
						<SizeButton key={i}>{s}GB RAM</SizeButton>
					))}
				</ContainerSizeButton>
			</Size>
		</ProductInfo>
	);
}

export default Index;
