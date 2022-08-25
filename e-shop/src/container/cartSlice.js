import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cart: []
	},
	reducers: {
		addToCart: (state, action) => {
			console.log(state.cart);
			state.cart = [...action.payload];
		}
	}
});

export const { addToCart } = cartSlice.actions;

export const selectCart = (state) => state.cart;

export default cartSlice.reducer;
