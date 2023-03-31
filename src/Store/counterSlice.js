import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	count: 0,
	demo1: 0,
	demo2: 0,
	demo3: 0,
	demo4: 0,
	demo5: 0,
	demo6: 0,
	demo7: 0,
};

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			state.count += 1;
		},
		decrement: (state) => {
			state.count -= 1;
		},
		resetCounter: (state) => {
			state.count = 0;
		},
		incrementByNumber: (state, action) => {
			console.log(action);
			state.count += action.payload;
		},
	},
});

export { counterSlice };
export const { increment, decrement, resetCounter, incrementByNumber } =
	counterSlice.actions;
export default counterSlice.reducer;
