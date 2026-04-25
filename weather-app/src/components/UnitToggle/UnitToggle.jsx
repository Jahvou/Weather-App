import useWeather from '../../context/useWeather';
import './UnitToggle.css';

const UnitToggle = () => {
    const { unit, toggleUnit } = useWeather();

    return (
        <div className="unit-toggle">
            <button className={unit === 'metric' ? 'active' : ''}
            onClick={() => unit !== 'metric' && toggleUnit()}
            >
                °C
            </button>
            <button className={unit === 'imperial' ? 'active' : ''}
            onClick={() => unit !== 'imperial' && toggleUnit()}
            >
                °F
            </button>
        </div>
    );
};

export default UnitToggle;