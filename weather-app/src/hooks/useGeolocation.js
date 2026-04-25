import { useState } from "react";

const useGeolocation = () => {
  const [coords, setCoords] = useState(null);
  const [geoError, setGeoError] = useState(null);
  const [geoLoading, setGeoLoading] = useState(false);

  const getLocation = (onSuccess) => {
    if (!navigator.geolocation) {
      setGeoError("Geolocation is not supported by your browser");
      return;
    }
    setGeoLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const newCoords = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };
        setCoords(newCoords);
        setGeoLoading(false);
        if (onSuccess) onSuccess(newCoords);
      },
      () => {
        setGeoError("Unable to retrieve your location");
        setGeoLoading(false);
      },
    );
  };

  return { coords, geoError, geoLoading, getLocation };
};

export default useGeolocation;
