import styled from "styled-components";

export const ImageProduct = styled.img`
	object-fit: contain;
	width: 100%;
	cursor: pointer;
	transition: transform 0.5s ease;

	:hover {
		transform: scale(1.1);
	}
`;

export const ItemInfo = styled.div`
	text-align: center;

	> h6,
	.item-price,
	.item-rating {
		margin-bottom: 5px;
	}

	h6 {
		font-size: 1em;
		font-weight: 400;
		color: rgba(0, 0, 0, 0.75);
	}

	.item-rating {
		font-size: 0.8em;
	}

	.btn-add-to-cart {
		margin-top: 8px;
	}

	@media only screen and (max-width: 1024px) {
		h6 {
			font-size: 0.8em;
		}

		.item-rating {
			font-size: 0.7em;
		}
	}
	@media only screen and (max-width: 721px) {
		h6 {
			font-size: 0.76em;
		}
	}

	@media only screen and (max-width: 397px) {
		h6 {
			font-size: 0.6em;
		}
	}
`;

export const ItemPrice = styled.div`
	@media only screen and (max-width: 1024px) {
		font-size: 0.9em;
	}

	@media only screen and (max-width: 721px) {
		font-size: 0.83em;
	}

	@media only screen and (max-width: 397px) {
		font-size: 0.65em;
	}
`;
