import React from "react";
import PropTypes from "prop-types";

export default class extends React.Component {
	static propTypes = {
		property: PropTypes.object,
		close: PropTypes.func
	};
	render() {
		let property = this.props.property;
		return (
			<div className="Property">
				<div className="header">
					<div className="address">{property.full_address}</div>
					<div className="closeButton" onClick={this.props.close}>
						x
					</div>
				</div>
				<h2>property details</h2>
				<div className="propertyDetail">
					<h5>council</h5>
					<div className="propertyDetailValue">{property.council}</div>
				</div>
				<div className="propertyDetail">
					<h5>council property number</h5>
					<div className="propertyDetailValue">{property.council_property_number}</div>
				</div>
				<div className="propertyDetail">
					<h5>postcode</h5>
					<div className="propertyDetailValue">{property.postcode}</div>
				</div>
				<div className="propertyDetail">
					<h5>state</h5>
					<div className="propertyDetailValue">{property.state}</div>
				</div>

				<style jsx>{`
					.Property {
						background: white;
						flex: 0 0 290px;
						height: 100%;
						display: flex;
						flex-flow: row wrap;
						align-content: flex-start;
					}
					.header {
						flex: 0 0 100%;
						display: flex;
						flex-flow: row nowrap;
						background: #22313f;
						padding: 0 11px;
						height: 34px;
						color: white;
						align-items: center;
					}
					.address {
						flex: 1 1 auto;
						font-size: 12px;
						line-height: 14px;
						white-space: nowrap;
						text-overflow: ellipsis;
						display: inline-block;
						overflow: hidden;
						width: 200px;
					}
					.closeButton {
						flex: 0 0 auto;
						font-size: 14px;
						line-height: 14px;
						margin-top: -2px;
						margin-left: 12px;
						cursor: pointer;
					}
					h2 {
						font-variant: small-caps;
						margin-top: 20px;
						margin-bottom: 10px;
						padding: 0 12px;
						color: #31bc78;
						font-weight: 700;
						font-size: 18px;
					}
					.propertyDetail {
						flex: 0 0 100%;
						display: flex;
						flex-flow: row wrap;
						padding: 0 12px;
						margin-bottom: 12px;
					}
					h5 {
						font-variant: small-caps;
						flex: 0 0 100%;
						color: #aaa;
						font-weight: 700;
						font-size: 14px;
					}
					.propertyDetailValue {
						color: #22313f;
						flex: 0 0 100%;
						margin-top: 5px;
						font-size: 12px;
					}
				`}</style>
			</div>
		);
	}
}
