import { formatDay, convertTemp } from '../../utils/formatters';
import { getWeatherIcon } from '../../utils/weatherHelpers';

const DailyRow = ({ day, unit }) => {
    const isDay = day.condition.icon.endsWith('d');
    const Icon = getWeatherIcon(day.condition.id, isDay);

    return (
        <div className="daily-row">
            <p className="daily-day">{formatDay(day.dt)}</p>
            <Icon className="daily-icon" />
            <div className="daily-temps">
                <span className="daily-high">{convertTemp(day.low, unit)}°</span>
                <span className="daily-low">{convertTemp(day.high, unit)}°</span>
                </div>
        </div>
    );
};

export default DailyRow;