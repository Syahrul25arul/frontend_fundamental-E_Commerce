import styled from "styled-components";

export const Header = styled.header``;

export const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 30px;
	margin: 0 10px;

	p {
		color: rgb(173, 157, 157);
		font-size: 12px;
	}

	@media only screen and (min-width: 320px) {
		p {
			font-size: 9px;
		}
	}

	@media only screen and (min-width: 375px) {
		p {
			font-size: 10px;
		}
	}

	@media only screen and (min-width: 768px) {
		p {
			font-size: 12px;
		}
	}
`;

export const HeaderLoginWhistlist = styled.div`
	font-size: 14px;
	align-self: center;

	.header-login {
		margin-right: 5px;
	}

	a {
		text-decoration: none;
		color: rgb(0, 0, 0);
	}

	@media only screen and (min-width: 320px) {
		font-size: 10px;
	}

	@media only screen and (min-width: 375px) {
		font-size: 12px;
	}

	@media only screen and (min-width: 768px) {
		font-size: 14px;
	}
`;
