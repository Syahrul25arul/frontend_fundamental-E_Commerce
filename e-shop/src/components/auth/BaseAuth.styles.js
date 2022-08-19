import styled from "styled-components";

export const AuthContainer = styled.div`
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	text-align: center;

	.default-bg {
		background: #fff;
		color: #505050;
	}

	.login-box {
		max-width: 960px;
		margin: 0 auto;
		box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
		border-radius: 10px;

		> .bg-img {
			padding: 0;
			border: 10px 0 0 10px;
			background: rgba(0, 0, 0, 0.04) url(${({ bgImage }) => bgImage}) top left no-repeat;
			background-size: cover;
			top: 0;
			bottom: 0;
			opacity: 1;
		}

		.info {
			height: 450px;
			position: relative;

			> .logo {
				text-align: left;
				margin: 20px;

				> .nav-brand {
					font-size: 22px;
					font-weight: bold;
					color: #505050;
				}
			}

			> .btn-section {
				position: absolute;
				top: 40%;
				right: 0;
				margin-bottom: 0;

				.link-btn {
					font-size: 12px;
					font-weight: bold;
				}

				.link-btn.active {
					background-color: #ff214f;
					color: #fff;
				}

				> .btn-primary {
					text-align: center;
					line-height: 30px;
					width: 100px;
					text-transform: uppercase;
					border-radius: 50px 0 0 50px;
					margin-bottom: 15px;
					border: none;

					&:focus {
						outline: none;
						box-shadow: none;
					}
				}
			}
		}
	}

	/* login form styling */
	.form-section {
		text-align: center;
		max-width: 400px;
		margin: 0 auto;
		width: 100%;

		> .title {
			margin: 10px 0 50px 0;

			> h3 {
				font-size: 25px;
				font-weight: bold;
				color: #505050;
			}
		}

		.login-inner-form {
			position: relative;
			color: #979797;

			.form-box {
				float: right;
				width: 100%;
				position: relative;

				// importing icons
				.icon {
					position: absolute;
					right: 25px;
					top: 10px;
				}
				.icon.email::before {
					font-family: "Font Awesome 5 Free";
					content: "\f0e0";
				}
				.icon.lock::before {
					font-family: "Font Awesome 5 Free";
					font-family: "Font Awesome 5 Free";
					content: "\f023";
				}
				.icon.user::before {
					font-family: "Font Awesome 5 Free";
					content: "\f007";
				}

				// style input textbox
				> .input-text {
					font-size: 14px;
					outline: none;
					color: #616161;
					border-radius: 50px;
					border: 1px solid transparent;
					background: #fff;
					box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
					padding: 11px 45px 11px 20px;
					width: 100%;
					margin-bottom: 10px;
				}
			}

			.primary-btn {
				background: #ff214f;
				width: 100%;
				border: none;
				color: #fff;
				box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
				padding: 10px 30px 9px 30px;
				cursor: pointer;
				height: 45px;
				border-radius: 50px;
				margin-top: 20px;

				&:hover {
					background: #d61d42;
				}
			}
		}
	}
`;
