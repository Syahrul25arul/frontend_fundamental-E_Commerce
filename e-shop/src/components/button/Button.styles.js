import styled from "styled-components";

export const ButtonAddToCart = styled.button`
	color: rgba(0, 0, 0, 0.6);
	cursor: pointer;
	transition: transform 0.5s ease;
	padding: 8px;
	border: none;
	border-radius: 5px;

	:hover {
		background: #a77d00;
		color: rgb(48, 48, 48);
		transform: scale(1.05);
	}

	@media only screen and (max-width: 397px) {
		padding: 5px;
		font-size: 0.6em;
	}
`;
export const ButtonSubscribe = styled.button`
	padding: 6px;
	border-radius: 5px;
	background-color: #007bff;
	border: none;
	color: white;
	font-size: 1em;
	cursor: pointer;

	:hover {
		background-color: #0064cf;
		color: rgba(255, 255, 255, 0.654);
	}

	@media only screen and (max-width: 597px) {
		padding: 8px;
		font-size: 0.7em;
		width: 40%;
	}

	@media only screen and (max-width: 414px) {
		padding: 7px;
		font-size: 0.6em;
		width: 50%;
	}

	@media only screen and (max-width: 397px) {
		padding: 7px;
		font-size: 0.6em;
		width: 60%;
	}
`;

export const ButtonAddToCartDetail = styled.button`
	background-color: #ffc107;

	:hover {
		background-color: #cf9c04;
	}
`;

export const ButtonProcedToBuyDetail = styled.button`
	background-color: #c82333;
	color: white;

	:hover {
		background-color: #aa1524;
		color: white;
	}
`;
