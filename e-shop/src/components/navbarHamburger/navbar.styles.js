import styled from "styled-components";

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	/* margin: 0 10px; */
	padding: 0 20px;
	height: 70px;
	background: #00a5c4;
	z-index: 1000;
	box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);

	.logo {
		color: white;
		text-decoration: none;
		font-size: 30px;
		flex: 1;
	}

	.active {
		font-weight: bold;
	}

	.hamburger img {
		width: 3rem;
		/* background-color : */
	}

	.hamburger {
		display: none;
	}

	@media (max-width: 996px) {
		.logo {
			font-size: 25px;
		}
	}

	@media (max-width: 768px) {
		.hamburger {
			display: block;
			/* font-size : 20px */
		}
	}
`;

export const Navbar = styled.nav`
	a {
		margin-left: 10px;
		color: white;
		text-decoration: none;
		cursor: pointer;
		:first {
			margin-right: 5px;
		}
	}
	button.navlink {
		border: none;
		background-color: unset;
	}

	@media (max-width: 996px) {
		a {
			padding: 0.5rem;
		}
	}

	@media (max-width: 768px) {
		position: fixed;
		/* top: 9rem; */
		/* left: 0; */
		/* right: 0; */
		width: 90%;
		padding: 2.5rem;
		margin: 0 auto;
		/* box-shadow: var(--box-shadow); */
		background-color: #00a5c4;
		text-align: center;
		border-radius: 1.5rem;
		display: flex;
		flex-direction: column;
		transition: 0.4s;
		top: -100%;

		.hamburger {
			display: block;
		}
	}
`;
