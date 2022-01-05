import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "./cssFiles/LeafletContainer.css";

const Map = () => {
  const position = [13.9437861703303, -88.93666382512089];
  return (
    <MapContainer center={position} zoom={8} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
