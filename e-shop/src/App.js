import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import { auth } from "./config/firebase";
import Router from "./routes";

function App() {
	const [user, loading] = useAuthState(auth);

	if (loading)
		return (
			<div>
				<h5>Loading...</h5>
			</div>
		);
	return <Router user={user} />;
}

export default App;
