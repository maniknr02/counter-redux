import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	demo1: 1,
	demo2: 1,
	demo3: 1,
	demo4: 1,
	demo5: 1,
	demo6: 1,
};

const DemoReducer = createSlice({
	name: "Demo",
	initialState,
	reducers: {
		action1: (state) => {
			return state;
		},
		action2: (state) => {
			return state;
		},
	},
});

export const { action1, action2 } = DemoReducer.actions;
export default DemoReducer.reducer;
