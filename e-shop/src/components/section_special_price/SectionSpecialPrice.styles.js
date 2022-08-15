import styled from "styled-components";

export const Section = styled.section`
	padding: 0 3rem 5rem;

	@media only screen and (max-width: 597px) {
		padding: 0 2rem 5rem;
	}
`;

export const ContainerAllCategory = styled.div`
	display: flex;
	box-sizing: border-box;
	justify-content: space-between;
	font-size: 1rem;

	h4 {
		font-size: 1.3em;
		margin-bottom: 30px;
	}

	@media only screen and (max-width: 597px) {
		display: block;
		font-size: 0.9em;
		h4 {
			margin-bottom: 10px;
		}
	}

	@media only screen and (max-width: 397px) {
		display: block;
		font-size: 0.9em;
		h4 {
			margin-bottom: 10px;
		}
	}
`;

export const ContainerCategory = styled.div`
	flex: 0.3;
	display: flex;
	justify-content: space-evenly;
	font-size: 20px;

	@media only screen and (max-width: 958px) {
		font-size: 17px;
		flex: 0.35;
	}

	@media only screen and (max-width: 768px) {
		font-size: 17px;
		flex: 0.4;
		justify-content: space-between;
	}

	@media only screen and (max-width: 658px) {
		flex: 0.45;
	}

	@media only screen and (max-width: 597px) {
		display: inline-block;
		font-size: 17px;
	}

	@media only screen and (max-width: 397px) {
		display: inline-block;
		font-size: 15px;
	}
`;

export const CategoryButton = styled.button`
	border: none;
	font-size: 0.8em;
	background-color: #fff;
	cursor: pointer;

	@media only screen and (max-width: 768px) {
		font-size: 0.7em;
	}

	@media only screen and (max-width: 597px) {
		margin-right: 6px;
		margin-bottom: 8px;
	}

	@media only screen and (max-width: 397px) {
		margin-right: 4px;
		margin-bottom: 5px;
	}
`;

export const ContainerItem = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	row-gap: 10px;
	column-gap: 10px;

	@media only screen and (max-width: 645px) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}

	@media only screen and (max-width: 597px) {
		grid-template-columns: 1fr 1fr 1fr;
	}

	@media only screen and (max-width: 397px) {
		grid-template-columns: 1fr 1fr 1fr;
	}
`;
