import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cart: []
	},
	reducers: {
		addToCart: (state, action) => {
			state.cart = [...action.payload];
		},
		deleteCart: (state, action) => {
			state.cart = [...action.payload];
		}
	}
});

export const { addToCart, deleteCart } = cartSlice.actions;

export const selectCart = (state) => state.cart;

export default cartSlice.reducer;
