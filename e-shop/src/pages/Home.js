import React, { useEffect } from "react";
import SectionBanner from "../components/section_banner_area";
import SectionTopSale from "../components/section_top_sale";
import SectionBannerAdds from "../components/section_banner_adds";
import SectionAllProduct from "../components/section_special_price";
import Layouts from "../components/layouts/Layouts";
import { useProducts } from "../hooks/useProductFetch";

function Home() {
	const [isLoading, data, getAllProduct] = useProducts();
	useEffect(() => {
		if (data.length < 1) {
			getAllProduct(1, 12, "", "");
		}
	}, [data.length, getAllProduct]);

	return (
		<Layouts title={`Home`}>
			<SectionBanner />
			<SectionTopSale products={data} loading={isLoading} />
			<SectionBannerAdds />
			<SectionAllProduct products={data} loading={isLoading} />
		</Layouts>
	);
}

export default Home;
