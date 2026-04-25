import { MAP_LAYERS } from "../../utils/constants";

const MapLayerToggle = ({ activeLayer, setActiveLayer }) => {
    return (
        <div className="map-layer-toggle">
            {Object.entries(MAP_LAYERS).map(([Key, layer]) => (
                <button
                    key={Key}
                    className={activeLayer === Key? 'active' : ''}
                    onClick={() => setActiveLayer(Key)}
                 >
                    {layer.name}
                </button>
            ))}
        </div>
    );
};

export default MapLayerToggle;