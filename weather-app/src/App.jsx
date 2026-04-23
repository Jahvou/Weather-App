import useWeather from "./context/useWeather";
import SearchBar from "./components/Search/SearchBar";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

function App() {
  const { weatherData, forecastData, loading, error, unit, toggleUnit } = useWeather();

  return (
    <div>
      <SearchBar />
      <ErrorMessage message={error} />
      {loading && <p>Loading...</p>}
      {weatherData && <p>Weather loaded for: {weatherData.name}</p>}
      {forecastData && <p>Forecast entries: {forecastData.list.length}</p>}
      <p>Current unit: {unit}</p>
      <button onClick={toggleUnit}>Switch to {unit === 'metric' ? '°F' : '°C'}</button>
    </div>
  );
}

export default App;