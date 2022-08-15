import "./App.css";
import Header from "./components/header";
import { GlobalStyle } from "./GlobalStyle";
import Nav from "./components/navigations";
import Main from "./components/main";
import SectionBanner from "./components/section_banner_area";
import SectionTopSale from "./components/section_top_sale";

function App() {
	return (
		<div className="App">
			<Header />
			<Nav />
			<Main>
				<SectionBanner />
				<SectionTopSale />
			</Main>

			<GlobalStyle />
		</div>
	);
}

export default App;
