import styled from "styled-components";

export const CopyRight = styled.div`
	text-align: center;
	height: 50px;
	line-height: 40px;
	background-color: #343a40;
	color: white;

	p {
		font-size: 0.89em;
	}

	button {
		text-decoration: none;
		border: none;
		padding: 0;
		background-color: unset;
	}

	button:hover {
		color: #147b66;
	}

	@media only screen and (max-width: 768px) {
		font-size: 0.84em;
	}
`;
