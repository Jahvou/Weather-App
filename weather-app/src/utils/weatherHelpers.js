import { fr } from "date-fns/locale";
import {
    WiDaySunny, WiNightClear,
    WiDayCloudy, WiNightAltCloudy,
    WiCloud, WiCloudy,
    WiRain, WiDayRain, WiNightAltRain,
    WiThunderstorm,
    WiSnow,
    WiFog,
    WiDayShowers
} from "react-icons/wi";

export const getWeatherIcon = (conditionCode, isDay = true) => {
  // Thunderstorm
  if (conditionCode >= 200 && conditionCode < 300) return WiThunderstorm;
  // Drizzle
  if (conditionCode >= 300 && conditionCode < 400) return isDay ? WiDayShowers : WiNightAltRain;
  // Rain
  if (conditionCode >= 500 && conditionCode < 600) return isDay ? WiDayRain : WiNightAltRain;
  // Snow
  if (conditionCode >= 600 && conditionCode < 700) return WiSnow;
  // Atmosphere (fog, mist, haze)
  if (conditionCode >= 700 && conditionCode < 800) return WiFog;
  // Clear
  if (conditionCode === 800) return isDay ? WiDaySunny : WiNightClear;
  // Few/scattered clouds
  if (conditionCode === 801 || conditionCode === 802) return isDay ? WiDayCloudy : WiNightAltCloudy;
  // Broken/overcast clouds
  if (conditionCode >= 803) return WiCloudy;
  return WiCloud;
};

const CONDITION_MAP = [
    {range: [200, 299], className: 'bg-thunderstorm' },
    {range: [300, 599], className: 'bg-rain' },
    {range: [600, 699], className: 'bg-snow' },
    {range: [700, 799], className: 'bg-atmosphere' },
    {range: [800, 899], className: 'bg-clear-day' },
    {range: [801, 899], className: 'bg-clouds' },
];

export const getWeatherClass = (conditionCode, isDay) => {
    if (!isDay) return 'bg-clear-night';
    const match = CONDITION_MAP.find(
        ({ range }) => conditionCode >= range[0] && conditionCode <= range[1]
    );
    return match ? match.className : 'bg-clouds';
};

export const isDayTime = (sunrise, sunset, current) => {
    return current > sunrise && current < sunset;
};