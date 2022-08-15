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
`;
