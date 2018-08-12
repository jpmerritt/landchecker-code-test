import React from "react";
import PropTypes from "prop-types";
import CouncilToggle from "./CouncilToggle.js";
import _ from "lodash";

export default class extends React.Component {
	static propTypes = {
		councils: PropTypes.array,
		filtered: PropTypes.array,
		updateFilter: PropTypes.func
	};
	render() {
		let { councils, filtered } = this.props;
		let councilToggles = _.map(councils, council => {
			let checked = _.indexOf(filtered, council) === -1;
			return (
				<CouncilToggle
					name={council}
					checked={checked}
					onChange={checked => {
						let filteredCouncils = _.clone(this.props.filtered);
						let filtered = !checked;
						if (filtered) {
							filteredCouncils.push(council);
						} else {
							filteredCouncils = _.filter(filteredCouncils, filteredCouncil => {
								return filteredCouncil !== council;
							});
						}
						this.props.updateFilter(filteredCouncils);
					}}
					key={council}
				/>
			);
		});
		return (
			<div className="CouncilFilter">
				<div className="header">councils</div>
				<div className="councils">{councilToggles}</div>
				<style jsx>{`
					.CouncilFilter {
						position: absolute;
						top: 60px;
						left: 20px;
						background: white;
						width: 250px;
						display: flex;
						flex-flow: row wrap;
						align-content: flex-start;
						box-shadow: 0 0.0625rem 0.25rem 0 rgba(0, 0, 0, 0.2);
					}
					.header {
						flex: 0 0 100%;
						display: flex;
						flex-flow: row nowrap;
						background: #22313f;
						font-variant: small-caps;
						justify-content: center;
						text-align: center;
						padding: 0 11px;
						height: 34px;
						color: white;
						align-items: center;
					}
					.councils {
						flex: 0 0 100%;
						display: flex;
						flex-flow: row wrap;
						margin-top: 20px;
						padding: 0 12px;
					}
				`}</style>
			</div>
		);
	}
}
