import React from "react";
import { Button, Color, ColorAndQuantity, ColorButton, ContainerItemRating, ContainerSizeButton, Hr, OrderDetail, PolicyIcon, PolicyInfo, PolicyInfoDetail, ProductInfo, Size, SizeButton, TableProduct } from "./ProductInfo.styles";
import ItemRating from "../items_rating";
import Qty from "../quantity";

function index() {
	return (
		<ProductInfo>
			<h5 className="font-baloo">Samsung Galaxy 10</h5>
			<small>by Samsung</small>
			<ContainerItemRating>
				<ItemRating className={`item-rating`} />
				<a href="#" className="px-2 font-rale font-size-14">
					20,534 ratings | 1000+ answered questions
				</a>
			</ContainerItemRating>
			<Hr />
			<TableProduct>
				<tr className="font-rale">
					<td>M.R.P:</td>
					<td>
						<span> Rp. 3.800.000</span>
					</td>
				</tr>
				<tr className="font-rale">
					<td>Deal Price:</td>
					<td>
						Rp.<span> 3.500.000</span>
						<small>&nbsp;&nbsp;Sudah termasuk pajak</small>
					</td>
				</tr>
				<tr className="font-rale">
					<td>You Save:</td>
					<td>
						<span> Rp. 300.000</span>
					</td>
				</tr>
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
					Sold by <a href="#">CAP Shop </a>(4.5 out of 5 | 18,198 ratings)
				</small>
				<small>
					<i class="fas fa-map-marker-alt color-primary"></i>&nbsp;&nbsp;Deliver to Customer - 424201
				</small>
			</OrderDetail>
			<ColorAndQuantity>
				<Color>
					<h6 className="font-baloo">Color:</h6>
					<ColorButton>
						<Button className="color-yellow-bg"></Button>
						<Button className="color-primary-bg"></Button>
						<Button className="color-second-bg"></Button>
					</ColorButton>
				</Color>
				<Qty />
			</ColorAndQuantity>
			<Size>
				<h6 class="font-baloo">Size :</h6>
				<ContainerSizeButton className="font-rubik">
					<SizeButton>4GB RAM</SizeButton>
					<SizeButton>6GB RAM</SizeButton>
					<SizeButton>8GB RAM</SizeButton>
				</ContainerSizeButton>
			</Size>
		</ProductInfo>
	);
}

export default index;
