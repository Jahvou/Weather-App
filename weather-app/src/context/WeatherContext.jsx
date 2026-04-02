import { createContext, useState, UseEffect } from 'react';
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

    
}