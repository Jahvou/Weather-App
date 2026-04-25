import { format, isToday } from 'date-fns';

export const convertTemp = (temp, unit) => {
    if (unit === 'imperial') return Math.round((temp * 9) / 5 + 32);
    return Math.round(temp);
};

export const getWindDirection = (degrees) => {
    const dirs = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    return dirs[Math.round(degrees / 45) % 8];
};

export const formatTime = (timestamp, timezone) => {
    return new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZone: timezone,
    }).format(new Date(timestamp * 1000));
};

export const formatHour = (timestamp) => {
    return format(new Date(timestamp * 1000), 'ha');
};

export const formatDay = (timestamp) => {
    const date = new Date(timestamp * 1000);
    if (isToday(date)) return 'Today';
    return format(date, 'EEE');
};

export const groupForecastByDay = (forecastList) => {
    const days = {};

    forecastList.forEach((entry) => {
        const dateKey = format(new Date(entry.dt * 1000), 'yyyy-MM-dd');
        if (!days[dateKey]) {
            days[dateKey] = {
                dt: entry.dt,
                temps: [],
                conditions: [],
            };
        }
        days[dateKey].temps.push(entry.main.temp);
        days[dateKey].conditions.push(entry.weather[0]);
    });

    return Object.values(days).slice(0, 5).map((day) => {
        const midday = day.conditions[Math.floor(day.conditions.length / 2)];
        return {
            dt: day.dt,
            high: Math.max(...day.temps),
            low: Math.min(...day.temps),
            condition: midday,
        };
    });
};