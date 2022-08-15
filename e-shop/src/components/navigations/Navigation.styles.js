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
`;

export const NavbarPage = styled.div`
	a {
		margin-left: 10px;
	}
`;
