import "bootstrap/dist/css/bootstrap.min.css";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    .font-rale {
  font-family: "Raleway", cursive;
}
.font-roboto {
  font-family: 'Roboto', sans-serif;
}
.font-rubik {
  font-family: "Rubik", cursive;
}
.font-baloo {
  font-family: "Baloo Thambi 2", cursive;
}

.color-primary {
  color: #003859;
}

.color-primary-bg {
  background: #003859;
}

.color-second {
color: #00A5C4;
}

.color-second-bg {
background: #00A5C4;
}

.color-yellow {
color: #FFC107;
}

.color-yellow-bg {
background: #FFC107;
}

.position-relative {
	position: relative;
}

.text-center {
	text-align: center;
}

.width-100 {
	width: 100%;
}

.font-bold {
	font-weight: bold;
}

.background {
	background: #fff;
}

.font-awesome {
	font-family: "Font Awesome 5 Free";
}

.primary-gradient {
	background: #ff522f;
	background: linear-gradient(to right, #dd2476, #ff512f);
}

.loading {
		text-align: center;
		width: 100vw;
	}
`;
