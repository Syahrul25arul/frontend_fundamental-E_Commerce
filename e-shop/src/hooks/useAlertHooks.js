import { useState } from "react";

export const useAlertHooks = () => {
	const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

	const showAlert = (show = false, type = "", msg = "") => {
		setAlert({ show: show, type: type, msg: msg });
	};

	const showAlertSuccess = (msg = "") => {
		showAlert(true, "success", msg);
	};

	const showAlertFailed = (msg = "") => {
		showAlert(true, "danger", msg);
	};

	return { alert, showAlert, showAlertSuccess, showAlertFailed };
};
