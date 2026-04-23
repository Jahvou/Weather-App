import { useState } from "react";
import useWeather from "../../context/useWeather";
import './SearchBar.css';

const SearchBar = () => {
    const [input, setInput] = useState('');
    const { fetchWeather } = useWeather();
    const [validationError, setValidationError] = useState('');

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

    return (
        <div className="search-bar">
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