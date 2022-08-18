import styled from "styled-components";

export const ProductInfo = styled.div`
	flex: 0.5;
	margin-top: 20px;
	font-size: 17px;
	margin-left: 5px;

	h5 {
		font-size: 1.03em;
		font-weight: lighter;
	}

	small {
		font-size: 0.7em;
		font-weight: 100;
		color: rgba(0, 0, 0, 0.7);
		margin-bottom: 3px;
	}

	@media only screen and (min-width: 1024px) {
		font-size: 20px;
		margin-left: 20px;
	}
`;

export const ContainerItemRating = styled.div`
	display: flex;
	.item-rating {
		font-size: 0.6em;
		/* flex: 0.5; */
		/* flex: 1; */
		width: 65px;
	}

	a {
		margin-top: -15px;
		margin-left: 15px;
		font-size: 0.7em;
		text-decoration: none;
	}

	@media only screen and (min-width: 1024px) {
		.item-rating {
			/* flex: unset; */
			width: max-content;
		}
	}
`;

export const Hr = styled.hr`
	border-top: 1px solid rgba(0, 0, 0, 0.2);
`;

export const TableProduct = styled.table`
	font-size: 12px;
	text-align: center;

	tr {
		font-size: 0.9em;
		display: block;
		margin-top: 10px;
	}

	tr:nth-child(1) > td span,
	tr:nth-child(3) > td span {
		margin-left: 5px;
	}

	@media only screen and (min-width: 1024px) {
		font-size: 15px;
	}
`;

export const PolicyInfo = styled.div`
	display: flex;
	margin-top: 20px;
	margin-bottom: 10px;
	font-size: 15px;
	align-items: center;
	text-align: center;

	@media only screen and (min-width: 1024px) {
		margin-left: 5px;
	}
`;

export const PolicyInfoDetail = styled.div`
	margin: 0 auto;

	a {
		font-size: 0.9em;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	@media only screen and (min-width: 1024px) {
		margin-right: 40px;
	}
`;

export const PolicyIcon = styled.div`
	span {
		border: 1.5px solid #e8ebee;
		padding: 14px;
		border-radius: 40%;
		margin-bottom: 14px;
	}
`;

export const OrderDetail = styled.div`
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	font-size: 18px;
	line-height: 20px;

	a {
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
`;

export const ColorAndQuantity = styled.div`
	width: 100%;
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;

	@media only screen and (min-width: 1024px) {
		flex-direction: row;
		justify-content: space-between;
	}
`;

export const Color = styled.div`
	flex: 0.8;
	display: flex;
	margin-bottom: 8px;
	/* justify-content: space-between; */
	/* background-color: ; */

	h6 {
		font-size: 16px;
		font-weight: lighter;
		color: rgba(0, 0, 0, 0.7);
	}

	@media only screen and (min-width: 1024px) {
		margin-bottom: 0;
	}
`;

export const ColorButton = styled.div`
	display: flex;
	flex: 1;
	justify-content: space-evenly;
`;

export const Button = styled.button`
	padding: 22px;
	border: none;
	border-radius: 80%;
	/* width: 30%; */
`;

export const Size = styled.div`
	margin-top: 10px;

	h6 {
		font-weight: lighter;
		font-size: 0.9em;
		color: rgba(0, 0, 0, 0.7);
		margin-bottom: 5px;
	}
`;

export const ContainerSizeButton = styled.div`
	display: flex;
	justify-content: space-between;
	width: 60%;
`;

export const SizeButton = styled.button`
	padding: 10px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	background-color: #fff;
	cursor: pointer;

	:hover {
		background-color: rgb(223, 223, 223);
	}
`;
