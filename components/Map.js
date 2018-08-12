import React from "react";
import ReactMapboxGl, { Layer, Feature, ZoomControl, RotationControl } from "react-mapbox-gl";
import PropTypes from "prop-types";

const ReactMap = ReactMapboxGl({
	accessToken:
		"pk.eyJ1IjoibGFuZGNoZWNrZXIiLCJhIjoiY2lndTdibjN3MDA4dzVobTAzNGFuZmYydCJ9.vNV7sVDR2MZK3550A-LY1g"
});

let mapboxStyle = "mapbox://styles/landchecker/cikn8jw2f00fxbgm1djbpuwxl";

export default class extends React.Component {
	static propTypes = {
		properties: PropTypes.array
	};
	render() {
		let properties = this.props.properties.map(property => {
			return (
				<Feature
					coordinates={[property.longitude, property.latitude]}
					key={property.id}
					onClick={() => {}}
				/>
			);
		});
		return (
			<ReactMap
				style={mapboxStyle}
				containerStyle={{
					height: "100%",
					width: "100%"
				}}
				fitBoundsOptions={{
					animate: false
				}}
				zoom={[10]}
				center={[145.249903, -38.106526]}
				className="map"
			>
				<ZoomControl position={"top-right"} />
				<RotationControl position={"top-right"} />
				<Layer
					type="circle"
					id="marker"
					paint={{
						"circle-radius": 7,
						"circle-color": "#4A83B5",
						"circle-stroke-width": 1.5,
						"circle-stroke-color": "#ffffff"
					}}
				>
					{properties}
				</Layer>
			</ReactMap>
		);
	}
}
