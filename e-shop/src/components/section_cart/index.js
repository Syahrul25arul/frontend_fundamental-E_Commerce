import React from "react";
import { ButtonCartDelete, CartItemImage, CartItemsInfo, CartItemsPrice, CartSubtotal, ContainerCart, ContainerCartAllItems, ContainerItems, ContainerRating, QtyButtonCart, QtyCart, SectionCart, SubtotalPrice } from "./SectionCart.styles";
import { products } from "../../Images";
import ItemRating from "../items_rating";

function index() {
	return (
		<SectionCart>
			<h5 className="font-baloo">Shopping Cart</h5>
			<ContainerCart>
				<ContainerCartAllItems>
					<hr />
					<ContainerItems>
						<CartItemImage>
							<img src={products["1.png"]} alt="products" />
						</CartItemImage>
						<CartItemsInfo className="font-rale">
							<h5 className="font-baloo">Samsung Galaxy 10</h5>
							<small>by Samsung</small>
							<ContainerRating>
								<ItemRating className={`item-rating`} />
								<a href="#" className="font-rale">
									20,534 ratings
								</a>
							</ContainerRating>
							<QtyCart>
								<QtyButtonCart className="font-rale">
									<button type="button" data-id="pro1">
										<i className="fas fa-angle-up"></i>
									</button>
									<input type="text" data-id="pro1" disabled value="1" placeholder="1" />
									<button data-id="pro1">
										<i className="fas fa-angle-down"></i>
									</button>
								</QtyButtonCart>
								<ButtonCartDelete className="font-baloo">Delete</ButtonCartDelete>
							</QtyCart>
						</CartItemsInfo>
						<CartItemsPrice>
							<div className="font-baloo">
								Rp.<span> 2,234,234</span>
							</div>
						</CartItemsPrice>
					</ContainerItems>
					<hr />
					<ContainerItems>
						<CartItemImage>
							<img src={products["1.png"]} alt="products" />
						</CartItemImage>
						<CartItemsInfo className="font-rale">
							<h5 className="font-baloo">Samsung Galaxy 10</h5>
							<small>by Samsung</small>
							<ContainerRating>
								<ItemRating className={`item-rating`} />
								<a href="#" className="font-rale">
									20,534 ratings
								</a>
							</ContainerRating>
							<QtyCart>
								<QtyButtonCart className="font-rale">
									<button type="button" data-id="pro1">
										<i className="fas fa-angle-up"></i>
									</button>
									<input type="text" data-id="pro1" disabled value="1" placeholder="1" />
									<button data-id="pro1">
										<i className="fas fa-angle-down"></i>
									</button>
								</QtyButtonCart>
								<ButtonCartDelete className="font-baloo">Delete</ButtonCartDelete>
							</QtyCart>
						</CartItemsInfo>
						<CartItemsPrice>
							<div className="font-baloo">
								$<span>152</span>
							</div>
						</CartItemsPrice>
					</ContainerItems>
				</ContainerCartAllItems>
				<CartSubtotal>
					<h6 className="font-rale">
						<i className="fas fa-check"></i> Your order is eligible for FREE Delivery.
					</h6>
					<SubtotalPrice>
						<h5 className="font-baloo font-size-20">
							Subtotal (2 item):&nbsp;{" "}
							<span>
								$<span id="deal-price">152.00</span>{" "}
							</span>
						</h5>
						<button type="submit">Proceed to Buy</button>
					</SubtotalPrice>
				</CartSubtotal>
			</ContainerCart>
		</SectionCart>
	);
}

export default index;
