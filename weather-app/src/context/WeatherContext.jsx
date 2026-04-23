import { createContext, useState, useEffect } from 'react';
import { getCurrentWeather, getForecast } from '../api/weatherApi';
import { DEFAULT_CITY } from '../utils/constants';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [location, setLocation] = useState(DEFAULT_CITY);
    const [unit, setUnit] = useState('metric');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWeather = async (city) => {
        setLoading(true);
        setError(null);
        try {
            const weather = await getCurrentWeather(city, unit);
            const forecast = await getForecast(city);
            setWeatherData(weather);
            setForecastData(forecast);
            setLocation(city);
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