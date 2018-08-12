import React from "react";
import Page from "../components/Page.js";
import dynamic from "next/dynamic";
import axios from "axios";

import MapOverlay from "../components/MapOverlay.js";

const Map = dynamic(import("../components/Map.js"), {
	ssr: false
});

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			properties: []
		};
	}
	async componentDidMount() {
		let propertiesResponse = await axios.post("/properties");
		let properties = propertiesResponse.data.properties;
		this.setState({ properties });
	}
	render() {
		return (
			<Page>
				<div className="mapContainer">
					<Map properties={this.state.properties} />
				</div>
				<style jsx>{`
					.mapContainer {
						position: absolute;
						left: 0;
						right: 0;
						top: 0;
						bottom: 0;
					}
				`}</style>
			</Page>
		);
	}
}
