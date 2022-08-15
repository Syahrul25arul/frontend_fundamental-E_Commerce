import React from "react";
import Layouts from "../components/layouts/Layouts";
import SectionTopSale from "../components/section_top_sale";
import SectionCart from "../components/section_cart";
function Cart() {
	return (
		<Layouts title={`Cart`}>
			<SectionCart />
			<SectionTopSale />
		</Layouts>
	);
}

export default Cart;
