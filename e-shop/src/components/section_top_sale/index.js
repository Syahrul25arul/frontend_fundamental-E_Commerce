import React, { useEffect, useState } from "react";
import { ContainerCart, ContainerTopSale, Hr, Section } from "./TopSale.styles";
import Cart from "../card_no_border";
import Product from "../product_cart";

function Index({ loading, products }) {
	const [dataProduct, setDataProduct] = useState([]);

	useEffect(() => {
		if (!loading) setDataProduct(products.filter((p) => p.top_sale === true));
	}, [loading, products]);
	return (
		<Section>
			<ContainerTopSale>
				<h4 className="font-rubik">Top Sale</h4>
				<Hr />
			</ContainerTopSale>
			<ContainerCart>
				{loading ? (
					<div className="loading">
						<h5>Loading...</h5>
					</div>
				) : (
					dataProduct.map((product, i) => (
						<Cart key={i}>
							<Product {...product} />
						</Cart>
					))
				)}
			</ContainerCart>
		</Section>
	);
}

export default Index;
