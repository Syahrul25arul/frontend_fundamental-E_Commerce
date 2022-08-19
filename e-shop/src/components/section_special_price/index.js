import React from "react";
import { CategoryButton, ContainerAllCategory, ContainerCategory, ContainerItem, Section } from "./SectionSpecialPrice.styles";
import CartWithBorder from "../card_with_border";
import Product from "../product_cart";

function index() {
	return (
		<Section id="products">
			<ContainerAllCategory>
				<h4 className="font-rubik">Special Price</h4>
				<ContainerCategory className="font-baloo">
					<CategoryButton type="button">All Brand</CategoryButton>
					<CategoryButton type="button">Apple</CategoryButton>
					<CategoryButton type="button">Samsung</CategoryButton>
					<CategoryButton type="button">Redmi</CategoryButton>
				</ContainerCategory>
			</ContainerAllCategory>
			<ContainerItem>
				<CartWithBorder>
					<Product />
				</CartWithBorder>
				<CartWithBorder>
					<Product />
				</CartWithBorder>
				<CartWithBorder>
					<Product />
				</CartWithBorder>
				<CartWithBorder>
					<Product />
				</CartWithBorder>
				<CartWithBorder>
					<Product />
				</CartWithBorder>
			</ContainerItem>
		</Section>
	);
}

export default index;
