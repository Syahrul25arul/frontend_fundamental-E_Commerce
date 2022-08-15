import styled from "styled-components";

export const Nav = styled.nav`
	background: #00a5c4;
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 10px;
	height: 50px;

	a {
		color: white;
		text-decoration: none;
	}

	@media only screen and (min-width: 320px) {
		> a {
			font-size: 15px;
		}
	}

	@media only screen and (min-width: 608px) {
		> a {
			font-size: 18px;
		}
	}
`;

export const NavbarPage = styled.div`
	a {
		margin-left: 10px;
	}

	@media only screen and (min-width: 320px) {
		a {
			font-size: 11px;
		}
	}

	@media only screen and (min-width: 375px) {
		a {
			margin-left: 7px;
			font-size: 13px;
		}
	}

	@media only screen and (min-width: 608px) {
		> a {
			font-size: 15px;
		}
	}
`;
