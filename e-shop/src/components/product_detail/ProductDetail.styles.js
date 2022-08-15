import styled from "styled-components";

export const ProductDetail = styled.div`
	width: 100%;
	flex: 0.5;
	align-self: flex-start;
	margin-top: -30px;
`;

export const ProductImage = styled.img`
	width: 100%;
	object-fit: contain;
`;

export const DetailButton = styled.div`
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
	/* padding: 0 3rem; */
	font-size: 20px;

	.btn {
		padding: 12px 0;
		cursor: pointer;
		font-size: 0.7em;
		margin-left: 5px;
		border: none;
		border-radius: 5px;
		flex: 0.5;
	}
`;
