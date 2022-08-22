import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		user: null,
		loggedIn: false
	},
	reducers: {
		loginDispatch: (state, action) => {
			state.user = action.payload;
			state.loggedIn = true;
		},
		logoutDispatch: (state) => {
			state.user = null;
			state.loggedIn = false;
		}
	}
});

export const { loginDispatch, logoutDispatch } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
