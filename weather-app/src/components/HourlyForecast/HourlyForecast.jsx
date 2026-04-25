import useWeather from '../../context/useWeather';
import HourlyCard from './HourlyCard';
import './HourlyForecast.css';

const HourlyForecast = () => {
    const { forecastData, unit } = useWeather();

    if (!forecastData) return null;

    const next24Hours = forecastData.list.slice(0, 8); 

    return (
        <div className="hourly-forecast">
            <p className="section-title">Hourly Forecast</p>
            <div className="hourly-scroll">
                {next24Hours.map((entry) => (
                    <HourlyCard key={entry.dt} entry={entry} unit={unit} />
                ))}
            </div>
        </div>

    );
};

export default HourlyForecast;