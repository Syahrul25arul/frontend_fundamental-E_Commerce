import styled from "styled-components";

export const Section = styled.section`
	padding: 4rem 2rem 5rem;
	box-sizing: border-box;
`;

export const ContainerTopSale = styled.div`
	font-size: 20px;
`;

export const Hr = styled.hr`
	margin-top: 1rem;
	margin-bottom: 1rem;
	border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const ContainerCart = styled.div`
	display: grid;
	/* fle */
	box-sizing: border-box;
	width: 100%;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

	@media only screen and (max-width: 645px) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}

	@media only screen and (max-width: 597px) {
		grid-template-columns: 1fr 1fr 1fr;
	}

	@media only screen and (max-width: 397px) {
		grid-template-columns: 1fr 1fr 1fr;
	}
	/* max-width: ; */
`;

export const Item = styled.div`
	width: 100%;
`;

export const Product = styled.div``;

export const Image = styled.img`
	object-fit: contain;
	width: 100%;
	cursor: pointer;
	transition: transform 0.5s ease;
`;
