import React from "react";

export default class CheckBoxWithLabel extends React.Component {
	state = {
		isChecked: false
	};

	handleChange = () => {
		this.setState(prev => ({
			isChecked: !prev.isChecked
		}));
	};

	render() {
		return (
			<label>
				<input
					type="checkbox"
					checked={this.state.isChecked}
					onChange={this.handleChange}
				/>
				{this.state.isChecked ? this.props.labelOn : this.props.labelOff}
			</label>
		);
	}
}
