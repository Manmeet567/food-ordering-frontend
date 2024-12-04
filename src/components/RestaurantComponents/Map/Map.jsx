import React from "react";
import "./Map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useSelector } from "react-redux";

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41], // size of the icon
  iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
  shadowSize: [41, 41], // size of the shadow
});
L.Marker.prototype.options.icon = DefaultIcon;

function Map() {
  const { selectedRestaurant } = useSelector((state) => state.restaurants);
  return (
    <div className="map">
      <div className="map-container">
        <div className="map-location-info">
          <p>{selectedRestaurant?.restaurant_name}</p>
          <p>London</p>
          <p>Tooley St, London Bridge, London SE1 2TF, United Kingdom</p>
          <p>Phone number</p>
          <p>+934443-43</p>
          <p>Website</p>
          <p>http://mcdonalds.uk/</p>
        </div>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          style={{ height: "500px", width: "100%", zIndex:1 }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;
