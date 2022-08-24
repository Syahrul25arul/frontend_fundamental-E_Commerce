import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import cartReducer from "./cartSlice";

function saveToLocalStorage({ cart, user }) {
	const serializedState = JSON.stringify(cart);
	const serailizedStateUser = JSON.stringify(user);
	localStorage.setItem("state", serializedState);
	localStorage.setItem("user", serailizedStateUser);
}

function loadFromLocalStorage() {
	const serializedState = localStorage.getItem("state");

	if (serializedState === null) return undefined;
	const cart = JSON.parse(serializedState);
	return { cart: cart.cart };
}

function loadUserFromLocalStorage() {
	const serializedState = localStorage.getItem("user");

	if (serializedState === null) return undefined;
	const user = JSON.parse(serializedState);
	return { user: user.user, loggedIn: user.loggedIn };
}

const preloadedStateCart = loadFromLocalStorage();
const preloadedStateUser = loadUserFromLocalStorage();

const store = configureStore({
	reducer: {
		user: userReducer,
		cart: cartReducer
	},
	preloadedState: {
		cart: preloadedStateCart,
		user: preloadedStateUser
	}
});

store.subscribe(() => saveToLocalStorage(store.getState()));
export { store };
