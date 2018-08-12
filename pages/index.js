import React from "react";
import Page from "../components/Page.js";
import dynamic from "next/dynamic";
import Head from "next/head";
import axios from "axios";
import _ from "lodash";

import Property from "../components/Property.js";
import CouncilFilter from "../components/CouncilFilter.js";

const Map = dynamic(import("../components/Map.js"), {
	ssr: false
});

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			properties: [],
			propertiesCouncilFilter: [],
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
	_updateCouncilFilter = newFilters => {
		this.setState({ propertiesCouncilFilter: newFilters });
	};
	render() {
		let councils = _
			.chain(this.state.properties)
			.map(property => property.council)
			.uniq()
			.value();
		let filteredProperties = _.filter(this.state.properties, property => {
			return _.indexOf(this.state.propertiesCouncilFilter, property.council) === -1;
		});

		return (
			<Page>
				<Head>
					<title>Landchecker code test</title>
				</Head>
				<div className="mapContainer">
					<Map properties={filteredProperties} onFeatureClick={this._openProperty} />
					<CouncilFilter
						councils={councils}
						filtered={this.state.propertiesCouncilFilter}
						updateFilter={this._updateCouncilFilter}
					/>
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
