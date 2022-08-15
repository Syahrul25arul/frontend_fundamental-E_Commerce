import React from "react";
import Layouts from "../components/layouts/Layouts";
import TopSale from "../components/section_top_sale";
import SectionProductDetail from "../components/section_product_detail";
import SectionProductDescription from "../components/section_product_description";

function ProductDetail() {
	return (
		<Layouts title={`Product Detail`}>
			<SectionProductDetail />
			<SectionProductDescription />
			<TopSale />
		</Layouts>
	);
}

export default ProductDetail;
