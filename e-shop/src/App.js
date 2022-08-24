import { useEffect } from "react";
import "./App.css";
import { useUserHooks } from "./hooks/useUserHooks";

import Router from "./routes";

function App() {
	const { mounted } = useUserHooks();

	if (mounted)
		return (
			<div>
				<h5>Loading...</h5>
			</div>
		);
	return <Router />;
}

export default App;
