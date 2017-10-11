import React, { Component } from "react";
import "./App.css";

import Counter from "./components/Counter";
import Babapp from "./components/Babapp";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					<Counter />
					<Babapp />
				</p>
			</div>
		);
	}
}

export default App;
