import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./counterSlice";
import DemoReducer from "./DemoReducer";
export const store = configureStore({
	reducer: {
		counterState: CounterReducer,
		demoState: DemoReducer,
	},
});
