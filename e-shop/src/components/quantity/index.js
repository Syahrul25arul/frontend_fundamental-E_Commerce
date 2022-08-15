import React from "react";
import { ContainerButtonQty, Qty, QtyButton } from "./Quantity.styles";

function index() {
	return (
		<Qty>
			<h6 class="font-baloo">Qty</h6>
			<ContainerButtonQty className="font-rale">
				<QtyButton>
					<i class="fas fa-angle-up"></i>
				</QtyButton>
				<input type="text" disabled value="1" placeholder="1" min="1" />
				<QtyButton>
					<i class="fas fa-angle-down"></i>
				</QtyButton>
			</ContainerButtonQty>
		</Qty>
	);
}

export default index;
