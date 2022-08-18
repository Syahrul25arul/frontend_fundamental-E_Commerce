import styled from "styled-components";

export const Section = styled.section`
	display: flex
	flex-direction : column;
	box-sizing: border-box;
	padding: 2rem .5rem;
	/* justify-content: space-between; */
	align-content: flex-start;
	width:100vw;
	overflow : hidden;

	@media only screen and (min-width: 768px) {
		display: flex;
		box-sizing: border-box;
		padding: 2rem 5rem;
		/* justify-content: space-between; */
		align-content: flex-start;
		overflow : unset;
	}
`;
