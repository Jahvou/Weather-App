import useWeather from '../../context/useWeather';
import { convertTemp } from '../../utils/formatters';
import './CurrentWeather.css';

const CurrentWeather = () => {
    const { weatherData, unit } = useWeather();

    if (!weatherData) return null;

    const { name, main, weather } = weatherData;
    const condition = weather[0];

    return(
        <div className="current-weather">
            <h1 className="city-name">{name}</h1>
            <p className="condition-desc">{condition.description}</p>
            <div className="temp-display">
                <span className="current-temp">
                    {convertTemp(main.temp, unit)}°{unit === 'metric' ? 'C' : 'F'}
                </span>
            </div>
            <p className="high-low">
                H: {convertTemp(main.temp_max, unit)}° . L: {convertTemp(main.temp_min, unit)}°
            </p>
            <p className="feels-like">
                Feels like {convertTemp(main.feels_like, unit)}°
            </p>
        </div>
    );
};

export default CurrentWeather;