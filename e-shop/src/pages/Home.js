import React from "react";
import SectionBanner from "../components/section_banner_area";
import SectionTopSale from "../components/section_top_sale";
import SectionBannerAdds from "../components/section_banner_adds";
import SectionAllProduct from "../components/section_special_price";
import Layouts from "../components/layouts/Layouts";

function Home() {
	return (
		<Layouts title={`Home`}>
			<SectionBanner />
			<SectionTopSale />
			<SectionBannerAdds />
			<SectionAllProduct />
		</Layouts>
	);
}

export default Home;
