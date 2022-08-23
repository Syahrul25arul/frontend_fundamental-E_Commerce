import React, { useEffect } from "react";
import Layouts from "../components/layouts/Layouts";
import TopSale from "../components/section_top_sale";
import SectionProductDetail from "../components/section_product_detail";
import SectionProductDescription from "../components/section_product_description";
import { useProducts, useDetailProducts } from "../hooks/useProductFetch";
import { useParams } from "react-router-dom";

function ProductDetail() {
	const [isLoading, data, getAllProduct] = useProducts();
	const [loading, dataDetail, getDetailProduct] = useDetailProducts();
	const { id } = useParams();
	useEffect(() => {
		if (data.length < 1) {
			getAllProduct(1, 12, "", "");
		}
	}, [data.length, getAllProduct]);

	useEffect(() => {
		getDetailProduct(id);
	}, [id]);
	return (
		<Layouts title={`Product Detail`}>
			<SectionProductDetail loading={loading} product={dataDetail} />
			<SectionProductDescription loading={loading} />
			<TopSale products={data} loading={isLoading} />
		</Layouts>
	);
}

export default ProductDetail;
