import React from "react";
import { ContainerCart, ContainerTopSale, Hr, Section } from "./TopSale.styles";
import Cart from "../card_no_border";

function index() {
	return (
		<Section>
			<ContainerTopSale>
				<h4 className="font-rubik">Top Sale</h4>
				<Hr />
			</ContainerTopSale>
			<ContainerCart>
				<Cart></Cart>
			</ContainerCart>
		</Section>
	);
}

export default index;
