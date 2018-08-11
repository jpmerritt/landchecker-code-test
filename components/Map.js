import React from "react";
import MapOverlay from "./MapOverlay.js";

export default class extends React.Component {
	render() {
		return (
			<div className="wrapper">
				<MapOverlay />
				<style jsx>{`
					.wrapper {
						flex: 1 0 0;
						width: 100%;
						display: flex;
						flex-flow: row wrap;
						position: relative;
					}
				`}</style>
			</div>
		);
	}
}
