import React, { useEffect, useRef } from "react";
import Layouts from "../components/layouts/Layouts";
import SectionTopSale from "../components/section_top_sale";
import SectionCart from "../components/section_cart";
import { useProducts } from "../hooks/useProductFetch";
import { useSelector } from "react-redux";
import { selectCart } from "../container/cartSlice";
import { useCartHooks } from "../service/useCartHooks";
function Cart() {
	const [isLoading, data, getAllProduct] = useProducts();
	const { cart } = useSelector(selectCart);
	const intialState = useRef(true);

	useEffect(() => {
		if (data.length < 1 && intialState.current) {
			intialState.current = false;
			getAllProduct(1, 12, "", "");
		}
	}, [data.length, getAllProduct]);
	return (
		<Layouts title={`Cart`}>
			<SectionCart cart={cart} />
			<SectionTopSale loading={isLoading} products={data} />
		</Layouts>
	);
}

export default Cart;
