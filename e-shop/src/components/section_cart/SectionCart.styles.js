import styled from "styled-components";

export const SectionCart = styled.section`
	padding: 1.5rem 8rem 0;
	font-size: 20px;
	box-sizing: border-box;

	h5 {
		font-size: 1em;
		font-weight: lighter;
	}
`;

export const ContainerCart = styled.div`
	display: flex;
`;

export const ContainerCartAllItems = styled.div`
	flex: 1;

	hr {
		border-top: 1px solid rgba(0, 0, 0, 0.2);
		margin-top: 20px;
	}
`;

export const ContainerItems = styled.div`
	display: flex;
	padding: 10px 0;
`;

export const CartItemImage = styled.div`
	img {
		height: 120px;
	}
`;

export const CartItemsInfo = styled.div`
	flex: 1;
	padding-left: 20px;

	h5 {
		font-size: 1em;
	}

	small {
		font-size: 0.6em;
		font-weight: lighter;
	}
`;

export const ContainerRating = styled.div`
	display: flex;
	align-items: center;

	.item-rating {
		font-size: 0.6em;
		margin-right: 8px;
	}

	a {
		font-size: 0.7em;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
`;
export const QtyCart = styled.div`
	display: flex;
`;

export const QtyButtonCart = styled.div`
	display: flex;
	height: 30px;

	button {
		padding: 0 8px;
		/* border: none; */
		background-color: #fff;
		border: 1px solid rgba(0, 0, 0, 0.2);
		cursor: pointer;
	}

	button:hover {
		background-color: rgb(180, 176, 176);
	}

	input {
		/* flex: .4; */
		width: 50%;
		/* background-color: red; */
	}
`;

export const ButtonCartDelete = styled.button`
	border: none;
	margin-left: -30px;
	padding: 5px 20px;
	color: white;
	border-radius: 5px;
	background-color: #f84b5c;
	cursor: pointer;

	:hover {
		background-color: #ea293c;
	}
`;

export const CartItemsPrice = styled.div`
	padding-right: 20px;
	color: red;
`;

export const CartSubtotal = styled.div`
	text-align: center;
	border: 1px solid rgba(0, 0, 0, 0.2);
	box-sizing: border-box;
	margin-left: 20px;
	font-size: 16px;
	height: fit-content;
	padding-bottom: 20px;

	h6 {
		color: #28a745;
		padding: 30px 10px 20px;
	}
`;

export const SubtotalPrice = styled.div`
	border-top: 1px solid rgba(0, 0, 0, 0.1);
	padding-top: 20px;
	box-sizing: border-box;
	width: 100%;

	h5 {
		display: flex;
		justify-content: center;
		flex-direction: column;
		font-size: 1.2em;

		span {
			color: red;
		}
	}

	button {
		margin-top: 20px;
		padding: 15px;
		border-radius: 7px;
		border: none;
		background-color: #ffc107;
	}
`;
