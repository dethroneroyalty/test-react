import React, { Component } from "react";

export default class Babapp extends Component {
	state = {
		term: "",
		items: []
	};

	addItem = ev => {
		ev.preventDefault();
		this.setState(prev => ({
			term: "",
			items: [...prev.items, prev.term]
		}));
	};

	changeTerm = ev => {
		this.setState({ term: ev.target.value });
	};

	render() {
		const { term, items } = this.state;
		return (
			<div className="Babapp">
				<Form term={term} onChange={this.changeTerm} onSubmit={this.addItem} />
				<List items={items} />
			</div>
		);
	}
}

function Form({ term, onChange, onSubmit }) {
	return (
		<form onSubmit={onSubmit}>
			<input type="text" value={term} onChange={onChange} />
			<button>Submit</button>
		</form>
	);
}

function List(props) {
	return <ul>{props.items.map((el, idx) => <li key={idx}>{el}</li>)}</ul>;
}
