import styled from "styled-components";

export const Footer = styled.footer`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	background-color: #343a40;
	height: 200px;
	box-sizing: border-box;
	/* text-align: center; */
	padding: 2rem 4rem;
	column-gap: 30px;
	font-size: 1rem;

	.footer-about,
	.information,
	.newslatter,
	.account {
		color: white;
	}

	> .footer-about h4,
	.newslatter h4,
	.information > h4,
	.account h4 {
		font-size: 1.3em;
		font-weight: 500;
		margin-bottom: 5px;
	}

	

	@media only screen and (max-width : 814px) {
		grid-template-columns: 1fr 1fr;
		row-gap : 20px;
		height : 250px;

		> .footer-about h4,
	.newslatter h4,
	.information > h4,
	.account h4 {
		font-size: 1.1em;
		font-weight: 500;
	}
	@media only screen and (max-width: 597px) {
		padding: 2rem 3rem;
		height : 300px;
	}

	@media only screen and (max-width: 397px) {
		padding: 2rem 3rem;
		height : 300px;
	}
	@media only screen and (max-width : 320px) {
		height : 350px;
	}
`;

export const FooterAbout = styled.div`
	p {
		color: rgba(255, 255, 255, 0.486);
		font-size: 0.9em;
		line-height: 1.6em;
	}

	@media only screen and (max-width: 814px) {
		p {
			font-size: 0.8em;
			line-height: 1.6em;
		}
	}
`;

export const NewsLatter = styled.div`
	form {
		display: flex;
		justify-content: space-between;
	}

	input {
		outline: none;
		padding: 7px;
		border-radius: 5px;
		border: none;
		margin-right: 4px;
	}

	input:focus {
		border: 2px solid #318ae3;
		padding: 5px;
	}

	@media only screen and (max-width: 814px) {
		form {
			justify-content: unset;
		}
		input {
			width: 80%;
		}
	}

	@media only screen and (max-width: 597px) {
		form {
			margin-top: 10px;
			flex-direction: column;
		}

		input {
			width: 80%;
			font-size: 10px;
			margin-bottom: 10px;
		}
	}

	@media only screen and (max-width: 397px) {
		form {
			margin-top: 10px;
			flex-direction: column;
		}

		input {
			width: 100%;
			font-size: 10px;
			margin-bottom: 5px;
		}
	}
`;

export const Information = styled.div`
	padding-left: 20px;

	@media only screen and (max-width: 814px) {
		padding-left: 0;
	}
`;
export const InfoLink = styled.div`
	display: flex;
	flex-direction: column;

	a {
		font-size: 0.87em;
		line-height: 1.5em;
		text-decoration: none;
		color: rgba(255, 255, 255, 0.486);
	}
	a:hover {
		color: rgba(255, 255, 255, 0.857);
	}

	@media only screen and (max-width: 814px) {
		font-size: 0.83em;
	}
`;

export const Account = styled.div``;

export const InfoAccount = styled.div`
	display: flex;
	flex-direction: column;

	a {
		text-decoration: none;
		color: rgba(255, 255, 255, 0.486);
		font-size: 0.87em;
		line-height: 1.5em;
	}

	a:hover {
		color: rgba(255, 255, 255, 0.857);
	}

	@media only screen and (max-width: 814px) {
		a {
			font-size: 0.83em;
		}
	}
`;

export const Input = styled.input``;
