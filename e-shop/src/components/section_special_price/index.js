import React, { useEffect, useState } from "react";
import { CategoryButton, ContainerAllCategory, ContainerCategory, ContainerItem, Section } from "./SectionSpecialPrice.styles";
import CartWithBorder from "../card_with_border";
import Product from "../product_cart";

function Index({ loading, products }) {
	const [dataProduct, setDataProduct] = useState([]);
	const filterByCategory = (category = "") => {
		category === "" ? setDataProduct(products) : setDataProduct(products.filter((p) => p.produsen == category));
	};

	useEffect(() => {
		if (!loading) setDataProduct(products);
	}, [loading]);
	return (
		<Section id="products">
			<ContainerAllCategory>
				<h4 className="font-rubik">All Product</h4>
				<ContainerCategory className="font-baloo">
					<CategoryButton onClick={() => filterByCategory()} type="button">
						All Brand
					</CategoryButton>
					<CategoryButton onClick={() => filterByCategory("apple")} type="button">
						Apple
					</CategoryButton>
					<CategoryButton onClick={() => filterByCategory("samsung")} type="button">
						Samsung
					</CategoryButton>
					<CategoryButton onClick={() => filterByCategory("redmi")} type="button">
						Redmi
					</CategoryButton>
				</ContainerCategory>
			</ContainerAllCategory>
			<ContainerItem>
				{loading ? (
					<div className="loading">
						<h5>Loading...</h5>
					</div>
				) : (
					dataProduct.map((product, i) => (
						<CartWithBorder key={i}>
							<Product {...product} />
						</CartWithBorder>
					))
				)}
			</ContainerItem>
		</Section>
	);
}

export default Index;
