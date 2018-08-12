import React from "react";
import Page from "../components/Page.js";
import dynamic from "next/dynamic";
import Head from "next/head";
import axios from "axios";

import Property from "../components/Property.js";

const Map = dynamic(import("../components/Map.js"), {
	ssr: false
});

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			properties: [],
			selectedProperty: null
		};
	}
	async componentDidMount() {
		let propertiesResponse = await axios.post("/properties");
		let properties = propertiesResponse.data.properties;
		this.setState({ properties });
	}
	_openProperty = property => {
		this.setState({ selectedProperty: property });
	};
	_closeProperty = () => {
		this.setState({ selectedProperty: null });
	};
	render() {
		return (
			<Page>
				<Head>
					<title>Landchecker code sample</title>
				</Head>
				<div className="mapContainer">
					<Map properties={this.state.properties} onFeatureClick={this._openProperty} />
				</div>
				{this.state.selectedProperty && (
					<Property property={this.state.selectedProperty} close={this._closeProperty} />
				)}
				<style jsx>{`
					.mapContainer {
						flex: 1 1 0;
						height: 100%;
						position: relative;
					}
				`}</style>
			</Page>
		);
	}
}
