import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "./cssFiles/LeafletContainer.css";

const Map = (props) => {
  const { coordinates } = props;

  const position = [13.9437861703303, -88.93666382512089];

  console.log('Impresion de coordinates');
  console.log(coordinates);

  let contentMap = null

  
  if(coordinates !== null && coordinates !== undefined){
    contentMap = coordinates.map(e => {
      if(e.area !== null){
        return (
          <Marker position={[e.area.latitud, e.area.longitud]} key={Math.random()} >
            <Popup key={2} >
              <h1 className="text-black font-bold text-md">Departamento: {e.area.nombre}</h1>
              <h2 className="text-black text-md">Municipio: {e.area.municipio}</h2>
              <h3>Descripción: {e.area.descripcion}</h3>
              <br/>
              <p>Recultado de medición: {e.valor_medicion}</p>
            </Popup>
          </Marker>
        )
      }
    })
  }

  return (
    <MapContainer center={position} zoom={8} scrollWheelZoom={false} key={3} >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        key={4}
      />
      {contentMap}
    </MapContainer>
  );
};

export default Map;
