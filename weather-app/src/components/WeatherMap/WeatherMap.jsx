import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import useWeather from "../../context/useWeather";
import MapLayerToggle from "./MapLayerToggle";
import { MAP_LAYERS } from "../../utils/constants";
import "./WeatherMap.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

// re-centers map when location changes
const RecenterMap = ({ lat, lon }) => {
  const map = useMap();
  map.setView([lat, lon], map.getZoom());
  return null;
};

const WeatherMap = () => {
  const { weatherData } = useWeather();
  const [activeLayer, setActiveLayer] = useState("precipitation");

  if (!weatherData) return null;

  const { lat, lon } = weatherData.coord;

  return (
    <div className="weather-map-container">
      <p className="section-title">Weather Map</p>
      <MapLayerToggle
        activeLayer={activeLayer}
        setActiveLayer={setActiveLayer}
      />
      <div className="map-wrapper">
        <MapContainer
          center={[lat, lon]}
          zoom={8}
          scrollWheelZoom={false}
          className="leaflet-container"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <TileLayer url={MAP_LAYERS[activeLayer].url} opacity={1.5} />
          <Marker position={[lat, lon]} />
          <RecenterMap lat={lat} lon={lon} />
        </MapContainer>
      </div>
    </div>
  );
};

export default WeatherMap;
