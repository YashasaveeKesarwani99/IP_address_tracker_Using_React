import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "./styles.css";
import L from "leaflet";

export const pointerIcon = new L.Icon({
  iconUrl:
    "data:image/png;base64,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",
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [55, 55]
});

class IPtrackr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map className="map" center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={pointerIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default IPtrackr;
