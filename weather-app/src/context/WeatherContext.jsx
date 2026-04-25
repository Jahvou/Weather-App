import { createContext, useState, useEffect } from 'react';
import { getCurrentWeather, getForecast,
getWeatherByCoords, getForecastByCoords
} from '../api/weatherApi';
import { DEFAULT_CITY } from '../utils/constants';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [location, setLocation] = useState(DEFAULT_CITY);
    const [unit, setUnit] = useState('metric');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWeather = async (city, coords = null) => {
        setLoading(true);
        setError(null);
    try {
      let weather, forecast;
      if (coords) {
        weather = await getWeatherByCoords(coords.lat, coords.lon);
        forecast = await getForecastByCoords(coords.lat, coords.lon);
        setLocation(weather.name);
      } else {
        weather = await getCurrentWeather(city);
        forecast = await getForecast(city);
        setLocation(city);
      }
      setWeatherData(weather);
      setForecastData(forecast);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
    const toggleUnit = () => {
        setUnit((prev) => (prev === "metric" ? "imperial" : "metric"));
    };

    useEffect(() => {
        fetchWeather(DEFAULT_CITY);
    }, []);

    return (
        <WeatherContext.Provider
        value={{
            weatherData,
            forecastData,
            location,
            unit,
            loading,
            error,
            fetchWeather,
            toggleUnit,
        }}
        >
            {children}
        </WeatherContext.Provider>
    );
};