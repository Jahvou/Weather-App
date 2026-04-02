import { useEffect, useState } from "react";
import { getCurrentWeather, getFORECAST } from "./api/weatherApi";
import { DEFAULT_CITY } from './utils/constants';

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const weatherData = await getCurrentWeather(DEFAULT_CITY);
        const forecastData = await getFORECAST(DEFAULT_CITY);
        console.log('Current Weather:', weatherData);
        console.log('Forecast:', forecastData);
        setWeather(weatherData);
        setForecast(forecastData);
      } catch (err) {
        setError(err.message);
        console.error('Error:', err.message);
      }
    };
    loadData();
  }, []);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {weather && <p>Weather loaded for: {weather.name}</p>}
      {forecast && <p>Forecast entries: {forecast.list.length}</p>}
    </div>
  );
}

export default App;