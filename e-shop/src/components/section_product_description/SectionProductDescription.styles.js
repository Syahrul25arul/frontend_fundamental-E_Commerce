import styled from "styled-components";

export const SectionDescription = styled.section`
	padding: 1rem 1rem 0;

	h6 {
		font-size: 1.2em;
		margin-bottom: 10px;
		font-weight: 200;
	}

	hr {
		border-top: 1px solid rgba(0, 0, 0, 0.1);
	}

	p {
		font-size: 0.87em;
		line-height: 3ch;
		margin-top: 10px;
	}

	@media only screen and (min-width: 425px) {
		padding: 4rem 3rem 0;
	}
`;
