import styled from "styled-components";

export const Qty = styled.div`
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;

	h6 {
		margin-right: 10px;
		font-size: 0.8em;
		font-weight: lighter;
	}

	@media only screen and (min-width: 1024px) {
		margin-left: 20px;
	}
`;

export const ContainerButtonQty = styled.div`
	display: flex;
	height: 30px;

	input {
		width: 30%;
	}

	@media only screen and (min-width: 425px) {
		input {
			width: unset;
		}
	}

	@media only screen and (min-width: 1024px) {
		input {
			width: 30%;
		}
	}
`;

export const QtyButton = styled.button`
	padding: 0 7px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	cursor: pointer;

	:hover {
		background-color: rgb(192, 190, 190);
	}
`;
