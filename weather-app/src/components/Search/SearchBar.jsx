import { useState } from "react";
import { TbCurrentLocation } from "react-icons/tb";
import useWeather from "../../context/useWeather";
import useGeolocation from "../../hooks/useGeolocation";
import './SearchBar.css';

const SearchBar = () => {
    const [input, setInput] = useState('');
    const { fetchWeather } = useWeather();
    const [validationError, setValidationError] = useState('');
    const { getLocation } = useGeolocation();

    const handleSubmit = () => {
        if (!input.trim()) {
            setValidationError('Please enter a city name.');
            return;
        }
        setValidationError('');
        fetchWeather(input.trim());
        setInput('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleSubmit();
    };

    const handleLocationClick = async () => {
        getLocation((coords) => {
            fetchWeather(null, coords);
        });
    };

    return (
        <div className="search-bar">
            <button className="location-btn" onClick={handleLocationClick} title="Use my Location">
                <TbCurrentLocation />
            </button>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search city..."
            />
            <button onClick={handleSubmit}>Search</button>
            {validationError && <p className="validation-error">{validationError}</p>}
        </div>
    );
};

export default SearchBar;