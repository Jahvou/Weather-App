import { formatHour, convertTemp } from '../../utils/formatters';
import { getWeatherIcon } from '../../utils/weatherHelpers';

const HourlyCard = ({ entry, unit }) => {
    const isDay = entry.weather[0].icon.endsWith('d');
    const Icon = getWeatherIcon(entry.weather[0].id, isDay);

    return (
        <div className="hourly-card">
            <p className="hourly-time">{formatHour(entry.dt)}</p>
            <Icon className="hourly-icon" />
            <p className="hourly-temp">{convertTemp(entry.main.temp, unit)}°</p>
        </div>
    );
};

export default HourlyCard;