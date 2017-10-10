import React from "react";

const HOVERED = "hovered";
const NORMAL = "normal";

export default class Link extends React.Component {
	state = {
		class: NORMAL
	};

	_onMouseEnter = () => {
		this.setState({ class: HOVERED });
	};

	_onMouseLeave = () => {
		this.setState({ class: NORMAL });
	};

	render() {
		return (
			<a
				className={this.state.class}
				href={this.props.page || "#"}
				onMouseEnter={this._onMouseEnter}
				onMouseLeave={this._onMouseLeave}
			>
				{this.props.children}
			</a>
		);
	}
}
