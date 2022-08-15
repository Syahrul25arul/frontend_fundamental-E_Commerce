import React from "react";

function App({ title, children }) {
	document.title = title;
	return <div>{children}</div>;
}

export default App;
