import styled from "styled-components";

export const SectionCart = styled.section`
	box-sizing: border-box;

	h5 {
		font-size: 1em;
		font-weight: lighter;
	}

	@media only screen and (min-width: 320px) {
		padding: 1rem 0.5rem 0;
		font-size: 14px;
	}
	@media only screen and (min-width: 372px) {
		padding: 1.5rem 2rem 0;
		font-size: 16px;
	}
	@media only screen and (min-width: 768px) {
		padding: 1.5rem 4rem 0;
		font-size: 16px;
	}
	@media only screen and (min-width: 1024px) {
		padding: 1.5rem 8rem 0;
		font-size: 20px;
	}
`;

export const ContainerCart = styled.div`
	@media only screen and (min-width: 320px) {
		display: flex;
		flex-direction: column;
	}

	@media only screen and (min-width: 768px) {
		display: flex;
		flex-direction: row;
	}

	@media only screen and (min-width: 1024px) {
		display: flex;
	}
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
	/* flex-direction: column; */
	padding: 5px 0;

	@media only screen and (min-width: 375px) {
		flex-direction: row;
		padding: 10px 0;
	}
`;

export const CartItemImage = styled.div`
	img {
		height: 100px;
	}

	@media only screen and (min-width: 375px) {
		img {
			height: 120px;
		}
	}
`;

export const CartItemsInfo = styled.div`
	flex: 0.9;
	padding-left: 20px;

	h5 {
		font-size: 1em;
	}

	small {
		display: block;
		margin-top: -2px;
		margin-bottom: 5px;
		font-size: 0.6em;
		font-weight: lighter;
	}

	@media only screen and (min-width: 375px) {
		flex: 1;
	}
`;

export const ContainerRating = styled.div`
	display: flex;
	align-items: center;

	.item-rating {
		font-size: 0.6em;
		margin-right: 8px;
		/* flex: 1; */
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
	/* display: flex; */

	@media only screen and (min-width: 768px) {
		display: flex;
		flex-direction: column;
	}
	@media only screen and (min-width: 1024px) {
		display: flex;
		flex-direction: row;
	}
`;

export const QtyButtonCart = styled.div`
	display: flex;
	height: 20px;
	margin-bottom: 10px;
	margin-top: 10px;

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
		width: 30%;
		/* background-color: red; */
	}

	@media only screen and (min-width: 375px) {
		height: 30px;

		input {
			/* flex: .4; */
			width: 50%;
			/* background-color: red; */
		}
	}
`;

export const ButtonCartDelete = styled.button`
	border: none;
	color: white;
	border-radius: 5px;
	background-color: #f84b5c;
	cursor: pointer;
	width: 50px;

	:hover {
		background-color: #ea293c;
	}

	@media only screen and (min-width: 375px) {
		margin-left: 0;
		margin-top: 8px;
		padding: 5px 7px;
		width: 60px;
		/* width: fit-content; */
	}

	@media only screen and (min-width: 768px) {
		margin-left: 0;
		margin-top: 8px;
		padding: 5px 10px;
		width: 80px;
		/* width: fit-content; */
	}
	@media only screen and (min-width: 1024px) {
		margin-left: -30px;
		width: auto;
		margin-top: 0;
	}
`;

export const CartItemsPrice = styled.div`
	color: red;
	box-sizing: border-box;
	flex: 0.1;
	font-size: 12px;

	@media only screen and (min-width: 375px) {
		padding-right: 20px;
	}
`;

export const CartSubtotal = styled.div`
	text-align: center;
	border: 1px solid rgba(0, 0, 0, 0.2);
	box-sizing: border-box;
	margin: 20px auto 0;
	font-size: 16px;
	height: fit-content;
	padding-bottom: 20px;
	width: 250px;

	h6 {
		color: #28a745;
		padding: 30px 10px 20px;
	}

	@media only screen and (min-width: 768px) {
		margin-left: 20px;

		h6 {
			color: #28a745;
			padding: 30px 10px 20px;
		}
	}
`;

export const SubtotalPrice = styled.div`
	border-top: 1px solid rgba(0, 0, 0, 0.1);
	padding-top: 10px;
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
		padding: 10px;
		font-size: 12px;
		border-radius: 7px;
		border: none;
		background-color: #ffc107;
	}

	@media only screen and (min-width: 375px) {
		padding-top: 20px;
		padding: 15px;
	}

	@media only screen and (min-width: 1024px) {
		padding-top: 20px;
	}
`;
