import React from "react";

export default class Counter extends React.Component {
	state = {
		count: 0
	};

	increment = () => {
		this.setState(prev => ({
			count: prev.count + 1
		}));
	};

	decrement = () => {
		this.setState(prev => ({
			count: prev.count - 1
		}));
	};

	render() {
		return (
			<div className="Counter">
				<div className="count">{this.state.count}</div>
				<Buttons increment={this.increment} decrement={this.decrement} />
			</div>
		);
	}
}

function Buttons({ increment, decrement }) {
	return (
		<div>
			<button className="increment" onClick={increment}>
				+
			</button>
			<button className="decrement" onClick={decrement}>
				-
			</button>
		</div>
	);
}
