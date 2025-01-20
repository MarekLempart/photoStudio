// src/components/Map.tsx

import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { MapOverlay, MapWrapper, MapCloseButton } from "../styles/MapStyles";

interface MapProps {
  latitude: number;
  longitude: number;
  address: string;
  onClose: () => void;
}

const Map: React.FC<MapProps> = ({ latitude, longitude, address, onClose }) => {
  useEffect(() => {
    const defaultIcon = L.icon({
      iconUrl: markerIcon,
      shadowUrl: markerShadow,
      iconSize: [25, 41], // Domyślny rozmiar Leaflet
      iconAnchor: [12, 41], // Punkt zaczepienia
      popupAnchor: [1, -34], // Pozycja popupu względem ikony
      shadowSize: [41, 41], // Rozmiar cienia
    });

    const map = L.map("leaflet-map").setView([latitude, longitude], 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors",
    }).addTo(map);

    L.marker([latitude, longitude], { icon: defaultIcon })
      .addTo(map)
      .bindPopup(address)
      .openPopup();

    return () => {
      map.remove();
    };
  }, [latitude, longitude, address]);

  return (
    <MapOverlay onClick={onClose}>
      <MapWrapper onClick={(e) => e.stopPropagation()}>
        <MapCloseButton onClick={onClose}>x</MapCloseButton>
        <div id="leaflet-map" style={{ width: "100%", height: "100%" }} />
      </MapWrapper>
    </MapOverlay>
  );
};

export default Map;
