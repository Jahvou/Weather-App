import useWeather from "../../context/useWeather";
import DailyRow from "./DailyRow";
import { groupForecastByDay } from "../../utils/formatters";
import './DailyForecast.css';

const DailyForecast = () => {
    const { forecastData, unit } = useWeather();

    if (!forecastData) return null;

    const days = groupForecastByDay(forecastData.list);

    return (
        <div className="daily-forecast">
            <p className="section-title">5-Day Forecast</p>
            {days.map((day) => (
                <DailyRow key={day.dt} day={day} unit={unit} />
            ))}
        </div>
    );
};

export default DailyForecast;