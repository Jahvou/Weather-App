export const convertTemp = (temp, unit) => {
    if (unit === 'imperial') return Math.round((temp * 9) / 5 + 32);
    return Math.round(temp);
};

export const getWindDirection = (degrees) => {
    const dirs = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    return dirs[Math.round(degrees / 45) % 8];
};