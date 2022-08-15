import styled from "styled-components";

export const ProductInfo = styled.div`
	flex: 0.5;
	margin-top: 20px;
	font-size: 20px;
	margin-left: 20px;

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
`;

export const ContainerItemRating = styled.div`
	display: flex;
	.item-rating {
		font-size: 0.6em;
	}

	a {
		margin-left: 9px;
		font-size: 0.7em;
		text-decoration: none;
	}
`;

export const Hr = styled.hr`
	border-top: 1px solid rgba(0, 0, 0, 0.2);
`;

export const TableProduct = styled.table`
	font-size: 15px;

	tr {
		font-size: 0.9em;
		display: block;
		margin-top: 10px;
	}

	tr:nth-child(1) > td span,
	tr:nth-child(3) > td span {
		margin-left: 5px;
	}
`;

export const PolicyInfo = styled.div`
	display: flex;
	margin-top: 20px;
	margin-bottom: 10px;
	margin-left: 5px;
	font-size: 15px;
	align-items: center;
	text-align: center;
`;

export const PolicyInfoDetail = styled.div`
	margin-right: 40px;

	a {
		font-size: 0.9em;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
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
	justify-content: space-between;
`;

export const Color = styled.div`
	flex: 0.8;
	display: flex;
	/* justify-content: space-between; */
	/* background-color: ; */

	h6 {
		font-size: 16px;
		font-weight: lighter;
		color: rgba(0, 0, 0, 0.7);
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
