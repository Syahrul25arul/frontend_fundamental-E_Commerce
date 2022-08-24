import React from "react";
import { ButtonCartDelete, CartItemImage, CartItemsInfo, CartItemsPrice, CartSubtotal, ContainerCart, ContainerCartAllItems, ContainerItems, ContainerRating, QtyButtonCart, QtyCart, SectionCart, SubtotalPrice } from "./SectionCart.styles";
import { products } from "../../Images";
import ItemRating from "../items_rating";

function index({ cart }) {
	const subTotalPrice = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
	return (
		<SectionCart>
			<h5 className="font-baloo">Shopping Cart</h5>
			<ContainerCart>
				<ContainerCartAllItems>
					{cart.map((c, i) => (
						<div key={i}>
							<hr />
							{console.log(c.quantity)}
							<ContainerItems>
								<CartItemImage>
									<img src={products[c.image]} alt="products" />
								</CartItemImage>
								<CartItemsInfo className="font-rale">
									<h5 className="font-baloo">{c.product_name}</h5>
									<small>by {c.produsen}</small>
									<ContainerRating>
										<ItemRating className={`item-rating`} rating={c.rating} />
										<a href="#" className="font-rale">
											{c.number_ratings} ratings
										</a>
									</ContainerRating>
									<QtyCart>
										<QtyButtonCart className="font-rale">
											<button type="button" data-id="pro1">
												<i className="fas fa-angle-up"></i>
											</button>
											<input type="text" data-id="pro1" disabled value={c.quantity} placeholder="1" />
											<button data-id="pro1">
												<i className="fas fa-angle-down"></i>
											</button>
										</QtyButtonCart>
										<ButtonCartDelete className="font-baloo">Delete</ButtonCartDelete>
									</QtyCart>
								</CartItemsInfo>
								<CartItemsPrice>
									<div className="font-baloo">
										$<span> {c.price}</span>
									</div>
								</CartItemsPrice>
							</ContainerItems>
						</div>
					))}
				</ContainerCartAllItems>
				<CartSubtotal>
					<h6 className="font-rale">
						<i className="fas fa-check"></i> Your order is eligible for FREE Delivery.
					</h6>
					<SubtotalPrice>
						<h5 className="font-baloo font-size-20">
							Subtotal ({cart.length} item):&nbsp;{" "}
							<span>
								$<span id="deal-price">{subTotalPrice}.00</span>{" "}
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
