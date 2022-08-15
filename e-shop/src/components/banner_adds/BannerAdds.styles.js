import styled from "styled-components";

export const ContainerBannerAdds = styled.div`
	img:nth-child(1) {
		margin-right: 5px;
	}

	@media only screen and (max-width: 1024px) {
		img {
			height: 100px;
		}
	}

	@media only screen and (max-width: 1099px) {
		img {
			height: 130px;
		}
	}

	@media only screen and (max-width: 967px) {
		img {
			height: 95px;
		}
	}

	@media only screen and (max-width: 733px) {
		img {
			height: 87px;
		}
	}
	@media only screen and (max-width: 679px) {
		img {
			height: 83px;
		}
	}

	@media only screen and (max-width: 653px) {
		img {
			height: 80px;
		}
	}

	@media only screen and (max-width: 634px) {
		img {
			height: 80px;
		}
	}

	@media only screen and (max-width: 634px) {
		display: flex;
		flex-direction: column;
		margin-top: -50px;
		img {
			width: 100%;
			/* height: 70px; */
			height: 100px;
			object-fit: contain;
			margin-bottom: 10px;
		}
	}
`;
