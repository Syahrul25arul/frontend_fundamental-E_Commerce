import React from "react";
import { ContainerButtonQty, Qty, QtyButton } from "./Quantity.styles";

function index({ handleIncementQuantity, handleDecrementQuantity, quantity }) {
	return (
		<Qty>
			<h6 className="font-baloo">Qty</h6>
			<ContainerButtonQty className="font-rale">
				<QtyButton onClick={handleIncementQuantity}>
					<i className="fas fa-angle-up"></i>
				</QtyButton>
				<input type="text" disabled value={quantity} placeholder="1" min="1" />
				<QtyButton onClick={handleDecrementQuantity}>
					<i className="fas fa-angle-down"></i>
				</QtyButton>
			</ContainerButtonQty>
		</Qty>
	);
}

export default index;
