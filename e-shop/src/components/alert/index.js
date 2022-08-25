import React, { useEffect } from "react";

const Alert = ({ msg, type, removeAlert, cls }) => {
	const handleClik = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};
	useEffect(() => {
		const handleClik = () => {
			window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		};
		const timeout = setTimeout(() => {
			removeAlert();
		}, 3000);
		return () => {
			handleClik();
			clearTimeout(timeout);
		};
	}, [msg, removeAlert]);
	return (
		<p onClick={handleClik} className={`alert alert-${type} ${cls}`}>
			{msg}
		</p>
	);
};

export default Alert;
