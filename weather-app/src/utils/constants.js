export const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
export const BASE_URL = 'https://api.openweathermap.org/data/2.5';
export const DEFAULT_CITY = 'Montreal';  

export const MAP_LAYERS = {
    precipitation: {
        name: 'Precipitation',
        url: `https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${API_KEY}`,
    },
    temperature: {
        name: 'Temperature',
        url: `https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${API_KEY}`,
    },
    Wind: {
        name: 'Wind',
        url: `https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=${API_KEY}`,
    },
    clouds: {
        name: 'Clouds',
        url: `https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${API_KEY}`,
    },
}