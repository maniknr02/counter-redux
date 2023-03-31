import { useSelector, useDispatch } from "react-redux";
import {
	increment,
	decrement,
	resetCounter,
	incrementByNumber,
} from "../Store/counterSlice";
import { useState } from "react";
export const Counter = () => {
	const [num, setNum] = useState(0);
	const count = useSelector((state) => {
		console.log(state);
		return state.counterState.count;
	});
	const dispatch = useDispatch();

	const addNum = parseInt(num) || 0;
	return (
		<div>
			<h1>Counter: {count}</h1>
			<div>
				<button
					onClick={() => {
						dispatch(increment());
					}}
				>
					+
				</button>
				<button
					onClick={() => {
						dispatch(decrement());
					}}
				>
					-
				</button>
			</div>
			<button
				onClick={() => {
					dispatch(resetCounter());
				}}
			>
				reset
			</button>
			<div>
				<input
					type="text"
					value={num}
					onChange={(e) => setNum(e.target.value)}
				/>
				<button
					onClick={() => {
						dispatch(incrementByNumber(addNum));
					}}
				>
					increment
				</button>
			</div>
		</div>
	);
};
