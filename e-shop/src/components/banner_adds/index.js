import React from "react";
import { ContainerBannerAdds } from "./BannerAdds.styles";
import { bannner } from "../../Images";

function index() {
	return (
		<ContainerBannerAdds>
			<img src={bannner["banner1-cr-500x150.jpg"]} alt="banner1" />
			<img src={bannner["banner2-cr-500x150.jpg"]} alt="Banner2" />
		</ContainerBannerAdds>
	);
}

export default index;
