import { useState, useEffect } from "react";
import useWeather from "./context/useWeather";
import SearchBar from "./components/Search/SearchBar";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import WeatherDetails from "./components/WeatherDetails/WeatherDetails";
import UnitToggle from "./components/UnitToggle/UnitToggle";
import HourlyForecast from "./components/HourlyForecast/HourlyForecast";
import DailyForecast from "./components/DailyForecast/DailyForecast";
import WeatherMap from "./components/WeatherMap/WeatherMap";
import SkeletonLoader from "./components/Skeleton/SkeletonLoader";
import { getWeatherClass, isDayTime } from "./utils/weatherHelpers";
import "./styles/global.css";
import "./styles/animations.css";

function App() {
  const { weatherData, loading, error } = useWeather();
  const [currentBg, setCurrentBg] = useState("bg-clear-day");
  const [previousBg, setPreviousBg] = useState(null);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (!weatherData) return;
    const newBg = getWeatherClass(
      weatherData.weather[0].id,
      isDayTime(
        weatherData.sys.sunrise,
        weatherData.sys.sunset,
        weatherData.dt,
      ),
    );
    if (newBg !== currentBg) {
      setPreviousBg(currentBg);
      setCurrentBg(newBg);
      setFading(true);
      const timer = setTimeout(() => {
        setFading(false);
        setPreviousBg(null);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [weatherData]);

  return (
    <div className="app-wrapper">
      {previousBg && (
        <div className={`bg-layer ${previousBg} ${fading ? "fade-out" : ""}`} />
      )}
      <div className={`bg-layer ${currentBg} ${fading ? "fade-in" : ""}`} />
      <div className="app-content">
        <UnitToggle />
        <SearchBar />
        <ErrorMessage message={error} />

        {loading && !weatherData && <SkeletonLoader />}
        {weatherData && (
          <div className="fade-in-up" key={weatherData.name}>
            <CurrentWeather />
            <HourlyForecast />
            <DailyForecast />
            <WeatherMap />
            <WeatherDetails />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
