import styled from "styled-components";

export const ProductDetail = styled.div`
	/* width: 100%; */
	flex: 0.5;
	/* align-self: flex-start; */
	margin-top: -30px;
	/* width: ; */

	@media only screen and (min-width: 1024px) {
		width: 100%;
		flex: 0.5;
		align-self: flex-start;
		/* margin-top: -30px; */
	}
`;

export const ProductImage = styled.img`
	width: 100%;
	object-fit: contain;
`;

export const DetailButton = styled.div`
	display: flex;
	justify-content: space-evenly;
	box-sizing: border-box;
	/* padding: 0 3rem; */
	font-size: 17px;

	.btn {
		padding: 8px 0;
		cursor: pointer;
		font-size: 0.7em;
		margin-left: 5px;
		border: none;
		border-radius: 5px;
		/* width: fit-content; */
		flex: 0.4;
	}

	@media only screen and (min-width: 1024px) {
		font-size: 20px;
		justify-content: space-between;

		.btn {
			padding: 12px 0;
			margin-left: 5px;
			flex: 0.5;
		}
	}
`;
