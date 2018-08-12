import React from "react";
import PropTypes from "prop-types";
import Toggle from "react-toggle";

export default class extends React.Component {
	static propTypes = {
		name: PropTypes.string,
		checked: PropTypes.bool,
		onChange: PropTypes.func
	};
	constructor(props) {
		super(props);
	}
	render() {
		let name = this.props.name;
		return (
			<div className="council">
				<Toggle
					checked={this.props.checked}
					onChange={event => {
						let checked = event.target.checked;
						this.props.onChange(checked);
					}}
				/>
				<div className="councilName">{name}</div>
				<style jsx>{`
					.council {
						flex: 0 0 100%;
						margin-bottom: 20px;
						display: flex;
						flex-flow: row nowrap;
						align-items: center;
					}
					.councilName {
						font-size: 12px;
						margin-left: 12px;
					}
				`}</style>
			</div>
		);
	}
}
