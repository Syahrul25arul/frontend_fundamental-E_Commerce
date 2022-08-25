import "bootstrap/dist/css/bootstrap.min.css";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --maxWidth: 1280px; 
    --white: #fff;
    --lightGrey: #eee;
    --medGrey: #353535; 
    --darkGrey: #1c1c1c;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
  }
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

.color-teal-bg {
  background: #003859;
}

.color-white-bg {
	background : #bac4c9;
}
.color-blue-bg {
background: #00A5C4;
}
.color-black-bg {
background: #1d1e1e;
}
.color-orange-bg {
background: #e97f22;
}

.color-brown-bg {
background: #aa4502;
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

.mt-20 {
  margin-top : 20px;
}
`;
