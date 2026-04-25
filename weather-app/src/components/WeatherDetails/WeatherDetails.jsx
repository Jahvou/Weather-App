import useWeather from '../../context/useWeather';
import DetailCard from './DetailCard';
import { getWindDirection } from '../../utils/formatters';
import './WeatherDetails.css';

const WeatherDetails = () => {
    const {weatherData } = useWeather();

    if (!weatherData) return null;

    const { main, wind, visibility, clouds } = weatherData;

    return (
        <div className="weather-details">
            <DetailCard label="Humidity" value={main.humidity} unit="%" />
            <DetailCard label="Wind" value={`${Math.round(wind.speed)} ${getWindDirection(wind.deg)}`} />
            <DetailCard label="Feels Like" value={`${Math.round(main.feels_like)}°`} />
            <DetailCard label="Pressure" value={main.pressure} unit="hpa" />
            <DetailCard label="Visibility" value={`${(visibility / 1000).toFixed(1)}`} unit="km" />
            <DetailCard label="Cloud Cover" value={clouds.all} unit="%" />
        </div>
    );
};

export default WeatherDetails;