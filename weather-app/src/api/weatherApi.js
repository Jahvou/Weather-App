import { API_KEY, BASE_URL} from '../utils/constants';

export const getCurrentWeather = async (city) => {
    const response = await fetch(
        `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) throw new Error('City not found');
    return response.json();
};

export const getFORECAST = async (city) => {
    const response = await fetch(
        `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) throw new Error('Forecast not found');
    return response.json();
};

export const getWeatherByCoords = async (Lat, lon) => {
    const response = await fetch(
        `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) throw new Error('Location not found');
    return response.json();
};